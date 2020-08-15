package com.talissonmelo.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.talissonmelo.review.model.OrderService;

public interface OrderServiceRepository extends JpaRepository<OrderService, Long>{

}
