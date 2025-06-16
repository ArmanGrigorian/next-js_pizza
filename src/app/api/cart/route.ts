import { CreateCartItemValues } from "@/lib/types";
import { findOrCreateCart } from "@/lib/utils/findOrCreateCart";
import { updateCartTotalPrice } from "@/lib/utils/updateCartTotalPrice";
import { prisma } from "@/prisma/prisma-client";
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ totalPrice: 0, cartItems: [] });
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        userToken: token,
      },
      include: {
        cartItem: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });

    if (!userCart) {
      return NextResponse.json({ totalPrice: 0, cartItems: [] });
    }

    return NextResponse.json(userCart);
  } catch (error) {
    console.error("[CART_GET] Server error:", error);
    return NextResponse.json({ error: "Failed to get cart" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("cartToken")?.value;

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const data = (await req.json()) as CreateCartItemValues;

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        ingredients: {
          every: {
            id: { in: data.ingredients },
          },
        },
      },
    });

    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productItemId: data.productItemId,
          quantity: 1,
          ingredients: { connect: data.ingredients?.map((id) => ({ id })) },
        },
      });
    }

    const updatedUserCart = await updateCartTotalPrice(token);

    const resp = NextResponse.json(updatedUserCart);
    resp.cookies.set("cartToken", token);
    return resp;
  } catch (error) {
    console.error("[CART_POST] Server error:", error);
    return NextResponse.json(
      { message: "Failed to create cart" },
      { status: 500 },
    );
  }
}
