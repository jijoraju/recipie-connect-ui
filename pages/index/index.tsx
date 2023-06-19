import React from 'react';
import MainContent from './components/MainContent';
import CategorySection from './components/CategorySection';
import FeaturedRecipesSection from './components/FeaturedRecipesSection';
import CallToActionSection from './components/CallToActionSection';
import { Recipe } from '../../types/types';

const HomePage: React.FC = () => {
  const featuredRecipes: Recipe[] = [
    {
      id: 1,
      title: 'Pancakes',
      image:
        'https://www.delscookingtwist.com/wp-content/uploads/2022/01/Easy-Fluffy-American-Pancakes_1.jpg',
      description: 'Delicious homemade pancakes for breakfast.',
    },
    {
      id: 2,
      title: 'Mediterranean Salad',
      image:
        'https://www.simplejoy.com/wp-content/uploads/2022/01/mediterranean-salad.jpg',
      description: 'A refreshing and healthy salad with Mediterranean flavors.',
    },
    // Add more featured recipes as needed
  ];

  return (
    <>
      <main className='flex-grow'>
        <MainContent />
        <CategorySection />
        <FeaturedRecipesSection recipes={featuredRecipes} />
        <CallToActionSection />
      </main>
    </>
  );
};

export default HomePage;
