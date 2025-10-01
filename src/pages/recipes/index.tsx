import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiForkKnifeFill, PiHeartFill, PiTimerFill } from "react-icons/pi";

interface Nutrient {
  value: number | null; // Can be a number, or null if not present
  unit: string | null; // Unit like "kcal", "g", "mg"
}

interface NutritionFacts {
  calories: Nutrient;
  totalFat: Nutrient;
  protein: Nutrient;
  carbohydrate: Nutrient;
  cholesterol: Nutrient;
  // Add any other nutritional fields here
}
export interface Recipes {
  id: number;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  category: string;
  author: string;
  date: Date;
  imageUrl: string;
}

export const recipes = [
  {
    id: 1,
    title: "Big Juicy Wagyu Beef Cheeseburger",
    description: "Lorem ipsum dolor sit amet...",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Snack",
    author: "John Smith",
    date: new Date("2022-03-15"),
    imageUrl: "/assets/recipes/image_25.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 2,
    title: "Fresh Lime Roasted Ginger Sauce",
    description: "Lorem ipsum dolor sit amet...",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Fish",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_26.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 3,
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    description: "Lorem ipsum dolor sit amet...",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Breakfast",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_27.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 4,
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    description: "Lorem ipsum dolor sit amet...",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Healthy",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_28.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 5,
    title: "Chicken Meatballs with Cream Cheese",
    description: "Lorem ipsum dolor sit amet...",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Meat",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_29.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 6,
    title: "Fruity Pancake with Orange & Blueberry",
    description: "Lorem ipsum dolor sit amet...",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Sweet",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_30.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 7,
    title: "The Best Easy One Pot Chicken Dinner",
    description: "Lorem ipsum dolor sit amet...",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Snack",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_31.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 8,
    title: "The Creamiest Creamy Chicken Pasta",
    description: "Lorem ipsum dolor sit amet...",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Noodles",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_32.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 9,
    title: "Mixed Tropical Fruit Salad with Superfood Boost",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Healthy",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_01.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 10,
    title: "Big and Juicy Wagyu Beef Steak",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Western",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_02.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 11,
    title: "Healthy Japanese Fried Rice with Asparagus",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Healthy",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_03.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 12,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Eastern",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_04.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 13,
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Healthy",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_05.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 14,
    title: "Barbeque Spicy Sandwiches with Chips",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Snack",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_06.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 15,
    title: "Firecracker Vegan Lettuce Wraps - Spicy!",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Vegan",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_07.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 16,
    title: "Chicken Ramen Soup with Mushoom",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    prepTime: "15 Minutes",
    cookTime: "30 Minutes",
    category: "Japanese",
    author: "Jane Doe",
    date: new Date("2022-04-02"),
    imageUrl: "/assets/recipes/image_08.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
  {
    id: 17,
    title: "Spicy delicious chicken wings",
    description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim",
    prepTime: "10 Minutes",
    cookTime: "30 Minutes",
    category: "Chicken",
    author: "John Smith",
    date: new Date ("2022-04-02"),
    imageUrl: "/assets/recipes/baked-chicken-wings-asian-style-tomatoes-sauce-plate.png",
    nutrition: {
      calories: { value: 219.9, unit: "kcal" },
      totalFat: { value: 10.7, unit: "g" },
      protein: { value: 7.9, unit: "g" },
      carbohydrate: { value: 22.3, unit: "g" },
      cholesterol: { value: 37.4, unit: "mg" },
    },
  },
];

export default function Recipes() {
  const [savedRecipes, setSavedRecipes] = useState<number[]>([]);

  const handleSaveClick = (id: number) => {
    setSavedRecipes((prev) =>
      prev.includes(id)
        ? prev.filter((recipeId) => recipeId !== id)
        : [...prev, id]
    );
  };

  return (
    <>
      <div className="flex-row max-w-400 px-20 justify-self-center mt-20">
        <div className="grid grid-cols-2 items-center gap-10 pb-20">
          <h1>Try this delicious recipe to make your day</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ex, explicabo quasi repellendus.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {recipes.map((recipe, index) => (
            <Card key={recipe.id} className="border-0 w-full p-0 max-w-[290px]">
              <CardContent className="grid w-full aspect-[0.9] fill items-center justify-center gap-2">
                <div className="relative w-full aspect-[1.45] rounded-xl overflow-hidden">
                  <div
                    onClick={() => handleSaveClick(recipe.id)}
                    className="absolute top-2 right-2 z-10 cursor-pointer"
                  >
                    {savedRecipes.includes(recipe.id) ? (
                      <PiHeartFill className="text-red-600 bg-white text-4xl p-1.5 rounded-full" />
                    ) : (
                      <PiHeartFill className="text-gray-300 bg-white text-4xl p-1.5 rounded-full" />
                    )}
                  </div>
                  <Link href={`/recipes/${recipe.id}`}>
                    <Image
                      src={recipe.imageUrl}
                      alt="recipe"
                      className="object-cover w-full h-full"
                      fill
                    />
                  </Link>
                </div>
                <div>
                  <Link href={`/recipes/${recipe.id}`}>
                    <CardTitle className="text-left lg:text-l max-lg:text-base">
                      {recipe.title}
                    </CardTitle>
                  </Link>
                </div>
                <div className="flex items-center text-sm gap-6">
                  <div className="flex gap-2.5 items-center">
                    <PiTimerFill />
                    {recipe.cookTime}
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <PiForkKnifeFill />
                    {recipe.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
