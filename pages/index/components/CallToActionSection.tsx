import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section className='bg-blue-500 py-12'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold text-white mb-4'>
          Join Our Recipe Community
        </h2>
        <p className='text-white text-lg mb-8'>
          Sign up today and get access to a wide range of delicious recipes.
        </p>
        <button className='bg-white text-blue-500 py-2 px-6 rounded-full font-semibold hover:bg-blue-400 hover:text-white'>
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default CallToActionSection;
