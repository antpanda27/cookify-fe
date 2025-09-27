import React, { useState } from "react";
import { PiHeartFill, PiTimerFill, PiForkKnifeFill } from "react-icons/pi";
import { Card, CardContent, CardTitle } from "./card";

const recipeCard = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div>
      <Card className="border-0 bg-gradient-to-t from-sky-100 to-white">
        <CardContent className="grid w-[400px] aspect-[0.46] fill items-center justify-center gap-6">
          <div className="relative">
            <div
              onClick={handleSaveClick}
              className="absolute top-2 right-2 z-10"
            >
              {isSaved ? (
                <PiHeartFill className="text-red-600 bg-white text-4xl p-1.5 rounded-full" />
              ) : (
                <PiHeartFill className="text-gray-300 bg-white text-4xl p-1.5 rounded-full" />
              )}
            </div>
            <img
              src="/assets/image_26.png"
              alt="recipe"
              className=" aspect-[1.48] max-lg:h-5 rounded-xl object-center"
            />
          </div>
          <div>
            <CardTitle className="text-left text-2xl">
              Big Juicy Wagyu Beef Cheeseburger
            </CardTitle>
          </div>
          <div className="flex-row gap-6">
            <div className="flex gap-1 items-center">
              <PiTimerFill />
              30 minutes
            </div>
            <div className="flex gap-1 items-center">
              <PiForkKnifeFill />
              Chicken
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default recipeCard;
