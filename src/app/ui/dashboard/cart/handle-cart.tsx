"use server";

import { removeCart, addCart, displayCart } from "@/app/lib/actions";

export async function addToCart(
  productId: number,
  quantity: number,
): Promise<void> {
  try {
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

export async function showCart(): Promise<void> {
  try {
    await displayCart();
    console.log("Cart Displayed");
  } catch (err) {
    console.error("Error Display", err);
  }
}
