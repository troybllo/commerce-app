const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function addCart(
  productId: number,
  quantity: number,
): Promise<void> {
  try {
    const client = await pool.connect();
    await client.query("BEGIN");
    await client.query(
      `INSERT INTO cart (product_id, quantity) VALUES (${productId}, ${quantity})`,
    );
    await client.query(`COMMIT`);
    client.release();
    console.log(`Added ${quantity} of product ${productId} `);
  } catch (err) {
    console.error("Error adding info to cart:", err);
  }
}

export async function removeCart(productId: number): Promise<void> {
  try {
    const client = await pool.connect();
    await client.query("BEGIN");
    await client.query(`DELETE FROM cart WHERE product_id = $1`, [productId]);
    await client.query(`COMMIT`);
    client.release();
    console.log(`Removed ${productId} from cart `);
  } catch (err) {
    console.error("Error removing info from cart:", err);
  }
}

export async function displayCart(): Promise<void> {
  try {
    const client = await pool.connect();
    const result = await client.query(
      `SELECT products.id,products.name,products.price,products.category FROM products INNER JOIN cart ON products.id = cart.product_id`,
    );
    client.release();
    return result.rows;
  } catch (err) {
    console.error("Error displaying the caert:", err);
  }
}

export async function quantityCart(): Promise<number> {
  try {
    const client = await pool.connect();
    const result = await client.query(`SELECT COUNT(*) FROM cart`);
    client.release();
    return parseInt(result.rows[0].count);
  } catch (err) {
    console.error(err);
    return 0;
  }
}
