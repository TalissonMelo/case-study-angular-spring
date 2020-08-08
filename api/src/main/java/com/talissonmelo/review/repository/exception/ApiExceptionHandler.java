package com.talissonmelo.review.repository.exception;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import com.talissonmelo.review.service.exception.DataViolationException;
import com.talissonmelo.review.service.exception.EntityNotFoundException;

@RestControllerAdvice
public class ApiExceptionHandler {

	@ExceptionHandler(EntityNotFoundException.class)
	public ResponseEntity<?> entityNotFound(EntityNotFoundException ex, WebRequest request) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
	}
	
	@ExceptionHandler(DataViolationException.class)
	public ResponseEntity<?> dataEntity(DataViolationException ex, WebRequest request) {
		return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
	}
	
	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<?> data(DataIntegrityViolationException ex, WebRequest request) {
		String msg = "Error ao Adicionar Dados, Verifique CPF apenas número e nome completo.";
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(msg);
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> validation(MethodArgumentNotValidException ex){
		BindingResult bindingResult = ex.getBindingResult();
		List<String> message = bindingResult.getAllErrors()
			.stream()
			.map(objectError -> objectError.getDefaultMessage())
			.collect(Collectors.toList());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new StandardError(message));
	}

}
