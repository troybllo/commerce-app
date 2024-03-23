const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString:
    "postgres://default:ztblVTM1j7JP@ep-cool-wind-a4yctwdr-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
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
    await client.query(`DELETE FROM cart WHERE product_id = ${productId}`);
    console.log(`Removed ${productId} from cart `);
  } catch (err) {
    console.error("Error removing info from cart:", err);
  }
}
