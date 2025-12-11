import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaUserPlus, FaPlay, FaWineBottle, 
  FaQuestionCircle, FaBolt, FaCheck, FaTimes, FaTrophy 
} from 'react-icons/fa';

// --- GAME CONTENT DATA ---
// NOTE: Ensure these are fun, safe, and appropriate for all audiences.
const TRUTHS = [
  "What is the most embarrassing thing you've ever done?",
  "Have you ever lied to get out of a bad date?",
  "What is a secret you've never told anyone?",
  "Who is your secret crush?",
  "What is your biggest fear?",
  "What is the last thing you searched for on your phone?",
  "Have you ever peed in a pool?",
  "If you could be invisible for a day, what would you do?",
  "What is the grossest food you've ever eaten?",
  "Who in this room would you survive a zombie apocalypse with?"
];

const DARES = [
  "Do your best impression of a chicken.",
  "Speak in a fake accent for the next 3 rounds.",
  "Let the group pose you and take a photo.",
  "Do 20 squats while shouting 'I love DareHub'.",
  "Eat a spoonful of mustard/ketchup.",
  "Text your crush 'I like pineapples' with no context.",
  "Walk like a crab across the room.",
  "Let someone draw a mustache on your face with a marker.",
  "Hold an ice cube in your hand until it melts.",
  "Sing the chorus of your favorite song loudly."
];

const GamePage = () => {
  const navigate = useNavigate();
  
  // Game State
  const [gameState, setGameState] = useState('setup'); // setup, spinning, choosing, challenge, result
  const [players, setPlayers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState({ type: '', text: '' });

  // --- PHASE 1: SETUP ---
  const addPlayer = () => {
    if (inputValue.trim() !== '') {
      setPlayers([...players, { id: Date.now(), name: inputValue, score: 0 }]);
      setInputValue('');
    }
  };

  const startGame = () => {
    if (players.length < 2) return alert("You need at least 2 players!");
    setGameState('spinning');
  };

  // --- PHASE 2: SPINNING ---
  const spinBottle = () => {
    // 1. Calculate random rotation (min 3 full spins + random offset)
    const newRotation = rotation + 1080 + Math.floor(Math.random() * 360);
    setRotation(newRotation);

    // 2. Wait for animation to finish (3 seconds) then pick player
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * players.length);
      setCurrentPlayer(players[randomIndex]);
      setGameState('choosing');
    }, 3000);
  };

  // --- PHASE 3: CHOOSING TRUTH OR DARE ---
  const pickType = (type) => {
    const pool = type === 'Truth' ? TRUTHS : DARES;
    const randomText = pool[Math.floor(Math.random() * pool.length)];
    setCurrentChallenge({ type, text: randomText });
    setGameState('challenge');
  };

  // --- PHASE 4: SCORING ---
  const handleResult = (success) => {
    if (success) {
      setPlayers(players.map(p => 
        p.id === currentPlayer.id ? { ...p, score: p.score + 10 } : p
      ));
    } else {
      setPlayers(players.map(p => 
        p.id === currentPlayer.id ? { ...p, score: Math.max(0, p.score - 5) } : p
      ));
    }
    setGameState('spinning'); // Go back to spin
  };

  return (
    <div className="min-h-screen w-full bg-[#1d1c1c] text-white font-sans overflow-hidden relative selection:bg-[#7b00ff]">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#7b00ff] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#2af142] rounded-full blur-[150px] opacity-10"></div>
      </div>

      {/* Nav */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-[#979696] hover:text-white transition-colors font-bold">
          <FaArrowLeft /> Exit Game
        </button>
        <div className="flex items-center gap-2">
            <span className="bg-[#7b00ff] px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">Game Room</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center p-4 relative z-10">

        <AnimatePresence mode='wait'>
          
          {/* --- VIEW: SETUP --- */}
          {gameState === 'setup' && (
            <motion.div 
              key="setup"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="w-full max-w-md bg-[#252525] p-8 rounded-3xl border border-[#333] shadow-2xl text-center"
            >
              <h1 className="text-3xl font-extrabold mb-2">Assemble the Squad</h1>
              <p className="text-[#979696] mb-8">Add friends to start the party.</p>

              <div className="flex gap-2 mb-6">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
                  placeholder="Enter player name..."
                  className="w-full bg-[#1e1e1e] border border-[#333] rounded-xl px-4 py-3 text-white focus:border-[#7b00ff] focus:outline-none transition-colors"
                />
                <button 
                  onClick={addPlayer}
                  className="bg-[#2a2a2a] hover:bg-[#7b00ff] text-white p-3 rounded-xl transition-colors"
                >
                  <FaUserPlus />
                </button>
              </div>

              {/* Player List */}
              <div className="flex flex-wrap gap-2 justify-center mb-8 min-h-[50px]">
                {players.length === 0 && <span className="text-sm text-gray-600 italic">No players added yet</span>}
                {players.map(p => (
                  <motion.span 
                    key={p.id} 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="bg-[#1e1e1e] border border-[#333] px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2"
                  >
                    {p.name}
                  </motion.span>
                ))}
              </div>

              <button 
                onClick={startGame}
                disabled={players.length < 2}
                className="w-full py-4 bg-gradient-to-r from-[#d627e6] to-[#7b00ff] rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(123,0,255,0.4)]"
              >
                Start Game <FaPlay className="inline ml-2 text-sm"/>
              </button>
            </motion.div>
          )}

          {/* --- VIEW: SPINNING --- */}
          {gameState === 'spinning' && (
             <motion.div 
               key="spinning"
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               className="flex flex-col items-center justify-center w-full"
             >
                {/* Scoreboard Mini */}
                <div className="absolute top-20 w-full flex justify-center gap-4 flex-wrap px-4">
                    {players.map(p => (
                        <div key={p.id} className="text-xs font-bold bg-[#1e1e1e] px-2 py-1 rounded border border-[#333]">
                            {p.name}: <span className="text-[#2af142]">{p.score}</span>
                        </div>
                    ))}
                </div>

                <div className="relative w-64 h-64 flex items-center justify-center mt-10">
                   {/* Bottle Graphic */}
                   <motion.div
                     animate={{ rotate: rotation }}
                     transition={{ duration: 3, ease: "circOut" }}
                     className="relative z-10 text-[#7b00ff] drop-shadow-[0_0_15px_rgba(123,0,255,0.6)]"
                   >
                     <FaWineBottle className="w-40 h-40" />
                   </motion.div>
                   
                   {/* Floor Decor */}
                   <div className="absolute w-64 h-64 rounded-full border-4 border-[#333] border-dashed opacity-50 animate-spin-slow"></div>
                </div>

                <h2 className="text-2xl font-bold mt-12 animate-pulse">Spinning...</h2>
                <button 
                  onClick={spinBottle}
                  className="mt-8 px-8 py-3 bg-[#2a2a2a] border border-[#333] rounded-full font-bold hover:bg-[#7b00ff] hover:text-white transition-all hover:scale-110"
                >
                  Spin Again
                </button>
             </motion.div>
          )}

          {/* --- VIEW: CHOOSING --- */}
          {gameState === 'choosing' && (
            <motion.div
              key="choosing"
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}
              className="text-center w-full max-w-lg"
            >
               <h3 className="text-[#979696] uppercase tracking-widest font-bold mb-2">It's Your Turn</h3>
               <h1 className="text-5xl font-extrabold text-white mb-12">{currentPlayer?.name}</h1>

               <div className="grid grid-cols-2 gap-6">
                 <button 
                   onClick={() => pickType('Truth')}
                   className="h-48 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                 >
                    <FaQuestionCircle className="text-5xl text-white/90"/>
                    <span className="text-2xl font-black text-white">TRUTH</span>
                 </button>
                 
                 <button 
                   onClick={() => pickType('Dare')}
                   className="h-48 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 flex flex-col items-center justify-center gap-4 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(244,63,94,0.4)]"
                 >
                    <FaBolt className="text-5xl text-white/90"/>
                    <span className="text-2xl font-black text-white">DARE</span>
                 </button>
               </div>
            </motion.div>
          )}

          {/* --- VIEW: CHALLENGE --- */}
          {gameState === 'challenge' && (
            <motion.div
              key="challenge"
              initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              className="w-full max-w-lg bg-[#252525] p-10 rounded-[40px] border border-[#333] shadow-2xl text-center relative overflow-hidden"
            >
               {/* Card Banner */}
               <div className={`absolute top-0 left-0 w-full h-2 ${currentChallenge.type === 'Truth' ? 'bg-cyan-500' : 'bg-rose-500'}`}></div>

               <span className={`inline-block px-4 py-1 rounded-full text-xs font-black uppercase mb-6 ${currentChallenge.type === 'Truth' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-rose-500/20 text-rose-400'}`}>
                 {currentChallenge.type}
               </span>

               <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-10 min-h-[100px] flex items-center justify-center">
                 "{currentChallenge.text}"
               </h2>

               <div className="grid grid-cols-2 gap-4">
                 <button 
                   onClick={() => handleResult(false)}
                   className="py-4 rounded-2xl bg-[#1e1e1e] text-red-400 font-bold border border-[#333] hover:bg-red-500/10 hover:border-red-500 transition-all flex items-center justify-center gap-2"
                 >
                   <FaTimes /> Forfeit (-5)
                 </button>
                 <button 
                   onClick={() => handleResult(true)}
                   className="py-4 rounded-2xl bg-[#2af142] text-black font-extrabold hover:bg-[#20bd33] hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg"
                 >
                   <FaCheck /> Done (+10)
                 </button>
               </div>
            </motion.div>
          )}

        </AnimatePresence>
        
        {/* Safety Disclaimer */}
        <p className="absolute bottom-6 text-[#444] text-xs text-center max-w-md">
          ⚠️ Play responsibly. Do not perform dares that are illegal, dangerous, or make you uncomfortable.
        </p>

      </div>
    </div>
  );
};

export default GamePage;