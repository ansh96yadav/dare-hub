import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaFilter, FaStar, FaFire } from 'react-icons/fa';

const CATEGORIES = ["All", "Trending", "Funny", "Extreme", "Silly", "Social"];

const DARES = [
  // Mock data - in a real app, fetch from API
  { id: 1, title: 'Eat a Spoon of Green Chili', category: 'Funny', points: 30, image: 'greenchili.png' },
  { id: 2, title: 'Laugh loudly in public', category: 'Extreme', points: 40, image: 'laughing.png' },
  { id: 3, title: 'Compliment a stranger', category: 'Silly', points: 25, image: 'commenting.png' },
  { id: 4, title: 'Wear socks on hands', category: 'Funny', points: 20, image: 'socks.png' },
  { id: 5, title: 'Do 50 Pushups', category: 'Extreme', points: 50, image: 'pushups.png' },
  { id: 6, title: 'Sing in a crowded elevator', category: 'Social', points: 60, image: 'singing.png' },
];

const ExploreDaresPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredDares = DARES.filter(dare => {
    const matchesCategory = filter === "All" || dare.category === filter;
    const matchesSearch = dare.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans p-6 pb-20">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-8 sticky top-0 bg-[#1d1c1c]/90 backdrop-blur-md z-20 py-4 border-b border-[#333]">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white font-bold">
          <FaArrowLeft /> Back
        </button>
        <h1 className="text-xl font-extrabold">Explore Dares</h1>
        <button className="text-[#7b00ff]"><FaFilter /></button>
      </nav>

      {/* Search & Filter */}
      <div className="max-w-7xl mx-auto mb-10 space-y-6">
        <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
                type="text" 
                placeholder="Search for a challenge..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#252525] border border-[#333] rounded-2xl pl-10 pr-4 py-4 focus:border-[#7b00ff] outline-none text-white placeholder-gray-500"
            />
        </div>

        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
            {CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap transition-all border ${
                        filter === cat 
                        ? 'bg-[#7b00ff] text-white border-[#7b00ff]' 
                        : 'bg-[#1a1a1a] text-gray-400 border-[#333] hover:border-gray-500'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
            {filteredDares.map((dare) => (
                <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={dare.id}
                    className="bg-[#252525] rounded-3xl border border-[#333] overflow-hidden hover:border-[#7b00ff] transition-colors group cursor-pointer"
                    onClick={() => navigate(`/dare/${dare.id}`)}
                >
                    <div className="h-48 bg-[#111] relative overflow-hidden">
                        {/* Placeholder for image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#252525] to-transparent z-10"></div>
                        <img src={`/${dare.image}`} alt={dare.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold z-20 flex items-center gap-1 border border-white/10">
                            <FaStar className="text-yellow-400" /> {dare.points}
                        </span>
                    </div>
                    <div className="p-6">
                        <span className="text-xs font-bold text-[#7b00ff] uppercase tracking-wider">{dare.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-4 group-hover:text-[#d627e6] transition-colors">{dare.title}</h3>
                        <button className="w-full py-3 bg-[#333] rounded-xl font-bold text-sm hover:bg-[#7b00ff] hover:text-white transition-colors">
                            View Details
                        </button>
                    </div>
                </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {filteredDares.length === 0 && (
          <div className="text-center text-gray-500 mt-20">No dares found. Try a different search.</div>
      )}
    </div>
  );
};

export default ExploreDaresPage;