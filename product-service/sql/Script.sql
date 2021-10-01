create extension if not exists "uuid-ossp";

create table products (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text,
  description text,
  size text,
  color text,
  price float
);

create table stock (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id uuid,
  count int,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

insert into products (title, description, size,  color, price)
values
('Nike Mens Stroke Running Shoe CX', 'Nike', '41', 'blue', 40),
('Nike Mens Stroke Running Shoe DS', 'Nike', '42', 'blue', 50),
('Nike Mens Stroke Running Shoe FR', 'Nike', '43', 'blue', 60),
('Nike Mens Stroke Running Shoe EW', 'Nike', '44', 'blue', 70),
('Nike Mens Stroke Running Shoe FQ', 'Nike', '45', 'blue', 80),
('Nike Mens Stroke Running Shoe TR', 'Nike', '46', 'blue', 90),
('Nike Mens Stroke Running Shoe GH', 'Nike', '47', 'blue', 100),
('Nike Mens Stroke Running Shoe GR', 'Nike', '48', 'blue', 110 );

insert into stock ( product_id, count)
values
((select id from products where size='41'), 10),
((select id from products where size='42'), 20 ),
((select id from products where size='43'), 30 ),
((select id from products where size='44'), 40 ),
((select id from products where size='45'), 50 ),
((select id from products where size='46'), 60 ),
((select id from products where size='47'), 70 ),
((select id from products where size='48'), 80 );

select 
products.id, 
products.title, 
products.description, 
products.size, 
products.color, 
stock.count, 
products.price 
from products join stock on products.id = stock.product_id;