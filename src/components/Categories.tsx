import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image';

const Categories = () => {
  return (
    <div className="my-15">
      <div className="flex items-center justify-between">
        <h1 className="justify-self-start">Categories</h1>
        <button className='btn justify-self-end'>View All Categories</button>
      </div>
      <div className="flex w-full gap-10 mt-4">
          {Array.from({ length: 6 }).map((_, index) => (
              <Card className='border-0 bg-gradient-to-t from-sky-100 to-white'>
                <CardContent className="grid min-w-[180px] min-h-[202px] items-center justify-center p-6">
                  <Image src='/assets/breakfast.png' alt='category' width={100} height={100}/>
                  <div className="justify-self-center text-2xl font-semibold">{index + 1}</div>
                </CardContent>
              </Card>
          ))}
        </div>
    </div>
  )
}

export default Categories


