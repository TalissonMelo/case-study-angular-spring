package com.talissonmelo.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.talissonmelo.review.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
