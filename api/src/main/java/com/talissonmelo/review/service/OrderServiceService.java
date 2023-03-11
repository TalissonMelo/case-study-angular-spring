package com.talissonmelo.review.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.talissonmelo.review.model.Client;
import com.talissonmelo.review.model.order.OrderService;
import com.talissonmelo.review.model.order.OrderServiceDTO;
import com.talissonmelo.review.model.order.OrderServiceModel;
import com.talissonmelo.review.repository.OrderServiceRepository;

@Service
public class OrderServiceService {
	
	@Autowired
	private OrderServiceRepository repository;
	
	@Autowired
	private ClientService clientService;

	@Autowired
	private OrderServiceModel model;
	
	public OrderService insert(OrderService service) {
		return repository.save(service);
	}

	public OrderService toDto(OrderServiceDTO dto) {
		OrderService orderService = model.toOrderService(dto);		
		orderService.setRegister(LocalDate.parse(dto.getRegister(), DateTimeFormatter.ofPattern("dd/MM/yyyy")));

		Client client = clientService.findById(dto.getClientId());
		orderService.setClient(client);
		return orderService;
	}
}
