package com.tanisha.rest.webservices.restfulwebservices.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TodoJpaRepository extends JpaRepository<Todos, Long> {
    List<Todos> findByUsername(String username);
}
