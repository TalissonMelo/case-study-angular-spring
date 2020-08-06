package com.talissonmelo.review.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
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
	
	@PostMapping
	@ResponseStatus(code = HttpStatus.CREATED)
	public Client insertClient(@RequestBody Client client) {
		return service.insert(client);
	}
	
	@DeleteMapping(value = "/{clientId}")
	public ResponseEntity<Void> delete(@PathVariable Long clientId){
		service.deleteByClientId(clientId);
		return ResponseEntity.noContent().build();
	}
}
