import { recipes } from "@/pages/recipes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MoreRecipes = () => {
  return (
    <div className=" max-lg:hidden">
      <h2 className="text-4xl font-semibold mb-4">More Recipes</h2>
      <div className="grid grid-cols-1">
        {recipes.slice(0, 3).map((recipe, index) => (
            <Link key={index} href={`/recipes/${recipe.id}`} className="grid grid-cols-[45%_55%] items-center gap-4 my-4">
              <div className="relative w-full aspect-[1.5] rounded-xl overflow-hidden"><Image
                src={recipe.imageUrl}
                alt="recipe"
                className="object-cover w-full h-full"
                fill/>
              </div>
              <div>
                <h3 className="text-xl font-bold pb-4">{recipe.title}</h3>
                <p className="text-sm text-black/60">By {recipe.author}</p>
              </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default MoreRecipes;
