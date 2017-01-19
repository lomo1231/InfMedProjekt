package com.pulse.test;

import java.util.Random;

/**
 * Created by lomo1 on 19.01.2017.
 */
public class PulseMockData {

    private Random random;
    private int pulse;

    public PulseMockData() {
        random = new Random();
    }

    public int getPulse() {
        pulse = random.nextInt(15) + 52;
        return pulse;
    }
}
