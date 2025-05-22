CREATE TABLE IF NOT EXISTS farm_items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    quantity INTEGER,
    price DECIMAL(10, 2),
    image_url CHAR(255),
);