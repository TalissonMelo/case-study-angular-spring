package com.talissonmelo.review.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.br.CPF;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Data
@Entity
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false, length = 150)
	@NotBlank(message = "{field.name}")
	private String name;
	
	@Column(nullable = false, length = 11)
	@NotNull(message = "{field.cpf}")
	@CPF(message = "{field.cpf.invalido}")
	private String cpf;
	
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDateTime register;
	
	@PrePersist
	public void prePresist() {
		setRegister(LocalDateTime.now());
	}
}
