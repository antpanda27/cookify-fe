import { User, ChevronRight } from "lucide-react";
import Image from "next/image";
import { PiForkKnifeFill, PiTimerFill } from "react-icons/pi";
import { recipes } from "@/pages/recipes/index";
import Link from "next/link";

// Utility for merging Tailwind classes (like the cn utility in shadcn)
const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

const FeaturedRecipe = () => {
  const FEATURED_RECIPE_ID = 17;

  const recipe = recipes.find((r) => r.id === FEATURED_RECIPE_ID);

  if (!recipe) {
    return (
      <div>
        Featured Recipe (ID {FEATURED_RECIPE_ID}) not found in data source!
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center px-0 py-4 sm:p-8">
      <div className="max-w-[1440px] w-full rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 relative">
          {/* LEFT COLUMN: CONTENT (Light Mint Background) */}
          <div className="p-8 sm:p-16 bg-[#E7FAFE] flex flex-col justify-center relative">
            {/* Hot Recipes Badge */}
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-8 shadow-md self-start">
              <span className="font-semibold text-sm">🔥</span>
              <span className="text-sm font-semibold text-gray-800">
                Hot Recipes
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tighter text-gray-900 mb-6">
              {recipe.title}
            </h1>

            {/* Description */}
            <p className="text-gray-600 max-w-lg mb-10 text-sm lg:text-lg">
              {recipe.description}
            </p>

            {/* Meta Info (Time & Category) */}
            <div className="flex space-x-6 mb-12">
              {/* Time */}
              <div className="flex items-center space-x-2 bg-black/5 px-4 py-2 rounded-full text-gray-700">
                <PiTimerFill className="w-5 h-5 text-black" />
                <span className="font-medium text-sm">{recipe.cookTime}</span>
              </div>
              {/* Category */}
              <div className="flex items-center space-x-2 bg-black/5 px-4 py-2 rounded-full text-gray-700">
                <PiForkKnifeFill className="w-5 h-5 text-black" />
                <span className="font-medium text-sm">{recipe.category}</span>
              </div>
            </div>

            {/* Author and Button Row */}
            <div className="flex justify-between items-center flex-wrap gap-4">
              {/* Author Info */}
              <div className="flex items-center space-x-4">
                {/* Profile Image Placeholder */}
                <div className="relative w-12 h-12 rounded-full bg-gray-400 overflow-hidden">
                  {/* Placeholder for John Smith image */}
                  <User className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{recipe.author}</p>
                  <p className="text-sm text-gray-500">
                    {" "}
                    {recipe.date.toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* View Recipes Button */}
              <Link href={`/recipes/${recipe.id}`}>
                <button className="flex items-center space-x-2 bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition cursor-pointer shadow-lg">
                  <span>View Recipes</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: IMAGE (White Background) */}
          <div className="bg-white relative flex items-center justify-center">
            {/* Image Container with Aspect Ratio */}
            {/* Using standard img tag and CSS to achieve fill/cover behavior */}
            <div className="relative w-full h-full p-16 overflow-hidden rounded-b-2x1 lg:rounded-r-2xl">
              <Image
                src={recipe.imageUrl}
                alt={recipe.title}
                className="object-cover object-center"
                fill
              />
            </div>
          </div>

          {/* Handpicked Badge (Absolute Positioned) */}
          <div
            className="absolute top-20 left-[80%] -translate-x-1/2 -translate-y-1/2 z-30 lg:top-1/5 lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-30"
            style={{ marginLeft: "1%" }}
          >
            <Image
              src="/assets/hero/badge.png"
              alt="Handpicked"
              width={128}
              height={128}
              className="select-none justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
