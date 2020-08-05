create table service (
	id bigint not null auto_increment, 
	description varchar(300) not null, 
	client_id bigint not null, 
	price numeric(20,2),
	
	primary key (id)
) engine=InnoDB default charset=utf8;


alter table service add constraint fk_service_client
foreign key (client_id) references client (id);