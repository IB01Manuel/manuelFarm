CREATE TABLE farm_products (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50),
    product_name VARCHAR(100),
    quantity INTEGER,
    price DECIMAL(10,2),
    image_url TEXT
);

-- Then insert without specifying id values
INSERT INTO farm_products (category, product_name, quantity, price, image_url) VALUES
('Pigs', 'Farm Pig', 50, 50000.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcJ6smmt3n2zEjQOh7PQykzUwp2fBtq_GcA&s'),
('Fish', 'Cat Fish', 75, 2500.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYx9y6KuKgfLNVzX2QuEOp8JaBBo-qJg_qHw&s'),
('Chicken', 'Broiler', 50, 4500.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUYofZw2HzOL4lvrjhI1xOkiEpY4iJjW1jQ&s'),
('Eggs', 'Free-range eggs (crate)', 100, 5000.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7fNeW-gJDzFfsIfE_SXEU2gIdq2Q6eHEVg&s');