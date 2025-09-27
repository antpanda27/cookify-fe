import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const TAILWIND_COLOR_CLASSES = [
  'from-lime-100',
  'from-green-100',
  'from-rose-100',
  'from-orange-100',
  'from-yellow-100',
  'from-yellow-900/20',
  ];


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}/api/Category`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const apiResult = await response.json();
        setCategories(apiResult.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []); 

  
  if (loading) {
    return <div>Loading categories...</div>;
  }

  return (
    <div className="my-15">
      <div className="flex items-center justify-between">
        <h1 className="justify-self-start">Categories</h1>
        <button className='btn justify-self-end'>View All Categories</button>
      </div>
      <div className="flex w-full justify-between mt-4 flex-wrap">
        {categories.slice(0, 6).map((category) => (
          <Card key={category.id} className={`border-0 bg-gradient-to-t from-${category.color} to-white to-75%`}>
            <CardContent className="grid place-items-center justify-center aspect-[0.9] xl:w-33 max-xl:w-20 max-sm:w-20 max-sm:p-1">
              <Image src={`/assets/${category.name.toLowerCase()}.png`} alt={category.name} className='drop-shadow-md aspect-square max-w-25 max-xl:w-18 max-lg:w-10' width={100} height={100}/>
              <div className="justify-self-center max-2xl:text-base max-lg:text-xs font-semibold pt-6">{category.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Categories


