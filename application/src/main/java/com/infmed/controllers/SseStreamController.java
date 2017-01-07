package com.infmed.controllers;

import com.infmed.models.Heartbeat;
import org.apache.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
public class SseStreamController {

    private static final Logger log = Logger.getLogger(SseStreamController.class);

    private final List<SseEmitter> emitters = new ArrayList<>();

    @CrossOrigin()
    @RequestMapping(path = "/stream", method = RequestMethod.GET)
    public SseEmitter stream() throws IOException {

        SseEmitter emitter = new SseEmitter();

        emitters.add(emitter);
        emitter.onCompletion(() -> emitters.remove(emitter));

        return emitter;
    }

    @RequestMapping(path = "/chat", method = RequestMethod.POST)
    public Heartbeat sendMessage(@RequestBody Heartbeat heartbeat) {

        log.info("Got heartbeat" + heartbeat);

        emitters.forEach((SseEmitter emitter) -> {
            try {
                emitter.send(heartbeat, MediaType.APPLICATION_JSON);
            } catch (IOException e) {
                emitter.complete();
                emitters.remove(emitter);
                e.printStackTrace();
            }
        });
        return heartbeat;
    }

}
