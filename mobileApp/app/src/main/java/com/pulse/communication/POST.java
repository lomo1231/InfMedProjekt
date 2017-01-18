package com.pulse.communication;

import com.pulse.Pulse;

import java.io.DataOutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Created by lomo1 on 13.01.2017.
 */
public class POST {

    private String endpointPulseAddress = "http://";
    private String endpointFallAddress = "http://";
    private HttpURLConnection connection;
    private String messageToSend;

    public POST() {

    }

    public int postPulse(int pulse) {
        messageToSend = "{value=" + String.valueOf(pulse) + "}";

        return this.postMessage(endpointPulseAddress);
    }

    public int postFallDetectedNotification() {
        messageToSend = "{fallen=\"true\";message=\"\"}";

        return this.postMessage(endpointFallAddress);
    }

    public int cancelFallAlarm(String message) {
        messageToSend = "{fallen=\"false\";message=\"" + message + "\"}";

        return this.postMessage(endpointFallAddress);
    }

    private int postMessage(String endpointAddress) {
        try {
            URL url = new URL(endpointAddress);
            connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Content-Type", "application/json");
            connection.setDoOutput(true);

            DataOutputStream out = new DataOutputStream(connection.getOutputStream());
            out.writeBytes(messageToSend);
            out.flush();
            out.close();

            return connection.getResponseCode();
        } catch (IOException e) {
            return 0;
        }
    }
}
