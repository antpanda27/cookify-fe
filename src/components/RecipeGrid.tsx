import React from 'react'
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { PiTimerFill, PiForkKnifeFill, PiHeartFill } from "react-icons/pi";


const RecipeGrid = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div>
      <div className='text-center'>
        <h1>Simple and tasty recipes</h1>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-10 mt-4 items-center justify-center">
          {Array.from({ length: 9 }).map((_, index) => (
              <Card className='border-0 bg-gradient-to-t from-sky-100 to-white'>
                <CardContent className="grid w-[400px] h-[434px] fill items-center justify-center gap-6">
                  <div className='relative'>
                    <div onClick={handleSaveClick} className='absolute top-2 right-2 z-10'>
                        {isSaved ? (<PiHeartFill className='text-red-600 bg-white text-4xl p-1.5 rounded-full'/>) : (<PiHeartFill className='text-gray-300 bg-white text-4xl p-1.5 rounded-full' />)}
                    </div>
                    <img src='/assets/image_26.png' alt='recipe' className='rounded-xl object-center w-full'/>
                  </div>
                  <div><CardTitle className='text-left text-2xl'>Big Juicy Wagyu Beef Cheeseburger {index + 1}</CardTitle></div>
                  <div className='flex-col gap-6'>
                    <div className='flex gap-1 items-center'><PiTimerFill/>30 minutes</div>
                    <div className='flex gap-1 items-center'><PiForkKnifeFill />Chicken</div>
                  </div>
                </CardContent>
              </Card>
          ))}
      </div>
    </div>
  )
}

export default RecipeGrid
