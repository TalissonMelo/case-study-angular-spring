package com.talissonmelo.review.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.talissonmelo.review.model.Client;
import com.talissonmelo.review.repository.ClientRepository;
import com.talissonmelo.review.service.ClientService;

@RestController
@RequestMapping(value = "/clients")
public class ClientResource {

	@Autowired
	private ClientRepository repository;
	
	@Autowired
	private ClientService service;
	
	@GetMapping
	public List<Client> findAll(){
		return repository.findAll();
	}
	
	@GetMapping(value = "/{clientId}")
	public Client findById(@PathVariable Long clientId) {
		return service.findById(clientId);
	}
}
