import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='bottom-0 w-full bg-gray-800 text-white py-6'>
      <div className='container mx-auto px-4'>
        <p className='text-center text-gray-600'>
          &copy; {new Date().getFullYear()} Your Recipe App. All rights
          reserved.
        </p>
        <nav>
          <ul className='flex justify-center space-x-4'>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
            {/* Add more footer links as needed */}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
