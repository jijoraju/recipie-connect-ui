import React from 'react';

const CategorySection: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: 'Appetizers',
      imageUrl:
        'https://cdn.loveandlemons.com/wp-content/uploads/2019/12/easy-appetizers-1.jpg',
    },
    {
      id: 2,
      name: 'Main Courses',
      imageUrl:
        'https://www.foodandwine.com/thmb/DKCB4vmC9xCs2Zkj8july78FYnk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/garlic-butter-prime-rib-FT-RECIPE0621-fca73e5fa8e046b0b03982757db51628.jpg',
    },
    {
      id: 3,
      name: 'Desserts',
      imageUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg',
    },
    // Add more categories as needed
  ];

  return (
    <section className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-4'>Browse by Category</h2>
      <div className='grid grid-cols-3 gap-6'>
        {categories.map((category) => (
          <div
            className='flex flex-col items-center p-4 border rounded shadow'
            key={category.id}
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className='w-32 h-32 object-cover rounded mb-2'
            />
            <h3 className='text-lg font-semibold'>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
