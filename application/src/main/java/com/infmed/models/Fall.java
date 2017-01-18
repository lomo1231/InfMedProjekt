package com.infmed.models;

public class Fall {

    private String message;
	private boolean state;

    public Fall() {
    }

    public Fall(String message, boolean state) {

        this.message = message;
		this.state = state;
    }

    public String getMessage() {
        return message;
    }
	
	public boolean getState() {
		return state;
	}

    public void setMessage(String message) {
        this.message = message;
    }
	
	public void setState(boolean state) {
		this.state = state;
	}

    @Override
    public String toString() {
        return "Fall{state=" + 
				(state == true ? "true" : "false") +
				";message=\"" + message + "\"}";
    }
}
