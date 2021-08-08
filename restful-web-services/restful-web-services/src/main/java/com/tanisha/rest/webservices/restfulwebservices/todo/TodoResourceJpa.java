package com.tanisha.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TodoResourceJpa {

    @Autowired
    private TodoHardcordedServices todoService;

    @Autowired
    private TodoJpaRepository todoJpaRepository;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todos> getAllTodos(@PathVariable String username){
        return todoJpaRepository.findByUsername(username);
//    return todoService.findAll();
}

//DELETE users/user/{username}/todos/{id}
    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(
            @PathVariable String username, @PathVariable long id){

        Todos todo=todoService.deleteById(id);
        if (todo!=null){
            return ResponseEntity.noContent().build();
        }
        return  ResponseEntity.notFound().build();
    }
    //For update clicked
    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todos getTodos(@PathVariable String username, @PathVariable long id){
        return todoJpaRepository.findById(id).get();
//        return todoService.findById(id);
    }


    //EDIT and Update a task
    //PUT /users/{user_name}/todos/{todos.id}
    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todos> updateTodo(
            @PathVariable String username, @PathVariable long id,@RequestBody Todos todo) {
        Todos todoUpdated =todoService.saveTodo(todo);
        return new ResponseEntity<Todos>(todo, HttpStatus.OK);
    }
    //To insert a new task
    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> newTodo(
            @PathVariable String username,@RequestBody Todos todo) {
        Todos createdTodo =todoService.saveTodo(todo);
        //should return location
        //get current resource url and append id {id}
        URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }


}
