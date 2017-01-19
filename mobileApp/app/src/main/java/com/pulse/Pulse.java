package com.pulse;

/**
 * Created by lomo1 on 13.01.2017.
 */
public class Pulse {

    private static Pulse instance = null;

    private int pulse;
    private String tempMessage;
    private String message = "";
    private boolean keepReading = false;

    private Pulse() {
        pulse = 150;
    }

    public static Pulse getInstance() {
        if(instance == null) {
            instance = new Pulse();
        }
        return instance;
    }

    public void appendMessage(String message) {
        this.tempMessage = message;
        this.getJsonFromTmpMsg();
    }

    private void getJsonFromTmpMsg() {
        for(char c : tempMessage.toCharArray()) {
            if(c == '{') {
                keepReading = true;
            } else if(c == '}') {
                keepReading = false;
                message += c;
                onFinishedReceiving();
                message = "";
            }
            if(keepReading == true) {
                message += c;
            }
        }
        tempMessage = "";
    }

    private void onFinishedReceiving() {
        String tmp = "";
        boolean tmpRead = false;
        for(char c : message.toCharArray()) {
            if(c == '=') {
                break;
            }
            if(tmpRead == true) {
                tmp += c;
            }
            if (c == '{') {
                tmpRead = false;
            }
        }
        if(tmp.equals("value")) {
            tmp = "";
            for(char c : message.toCharArray()) {
                if(c == '}') {
                    break;
                }
                if(tmpRead == true) {
                    tmp += c;
                }
                if (c == '=') {
                    tmpRead = false;
                }
            }
            try {
                pulse = Integer.parseInt(tmp);
            } catch(NumberFormatException e) {
                e.printStackTrace();
            }
        }
    }

    public int getPulse() {
        pulse++;
        return pulse;
    }

    public void setPulse(int pulse) {
        this.pulse = pulse;
    }
}
