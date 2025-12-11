import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaUserPlus, FaCommentDots, FaCircle } from 'react-icons/fa';

const FRIENDS = [
  { id: 1, name: "Sarah Connor", username: "@sarah_c", status: "online", avatar: "girl.png" },
  { id: 2, name: "John Wick", username: "@baba_yaga", status: "offline", avatar: "boy.png" },
  { id: 3, name: "Tony Stark", username: "@iron_man", status: "online", avatar: "boy.png" },
];

const REQUESTS = [
  { id: 4, name: "Steve Rogers", username: "@cap_america", avatar: "boy.png" },
];

const FriendsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans p-6">
      <nav className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate('/')} className="p-2 bg-[#252525] rounded-full hover:bg-white hover:text-black transition-colors">
          <FaArrowLeft />
        </button>
        <h1 className="text-2xl font-extrabold">Social Hub</h1>
      </nav>

      {/* Search */}
      <div className="relative mb-8 max-w-2xl mx-auto">
         <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
         <input 
           type="text" 
           placeholder="Find users by username..." 
           className="w-full bg-[#252525] border border-[#333] rounded-full pl-10 pr-4 py-3 focus:border-[#7b00ff] outline-none text-white"
         />
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-[#333] mb-6 max-w-3xl mx-auto">
         {['All', 'Online', 'Requests'].map(tab => (
           <button 
             key={tab}
             onClick={() => setActiveTab(tab)}
             className={`pb-3 font-bold text-sm uppercase tracking-wide border-b-2 transition-colors ${activeTab === tab ? 'border-[#7b00ff] text-white' : 'border-transparent text-gray-500'}`}
           >
             {tab} {tab === 'Requests' && <span className="bg-red-500 text-white text-[10px] px-1.5 rounded-full ml-1">1</span>}
           </button>
         ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        
        {/* REQUESTS SECTION */}
        {activeTab === 'Requests' && REQUESTS.map(user => (
          <div key={user.id} className="bg-[#252525] p-4 rounded-xl flex items-center justify-between border border-[#333]">
             <div className="flex items-center gap-4">
               <img src={`/${user.avatar}`} className="w-12 h-12 rounded-full bg-[#111]" alt="avatar"/>
               <div>
                 <h3 className="font-bold">{user.name}</h3>
                 <p className="text-xs text-gray-500">{user.username}</p>
               </div>
             </div>
             <div className="flex gap-2">
               <button className="px-4 py-2 bg-[#7b00ff] rounded-lg font-bold text-sm">Accept</button>
               <button className="px-4 py-2 bg-[#333] rounded-lg font-bold text-sm text-gray-400">Ignore</button>
             </div>
          </div>
        ))}

        {/* FRIENDS LIST */}
        {(activeTab === 'All' || activeTab === 'Online') && FRIENDS.filter(f => activeTab === 'All' || f.status === 'online').map(friend => (
           <div key={friend.id} className="bg-[#1a1a1a] p-4 rounded-xl flex items-center justify-between group hover:bg-[#252525] transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                 <div className="relative">
                    <img src={`/${friend.avatar}`} className="w-12 h-12 rounded-full bg-[#111]" alt="avatar"/>
                    {friend.status === 'online' && <FaCircle className="absolute bottom-0 right-0 text-green-500 text-[10px] border-2 border-[#1a1a1a]" />}
                 </div>
                 <div>
                    <h3 className="font-bold text-lg">{friend.name}</h3>
                    <p className="text-xs text-gray-500">{friend.status === 'online' ? 'Active Now' : 'Offline'}</p>
                 </div>
              </div>
              <button className="p-3 bg-[#333] rounded-full text-[#7b00ff] hover:bg-[#7b00ff] hover:text-white transition-colors">
                 <FaCommentDots />
              </button>
           </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;