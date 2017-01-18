package com.pulse.activities;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import com.pulse.R;
import com.pulse.communication.Bluetooth;

public class MenuActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_menu);
    }

    public void bluetoothButtonPressed(View view) {
        Bluetooth bt = new Bluetooth();
    }
}
