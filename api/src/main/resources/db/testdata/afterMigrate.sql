set foreign_key_checks = 0;

delete from client;
delete from service;
delete from user;

set foreign_key_checks = 1;

alter table client auto_increment = 1;
alter table service auto_increment = 1;
alter table user auto_increment = 1;

insert into client (id, name, cpf, register) values (1,"Talisson Melo","12345678911",UTC_TIMESTAMP);
insert into client (id, name, cpf, register) values (2,"Tales Melo","12345678911",UTC_TIMESTAMP);

insert into service (id, description, client_id, price, register) 
values (1,"Criar Tela de Casdastro de Client", 1, 29.99, UTC_TIMESTAMP);

insert into service (id, description, client_id, price, register) 
values (2,"Criar Tela de Login", 2, 59.99, UTC_TIMESTAMP);

insert into user (id,username,password)
values (1, "Talisson Melo", "123456");

insert into user (id, username, password)
values (2, "Tales Melo", "123456");
