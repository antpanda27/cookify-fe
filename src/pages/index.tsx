import Categories from "@/components/Categories";
import DeliciousRecipeGrid from "@/components/DeliciousRecipeGrid";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import Instagram from "@/components/Instagram";
import LearnMore from "@/components/LearnMore";
import Navigation from "@/components/Navigation";
import RecipeGrid from "@/components/RecipeGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foodieland - Delicious Recipes for Every Occasion",
  description:
    "Discover a world of culinary delights with Foodieland. Explore our collection of mouth-watering recipes, cooking tips, and food inspiration for every occasion.",
  keywords:
    "food, recipes, cooking, culinary, blog, meals, dishes, ingredients, kitchen, gourmet",
};

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <main className="w-full">
        <div className="flex-row max-w-400 px-20 max-lg:px-10 max-md:px-5 justify-self-center">
          {/* <Categories /> */}
          <RecipeGrid />
          <LearnMore />
        </div>
        <div className="bg-gradient-to-t from-sky-100 to-white">
          <Instagram />
        </div>
        <div className="flex-row max-w-400 px-20 max-lg:px-10 max-md:px-5 justify-self-center">
          <DeliciousRecipeGrid />
        </div>
      </main>

    </>
  );
}
