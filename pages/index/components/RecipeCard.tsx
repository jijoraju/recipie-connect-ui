import React from 'react';
import { RecipeCardProps } from '../../../types/types';

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-4'>
      <img
        src={recipe.image}
        alt={recipe.title}
        className='w-full h-40 object-cover rounded-md mb-4'
      />
      <h3 className='text-xl font-semibold'>{recipe.title}</h3>
      <p className='text-gray-600'>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
