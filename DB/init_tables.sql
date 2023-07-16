

BEGIN;


CREATE TABLE IF NOT EXISTS "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "access" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP NOT NULL
);


CREATE TABLE IF NOT EXISTS "task" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "user_id" INT REFERENCES "user" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "website_data" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "dailyVisits" TEXT NOT NULL,
    "registered" TEXT NOT NULL,
    "dailySells" TEXT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS "product" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT,
    "costPrice" DECIMAL(10,2) NOT NULL,
    "sellPrice" DECIMAL(10,2),
    "quantity" INT NOT NULL,
    "product_size_id" INT NOT NULL REFERENCES "product_size" ("id") ON DELETE CASCADE,
    "product_category_id" INT NOT NULL REFERENCES "product_category" ("id") ON DELETE CASCADE,
    "product_color_id" INT NOT NULL REFERENCES "product_color" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "product_category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
);

CREATE TABLE IF NOT EXISTS "product_size" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS "product_color" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "code_color" TEXT NOT NULL,
);

CREATE TABLE IF NOT EXISTS "product_image" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "image" TEXT [] NOT NULL,
    "product_color_id" INT NOT NULL REFERENCES "product_color" ("id") ON DELETE CASCADE,
    "product_id" INT NOT NULL REFERENCES "product" ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMP NOT NULL
);

COMMIT;