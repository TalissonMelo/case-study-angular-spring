package com.talissonmelo.review.service.exception;

public class DataViolationException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public DataViolationException(String message, Throwable cause) {
		super(message, cause);
	}

	public DataViolationException(String message) {
		super(message);
	}

}
