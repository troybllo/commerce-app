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

export async function fetchProductsById(id: number) {
  try {
    console.log("Fetching products by ID...");

    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data =
      await sql<Product>`SELECT id,name,image,price,category FROM products WHERE id = ${id}`;

    console.log("Data fetch completed after 1 second. ");

    const ids = data.rows;
    console.log(ids);

    return ids[0];
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch product data");
  }
}

export async function fetchProductsByCategory(category: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data =
      await sql<Product>`SELECT id,name,image,price,category FROM products WHERE category = ${category}`;

    console.log("Data fetch completed after 1 second. ");

    const categories = data.rows;
    console.log(categories);

    return data.rows;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch products ");
  }
}

export async function fetchFilteredProducts(query: string) {
  try {
    const products = await sql<Product>`
    SELECT name,id,price,category
    FROM products
    WHERE name ILIKE ${`%${query}%`}`;
    return products.rows;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch products.");
  }
}
