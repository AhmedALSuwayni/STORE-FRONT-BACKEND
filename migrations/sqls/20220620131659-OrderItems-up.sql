CREATE TABLE OrderItems (
    id SERIAL PRIMARY KEY,
    quantity INTEGER NOT NULL,
    orderId INTEGER REFERENCES orders(id) NOT NULL,
    productId INTEGER REFERENCES products(id) NOT NULL
);