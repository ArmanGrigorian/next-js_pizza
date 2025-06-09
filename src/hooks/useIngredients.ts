import { API } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

const useIngredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [isLoading, setIsLoading] = useState(false);

   const ingredientsList = ingredients.map((item) => ({
     value: String(item.id),
     text: item.name,
   }));
  

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await API.ingredients.getAll();
        setIngredients(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    ingredientsList,
    ingredients,
    isLoading,
    setIngredients,
    setIsLoading,
  };
};

export default useIngredients;
