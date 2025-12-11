import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowLeft, FaClock, FaFire, FaCamera, FaUpload, 
  FaCheckCircle, FaExclamationTriangle, FaShareAlt 
} from 'react-icons/fa';
import { IoMdRibbon } from 'react-icons/io';

// --- SHARED DATA (In a real app, fetch this from an API or separate file) ---
const daresData = [
  {
    id: 1, // Added IDs for routing
    dare: 'Eat a Spoon of Green Chili 🌶️',
    category: 'Funny',
    categoryBg: 'bg-[#7e1bef]',
    points: 30,
    difficulty: 'Medium',
    timeLimit: '10 Mins',
    description: 'Take a small spoon of green chili, eat it, and record your reaction without drinking water for 30 seconds.',
    image: 'greenchili.png', 
    rules: [
      'Must swallow the chili completely.',
      'No water for 30 seconds after eating.',
      'Face must be clearly visible in the video.',
      'Do not attempt if you have allergies.'
    ]
  },
  {
    id: 2,
    dare: 'Laugh loudly for no reason 😂',
    category: 'Extreme',
    categoryBg: 'bg-[#ed2bd0]',
    points: 40,
    difficulty: 'Easy',
    timeLimit: '5 Mins',
    description: 'Go to a public place, laugh loudly for no reason, stop suddenly, and record the reactions of people around you.',
    image: 'laughing.png',
    rules: [
      'Must be in a public area with people.',
      'Laugh must be genuine and loud.',
      'Capture at least 3 peoples reactions.',
      'Be respectful if asked to stop.'
    ]
  },
  // ... Add IDs (3, 4, 5, 6) to the rest of your daresData array here
  {
    id: 3,
    dare: 'Compliment a random object 📦',
    category: 'Silly',
    categoryBg: 'bg-[#2af142]',
    points: 25,
    difficulty: 'Easy',
    timeLimit: '15 Mins',
    description: 'Walk up to a random object (e.g., a dustbin or lamp post) and give it a heartfelt compliment while people watch.',
    image: 'commenting.png',
    rules: [
        'Speak loud enough for others to hear.',
        'Keep a straight face.',
        'Must be at least a 10-second compliment.'
    ]
  }
];

const DareDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dare, setDare] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, active, uploading, completed
  const [timer, setTimer] = useState(0);

  // Load Dare Data
  useEffect(() => {
    const foundDare = daresData.find(d => d.id === parseInt(id));
    if (foundDare) {
      setDare(foundDare);
    } else {
      // Handle Not Found
      // navigate('/dares'); 
    }
  }, [id, navigate]);

  // Simple Timer Logic
  useEffect(() => {
    let interval;
    if (status === 'active') {
      interval = setInterval(() => setTimer(t => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [status]);

  if (!dare) return <div className="min-h-screen bg-[#232222] flex items-center justify-center text-white">Loading Dare...</div>;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans selection:bg-[#7b00ff]">
      
      {/* --- NAVBAR (Simple Version) --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#1d1c1c]/90 backdrop-blur-md border-b border-[#333] px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-[#979696] hover:text-white transition-colors">
          <FaArrowLeft /> Back
        </button>
        <div className='flex items-center gap-2'>
            <img src='/DareHubb.png' className='w-8 rounded-full' alt="logo"/>
            <span className="font-bold text-lg hidden sm:block">Dare Hub</span>
        </div>
        <button className="text-[#979696] hover:text-[#7b00ff]">
          <FaShareAlt size={20}/>
        </button>
      </nav>

      {/* --- CONTENT --- */}
      <main className="pt-24 pb-10 px-4 lg:px-10 max-w-7xl mx-auto">
        
        {/* HERO HEADER */}
        <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-10 border border-[#333] shadow-2xl">
            {/* Background Image with Blur */}
            <img src={`/${dare.image}`} alt={dare.dare} className="absolute inset-0 w-full h-full object-cover blur-sm opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1c1c] via-transparent to-black/60" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white mb-3 inline-block ${dare.categoryBg}`}>
                        {dare.category}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 shadow-black drop-shadow-md">
                        {dare.dare}
                    </h1>
                </div>
                <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                    <div className="text-right">
                        <p className="text-xs text-gray-300 font-bold uppercase">Reward</p>
                        <p className="text-2xl font-bold text-yellow-400">{dare.points} Pts</p>
                    </div>
                    <IoMdRibbon className="text-4xl text-yellow-400" />
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COL: DETAILS & RULES */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Description Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="bg-[#252525] p-8 rounded-3xl border border-[#333]"
                >
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <FaFire className="text-[#d627e6]" /> Challenge Details
                    </h2>
                    <p className="text-[#c4c4c4] text-lg leading-relaxed mb-6">
                        {dare.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#1e1e1e] p-4 rounded-xl border border-[#333]">
                            <p className="text-gray-500 text-xs font-bold uppercase">Difficulty</p>
                            <p className="text-white font-bold">{dare.difficulty || 'Medium'}</p>
                        </div>
                        <div className="bg-[#1e1e1e] p-4 rounded-xl border border-[#333]">
                            <p className="text-gray-500 text-xs font-bold uppercase">Time Limit</p>
                            <p className="text-white font-bold">{dare.timeLimit || 'Unlimited'}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Rules Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="bg-[#252525] p-8 rounded-3xl border border-[#333]"
                >
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <FaExclamationTriangle className="text-yellow-500" /> Rules & Safety
                    </h2>
                    <ul className="space-y-4">
                        {dare.rules && dare.rules.map((rule, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[#c4c4c4]">
                                <div className="mt-1 min-w-[20px] h-5 rounded-full bg-[#333] flex items-center justify-center text-xs font-bold text-[#7b00ff]">
                                    {idx + 1}
                                </div>
                                <span>{rule}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 p-4 bg-red-900/20 border border-red-900/50 rounded-xl">
                        <p className="text-red-400 text-sm font-bold text-center">
                            ⚠️ Warning: Do not perform dares that are illegal, dangerous, or cause harm to yourself or others.
                        </p>
                    </div>
                </motion.div>

            </div>

            {/* RIGHT COL: ACTION CARD */}
            <div className="lg:col-span-1">
                <motion.div 
                     initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                     className="bg-[#1a1a1a] p-6 rounded-3xl border border-[#333] sticky top-24 shadow-2xl"
                >
                    <div className="text-center mb-6">
                        <p className="text-gray-400 text-sm font-bold uppercase mb-2">Current Status</p>
                        <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold border ${
                            status === 'idle' ? 'border-gray-500 text-gray-500' :
                            status === 'active' ? 'border-[#7b00ff] text-[#7b00ff] animate-pulse' :
                            status === 'completed' ? 'border-green-500 text-green-500' : 'text-white'
                        }`}>
                            {status === 'idle' ? 'Not Started' : status === 'active' ? 'In Progress' : status === 'uploading' ? 'Submitting' : 'Completed'}
                        </div>
                    </div>

                    {/* DYNAMIC ACTION AREA */}
                    <AnimatePresence mode='wait'>
                        
                        {/* STATE 1: IDLE */}
                        {status === 'idle' && (
                            <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <button 
                                    onClick={() => setStatus('active')}
                                    className="w-full py-4 bg-[#7b00ff] hover:bg-[#6200cc] text-white rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(123,0,255,0.4)] transition-all transform hover:scale-105 mb-4"
                                >
                                    Accept Challenge
                                </button>
                                <button onClick={() => navigate(-1)} className="w-full py-4 bg-[#2a2a2a] hover:bg-[#333] text-gray-300 rounded-xl font-bold text-lg transition-colors">
                                    Maybe Later
                                </button>
                            </motion.div>
                        )}

                        {/* STATE 2: ACTIVE (TIMER) */}
                        {status === 'active' && (
                            <motion.div key="active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                                <div className="text-6xl font-mono font-bold text-white mb-2 tabular-nums">
                                    {formatTime(timer)}
                                </div>
                                <p className="text-gray-500 text-sm mb-6">Recording time...</p>
                                
                                <button 
                                    onClick={() => setStatus('uploading')}
                                    className="w-full py-4 bg-gradient-to-r from-[#d627e6] to-[#7b00ff] text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 mb-4 hover:opacity-90 transition-opacity"
                                >
                                    <FaCamera /> I Did It! Upload Proof
                                </button>
                                <button 
                                    onClick={() => { setStatus('idle'); setTimer(0); }}
                                    className="text-red-500 text-sm font-bold hover:underline"
                                >
                                    Give Up
                                </button>
                            </motion.div>
                        )}

                        {/* STATE 3: UPLOAD */}
                        {status === 'uploading' && (
                            <motion.div key="uploading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
                                <div className="border-2 border-dashed border-[#444] rounded-2xl p-8 mb-4 hover:border-[#7b00ff] transition-colors cursor-pointer bg-[#222]">
                                    <FaUpload className="text-4xl text-[#666] mx-auto mb-3" />
                                    <p className="text-gray-300 font-bold">Click to upload video/image</p>
                                    <p className="text-gray-600 text-xs mt-2">Max size: 50MB</p>
                                </div>
                                <button 
                                    onClick={() => setStatus('completed')}
                                    className="w-full py-4 bg-[#2af142] text-black rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(42,241,66,0.3)] transition-transform hover:scale-105"
                                >
                                    Submit Proof
                                </button>
                            </motion.div>
                        )}

                        {/* STATE 4: COMPLETED */}
                        {status === 'completed' && (
                            <motion.div key="completed" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-6">
                                <FaCheckCircle className="text-6xl text-[#2af142] mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">Dare Completed!</h3>
                                <p className="text-gray-400 mb-6">Your proof has been submitted for review. Points will be added shortly.</p>
                                <button 
                                    onClick={() => navigate('/dares')}
                                    className="w-full py-3 bg-[#2a2a2a] text-white rounded-xl font-bold hover:bg-[#333]"
                                >
                                    Find New Dare
                                </button>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </motion.div>
            </div>

        </div>

      </main>
    </div>
  );
};

export default DareDetailsPage;