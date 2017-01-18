package com.pulse.activities;

import android.app.Dialog;
import android.app.DialogFragment;
import android.app.FragmentManager;
import android.content.Context;
import android.content.Intent;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.CountDownTimer;
import android.os.Handler;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import com.pulse.R;
import com.pulse.dialogs.FallDetectedDialog;

public class MainActivity extends AppCompatActivity implements SensorEventListener, FallDetectedDialog.FallDialogListener {

    private float old_y;
    private long lastUpdate;
    private static final int FALL_SPEED = 15;
//    private float highest_Speed = 0;
//    private List<Float> speedHistory;

    private SensorManager sensorManager;
    private Sensor sensorAccelerometer;

//    private Handler dialogTimeHandler;

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

//        speedHistory = new ArrayList<>();
    }

    @Override
    protected void onResume() {
        super.onResume();

        sensorManager.registerListener(this, sensorAccelerometer, SensorManager.SENSOR_DELAY_NORMAL);
    }

    private void possibleFallDetected() {
        sensorManager.unregisterListener(this);

        FragmentManager fm = getFragmentManager();
        final DialogFragment fallDialog = new FallDetectedDialog();
        fallDialog.show(fm, "FallDialog");

//        dialogTimeHandler = new Handler();
//        dialogTimeHandler.postDelayed(new Runnable() {
//            @Override
//            public void run() {
//                fallDialog.dismiss();
//
//                Intent intent = new Intent(MainActivity.this, AfterFallActivity.class);
//                MainActivity.this.startActivity(intent);
//            }
//        }, 10000);
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

        Intent intent = new Intent(MainActivity.this, AfterFallActivity.class);
        MainActivity.this.startActivity(intent);
    }

    @Override
    public void onSensorChanged(SensorEvent event) {

        if(event.sensor.getType() == Sensor.TYPE_ACCELEROMETER) {
            float y = event.values[1];

            long curTime = System.currentTimeMillis();

//            System.out.println("CurTime: " + String.valueOf(curTime));
//            System.out.println("LastUpdate: " + String.valueOf(lastUpdate));

            if((curTime - lastUpdate) > 500) {
                long diffTime = curTime - lastUpdate;
                lastUpdate = curTime;
                //upewnic sie co do wzoru obliczania
                float speed = Math.abs(y - old_y)/diffTime*1000;

//                System.out.println("Old y: " + String.valueOf(old_y) + "| y: " + String.valueOf(y));
//                System.out.println("Speed: " + String.valueOf(speed));

                //poprawic FALL_SPEED - moze w ustawieniach menu opcja edycji?
                if(speed > FALL_SPEED && y < old_y) {
                    //fall detected
                    this.possibleFallDetected();

//                    speedHistory.add(speed);
//                    System.out.println("Leci w dol!!!");
                }

//                if(y < old_y) {
//                    txtView.setText(String.valueOf(highest_Speed));
//                    if (speed > highest_Speed)
//                        highest_Speed = speed;
//                }
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
