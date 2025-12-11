import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCrown, FaUserFriends, FaGlobeAmericas } from 'react-icons/fa';

const USERS = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `DareDevil_${i + 1}`,
  points: 5000 - (i * 150),
  avatar: i % 2 === 0 ? 'boy.png' : 'girl.png'
}));

const LeaderboardPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState('Global');

  const topThree = USERS.slice(0, 3);
  const restUsers = USERS.slice(3);

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans">
      
      {/* Header */}
      <div className="bg-[#252525] pb-10 rounded-b-[40px] shadow-2xl border-b border-[#333] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#7b00ff] opacity-5 pointer-events-none"></div>
        
        <nav className="p-6 flex justify-between items-center relative z-10">
            <button onClick={() => navigate('/')} className="text-gray-400 hover:text-white"><FaArrowLeft /></button>
            <h1 className="font-extrabold text-xl">Leaderboard</h1>
            <div className="w-4"></div>
        </nav>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 relative z-10">
            {['Global', 'Friends'].map((t) => (
                <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all ${
                        tab === t ? 'bg-[#7b00ff] text-white shadow-lg' : 'bg-[#1a1a1a] text-gray-500'
                    }`}
                >
                    {t === 'Global' ? <FaGlobeAmericas /> : <FaUserFriends />} {t}
                </button>
            ))}
        </div>

        {/* PODIUM */}
        <div className="flex justify-center items-end gap-4 px-4 relative z-10">
            {/* 2nd Place */}
            <div className="flex flex-col items-center">
                <img src={`/${topThree[1].avatar}`} className="w-16 h-16 rounded-full border-4 border-gray-400 mb-2" />
                <div className="text-sm font-bold">{topThree[1].name}</div>
                <div className="text-xs text-[#7b00ff] font-bold">{topThree[1].points} pts</div>
                <div className="w-20 h-24 bg-[#2a2a2a] rounded-t-lg mt-2 flex items-center justify-center border-t-4 border-gray-400">
                    <span className="text-2xl font-black text-gray-500">2</span>
                </div>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center">
                <FaCrown className="text-yellow-400 text-2xl mb-1 animate-bounce" />
                <img src={`/${topThree[0].avatar}`} className="w-24 h-24 rounded-full border-4 border-yellow-400 mb-2 shadow-[0_0_20px_rgba(250,204,21,0.5)]" />
                <div className="text-lg font-bold">{topThree[0].name}</div>
                <div className="text-sm text-[#7b00ff] font-bold">{topThree[0].points} pts</div>
                <div className="w-24 h-32 bg-[#2a2a2a] rounded-t-lg mt-2 flex items-center justify-center border-t-4 border-yellow-400 bg-gradient-to-b from-[#2a2a2a] to-[#1d1c1c]">
                    <span className="text-4xl font-black text-yellow-500">1</span>
                </div>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center">
                <img src={`/${topThree[2].avatar}`} className="w-16 h-16 rounded-full border-4 border-orange-700 mb-2" />
                <div className="text-sm font-bold">{topThree[2].name}</div>
                <div className="text-xs text-[#7b00ff] font-bold">{topThree[2].points} pts</div>
                <div className="w-20 h-20 bg-[#2a2a2a] rounded-t-lg mt-2 flex items-center justify-center border-t-4 border-orange-700">
                    <span className="text-2xl font-black text-orange-800">3</span>
                </div>
            </div>
        </div>
      </div>

      {/* List */}
      <div className="max-w-3xl mx-auto px-4 py-6 space-y-2">
        {restUsers.map((user, index) => (
            <div key={user.id} className="bg-[#252525] p-4 rounded-xl flex items-center justify-between border border-[#333]">
                <div className="flex items-center gap-4">
                    <span className="text-gray-500 font-bold w-6">{index + 4}</span>
                    <img src={`/${user.avatar}`} className="w-10 h-10 rounded-full bg-[#111]" />
                    <span className="font-bold">{user.name}</span>
                </div>
                <span className="text-[#7b00ff] font-bold">{user.points} pts</span>
            </div>
        ))}
      </div>

    </div>
  );
};

export default LeaderboardPage;