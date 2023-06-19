import React from 'react';
import { FeaturedRecipesSectionProps } from '../../../types/types';
import RecipeCard from './RecipeCard';

const FeaturedRecipesSection: React.FC<FeaturedRecipesSectionProps> = ({
  recipes,
}) => {
  return (
    <section className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-4'>Featured Recipes</h2>
      <div className='grid grid-cols-3 gap-6'>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedRecipesSection;
