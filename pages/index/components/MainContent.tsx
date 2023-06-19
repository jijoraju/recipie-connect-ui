import React from 'react';

const MainContent: React.FC = () => {
  const featuredRecipes = [
    {
      id: 1,
      title: 'Spaghetti Bolognese',
      imageUrl:
        'https://thecleaneatingcouple.com/wp-content/uploads/2021/11/baked-chicken-parmesan-1.jpg',
      serves: 4,
      difficulty: 'Medium',
    },
    {
      id: 2,
      title: 'Chicken Parmesan',
      imageUrl:
        'https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg',
      serves: 2,
      difficulty: 'Easy',
    },
    // Add more featured recipes as needed
  ];

  return (
    <section className='container mx-auto px-4 py-8'>
      <div className='flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Welcome to Recipe App!</h1>
          <p className='text-gray-600 mb-8'>
            Find delicious recipes to inspire your cooking adventures.
          </p>
        </div>
        <div className='grid grid-cols-3 gap-6'>
          {featuredRecipes.map((recipe) => (
            <div className='p-4 border rounded shadow' key={recipe.id}>
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className='w-full h-48 object-cover rounded'
              />
              <h2 className='text-lg font-semibold mt-4'>{recipe.title}</h2>
              <p className='text-gray-600'>
                Serves {recipe.serves} | Difficulty: {recipe.difficulty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainContent;
