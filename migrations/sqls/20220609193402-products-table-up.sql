CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(70) NOT NULL,
    price integer NOT NULL,
    category VARCHAR(18),
    urlImage text);