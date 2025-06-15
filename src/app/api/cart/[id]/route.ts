import { updateCartTotalAmount } from "@/lib/utils/updateCartTotalAmount";
import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(
  req: NextRequest,
  context: RouteContext,
) {
  try {
    const { id } = await context.params;
    const data = (await req.json()) as { quantity: number };
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Cart token not found" });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!cartItem) {
      return NextResponse.json(
        { error: "Cart item not found" },
        { status: 404 },
      );
    }

    await prisma.cartItem.update({
      where: {
        id: Number(id),
      },
      data: {
        quantity: data.quantity,
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log("[CART_PATCH] Server error", error);
    return NextResponse.json(
      { message: "Failed to update cart" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  context: RouteContext,
) {
  try {
    const { id } = await context.params;
    const token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "Cart token not found" });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(id),
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: "Cart item not found" });
    }

    await prisma.cartItem.delete({
      where: {
        id: Number(id),
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (error) {
    console.log("[CART_DELETE] Server error", error);
    return NextResponse.json(
      { message: "Failed to delete recycle bin" },
      { status: 500 },
    );
  }
}
