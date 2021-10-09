
CREATE DATABASE pernecommerce

/* 1. Tabla de usuarios */
CREATE TABLE users (
    id_user serial NOT NULL PRIMARY KEY,
    name varchar(25) NOT NULL, 
    surname varchar(25) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    password varchar(20),
    role varchar(10) DEFAULT 'user'
);

/* 2. Tabla de productos */
CREATE TABLE products (
    id_product serial NOT NULL PRIMARY KEY,
    name varchar(25) NOT NULL,
    price varchar(25),
    category varchar(30),
    img text,
    id_maker int,
    FOREIGN KEY (id_maker) REFERENCES makers(id_maker)
);

/* 3. Tabla de fabricantes */
CREATE TABLE makers (
    id_maker serial NOT NULL PRIMARY KEY
    name
    CIF
    address
);