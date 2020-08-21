package com.talissonmelo.review.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.talissonmelo.review.model.User;
import com.talissonmelo.review.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;
	
	public void insert(User user) {
		repository.save(user);
	}
}
