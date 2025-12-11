import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHeart, FaBolt, FaUserPlus, FaTrophy, FaTrash } from 'react-icons/fa';

const NOTIFICATIONS = [
  { id: 1, type: 'like', text: 'Sarah liked your "Green Chili" proof.', time: '2 mins ago', icon: FaHeart, color: 'text-red-500', bg: 'bg-red-500/10' },
  { id: 2, type: 'dare', text: 'John Wick challenged you to "Ice Bucket"!', time: '1 hour ago', icon: FaBolt, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { id: 3, type: 'follow', text: 'Tony Stark started following you.', time: '5 hours ago', icon: FaUserPlus, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { id: 4, type: 'system', text: 'You ranked up to Level 12!', time: '1 day ago', icon: FaTrophy, color: 'text-[#7b00ff]', bg: 'bg-[#7b00ff]/10' },
];

const NotificationsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans p-6">
       <div className="flex justify-between items-center mb-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-4">
             <button onClick={() => navigate('/')} className="p-2 bg-[#252525] rounded-full hover:bg-white hover:text-black transition-colors">
               <FaArrowLeft />
             </button>
             <h1 className="text-2xl font-extrabold">Notifications</h1>
          </div>
          <button className="text-xs font-bold text-gray-500 hover:text-white uppercase tracking-wide">Mark all read</button>
       </div>

       <div className="max-w-2xl mx-auto space-y-4">
          {NOTIFICATIONS.map(notif => (
             <div key={notif.id} className="bg-[#252525] p-5 rounded-2xl flex gap-4 border border-[#333] hover:border-[#555] transition-colors relative group">
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0 ${notif.bg} ${notif.color}`}>
                   <notif.icon />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                   <p className="font-bold text-gray-200 leading-snug">{notif.text}</p>
                   <p className="text-xs text-gray-500 mt-1 font-bold">{notif.time}</p>
                </div>

                {/* Delete Action (Hidden until hover) */}
                <button className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                   <FaTrash />
                </button>
             </div>
          ))}

          {NOTIFICATIONS.length === 0 && (
             <div className="text-center py-20 text-gray-500">
                You're all caught up! No new notifications.
             </div>
          )}
       </div>
    </div>
  );
};

export default NotificationsPage;