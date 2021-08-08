package com.tanisha.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")

// the command permits this port to send and receive requests
public class HelloWorldController {
    //Get
    //URI
    //method-"hello world"
//    @RequestMapping(method = RequestMethod.GET,path = "/hello")
    @GetMapping(path = "/hello")
    public String hello() {
        return "hello world";
    }
    //hello-world-bean
//    returns a bean
    @GetMapping(path = "/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        return new HelloWorldBean("Hello World Bean");
    }

    @GetMapping(path = "/hello-world/path-variable/{name}")
    public HelloWorldBean helloWorldBeanPathVariable(@PathVariable String name) {
//        throw new RuntimeException("Something is wrong");
        return new HelloWorldBean(String.format(("Hey there , %s"+" Ace your tasks!"),name));
    }
}