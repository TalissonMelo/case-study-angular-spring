package com.talissonmelo.review.model.dto;

import java.math.BigDecimal;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class OrderServiceDTO {

	private String description;
	private BigDecimal price;
	private String register;
	private Long clientId;
}
