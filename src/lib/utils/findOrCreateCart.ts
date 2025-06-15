import { prisma } from "@/prisma/prisma-client";

export const findOrCreateCart = async (userToken: string) => {
  let userCart = await prisma.cart.findFirst({
    where: {
      userToken,
    },
  });

  if (!userCart) {
    userCart = await prisma.cart.create({
      data: {
        userToken,
      },
    });
  }

  return userCart;
};
