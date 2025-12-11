import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaEdit, FaCog, FaSignOutAlt, FaTrophy, 
  FaFire, FaClock, FaCheckCircle, FaCamera, FaMedal, FaTimes
} from 'react-icons/fa';

// --- MOCK DATA ---
const USER_DATA = {
  name: 'Alex "The Daredevil"',
  username: '@alex_dares',
  role: 'Legendary Creator',
  avatar: 'boy.png', // Ensure this exists in your public folder
  joinDate: 'March 2024',
  level: 12,
  xp: 8500,
  nextLevelXp: 10000,
  rank: '#42 Global',
  bio: 'Just here to embarrass myself and win points. 🌶️ Spice tolerance: Zero.',
  stats: {
    completed: 42,
    points: 3450,
    streak: 7,
    pending: 3
  }
};

const BADGES = [
  { id: 1, name: 'First Blood', icon: '🩸', desc: 'Completed 1st Dare', color: 'bg-red-500/20 text-red-500' },
  { id: 2, name: 'Spicy King', icon: '🌶️', desc: 'Ate the Green Chili', color: 'bg-green-500/20 text-green-500' },
  { id: 3, name: 'Social Star', icon: '🌟', desc: '100+ Views on Proof', color: 'bg-yellow-500/20 text-yellow-500' },
  { id: 4, name: 'Night Owl', icon: '🦉', desc: 'Uploaded at 3 AM', color: 'bg-indigo-500/20 text-indigo-500' },
  { id: 5, name: 'Risk Taker', icon: '⚡', desc: 'Did an Extreme Dare', color: 'bg-pink-500/20 text-pink-500' },
];

const RECORDS = [
  { id: 1, dare: 'Eat a Spoon of Green Chili', status: 'Approved', points: 30, date: '2 days ago', image: 'greenchili.png' },
  { id: 2, dare: 'Laugh loudly in public', status: 'Pending', points: 40, date: 'Yesterday', image: 'laughing.png' },
  { id: 3, dare: 'Compliment a stranger', status: 'Approved', points: 25, date: '1 week ago', image: 'commenting.png' },
  { id: 4, dare: 'Sing Happy Birthday', status: 'Rejected', points: 0, date: '2 weeks ago', image: 'birthday.png', note: 'Audio was unclear' },
];

const ProfilePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('records'); // records, badges, settings
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Calculate Progress Bar Width
  const progressPercent = (USER_DATA.xp / USER_DATA.nextLevelXp) * 100;

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans selection:bg-[#7b00ff]">
      
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-40 bg-[#1d1c1c]/90 backdrop-blur-md border-b border-[#333] px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-[#979696] hover:text-white transition-colors font-bold">
          <FaArrowLeft /> Back
        </button>
        <div className="font-extrabold text-xl tracking-tight">My Profile</div>
        <button className="text-[#979696] hover:text-red-500 transition-colors">
          <FaSignOutAlt size={20} />
        </button>
      </nav>

      <main className="max-w-6xl mx-auto p-4 lg:p-8 pb-20">

        {/* --- PROFILE HEADER CARD --- */}
        <div className="relative bg-[#252525] rounded-[30px] p-6 lg:p-10 border border-[#333] shadow-2xl overflow-hidden mb-8">
            {/* Decorative Background Blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7b00ff] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Avatar Section */}
                <div className="relative group">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full p-1 bg-gradient-to-br from-[#7b00ff] to-[#d627e6]">
                        <img src={`/${USER_DATA.avatar}`} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-[#1d1c1c]" />
                    </div>
                    <button onClick={() => setIsEditOpen(true)} className="absolute bottom-2 right-2 bg-[#2a2a2a] p-2 rounded-full border border-[#555] text-white hover:bg-[#7b00ff] transition-colors shadow-lg">
                        <FaCamera size={14} />
                    </button>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#1d1c1c] border border-[#333] px-3 py-1 rounded-full text-xs font-bold text-yellow-400 whitespace-nowrap shadow-md">
                        Lvl {USER_DATA.level}
                    </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                        <h1 className="text-3xl font-extrabold text-white">{USER_DATA.name}</h1>
                        <span className="px-3 py-1 bg-[#7b00ff]/20 text-[#7b00ff] border border-[#7b00ff]/30 rounded-lg text-xs font-bold uppercase tracking-wider">
                            {USER_DATA.role}
                        </span>
                    </div>
                    <p className="text-gray-500 font-medium mb-4">{USER_DATA.username} • Joined {USER_DATA.joinDate}</p>
                    <p className="text-[#c4c4c4] max-w-xl leading-relaxed mb-6">{USER_DATA.bio}</p>

                    {/* Level Progress */}
                    <div className="w-full max-w-md bg-[#1a1a1a] h-3 rounded-full overflow-hidden mb-2 relative group cursor-help">
                        <div 
                           className="h-full bg-gradient-to-r from-[#7b00ff] to-[#d627e6] rounded-full relative" 
                           style={{ width: `${progressPercent}%` }}
                        >
                            <div className="absolute top-0 right-0 w-full h-full bg-white/20 animate-pulse"></div>
                        </div>
                    </div>
                    <div className="flex justify-between max-w-md text-xs font-bold text-gray-500 uppercase tracking-wider">
                        <span>{USER_DATA.xp} XP</span>
                        <span>{USER_DATA.nextLevelXp} XP (Next Lvl)</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                    <button 
                        onClick={() => setIsEditOpen(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-[#333] hover:bg-[#444] rounded-xl font-bold transition-all"
                    >
                        <FaEdit /> Edit Profile
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 bg-[#1d1c1c] border border-[#333] hover:bg-[#252525] rounded-xl font-bold transition-all text-gray-400 hover:text-white">
                        <FaCog /> Settings
                    </button>
                </div>
            </div>
        </div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
                { label: 'Completed', val: USER_DATA.stats.completed, icon: FaCheckCircle, color: 'text-green-400' },
                { label: 'Total Points', val: USER_DATA.stats.points, icon: FaTrophy, color: 'text-yellow-400' },
                { label: 'Pending', val: USER_DATA.stats.pending, icon: FaClock, color: 'text-orange-400' },
                { label: 'Day Streak', val: USER_DATA.stats.streak, icon: FaFire, color: 'text-red-500' },
            ].map((stat, idx) => (
                <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-[#252525] p-6 rounded-2xl border border-[#333] flex flex-col items-center justify-center gap-2"
                >
                    <stat.icon className={`text-2xl ${stat.color}`} />
                    <span className="text-3xl font-extrabold text-white">{stat.val}</span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</span>
                </motion.div>
            ))}
        </div>

        {/* --- TABS --- */}
        <div className="flex gap-6 border-b border-[#333] mb-8 overflow-x-auto">
            {['records', 'badges'].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest transition-colors relative ${
                        activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                    }`}
                >
                    {tab === 'records' ? 'Activity Records' : 'Badges & Achievements'}
                    {activeTab === tab && (
                        <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 w-full h-1 bg-[#7b00ff] rounded-t-full" />
                    )}
                </button>
            ))}
        </div>

        {/* --- TAB CONTENT --- */}
        <AnimatePresence mode='wait'>
            
            {/* RECORD LIST */}
            {activeTab === 'records' && (
                <motion.div 
                    key="records" 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="grid gap-4"
                >
                    {RECORDS.map((record) => (
                        <div key={record.id} className="bg-[#222] p-4 rounded-2xl border border-[#333] flex items-center gap-4 hover:border-[#555] transition-colors group">
                            {/* Record Image */}
                            <div className="w-16 h-16 rounded-xl bg-[#111] overflow-hidden flex-shrink-0">
                                <img src={`/${record.image}`} alt={record.dare} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                                <h3 className="font-bold text-white text-lg">{record.dare}</h3>
                                <p className="text-gray-500 text-sm flex items-center gap-2">
                                    <FaClock size={12}/> {record.date}
                                </p>
                            </div>

                            {/* Status Pill */}
                            <div className="text-right">
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-1 ${
                                    record.status === 'Approved' ? 'bg-green-500/10 text-green-500' : 
                                    record.status === 'Pending' ? 'bg-orange-500/10 text-orange-500' : 
                                    'bg-red-500/10 text-red-500'
                                }`}>
                                    {record.status}
                                </span>
                                <div className={`font-bold ${record.status === 'Rejected' ? 'text-gray-600 line-through' : 'text-yellow-400'}`}>
                                    +{record.points} XP
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}

            {/* BADGES GRID */}
            {activeTab === 'badges' && (
                <motion.div 
                    key="badges" 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                    {BADGES.map((badge) => (
                        <div key={badge.id} className="bg-[#222] p-6 rounded-2xl border border-[#333] flex flex-col items-center text-center gap-3 hover:scale-105 transition-transform cursor-pointer">
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${badge.color}`}>
                                {badge.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-white">{badge.name}</h4>
                                <p className="text-xs text-gray-500 mt-1">{badge.desc}</p>
                            </div>
                        </div>
                    ))}
                    {/* Locked Badge Example */}
                    <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-[#333] border-dashed flex flex-col items-center text-center gap-3 opacity-50 grayscale">
                         <div className="w-16 h-16 rounded-full bg-[#111] flex items-center justify-center text-3xl text-gray-600">
                             <FaTrophy />
                         </div>
                         <div>
                             <h4 className="font-bold text-gray-400">???</h4>
                             <p className="text-xs text-gray-600 mt-1">Keep playing to unlock</p>
                         </div>
                    </div>
                </motion.div>
            )}

        </AnimatePresence>

      </main>

      {/* --- EDIT PROFILE MODAL --- */}
      <AnimatePresence>
        {isEditOpen && (
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
                <motion.div 
                    initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                    className="bg-[#1e1e1e] w-full max-w-lg rounded-3xl border border-[#333] p-8 relative shadow-2xl"
                >
                    <button onClick={() => setIsEditOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white">
                        <FaTimes size={20} />
                    </button>
                    
                    <h2 className="text-2xl font-bold text-white mb-6">Edit Profile</h2>
                    
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Display Name</label>
                            <input type="text" defaultValue={USER_DATA.name} className="w-full bg-[#2a2a2a] border border-[#333] rounded-xl px-4 py-3 text-white focus:border-[#7b00ff] outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Bio</label>
                            <textarea defaultValue={USER_DATA.bio} rows="3" className="w-full bg-[#2a2a2a] border border-[#333] rounded-xl px-4 py-3 text-white focus:border-[#7b00ff] outline-none resize-none"></textarea>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Change Avatar URL</label>
                             <div className="flex gap-2">
                                <input type="text" placeholder="https://..." className="w-full bg-[#2a2a2a] border border-[#333] rounded-xl px-4 py-3 text-white focus:border-[#7b00ff] outline-none" />
                                <button className="bg-[#333] px-4 rounded-xl hover:bg-[#444] text-white">Upload</button>
                             </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button onClick={() => setIsEditOpen(false)} className="flex-1 py-3 bg-[#2a2a2a] rounded-xl font-bold text-gray-300 hover:text-white hover:bg-[#333]">Cancel</button>
                        <button onClick={() => setIsEditOpen(false)} className="flex-1 py-3 bg-[#7b00ff] rounded-xl font-bold text-white hover:bg-[#6200cc] shadow-lg">Save Changes</button>
                    </div>

                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ProfilePage;