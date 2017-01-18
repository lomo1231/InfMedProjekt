package com.pulse.communication;

import android.app.Activity;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothSocket;
import android.content.Intent;
import android.provider.Settings;
import android.support.v7.app.AppCompatActivity;
import com.pulse.Pulse;
import com.pulse.activities.MenuActivity;

import java.io.IOException;
import java.io.InputStream;
import java.util.Set;
import java.util.UUID;

/**
 * Created by lomo1 on 13.01.2017.
 */
public class Bluetooth extends Thread {

    private BluetoothAdapter bluetoothAdapter;
    private BluetoothSocket bluetoothSocket;

    private AppCompatActivity menuActivity;

    private InputStream inputStream;

    private static final UUID DEV_UUID = UUID.fromString("00001101-0000-1000-8000-00805f9b34fb");

    private BluetoothSocket findPairedDevice() {
        Set<BluetoothDevice> pairedDevices = bluetoothAdapter.getBondedDevices();

        if(pairedDevices.size() > 0) {
            for(BluetoothDevice device : pairedDevices) {
                try {
                    BluetoothSocket temp = device.createRfcommSocketToServiceRecord(DEV_UUID);
                    return temp;
                } catch (IOException e) {
                    continue;
                }
            }
        }
        return null;
    }

    private void listenForIncomingData() {
        byte buffer[];
        buffer = new byte[2048];
        while(true) {
            try {
                int bytes = inputStream.read(buffer);
                if (bytes > 0) {
                    String message = new String(buffer, 0, bytes);
                    Pulse.getInstance().appendMessage(message);
                }
            } catch (IOException e) {
                break;

            }
        }
    }

    @Override
    public void run() {
        //dzialanie w tle po wlaczeniu bluetooth zeby odbierac dane
        bluetoothSocket = this.findPairedDevice();
        if(bluetoothSocket != null) {
            try {
                bluetoothSocket.connect();
                inputStream = bluetoothSocket.getInputStream();
                listenForIncomingData();
            } catch (IOException e) {
                try {
                    bluetoothSocket.close();
                } catch(IOException ex) {
                    ex.printStackTrace();
                    System.exit(0);
                }
            }
        }
    }

    public Bluetooth(AppCompatActivity menuActivity) {

        this.menuActivity = menuActivity;

        this.bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        if(bluetoothAdapter == null) {
            //device is not supporting bluetooth
            System.exit(0);
        }

        if(!bluetoothAdapter.isEnabled()) {
            Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
            this.menuActivity.startActivityForResult(enableBtIntent, MenuActivity.ACTION_REQUEST_BT);
        } else {
            openBluetoothSettings();
        }
    }

    public void openBluetoothSettings() {
        Intent openBtSettings = new Intent(Settings.ACTION_BLUETOOTH_SETTINGS);
        this.menuActivity.startActivity(openBtSettings);
    }
}
