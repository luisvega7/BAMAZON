CREATE DATABASE BAMAZON;
USE BAMAZON;
CREATE TABLE products(
    item_id int auto_increment not null,
    product_name varchar(200) NOT NULL,
    department_name varchar(200) NOT NULL,
    price decimal(10, 2)NOT NULL NOT NULL,
    stock_quantity varchar(200) NOT NULL,
    primary key(item_id)
    );
    
    SELECT * FROM PRODUCTS; 
 
INSERT INTO products(product_name,department_name,price,stock_quantity) 
VALUES("firestick Tv", "Electronics", 39.99, 18);

INSERT INTO products(product_name,department_name,price,stock_quantity) 
VALUES("Cards Agaisnt Humanity", "Games", 25.00, 40);

INSERT INTO products(product_name,department_name,price,stock_quantity) 
VALUES("Echo Dot", "Electronics", 29.99, 10);

INSERT INTO products(product_name,department_name,price,stock_quantity) 
VALUES("Carhartt Men's Acrylic Hat", "Clothing", 14.95, 56);

INSERT INTO products(product_name,department_name,price,stock_quantity) 
VALUES("Becoming: Michelle Obama", "Books", 19.50, 30);

INSERT INTO products(product_name,department_name,price,stock_quantity) 
VALUES("Apple Airpods", "Electronics", 159.00, 10);

INSERT INTO products(product_name,department_name,price,stock_quantity) 
VALUES("Expo Dry Erase Markers", "Office Supplies", 12.99, 20);

INSERT INTO products(product_name,department_name,price,stock_quantity) 
VALUES("Brita Long Lasting Water Filter", "House-Hold", 6.49, 20);

INSERT INTO products(product_name,department_name,price,stock_quantity) 
VALUES("Bohemian Rhapsody", "Movies", 19.99, 20);

INSERT INTO products(product_name,department_name,price,stock_quantity) 
VALUES("Hamilton Beach 46310 Programmable Coffee Maker", "House-Hold", 34.99, 20);

INSERT INTO products(product_name,department_name,price,stock_quantity) 
VALUES("Nespresso OriginalLine Variety Pack Capsules", "Grocery", 35.00, 20);