package com.talissonmelo.review.model.order;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class OrderServiceModel {

	@Autowired
	private ModelMapper mapper;

	public OrderService toOrderService(OrderServiceDTO dto) {
		return mapper.map(dto, OrderService.class);
	}
}
