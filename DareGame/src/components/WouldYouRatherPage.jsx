import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const SCENARIOS = [
  { a: "Be able to fly", b: "Be invisible" },
  { a: "Always say everything on your mind", b: "Never be able to speak again" },
  { a: "Live without music", b: "Live without movies" },
  { a: "Fight 1 horse-sized duck", b: "Fight 100 duck-sized horses" },
  { a: "Be famous but poor", b: "Be rich but unknown" },
];

const WouldYouRatherPage = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleChoice = (choice) => {
    setSelected(choice);
    setTimeout(() => {
      setSelected(null);
      setIndex((prev) => (prev + 1) % SCENARIOS.length);
    }, 1500); // Wait 1.5s before next question
  };

  const current = SCENARIOS[index];

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans flex flex-col">
       <nav className="p-6 absolute top-0 w-full z-20">
        <button onClick={() => navigate('/arcade')} className="flex items-center gap-2 text-white/70 hover:text-white font-bold bg-black/30 px-4 py-2 rounded-full backdrop-blur-md">
          <FaArrowLeft /> Back
        </button>
      </nav>

      <div className="flex-1 flex flex-col md:flex-row relative">
        {/* OPTION A */}
        <div 
           onClick={() => !selected && handleChoice('A')}
           className={`flex-1 flex items-center justify-center p-10 cursor-pointer transition-all duration-500 relative overflow-hidden group ${
             selected === 'A' ? 'flex-[2] bg-cyan-600' : selected === 'B' ? 'flex-[0.5] opacity-50 bg-cyan-900' : 'bg-cyan-700 hover:bg-cyan-600'
           }`}
        >
           <h2 className="text-3xl md:text-5xl font-extrabold text-center relative z-10">{current.a}</h2>
           <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/5 pointer-events-none group-hover:scale-110 transition-transform">A</span>
        </div>

        {/* VS BADGE */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center z-10 shadow-xl border-4 border-[#1d1c1c]">
            <span className="text-black font-black text-xl">OR</span>
        </div>

        {/* OPTION B */}
        <div 
           onClick={() => !selected && handleChoice('B')}
           className={`flex-1 flex items-center justify-center p-10 cursor-pointer transition-all duration-500 relative overflow-hidden group ${
             selected === 'B' ? 'flex-[2] bg-rose-600' : selected === 'A' ? 'flex-[0.5] opacity-50 bg-rose-900' : 'bg-rose-700 hover:bg-rose-600'
           }`}
        >
           <h2 className="text-3xl md:text-5xl font-extrabold text-center relative z-10">{current.b}</h2>
           <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-white/5 pointer-events-none group-hover:scale-110 transition-transform">B</span>
        </div>
      </div>
    </div>
  );
};

export default WouldYouRatherPage;