import { sql } from "@vercel/postgres";
import { Product } from "./definitions";

export async function fetchProducts() {
  try {
    console.log("Fetching products...");
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await sql<Product>`SELECT * FROM products`;

    console.log("Data fetch completed after 3 seconds.");

    return data.rows;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch product data.");
  }
}
