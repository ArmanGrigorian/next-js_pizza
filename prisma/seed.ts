import { Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";
import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productId,
  dough,
  size,
}: {
  productId: number;
  dough?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productId,
    price: randomDecimalNumber(1, 14),
    dough,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        id: 1,
        fullName: "John Doe",
        email: "john.doe.123456.admin@gmail.com",
        password: hashSync("123456", 10),
        role: "ADMIN",
        verifiedAt: new Date(),
        createdAt: new Date(),
      },
      {
        id: 2,
        fullName: "Jane Doe",
        email: "jane.doe.123456user@gmail.com",
        password: hashSync("123456", 10),
        role: "USER",
        verifiedAt: new Date(),
        createdAt: new Date(),
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Pepperoni Fresh",
      imageUrl: "/images/pepperoni-fresh.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Cheese",
      imageUrl: "/images/cheese.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Chorizo Fresh",
      imageUrl: "/images/chorizo-fresh.webp",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Pizza "Pepperoni Fresh"
      generateProductItem({ productId: pizza1.id, dough: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, dough: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, dough: 2, size: 40 }),

      // Pizza "Cheese"
      generateProductItem({ productId: pizza2.id, dough: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, dough: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, dough: 1, size: 40 }),
      generateProductItem({ productId: pizza2.id, dough: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, dough: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, dough: 2, size: 40 }),

      // Pizza "Chorizo ​​Fresh"
      generateProductItem({ productId: pizza3.id, dough: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, dough: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, dough: 2, size: 40 }),

      // Other Products
      generateProductItem({ productId: 1 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
    ],
  });

  const cart1 = await prisma.cart.create({
    data: {
      id: 1,
      userId: 1,
      totalPrice: 0,
      userToken: "11111",
    },
  });

  const cart2 = await prisma.cart.create({
    data: {
      id: 2,
      userId: 2,
      totalPrice: 0,
      userToken: "222222",
    },
  });

  const firstProductItem = await prisma.productItem.findFirst();

  if (firstProductItem) {
    await prisma.cartItem.create({
      data: {
        productItemId: firstProductItem.id,
        cartId: cart1.id,
        quantity: 2,
        ingredients: {
          connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
        },
      },
    });
  }

  await prisma.story.createMany({
    data: [
      {
        id: 1,
        previewImageUrl: "/images/01.webp",
      },
      {
        id: 2,
        previewImageUrl: "/images/02.webp",
      },
      {
        id: 3,
        previewImageUrl: "/images/03.webp",
      },
      {
        id: 4,
        previewImageUrl: "/images/04.webp",
      },
      {
        id: 5,
        previewImageUrl: "/images/05.webp",
      },
      {
        id: 6,
        previewImageUrl: "/images/06.webp",
      },
    ],
  });

  await prisma.storyItem.createMany({
    data: [
      {
        id: 1,
        storyId: 1,
        sourceUrl: "/images/07.webp",
      },
      {
        id: 2,
        storyId: 1,
        sourceUrl: "/images/08.webp",
      },
      {
        id: 3,
        storyId: 1,
        sourceUrl: "/images/09.webp",
      },
      {
        id: 4,
        storyId: 1,
        sourceUrl: "/images/10.webp",
      },
      {
        id: 5,
        storyId: 1,
        sourceUrl: "/images/11.webp",
      },
    ],
  });
}

async function down() {
  await prisma.cartItem.deleteMany();
  await prisma.cart.deleteMany();
  await prisma.productItem.deleteMany();
  await prisma.product.deleteMany();
  await prisma.ingredient.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();
  await prisma.storyItem.deleteMany();
  await prisma.story.deleteMany();
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
