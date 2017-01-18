package com.pulse.activities;

import android.app.Dialog;
import android.app.DialogFragment;
import android.app.FragmentManager;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.CountDownTimer;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import com.pulse.Pulse;
import com.pulse.R;
import com.pulse.dialogs.FallDetectedDialog;
import com.pulse.services.DataSender;

public class MainActivity extends AppCompatActivity
                          implements SensorEventListener, FallDetectedDialog.FallDialogListener,
                                     Runnable {

    private float old_y;
    private long lastUpdate;
    private static final int FALL_SPEED = 15;

    private SensorManager sensorManager;
    private Sensor sensorAccelerometer;

    private Handler pulseUpdateHandler;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        sensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
        if(sensorManager == null)
            System.out.println("SensorManager null");
        sensorAccelerometer = sensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
        if(sensorAccelerometer == null)
            System.out.println("sensorAccelerometer null");
        sensorManager.registerListener(this, sensorAccelerometer, SensorManager.SENSOR_DELAY_NORMAL);

        lastUpdate = System.currentTimeMillis();

        new Thread(DataSender.getInstance()).run();

        pulseUpdateHandler = new Handler();

        this.run();
    }

    @Override
    protected void onResume() {
        super.onResume();

        sensorManager.registerListener(this, sensorAccelerometer, SensorManager.SENSOR_DELAY_NORMAL);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        //TODO stop all timers and threads running
    }

    private void updatePulse() {
        TextView pulseTV = (TextView) findViewById(R.id.pulseTextView);

        pulseTV.setText(String.valueOf(Pulse.getInstance().getPulse()));
    }

    private void possibleFallDetected() {
        sensorManager.unregisterListener(this);

        FragmentManager fm = getFragmentManager();
        final DialogFragment fallDialog = new FallDetectedDialog();
        fallDialog.show(fm, "FallDialog");
    }

    @Override
    public void run() {
        updatePulse();

        pulseUpdateHandler.postDelayed(this, DataSender.getInstance().getInterval());
    }

    @Override
    public void onDialogPositiveClick(DialogFragment dialog, CountDownTimer timer) {
        sensorManager.registerListener(this, sensorAccelerometer, SensorManager.SENSOR_DELAY_NORMAL);
        lastUpdate = System.currentTimeMillis();
        timer.cancel();
    }

    @Override
    public void timeTick(DialogFragment dialog, long timeLeft) {
        Dialog temp = dialog.getDialog();
        TextView tv = (TextView) temp.findViewById(android.R.id.message);
        String tempStr = "I think you have fallen.\nAre you okay?\n" + "00:"
                + (timeLeft/1000 >= 10 ? String.valueOf(timeLeft/1000) : "0" + String.valueOf(timeLeft/1000))
                + ":" + String.valueOf((timeLeft%1000)/100);
        tv.setText(tempStr);
    }

    @Override
    public void timeFinished(DialogFragment dialog) {
        dialog.dismiss();

        DataSender.getInstance().fallDetected();
        LinearLayout alarmLayout = (LinearLayout) findViewById(R.id.alertLayout);
        alarmLayout.setVisibility(LinearLayout.VISIBLE);

        LinearLayout mainLayout = (LinearLayout) findViewById(R.id.LinearLayout);
        mainLayout.setBackgroundColor(Color.parseColor("#E75353"));

        Button menuButton = (Button) findViewById(R.id.menuButton);
        menuButton.setClickable(false);
    }

    public void cancelFallAlarm(View view) {
        sensorManager.registerListener(this, sensorAccelerometer, SensorManager.SENSOR_DELAY_NORMAL);

        LinearLayout alarmLayout = (LinearLayout) findViewById(R.id.alertLayout);
        alarmLayout.setVisibility(LinearLayout.INVISIBLE);

        EditText editText = (EditText) findViewById(R.id.cancelMessage);
        DataSender.getInstance().cancelFallAlarm(editText.getText().toString());

        LinearLayout mainLayout = (LinearLayout) findViewById(R.id.LinearLayout);
        mainLayout.setBackgroundColor(Color.parseColor("#ffffff"));

        Button menuButton = (Button) findViewById(R.id.menuButton);
        menuButton.setClickable(true);
    }

    @Override
    public void onSensorChanged(SensorEvent event) {

        if(event.sensor.getType() == Sensor.TYPE_ACCELEROMETER) {

            float y = event.values[1];

            long curTime = System.currentTimeMillis();

            if((curTime - lastUpdate) > 500) {
                long diffTime = curTime - lastUpdate;
                lastUpdate = curTime;

                float speed = Math.abs(y - old_y)/diffTime*1000;

                if(speed > FALL_SPEED && y < old_y) {
                    //fall detected
                    this.possibleFallDetected();
                }
                old_y = y;
            }
        }
    }

    @Override
    public void onAccuracyChanged(Sensor sensor, int accuracy) {
    }

    public void menuButtonPressed(View view) {
        Intent intent = new Intent(MainActivity.this, MenuActivity.class);
        MainActivity.this.startActivity(intent);
    }
}