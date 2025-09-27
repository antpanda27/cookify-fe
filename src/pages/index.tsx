import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import Navigation from '@/components/Navigation';
import RecipeGrid from '@/components/RecipeGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Foodieland - Delicious Recipes for Every Occasion',
    description: 'Discover a world of culinary delights with Foodieland. Explore our collection of mouth-watering recipes, cooking tips, and food inspiration for every occasion.',
    keywords: 'food, recipes, cooking, culinary, blog, meals, dishes, ingredients, kitchen, gourmet',
}

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroCarousel />
      <main className="w-full px-20">
        <div className='flex-row max-w-[1440px] justify-self-center'>
          <Categories />
          <RecipeGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
