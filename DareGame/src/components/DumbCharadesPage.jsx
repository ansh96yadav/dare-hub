import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEye, FaEyeSlash, FaTheaterMasks } from 'react-icons/fa';

const MOVIES = [
  "Titanic", "The Matrix", "Avengers", "Frozen", "Harry Potter", "Inception", "Jurassic Park", "The Lion King", "Spider-Man", "Jaws"
];

const DumbCharadesPage = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const nextMovie = () => {
    setIsRevealed(false);
    setTimeout(() => setIndex(Math.floor(Math.random() * MOVIES.length)), 300);
  };

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans flex flex-col items-center justify-center p-6 relative">
       <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

       <nav className="absolute top-0 w-full p-6">
        <button onClick={() => navigate('/arcade')} className="flex items-center gap-2 text-gray-400 hover:text-white font-bold">
          <FaArrowLeft /> Exit
        </button>
      </nav>

      <div className="w-full max-w-md bg-[#252525] border border-[#333] p-10 rounded-[30px] text-center shadow-2xl relative z-10">
         <FaTheaterMasks className="text-5xl text-yellow-400 mx-auto mb-6" />
         <h2 className="text-gray-400 font-bold uppercase text-sm mb-8">Act this out (Don't Speak!)</h2>

         <div className="bg-[#1a1a1a] rounded-2xl p-8 mb-8 min-h-[150px] flex items-center justify-center relative overflow-hidden">
            {isRevealed ? (
                <h1 className="text-4xl font-extrabold text-white animate-pulse">{MOVIES[index]}</h1>
            ) : (
                <div className="text-gray-600 font-bold">
                    <p>Tap 'Reveal' to see the word</p>
                    <p className="text-xs mt-2">(Show only to the actor)</p>
                </div>
            )}
         </div>

         <div className="flex gap-4">
             <button 
               onClick={() => setIsRevealed(!isRevealed)}
               className="flex-1 py-3 bg-[#333] hover:bg-[#444] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
             >
                {isRevealed ? <><FaEyeSlash/> Hide</> : <><FaEye/> Reveal</>}
             </button>
             <button 
               onClick={nextMovie}
               className="flex-1 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl font-bold transition-colors shadow-lg"
             >
                Next Word
             </button>
         </div>
      </div>
    </div>
  );
};

export default DumbCharadesPage;