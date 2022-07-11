CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(70) NOT NULL,
    price integer NOT NULL,
    category VARCHAR(18),
    urlImage text);
    INSERT INTO public.products(name, price, category, "urlImage") VALUES ('Table', 200, 'wood', 'http://localhost:5000/images/woodtable.jpg');
    INSERT INTO public.products(name, price, category, "urlImage") VALUES ('Chair', 100, 'wood', 'http://localhost:5000/images/woodchair.jpg');
    INSERT INTO public.products(name, price, category, "urlImage") VALUES ('Spoon', 10, 'wood', 'http://localhost:5000/images/woodspoon.jpg');
    INSERT INTO public.products(name, price, category, "urlImage") VALUES ('Fork', 11, 'wood', 'http://localhost:5000/images/woodfork.jpg');
    INSERT INTO public.products(name, price, category, "urlImage") VALUES ('Table', 400, 'iron', 'http://localhost:5000/images/irontable.jpg');
    INSERT INTO public.products(name, price, category, "urlImage") VALUES ('Chair', 200, 'iron', 'http://localhost:5000/images/ironchair.jpg');
    INSERT INTO public.products(name, price, category, "urlImage") VALUES ('Spoon', 20, 'iron', 'http://localhost:5000/images/ironspoon.jpg');
    INSERT INTO public.products(name, price, category, "urlImage") VALUES ('Fork', 22, 'iron', 'http://localhost:5000/images/ironfork.jpg');