alter table service add register timestamp not null;
update service set register = UTC_TIMESTAMP;