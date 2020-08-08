package com.talissonmelo.review.repository.exception;

import java.util.Arrays;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Setter
@Getter
public class StandardError {
	private List<String> messages;
	
	public StandardError(String message) {
		this.messages = Arrays.asList(message);
	}
}
