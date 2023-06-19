import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className='flex justify-between items-center py-6 px-6 bg-gray-800 text-white'>
        <div>
          <h2 className='text-2xl font-bold'>RecipeConnect</h2>
        </div>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/recipes'>Recipes</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
