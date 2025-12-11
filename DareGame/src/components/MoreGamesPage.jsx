import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaSearch, FaGamepad, FaHandPaper, FaBalanceScale, 
  FaUsers, FaFire, FaPuzzlePiece, FaTheaterMasks, FaDice, FaRocket 
} from 'react-icons/fa';

// --- GAME DATA ---
const GAMES = [
  {
    id: 1,
    title: "Truth or Dare",
    description: "The classic bottle-spinning game. Reveal secrets or do crazy challenges.",
    category: "Classic",
    players: "2+",
    icon: FaDice,
    color: "from-purple-500 to-indigo-500",
    isNew: false,
    link: "/game" // Links to the Truth/Dare page we made earlier
  },
  {
    id: 2,
    title: "Never Have I Ever",
    description: "Raise your hand if you've done it! Find out who is the wildest in the group.",
    category: "Icebreaker",
    players: "3+",
    icon: FaHandPaper,
    color: "from-pink-500 to-rose-500",
    isNew: true,
    link: "/game/nhie"
  },
  {
    id: 3,
    title: "Would You Rather",
    description: "Two difficult choices. One decision. Which path will you choose?",
    category: "Thinking",
    players: "2+",
    icon: FaBalanceScale,
    color: "from-blue-500 to-cyan-500",
    isNew: false,
    link: "/game/wyr"
  },
  {
    id: 4,
    title: "Most Likely To",
    description: "Vote on who is most likely to rob a bank or become a billionaire.",
    category: "Voting",
    players: "4+",
    icon: FaUsers,
    color: "from-green-500 to-emerald-500",
    isNew: true,
    link: "/game/likely"
  },
  {
    id: 5,
    title: "Rapid Fire",
    description: "Answer fast! You have 5 seconds to name 3 things in a category.",
    category: "Speed",
    players: "2+",
    icon: FaFire,
    color: "from-orange-500 to-red-500",
    isNew: false,
    link: "/game/rapid-fire"
  },
  {
    id: 6,
    title: "Dumb Charades",
    description: "Act it out without speaking. Can your friends guess the movie?",
    category: "Acting",
    players: "4+",
    icon: FaTheaterMasks,
    color: "from-yellow-400 to-orange-400",
    isNew: false,
    link: "/game/charades"
  },
];

const CATEGORIES = ["All", "Classic", "Icebreaker", "Voting", "Speed"];

const MoreGamesPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // Filter Logic
  const filteredGames = GAMES.filter(game => {
    const matchesCategory = filter === "All" || game.category === filter;
    const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans selection:bg-[#7b00ff]">
      
      {/* --- BACKGROUND GLOW --- */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7b00ff] opacity-10 blur-[150px] rounded-full"></div>
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2af142] opacity-5 blur-[150px] rounded-full"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-[#1d1c1c]/90 backdrop-blur-md border-b border-[#333] px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-[#979696] hover:text-white transition-colors font-bold group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>
        <div className="flex items-center gap-2">
            <FaGamepad className="text-[#7b00ff] text-xl" />
            <span className="font-extrabold text-xl tracking-tight hidden sm:block">Arcade Zone</span>
        </div>
        <div className="w-24"></div> {/* Spacer */}
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        
        {/* --- HERO HEADER --- */}
        <div className="text-center mb-12">
            <motion.div
               initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
               className="inline-block"
            >
                <span className="bg-[#7b00ff]/20 text-[#7b00ff] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block border border-[#7b00ff]/30">
                    More Fun
                </span>
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-extrabold text-white mb-4"
            >
                Level Up The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d627e6] to-[#7b00ff]">Party</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                className="text-[#979696] max-w-2xl mx-auto text-lg"
            >
                Discover our collection of icebreakers, brain teasers, and wild challenges. 
                Pick a game and start playing instantly.
            </motion.p>
        </div>

        {/* --- SEARCH & FILTER --- */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-5 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all border ${
                            filter === cat 
                            ? 'bg-white text-black border-white' 
                            : 'bg-[#252525] text-gray-400 border-[#333] hover:border-white hover:text-white'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                    type="text" 
                    placeholder="Search games..." 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-[#252525] border border-[#333] rounded-full pl-10 pr-4 py-3 text-white focus:border-[#7b00ff] outline-none"
                />
            </div>
        </div>

        {/* --- GAMES GRID --- */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <AnimatePresence>
                {filteredGames.map((game) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        key={game.id}
                        className="group relative bg-[#252525] rounded-[30px] border border-[#333] overflow-hidden hover:border-[#7b00ff] transition-colors duration-300"
                    >
                        {/* New Badge */}
                        {game.isNew && (
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                                NEW
                            </div>
                        )}

                        <div className="p-8 flex flex-col h-full">
                            {/* Icon Box */}
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center text-3xl text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                                <game.icon />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                            <p className="text-[#979696] text-sm mb-6 flex-grow leading-relaxed">
                                {game.description}
                            </p>

                            {/* Tags */}
                            <div className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-wide mb-6">
                                <span className="flex items-center gap-1"><FaUsers /> {game.players}</span>
                                <span>•</span>
                                <span>{game.category}</span>
                            </div>

                            {/* Action */}
                            <button 
                                onClick={() => game.link !== "#" && navigate(game.link)}
                                className={`w-full py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                                    game.link !== "#" 
                                    ? 'bg-[#333] hover:bg-white hover:text-black cursor-pointer' 
                                    : 'bg-[#1a1a1a] text-gray-600 cursor-not-allowed'
                                }`}
                            >
                                {game.link !== "#" ? (
                                    <>Play Now <FaRocket /></>
                                ) : (
                                    <>Coming Soon</>
                                )}
                            </button>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>

        {filteredGames.length === 0 && (
            <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No games found matching your search.</p>
                <button onClick={() => {setFilter('All'); setSearch('')}} className="mt-4 text-[#7b00ff] font-bold hover:underline">
                    Clear Filters
                </button>
            </div>
        )}

        {/* --- CTA FOOTER --- */}
        <div className="mt-20 bg-gradient-to-r from-[#1d1c1c] via-[#2a2a2a] to-[#1d1c1c] rounded-3xl p-10 text-center border border-[#333] relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7b00ff] via-[#d627e6] to-[#7b00ff]"></div>
             <h2 className="text-2xl font-bold text-white mb-2">Have a Game Idea?</h2>
             <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                 We are always looking for new crazy party games. Submit your idea and if we build it, you get a special badge!
             </p>
             <button className="px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform">
                 Submit Suggestion
             </button>
        </div>

      </main>
    </div>
  );
};

export default MoreGamesPage;