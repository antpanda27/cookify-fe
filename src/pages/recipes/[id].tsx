import { useRouter } from "next/router";
import { recipes } from "./index"; // ⬅️ Import the mock data
import { Printer, Share, User } from "lucide-react";
import { PiForkKnifeFill, PiTimerFill } from "react-icons/pi";
import Image from "next/image";
import IngredientsList from "@/components/IngredientsList";
import MoreRecipes from "@/components/MoreRecipes";

const RecipeDetailPage = () => {
  const router = useRouter();

  const { id } = router.query;

  const recipeId = typeof id === "string" ? parseInt(id) : null;

  const recipe = recipes.find((r) => r.id === recipeId);

  if (router.isFallback || !recipeId) {
    return <div>Loading...</div>;
  }

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  // 4. Render the recipe details using the found 'recipe' object
  return (
    <main className="w-full mx-auto px-20 py-20 flex items-center justify-center">
      <div className="w-full max-w-[1440px] items-center justify-between">
        <header className="grid lg:grid-cols-[70%_30%] w-full mt-12">
          <div>
            <h1 className="text-7xl font-bold mb-12">{recipe.title}</h1>
            <div className="flex flex-row space-x-8">
              {/* User Block  */}
              <div className="flex items-center space-x-4">
                <div className="relative w-12.5 h-12.5 rounded-full bg-gray-400 overflow-hidden">
                  <User className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{recipe.author}</p>
                  <p className="text-sm text-gray-500">
                    {recipe.date.toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              {/* Prep Block  */}
              <div className="flex items-center text-sm gap-6 border-l border-gray-300 pl-8 h-full py-2">
                <div className="flex gap-4 items-center">
                  <PiTimerFill size={24} />
                  <div>
                    <p className="text-xs font-medium tracking-widest">
                      PREP TIME
                    </p>
                    <p className="text-sm text-black/60 ">{recipe.prepTime}</p>
                  </div>
                </div>
              </div>
              {/* Cook Block  */}
              <div className="flex items-center text-sm gap-6 border-l border-gray-300 pl-8 h-full py-2">
                <div className="flex gap-4 items-center">
                  <PiTimerFill size={24} />
                  <div>
                    <p className="text-xs font-medium tracking-widest">
                      COOK TIME
                    </p>
                    <p className="text-sm text-black/60 ">{recipe.cookTime}</p>
                  </div>
                </div>
              </div>
              {/* Category Block  */}
              <div className="flex gap-4 items-center border-l border-gray-300 pl-8 h-full py-2">
                <PiForkKnifeFill size={24} />
                <p className="text-sm text-black/60 ">{recipe.category}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center gap-8 mt-4 max-lg:hidden">
            <div className="flex flex-col items-center space-y-4">
              <button className="bg-[#E7FAFE] cursor-pointer p-7 rounded-full">
                <Printer className="w-6 h-6 text-grey" />
              </button>
              <p className="text-xs font-medium tracking-widest">PRINT</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <button className="bg-[#E7FAFE] cursor-pointer p-7 rounded-full">
                <Share className="w-6 h-6 text-grey" />
              </button>
              <p className="text-xs font-medium tracking-widest">SHARE</p>
            </div>
          </div>
        </header>
        <div className="flex w-full mt-12 gap-10">
          <div className="relative w-12/5 aspect-[1.4]">
            <Image
              src={recipe.imageUrl}
              alt={recipe.title}
              fill
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="w-full p-10 bg-[#E7FAFE] rounded-3xl">
            <h2 className="text-3xl font-bold mb-8">Nutrition Information</h2>
            <div className="grid gap-4 text-lg font-medium">
              {/* 1. Calories Row */}
              {recipe.nutrition.calories && (
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <p className="text-gray-600">Calories</p>
                  <p>
                    {recipe.nutrition.calories.value}{" "}
                    {recipe.nutrition.calories.unit}
                  </p>
                </div>
              )}

              {/* 2. Total Fat Row */}
              {recipe.nutrition.totalFat && (
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <p className="text-gray-600">Total Fat</p>
                  <p>
                    {recipe.nutrition.totalFat.value}{" "}
                    {recipe.nutrition.totalFat.unit}
                  </p>
                </div>
              )}

              {/* 3. Protein Row */}
              {recipe.nutrition.protein && (
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <p className="text-gray-600">Protein</p>
                  <p>
                    {recipe.nutrition.protein.value}{" "}
                    {recipe.nutrition.protein.unit}
                  </p>
                </div>
              )}

              {/* 4. Carbohydrate Row */}
              {recipe.nutrition.carbohydrate && (
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <p className="text-gray-600">Carbohydrate</p>
                  <p>
                    {recipe.nutrition.carbohydrate.value}{" "}
                    {recipe.nutrition.carbohydrate.unit}
                  </p>
                </div>
              )}

              {/* 5. Cholesterol Row (or any other field) */}
              {recipe.nutrition.cholesterol && (
                <div className="flex justify-between items-center pb-2">
                  <p className="text-gray-600">Cholesterol</p>
                  <p>
                    {recipe.nutrition.cholesterol.value}{" "}
                    {recipe.nutrition.cholesterol.unit}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-20 text-base text-black/60">{recipe.description}</div>
        <div className="grid lg:grid-cols-[70%_30%] gap-10 w-full mt-20">
          <div><IngredientsList /></div>
          <MoreRecipes />
        </div>
      </div>
    </main>
  );
};

export default RecipeDetailPage;
