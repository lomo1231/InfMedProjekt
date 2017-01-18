package com.pulse;

/**
 * Created by lomo1 on 13.01.2017.
 */
public class Pulse {

    private static Pulse instance = null;

    private int pulse;

    private Pulse() {
        pulse = 150;
    }

    public static Pulse getInstance() {
        if(instance == null) {
            System.out.println("Instance == null, object created.");
            instance = new Pulse();
        }
        return instance;
    }

    public int getPulse() {
        pulse++;
        return pulse;
    }
}
