DROP DATABASE IF EXISTS ecomerce;
CREATE DATABASE IF NOT EXISTS ecomerce ;
USE ecomerce ;
CREATE TABLE prodcut(
id int auto_increment ,
name varchar(255),
catygorie varchar(255),
price varchar(255),
descreption varchar(255),
quantity varchar(255),
 created_at timestamp not null default CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP() ,
    primary key (id)
);