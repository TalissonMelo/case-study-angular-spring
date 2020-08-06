package com.talissonmelo.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.talissonmelo.review.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {

}
