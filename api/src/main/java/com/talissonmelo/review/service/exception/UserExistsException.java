package com.talissonmelo.review.service.exception;

public class UserExistsException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public UserExistsException(String username) {
		super("Usuário já cadastrado para o Login : " + username);
	}
}
