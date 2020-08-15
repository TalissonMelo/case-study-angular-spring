package com.talissonmelo.review.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.talissonmelo.review.model.OrderService;
import com.talissonmelo.review.model.dto.OrderServiceDTO;
import com.talissonmelo.review.repository.OrderServiceRepository;
import com.talissonmelo.review.service.OrderServiceService;

@RestController
@RequestMapping(value = "/order-services")
public class OrderServiceResource {
	
	@Autowired
	private OrderServiceService service;
	
	@Autowired
	private OrderServiceRepository repository;

	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public ResponseEntity<OrderService> insert(@RequestBody OrderServiceDTO dto){
		OrderService orderService = service.toDto(dto);
		orderService = service.insert(orderService);
		return ResponseEntity.ok().body(orderService);
	}
}
