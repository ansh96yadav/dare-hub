import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGhost } from 'react-icons/fa';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-40 h-40 bg-[#252525] rounded-full flex items-center justify-center mb-8 animate-bounce">
          <FaGhost className="text-7xl text-[#7b00ff]" />
      </div>
      <h1 className="text-6xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#7b00ff] to-[#d627e6]">404</h1>
      <h2 className="text-2xl font-bold mb-4">Dare Not Found!</h2>
      <p className="text-gray-400 max-w-md mb-8">
        Oops! You've wandered into the void. This page is too scared to exist.
      </p>
      <button 
        onClick={() => navigate('/')}
        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFoundPage;