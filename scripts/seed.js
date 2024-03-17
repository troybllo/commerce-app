const { db } = require("@vercel/postgres");
const { products } = require("../src/app/lib/placeholder-data.js");

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
       CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255),
        price INTEGER NOT NULL,
        category VARCHAR(255) NOT NULL
      )
    `;

    console.log(`Created "products" table`);

    // Insert data into the "revenue" table
    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
        INSERT INTO products (id, name, image, price, category)
        VALUES (${product.id}, ${product.name}, ${product.image}, ${product.price}, ${product.category})
        ON CONFLICT (id) DO NOTHING;
`,
      ),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      product: insertedProducts,
    };
  } catch (error) {
    console.error("Error seeding products:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedProducts(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});
