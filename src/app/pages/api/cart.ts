import { displayCart } from "@/app/lib/actions";
import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const cartItems = await displayCart();
    res.status(200).json(cartItems);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
}
