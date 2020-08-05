create table client(
	id bigint not null auto_increment,
	name varchar(150) not null,
	cpf varchar(11) not null,
	register timestamp,
	
	primary key (id)
)engine = InnoDB default charset=utf8;