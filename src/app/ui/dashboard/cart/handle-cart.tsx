"use server";

import { removeCart } from "@/app/lib/actions";
import { addCart } from "@/app/lib/actions";

export async function addToCart(
  productId: number,
  quantity: number,
): Promise<void> {
  try {
    // Call the addToCart function with the product ID, quantity, and user ID
    await addCart(productId, quantity);
    console.log(`Product with ID ${productId} added to the cart.`);
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
}

export async function removeFromCart(productId: number): Promise<void> {
  try {
    await removeCart(productId);
    console.log(`Product with ID ${productId} removed from the cart`);
  } catch (error) {
    console.error("Error removing product from cart", error);
  }
}
