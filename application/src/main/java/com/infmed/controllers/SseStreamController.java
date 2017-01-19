package com.infmed.controllers;

import com.infmed.models.Fall;
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
    private final List<SseEmitter> emitters2 = new ArrayList<>();

    @CrossOrigin()
    @RequestMapping(path = "/stream", method = RequestMethod.GET)
    public SseEmitter stream() throws IOException {

        SseEmitter emitter = new SseEmitter();

        emitters.add(emitter);
        emitter.onCompletion(() -> emitters.remove(emitter));

        return emitter;
    }
	
    @RequestMapping(path = "/heartbeat", method = RequestMethod.POST)
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


    @CrossOrigin()
    @RequestMapping(path = "/stream2", method = RequestMethod.GET)
    public SseEmitter stream2() throws IOException {

        SseEmitter emitter = new SseEmitter();

        emitters2.add(emitter);
        emitter.onCompletion(() -> emitters2.remove(emitter));

        return emitter;
    }

    @RequestMapping(path = "/fall", method = RequestMethod.POST)
    public Fall sendMessage(@RequestBody Fall fall) {

        log.info("Got fall info " + fall);

        emitters2.forEach((SseEmitter emitter) -> {
            try {
                emitter.send(fall, MediaType.APPLICATION_JSON);
            } catch (IOException e) {
                emitter.complete();
                emitters2.remove(emitter);
                e.printStackTrace();
            }
        });
        return fall;
    }
}
