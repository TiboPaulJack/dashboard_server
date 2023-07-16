

-- Inserting data into product
INSERT INTO "product"
("name", "description", "status", "costPrice", "sellPrice", "quantity", "product_size_id", "product_category_id", "product_color_id", "updated_at")
VALUES
    ('Vintage Denim Jacket', 'High quality denim jacket', 'available', 50.00, 75.00, 20, 1, 1, 1, NOW()),
    ('Elegant Summer Dress', 'Light and airy summer dress', 'available', 70.00, 90.00, 15, 2, 2, 2, NOW()),
    ('Classic White Shirt', 'Stylish white shirt', 'out of stock', 30.00, 45.00, 0, 3, 3, 3, NOW()),
    ('Warm Winter Coat', 'Cozy and warm winter coat', 'available', 100.00, 130.00, 10, 4, 4, 4, NOW()),
    ('Red Leather Boots', 'Handmade leather boots', 'available', 110.00, 150.00, 5, 5, 5, 5, NOW()),
    ('Chic Bow Tie', 'Silk bow tie', 'available', 20.00, 30.00, 50, 1, 6, 1, NOW()),
    ('Floral Summer Hat', 'Stylish summer accessory', 'out of stock', 25.00, 35.00, 0, 2, 7, 2, NOW()),
    ('Leather Gloves', 'Warm winter gloves', 'available', 35.00, 45.00, 15, 3, 8, 3, NOW()),
    ('Leather Belt', 'Classic accessory', 'available', 30.00, 40.00, 20, 4, 9, 4, NOW()),
    ('Black Leather Jacket', 'Classic and stylish', 'out of stock', 120.00, 150.00, 0, 5, 10, 5, NOW()),
    ('Denim Jeans', 'Comfortable everyday jeans', 'available', 60.00, 80.00, 30, 1, 11, 1, NOW()),
    ('Silk Scarf', 'Elegant accessory', 'available', 45.00, 60.00, 25, 2, 12, 2, NOW()),
    ('Knitted Sweater', 'Cozy and warm', 'available', 50.00, 70.00, 20, 3, 13, 3, NOW()),
    ('Plaid Shirt', 'Casual everyday shirt', 'out of stock', 35.00, 50.00, 0, 4, 14, 4, NOW()),
    ('Black Evening Gown', 'Elegant and stylish', 'available', 130.00, 180.00, 5, 5, 15, 5, NOW()),
    ('Brown Leather Boots', 'Handmade leather boots', 'available', 110.00, 150.00, 5, 1, 16, 1, NOW()),
    ('Sport Shoes', 'Comfortable and stylish', 'available', 60.00, 80.00, 30, 2, 17, 2, NOW()),
    ('Gold Earrings', 'Elegant accessory', 'available', 50.00, 70.00, 15, 3, 18, 3, NOW()),
    ('Silver Necklace', 'Elegant accessory', 'available', 45.00, 60.00, 20, 4, 19, 4, NOW()),
    ('Designer Handbag', 'Stylish accessory', 'available', 200.00, 250.00, 10, 5, 20, 5, NOW());

-- Inserting data into product_category
INSERT INTO "product_category"
("name")
VALUES
    ('Jackets'),
    ('Dresses'),
    ('Shirts'),
    ('Coats'),
    ('Shoes'),
    ('Accessories'),
    ('Ties'),
    ('Boots'),
    ('Socks'),
    ('Scarves'),
    ('Hats'),
    ('Gloves'),
    ('Sweaters'),
    ('Pants'),
    ('T-Shirts'),
    ('Blouses'),
    ('Jeans'),
    ('Leather Jackets'),
    ('Bags'),
    ('Evening Gowns');


-- Inserting data into product_size
INSERT INTO "product_size"
("name")
VALUES

    ('XS'),
    ('S'),
    ('M'),
    ('L'),
    ('XL');

-- Inserting data into product_color
INSERT INTO "product_color"
("name", "code_color")
VALUES
    ('Red', '#FF0000'),
    ('Blue', '#0000FF'),
    ('Green', '#008000'),
    ('Black', '#000000'),
    ('White', '#FFFFFF'),
    ('Yellow', '#FFFF00'),
    ('Aqua', '#00FFFF'),
    ('Magenta', '#FF00FF'),
    ('Silver', '#C0C0C0'),
    ('Gray', '#808080'),
    ('Maroon', '#800000'),
    ('Olive', '#808000'),
    ('Lime', '#00FF00'),
    ('Purple', '#800080'),
    ('Teal', '#008080'),
    ('Navy', '#000080'),
    ('DarkRed', '#8B0000'),
    ('Bisque', '#FFE4C4'),
    ('Indigo', '#4B0082'),
    ('Gold', '#FFD700');


