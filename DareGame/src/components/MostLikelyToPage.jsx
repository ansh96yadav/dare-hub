import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUsers } from 'react-icons/fa';

const SCENARIOS = [
  "Who is most likely to become a billionaire?",
  "Who is most likely to join a cult?",
  "Who is most likely to cry during a movie?",
  "Who is most likely to get arrested?",
  "Who is most likely to forget their own birthday?",
  "Who is most likely to survive a zombie apocalypse?",
  "Who is most likely to get famous on TikTok?",
];

const MostLikelyToPage = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % SCENARIOS.length);
  };

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans flex flex-col items-center p-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-green-600 rounded-full blur-[150px] opacity-20"></div>
      </div>

      <nav className="w-full flex justify-between items-center mb-12 z-10">
        <button onClick={() => navigate('/arcade')} className="flex items-center gap-2 text-gray-400 hover:text-white font-bold">
          <FaArrowLeft /> Exit
        </button>
        <span className="bg-green-500/20 text-green-500 px-4 py-1 rounded-full text-xs font-bold uppercase">Voting Game</span>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-lg relative z-10">
        <h1 className="text-3xl font-extrabold mb-8 text-center">Who is most likely to...</h1>
        
        <div className="w-full aspect-[4/5] relative" onClick={nextCard}>
           <AnimatePresence mode='wait'>
             <motion.div
               key={index}
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 1.1, opacity: 0 }}
               transition={{ duration: 0.3 }}
               className="absolute inset-0 bg-gradient-to-br from-[#1e3a23] to-[#1a1a1a] border border-[#333] rounded-[40px] p-8 flex flex-col items-center justify-center text-center shadow-2xl cursor-pointer hover:border-green-500 transition-colors"
             >
                <FaUsers className="text-6xl text-green-500 mb-6 opacity-80"/>
                <p className="text-2xl font-bold leading-relaxed">
                  "{SCENARIOS[index]}"
                </p>
                <div className="mt-12 text-sm text-gray-400">
                    <p>On count of 3, point to the person!</p>
                    <p className="animate-pulse mt-2 text-green-400">Tap for next</p>
                </div>
             </motion.div>
           </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default MostLikelyToPage;