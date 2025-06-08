export const categories = [
  {
    name: "Pizzas",
  },
  {
    name: "Breakfast",
  },
  {
    name: "Snacks",
  },
  {
    name: "Cocktails",
  },
  {
    name: "Drinks",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const ingredients = [
  {
    name: "Cheese Side",
    price: 179,
    imageUrl: "/images/cheese-side.png",
  },
  {
    name: "Creamy Mozzarella",
    price: 79,
    imageUrl: "/images/creamy-mozzarella.png",
  },
  {
    name: "Cheddar And Parmesan",
    price: 79,
    imageUrl: "/images/cheddar-and-parmesan.png",
  },
  {
    name: "Hot Jalapeno Pepper",
    price: 59,
    imageUrl: "/images/hot-jalapeno-pepper.png",
  },
  {
    name: "Tender Chicken",
    price: 79,
    imageUrl: "/images/tender-chicken.png",
  },
  {
    name: "Champignons",
    price: 59,
    imageUrl: "/images/champignons.png",
  },
  {
    name: "Ham",
    price: 79,
    imageUrl: "/images/ham.png",
  },
  {
    name: "Piquant Pepperoni",
    price: 79,
    imageUrl: "/images/piquant-pepperoni.png",
  },
  {
    name: "Spicy Chorizo",
    price: 79,
    imageUrl: "/images/spicy-chorizo.png",
  },
  {
    name: "Pickled Cucumbers",
    price: 59,
    imageUrl: "/images/pickled-cucumbers.png",
  },
  {
    name: "Fresh Tomatoes",
    price: 59,
    imageUrl: "/images/fresh-tomatoes.png",
  },
  {
    name: "Red Onion",
    price: 59,
    imageUrl: "/images/red-onion.png",
  },
  {
    name: "Juicy Pineapples",
    price: 59,
    imageUrl: "/images/juicy-pineapples.png",
  },
  {
    name: "Italian Herbs",
    price: 39,
    imageUrl: "/images/italian-herbs.png",
  },
  {
    name: "Sweet Pepper",
    price: 59,
    imageUrl: "/images/sweet-pepper.png",
  },
  {
    name: "Cubes Of Feta Cheese",
    price: 79,
    imageUrl: "/images/cubes-of-feta-cheese.png",
  },
  {
    name: "Meatballs",
    price: 79,
    imageUrl: "/images/meatballs.png",
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: "Omelette With Ham And Mushrooms",
    imageUrl: "/images/omelette-with-ham-and-mushrooms.webp",
    categoryId: 2,
  },
  {
    name: "Omelette With Pepperoni",
    imageUrl: "/images/omelette-with-pepperoni.webp",
    categoryId: 2,
  },
  {
    name: "Coffee Latte",
    imageUrl: "/images/coffee-latte.webp",
    categoryId: 2,
  },
  {
    name: "Sandwich Ham And Cheese",
    imageUrl: "/images/sandwich-ham-and-cheese.webp",
    categoryId: 3,
  },
  {
    name: "Chicken Nuggets",
    imageUrl: "/images/chicken-nuggets.webp",
    categoryId: 3,
  },
  {
    name: "Oven Baked Potatoes With Sauce 🌱",
    imageUrl: "/images/oven-baked-potatoes-with-sauce.webp",
    categoryId: 3,
  },
  {
    name: "Dodster",
    imageUrl: "/images/dodster.webp",
    categoryId: 3,
  },
  {
    name: "Spicy Dodster 🌶️🌶️",
    imageUrl: "/images/spicy-dodster.webp",
    categoryId: 3,
  },
  {
    name: "Banana Milkshake",
    imageUrl: "/images/banana-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Caramel Apple Milkshake",
    imageUrl: "/images/caramel-apple-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Milkshake With Oreo Cookies",
    imageUrl: "/images/milkshake-with-oreo-cookies.webp",
    categoryId: 4,
  },
  {
    name: "Classic Milkshake 👶",
    imageUrl: "/images/classic-milkshake.webp",
    categoryId: 4,
  },
  {
    name: "Irish Cappuccino",
    imageUrl: "/images/irish-cappuccino.webp",
    categoryId: 5,
  },
  {
    name: "Caramel Cappuccino",
    imageUrl: "/images/caramel-cappuccino.webp",
    categoryId: 5,
  },
  {
    name: "Coconut Latte",
    imageUrl: "/images/coconut-latte.webp",
    categoryId: 5,
  },
  {
    name: "Americano",
    imageUrl: "/images/americano.webp",
    categoryId: 5,
  },
  {
    name: "Coffee Latte",
    imageUrl: "/images/coffee-latte.webp",
    categoryId: 5,
  },
].map((obj, index) => ({ id: index + 1, ...obj }));
