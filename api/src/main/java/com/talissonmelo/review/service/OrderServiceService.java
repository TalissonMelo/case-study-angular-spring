package com.talissonmelo.review.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.talissonmelo.review.model.Client;
import com.talissonmelo.review.model.OrderService;
import com.talissonmelo.review.model.dto.OrderServiceDTO;
import com.talissonmelo.review.repository.OrderServiceRepository;

@Service
public class OrderServiceService {
	
	@Autowired
	private OrderServiceRepository repository;
	
	@Autowired
	private ClientService clientService;

	public OrderService insert(OrderService service) {
		return repository.save(service);
	}

	public OrderService toDto(OrderServiceDTO dto) {
		Client client = clientService.findById(dto.getClientId());
		
		OrderService orderService = new OrderService();
		orderService.setDescription(dto.getDescription());
		orderService.setRegister(LocalDate.parse(dto.getRegister(), DateTimeFormatter.ofPattern("dd/MM/yyyy")));
		orderService.setClient(client);
		orderService.setPrice(dto.getPrice());
		return orderService;
	}
}
