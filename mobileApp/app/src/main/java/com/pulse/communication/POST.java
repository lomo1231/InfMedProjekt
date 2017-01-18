package com.pulse.communication;

import java.io.DataOutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Created by lomo1 on 13.01.2017.
 */
public class POST {

    private String endpointAddress = "http://";
    private HttpURLConnection connection;
    private String messageToSend;

    public POST() {
        try {
            URL url = new URL(endpointAddress);
            connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("POST");
            connection.setRequestProperty( "Content-Type", "application/json");
            connection.setDoOutput( true );
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public int postPulse(int pulse) {
        messageToSend = "{value=";

        return this.postMessage();
    }

    public int postFallDetectedNotification() {
        messageToSend = "{fallen=\"true\";message=\"\"}";

        return this.postMessage();
    }

    public int cancelFallAlarm(String message) {
        messageToSend = "{fallen=\"false\";message=\"" + message + "\"}";

        return this.postMessage();
    }

        return "Fall{" +
                "state=" + (state == true ? "true" : "false") +
            ";message=\"" + message + "\"}";
    private int postMessage() {
        try {
            DataOutputStream out = new DataOutputStream(connection.getOutputStream());
            out.writeBytes(messageToSend);
            out.flush();
            out.close();
            return connection.getResponseCode();
        } catch(IOException e) {
            return 0;
        }
    }
}
