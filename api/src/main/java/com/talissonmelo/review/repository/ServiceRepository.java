package com.talissonmelo.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.talissonmelo.review.model.Service;

public interface ServiceRepository extends JpaRepository<Service, Long>{

}
