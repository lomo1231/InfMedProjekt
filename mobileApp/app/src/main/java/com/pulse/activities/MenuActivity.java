package com.pulse.activities;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import com.pulse.R;
import com.pulse.communication.Bluetooth;

public class MenuActivity extends AppCompatActivity {

    private Bluetooth bt;
    private Thread listeningThread;

    public final static int ACTION_REQUEST_BT = 11;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu);
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if(requestCode == ACTION_REQUEST_BT && resultCode == RESULT_OK) {
            bt.openBluetoothSettings();
            listeningThread = new Thread(bt);
            listeningThread.start();
        } else {
            //bt nie wlaczony, olac
        }
    }

    public void bluetoothButtonPressed(View view) {
        bt = new Bluetooth(this);
    }
}
