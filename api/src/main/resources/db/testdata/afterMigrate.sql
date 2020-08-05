set foreign_key_checks = 0;

delete from client;

set foreign_key_checks = 1;

alter table client auto_increment = 1;

insert into client (id, name, cpf, register) values (1,"Talisson Melo","12345678911",UTC_TIMESTAMP);
insert into client (id, name, cpf, register) values (2,"Tales Melo","12345678911",UTC_TIMESTAMP);