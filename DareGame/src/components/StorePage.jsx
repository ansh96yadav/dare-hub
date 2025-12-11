import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCoins, FaCrown, FaMagic, FaUserTag, FaShoppingCart } from 'react-icons/fa';

const ITEMS = [
  { id: 1, name: "Neon Frame", price: 500, type: "Frame", icon: FaUserTag, color: "text-pink-500", desc: "A glowing pink border for your avatar." },
  { id: 2, name: "Dare Skip Card", price: 1000, type: "Power-up", icon: FaMagic, color: "text-purple-500", desc: "Skip one dare without losing points." },
  { id: 3, name: "Gold Title", price: 2500, type: "Title", icon: FaCrown, color: "text-yellow-400", desc: "Unlock the 'Legend' title on profile." },
  { id: 4, name: "Mystery Box", price: 300, type: "Loot", icon: FaShoppingCart, color: "text-blue-400", desc: "Contains random XP or badges." },
];

const StorePage = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(3450); // Mock Balance
  const [purchasing, setPurchasing] = useState(null);

  const handleBuy = (item) => {
    if (balance >= item.price) {
      setPurchasing(item.id);
      setTimeout(() => {
        setBalance(prev => prev - item.price);
        setPurchasing(null);
        alert(`Successfully bought ${item.name}!`);
      }, 1000);
    } else {
      alert("Not enough points!");
    }
  };

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans p-6">
      
      {/* Header */}
      <nav className="flex justify-between items-center mb-8 sticky top-0 bg-[#1d1c1c]/90 backdrop-blur-md z-20 py-4 border-b border-[#333]">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-white font-bold">
          <FaArrowLeft /> Back
        </button>
        <div className="flex items-center gap-2 bg-[#252525] px-4 py-2 rounded-full border border-[#333]">
           <FaCoins className="text-yellow-400" />
           <span className="font-bold">{balance} Coins</span>
        </div>
      </nav>

      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Point Shop</h1>
        <p className="text-gray-400">Spend your points on exclusive rewards.</p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ITEMS.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -5 }}
            className="bg-[#252525] p-6 rounded-3xl border border-[#333] hover:border-[#7b00ff] transition-colors relative overflow-hidden group"
          >
             <div className={`w-16 h-16 rounded-2xl bg-[#1a1a1a] flex items-center justify-center text-3xl mb-4 ${item.color}`}>
                <item.icon />
             </div>
             <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 block">{item.type}</span>
             <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
             <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{item.desc}</p>
             
             <button 
               onClick={() => handleBuy(item)}
               disabled={purchasing === item.id}
               className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                 balance >= item.price 
                 ? 'bg-white text-black hover:bg-[#7b00ff] hover:text-white' 
                 : 'bg-[#333] text-gray-500 cursor-not-allowed'
               }`}
             >
               {purchasing === item.id ? (
                 "Processing..."
               ) : (
                 <><FaCoins className="text-yellow-500" /> {item.price}</>
               )}
             </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;