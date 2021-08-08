package com.tanisha.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {
    public HelloWorldBean(String message) {
        this.message=message;

    }
    private  String message;
    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return "HelloWorldBean{" +
                "message='" + message + '\'' +
                '}';
    }
}
