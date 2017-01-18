package com.pulse.services;

import android.os.Handler;
import com.pulse.Pulse;
import com.pulse.communication.POST;

/**
 * Created by lomo1 on 13.01.2017.
 */
public class DataSender implements Runnable {

    private static DataSender instance = null;

    private Pulse pulseStorage;
    private Handler handler;
    private int interval = 1000;
    private POST poster;

    @Override
    public void run() {
        //TODO usunac print
        System.out.println(poster.postPulse(pulseStorage.getPulse()));
        handler.postDelayed(this, interval);
    }

    private DataSender() {
        poster = new POST();
        handler = new Handler();
        pulseStorage = Pulse.getInstance();
    }

    public void fallDetected() {
        poster.postFallDetectedNotification();
        interval = 100;
    }

    public void cancelFallAlarm(String message) {
        poster.cancelFallAlarm(message);
        interval = 1000;
    }

    public static DataSender getInstance() {
        if(instance == null) {
            instance = new DataSender();
        }
        return instance;
    }
}
