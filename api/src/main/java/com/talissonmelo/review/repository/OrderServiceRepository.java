package com.talissonmelo.review.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.talissonmelo.review.model.OrderService;

public interface OrderServiceRepository extends JpaRepository<OrderService, Long>{

	@Query(" select s from OrderService s join s.client c"
			+ " where upper( c.name ) like upper( :name ) and MONTH(s.register) =:month")
	List<OrderService> findByNameClientAndMonth(
			@Param("name") String name,@Param("month") Integer month);
}
