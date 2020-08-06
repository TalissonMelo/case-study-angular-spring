package com.talissonmelo.review.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.talissonmelo.review.model.Client;
import com.talissonmelo.review.repository.ClientRepository;
import com.talissonmelo.review.service.exception.EntityNotFoundException;

@Service
public class ClientService {

	@Autowired
	private ClientRepository repository;
	
	public Client findById(Long clientId) {
		return repository.findById(clientId).orElseThrow(
				() -> new EntityNotFoundException("Cliente de ID : " + clientId + ", não encontrado."));
	}
	
	public Client insert(Client client) {
		return repository.save(client);
	}
}
