package com.infmed.models;

public class Heartbeat {

    private Integer value;

    public Heartbeat() {
    }

    public Heartbeat(Integer message) {

        this.value = message;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "Heartbeat{" +
                "value=" + value +
                '}';
    }
}
