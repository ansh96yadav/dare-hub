import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHandPaper, FaRedo } from 'react-icons/fa';

const QUESTIONS = [
  "Never have I ever fallen asleep in public.",
  "Never have I ever stalked an ex on social media.",
  "Never have I ever lied about my age.",
  "Never have I ever eaten food out of a trash can.",
  "Never have I ever sent a text to the wrong person.",
  "Never have I ever used someone else's toothbrush.",
  "Never have I ever laughed at a joke I didn't get.",
  "Never have I ever tripped in front of a crowd.",
];

const NeverHaveIEverPage = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % QUESTIONS.length);
  };

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans flex flex-col items-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-pink-600 rounded-full blur-[150px] opacity-20"></div>
      </div>

      <nav className="w-full flex justify-between items-center mb-12 z-10">
        <button onClick={() => navigate('/arcade')} className="flex items-center gap-2 text-gray-400 hover:text-white font-bold">
          <FaArrowLeft /> Exit
        </button>
        <span className="bg-pink-500/20 text-pink-500 px-4 py-1 rounded-full text-xs font-bold uppercase">Icebreaker</span>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-lg relative z-10">
        <h1 className="text-3xl font-extrabold mb-8 text-center">Never Have I Ever...</h1>
        
        <div className="w-full aspect-[4/5] relative" onClick={nextCard}>
           <AnimatePresence mode='wait'>
             <motion.div
               key={index}
               initial={{ x: 300, opacity: 0, rotate: 10 }}
               animate={{ x: 0, opacity: 1, rotate: 0 }}
               exit={{ x: -300, opacity: 0, rotate: -10 }}
               transition={{ type: 'spring', stiffness: 200, damping: 20 }}
               className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-[#333] rounded-[40px] p-8 flex flex-col items-center justify-center text-center shadow-2xl cursor-pointer hover:border-pink-500 transition-colors"
             >
                <FaHandPaper className="text-6xl text-pink-500 mb-6 opacity-80"/>
                <p className="text-2xl font-bold leading-relaxed">
                  "{QUESTIONS[index]}"
                </p>
                <p className="text-gray-500 text-sm mt-8 animate-pulse">Tap for next</p>
             </motion.div>
           </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default NeverHaveIEverPage;