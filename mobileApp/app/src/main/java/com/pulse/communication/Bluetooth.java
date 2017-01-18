package com.pulse.communication;

import android.app.Activity;
import android.bluetooth.BluetoothAdapter;
import android.content.Intent;
import android.provider.Settings;

/**
 * Created by lomo1 on 13.01.2017.
 */
public class Bluetooth extends Activity
                        implements Runnable {

    private final static int REQUEST_ENABLE_BT = 111;
    private BluetoothAdapter bluetoothAdapter;

    @Override
    public void run() {
        //dzialanie w tle po wlaczeniu bluetooth zeby odbierac dane

    }

    public Bluetooth() {
        bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        if(bluetoothAdapter == null) {
            //device is not supporting bluetooth
            System.exit(0);
        }

        if(!bluetoothAdapter.isEnabled()) {
            Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
            startActivityForResult(enableBtIntent, REQUEST_ENABLE_BT);
        } else {
            Intent openBtSettings = new Intent(Settings.ACTION_BLUETOOTH_SETTINGS);
            startActivity(openBtSettings);
            this.run();
        }
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if(requestCode == REQUEST_ENABLE_BT && resultCode == RESULT_OK) {
            //bluetooth wlaczony, settings zeby wybrac urzadzenie
            Intent openBtSettings = new Intent(Settings.ACTION_BLUETOOTH_SETTINGS);
            startActivity(openBtSettings);
            this.run();
        } else {
            //bluetooth wasn't enabled
            System.exit(0);
        }
    }
}
