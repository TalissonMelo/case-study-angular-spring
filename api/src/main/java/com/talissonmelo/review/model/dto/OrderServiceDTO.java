package com.talissonmelo.review.model.dto;

import java.math.BigDecimal;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PositiveOrZero;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OrderServiceDTO {

	@NotBlank(message = "{field.description}")
	private String description;
	
	@NotNull(message = "{field.price}")
	@PositiveOrZero(message = "{field.price.positive}")
	private BigDecimal price;
	
	@NotBlank(message = "{field.register}")
	private String register;
	
	@NotNull(message = "{field.clientId}")
	private Long clientId;
}
