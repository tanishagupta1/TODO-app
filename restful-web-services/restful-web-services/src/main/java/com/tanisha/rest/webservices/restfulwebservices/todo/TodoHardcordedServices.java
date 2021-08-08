package com.tanisha.rest.webservices.restfulwebservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardcordedServices {
    private static List<Todos> todos=new ArrayList();
    private static long idCounter=0;

    static
    {
        todos.add(new Todos(++idCounter,"Tanisha","Flutter",new Date(),false));
        todos.add(new Todos(++idCounter,"Tanisha","React",new Date(),false));
        todos.add(new Todos(++idCounter,"Tanisha","Microservices",new Date(),true));
    }
    public List<Todos> findAll()
    {
        return todos;
    }
    //update and insert data
    public Todos saveTodo(Todos todo){
        //if id is -1 that means we want to insert a todo
        if(todo.getId()==-1 || todo.getId()==0){
            todo.setId(++idCounter);
            todos.add(todo);
        }
        else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }


    public Todos deleteById(Long id){
        Todos todo=findById(id);
        if (todo==null){
            return null;
        }
        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }


    public Todos findById(Long id) {
        for(Todos todo:todos){
            if (todo.getId()==id){
                return todo;
            }
        }
        return null;
    }
}
