import Image from "next/image";
import React, { useState } from "react";
import { PiForkKnifeFill, PiHeartFill, PiTimerFill } from "react-icons/pi";
import { Card, CardContent, CardTitle } from "./ui/card";
import { recipes } from "@/pages/recipes";
import Link from "next/link";


const DeliciousRecipeGrid = () => {
  const [savedRecipes, setSavedRecipes] = useState<number[]>([]);

  const handleSaveClick = (id: number) => {
    setSavedRecipes((prev) =>
      prev.includes(id)
        ? prev.filter((recipeId) => recipeId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="mt-40">
      <div className="grid grid-cols-2 items-center gap-10 pb-20">
        <h1>Try this delicious recipe to make your day</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          ex, explicabo quasi repellendus.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {recipes.slice(8, 16).map((recipe, index) => (
          <Card
            key={recipe.id}
            className={`border-0 w-full p-0 max-w-[290px]
            ${index >= 8 ? "hidden" : ""}
            ${index >= 6 ? "max-lg:hidden" : ""}
            ${index >= 4 ? "max-sm:hidden" : ""}
            `}
          >
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
                <Link href={`/recipes/${recipe.id}`}><Image
                  src={recipe.imageUrl}
                  alt="recipe"
                  className="object-cover w-full h-full"
                  fill
                /></Link>
              </div>
              <div>
                <Link href={`/recipes/${recipe.id}`}><CardTitle className="text-left lg:text-l max-lg:text-base">
                  {recipe.title}
                </CardTitle></Link>
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
  );
};

export default DeliciousRecipeGrid;
