import { prisma } from "@/prisma/prisma-client";
import { calcCartItemTotalPrice } from "./calcCartItemTotalPrice";

export const updateCartTotalAmount = async (userToken: string) => {
  const userCart = await prisma.cart.findFirst({
    where: {
      userToken,
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
    return;
  }

  const totalPrice = userCart.cartItem.reduce((acc, item) => {
    return acc + calcCartItemTotalPrice(item);
  }, 0);

  return await prisma.cart.update({
    where: {
      id: userCart.id,
    },
    data: {
      totalPrice,
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
};
