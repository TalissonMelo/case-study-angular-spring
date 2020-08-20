create table user (
	id bigint not null auto_increment, 
	username varchar(300) unique not null, 
	password varchar(300) not null,
	
	primary key (id)
) engine=InnoDB default charset=utf8;