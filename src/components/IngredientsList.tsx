import React, { useState } from 'react';
import { Check } from 'lucide-react';

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');

interface IngredientItem {
  id: number;
  text: string;
  group: string;
}

// Mock Data Structure
const ingredientGroups = [
  { 
    title: "For main dish", 
    items: [
      { id: 1, text: "Lorem ipsum dolor sit amet", group: "main dish" },
      { id: 2, text: "Lorem ipsum dolor sit amet", group: "main dish" },
      { id: 3, text: "Lorem ipsum dolor sit amet", group: "main dish" },
      { id: 4, text: "Lorem ipsum dolor sit amet", group: "main dish" },
      { id: 5, text: "Lorem ipsum dolor sit amet", group: "main dish" },
    ]
  },
  { 
    title: "For the sauce", 
    items: [
      { id: 6, text: "Lorem ipsum dolor sit amet", group: "sauce" },
      { id: 7, text: "Lorem ipsum dolor sit amet", group: "sauce" },
      { id: 8, text: "Lorem ipsum dolor sit amet", group: "sauce" },
    ]
  }
];

const IngredientsList = () => {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);

  const handleCheck = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id)
        ? prev.filter((checkedId) => checkedId !== id)
        : [...prev, id]
    );
  };

  return (
    <div>
      <h2 className="text-4xl font-bold mb-8">Ingredients</h2>
      {ingredientGroups.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-8">
          {/* Group Title */}
          <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            {group.title}
          </h2>

          {/* List of Ingredients */}
          {group.items.map((item) => {
            const isChecked = checkedIds.includes(item.id);
            
            return (
              <label 
                key={item.id} 
                htmlFor={`ingredient-${item.id}`}
                className={cn(
                  "flex items-center space-x-3 py-8 border-b border-black/10 cursor-pointer transition-colors",
                  isChecked ? "text-gray-400" : "text-black"
                )}
                onClick={() => handleCheck(item.id)}
              >

                {/* Custom Checkbox Container */}
                <div 
                  className={cn(
                    "custom-checkbox w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                    isChecked 
                      ? "border-black bg-black text-white" 
                      : "border-gray-400 bg-white"
                  )}
                >
                  {/* Icon for Checked State */}
                  {isChecked && <Check className="w-4 h-4" strokeWidth={3} />}
                </div>

                {/* Ingredient Text */}
                <span 
                  className={cn(
                    "text-lg", 
                    isChecked ? "line-through" : ""
                  )}
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.text}
                </span>
              </label>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default IngredientsList;
