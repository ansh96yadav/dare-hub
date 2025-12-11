import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStopwatch } from 'react-icons/fa';

const CATEGORIES = [
  "Fruits", "Colors", "Netflix Shows", "Countries", "Car Brands", "Animals", "Programming Languages", "Superheroes", "Pizza Toppings", "Sports"
];

const RapidFirePage = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((t) => (t - 0.1).toFixed(1)), 100);
    } else if (timeLeft <= 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const nextRound = () => {
    setIndex(Math.floor(Math.random() * CATEGORIES.length));
    setTimeLeft(5);
    setIsActive(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 flex flex-col items-center justify-center p-6 ${timeLeft <= 1 && isActive ? 'bg-red-900' : 'bg-[#1d1c1c]'} text-white font-sans`}>
      
      <nav className="absolute top-0 w-full p-6">
        <button onClick={() => navigate('/arcade')} className="flex items-center gap-2 text-gray-400 hover:text-white font-bold">
          <FaArrowLeft /> Exit
        </button>
      </nav>

      <div className="text-center w-full max-w-lg">
        <div className="mb-10 inline-block p-4 rounded-full bg-[#252525] border border-[#333]">
           <FaStopwatch className={`text-4xl ${isActive ? 'animate-bounce text-orange-500' : 'text-gray-500'}`} />
        </div>

        <h3 className="text-gray-500 font-bold uppercase tracking-widest mb-4">Name 3 Things in 5 Seconds</h3>
        
        <div className="h-40 flex items-center justify-center">
            {isActive ? (
                <h1 className="text-5xl md:text-7xl font-extrabold">{CATEGORIES[index]}</h1>
            ) : (
                <h1 className="text-4xl font-bold text-gray-600">Ready?</h1>
            )}
        </div>

        {/* Timer Bar */}
        <div className="w-full h-6 bg-[#333] rounded-full mt-8 overflow-hidden relative">
            <div 
              className={`h-full ${timeLeft > 2 ? 'bg-green-500' : 'bg-red-500'} transition-all duration-100 ease-linear`}
              style={{ width: `${(timeLeft / 5) * 100}%` }}
            ></div>
        </div>
        <p className="text-4xl font-mono font-bold mt-4">{Math.max(0, timeLeft)}s</p>

        <button 
          onClick={nextRound}
          className="mt-12 w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-105 transition-transform"
        >
          {isActive ? "Skip / Next" : "Start Round"}
        </button>
      </div>
    </div>
  );
};

export default RapidFirePage;