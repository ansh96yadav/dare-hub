import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, FaUser, FaLock, FaBell, FaShieldAlt, 
  FaSave, FaTrash, FaCheck, FaEye, FaEyeSlash 
} from 'react-icons/fa';

// --- CUSTOM TOGGLE SWITCH COMPONENT ---
const ToggleSwitch = ({ label, description, isOn, onToggle }) => (
  <div className="flex items-center justify-between py-4 border-b border-[#333] last:border-0">
    <div className="pr-4">
      <h4 className="font-bold text-white text-sm md:text-base">{label}</h4>
      {description && <p className="text-xs text-[#979696] mt-1">{description}</p>}
    </div>
    <div 
      onClick={onToggle}
      className={`w-12 h-6 flex items-center bg-[#333] rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-[#7b00ff]' : ''}`}
    >
      <motion.div 
        layout 
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`bg-white w-4 h-4 rounded-full shadow-md ${isOn ? 'ml-auto' : ''}`}
      />
    </div>
  </div>
);

// --- SETTINGS PAGE COMPONENT ---
const SettingsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');
  const [showPassword, setShowPassword] = useState(false);

  // Mock State for Settings
  const [settings, setSettings] = useState({
    username: 'DareDevil_99',
    email: 'alex@darehub.com',
    bio: 'Just here for the thrill.',
    isPrivate: false,
    showActivity: true,
    emailNotifs: true,
    pushNotifs: false,
    twoFactor: false
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const tabs = [
    { id: 'account', label: 'Edit Profile', icon: FaUser },
    { id: 'privacy', label: 'Privacy', icon: FaLock },
    { id: 'security', label: 'Security', icon: FaShieldAlt },
    { id: 'notifications', label: 'Notifications', icon: FaBell },
  ];

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans selection:bg-[#7b00ff]">
      
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-40 bg-[#1d1c1c]/90 backdrop-blur-md border-b border-[#333] px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigate('/profile')} className="flex items-center gap-2 text-[#979696] hover:text-white transition-colors font-bold">
          <FaArrowLeft /> Back to Profile
        </button>
        <div className="font-extrabold text-xl tracking-tight">Settings</div>
        <div className="w-8"></div> {/* Spacer for centering */}
      </nav>

      <main className="max-w-6xl mx-auto p-4 lg:p-10 flex flex-col lg:flex-row gap-8">

        {/* --- SIDEBAR TABS --- */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-[#252525] rounded-2xl border border-[#333] overflow-hidden p-2 sticky top-24">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#7b00ff] text-white shadow-lg shadow-[#7b00ff]/20' 
                    : 'text-[#979696] hover:bg-[#333] hover:text-white'
                }`}
              >
                <tab.icon className={activeTab === tab.id ? 'text-white' : 'text-[#7b00ff]'} />
                {tab.label}
              </button>
            ))}
          </div>
        </aside>

        {/* --- CONTENT AREA --- */}
        <div className="flex-1">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#252525] rounded-[30px] border border-[#333] p-6 md:p-10 shadow-2xl relative overflow-hidden"
            >
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#7b00ff] opacity-5 blur-[80px] rounded-full pointer-events-none"></div>

              {/* --- TAB: ACCOUNT --- */}
              {activeTab === 'account' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-extrabold mb-6">Profile Information</h2>
                  
                  <div className="flex items-center gap-6 mb-8">
                    <img src="/boy.png" alt="Avatar" className="w-20 h-20 rounded-full border-2 border-[#7b00ff]" />
                    <button className="px-4 py-2 bg-[#333] hover:bg-[#444] rounded-lg text-sm font-bold transition-colors">
                      Change Photo
                    </button>
                  </div>

                  <div className="grid gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#979696] uppercase mb-2">Display Name</label>
                      <input 
                        type="text" 
                        defaultValue={settings.username} 
                        className="w-full bg-[#1d1c1c] border border-[#333] rounded-xl px-4 py-3 focus:border-[#7b00ff] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#979696] uppercase mb-2">Bio</label>
                      <textarea 
                        defaultValue={settings.bio} 
                        rows="3"
                        className="w-full bg-[#1d1c1c] border border-[#333] rounded-xl px-4 py-3 focus:border-[#7b00ff] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#979696] uppercase mb-2">Email Address</label>
                      <input 
                        type="email" 
                        defaultValue={settings.email} 
                        className="w-full bg-[#1d1c1c] border border-[#333] rounded-xl px-4 py-3 focus:border-[#7b00ff] focus:outline-none transition-colors opacity-70 cursor-not-allowed"
                        disabled
                      />
                      <p className="text-xs text-[#666] mt-2">Contact support to change email.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* --- TAB: PRIVACY --- */}
              {activeTab === 'privacy' && (
                <div>
                   <h2 className="text-2xl font-extrabold mb-6">Privacy Settings</h2>
                   <div className="bg-[#1d1c1c] rounded-2xl p-4 border border-[#333]">
                      <ToggleSwitch 
                        label="Private Account" 
                        description="Only followers can see your dares and proofs. You won't appear on the global leaderboard."
                        isOn={settings.isPrivate} 
                        onToggle={() => handleToggle('isPrivate')}
                      />
                      <ToggleSwitch 
                        label="Show Activity Status" 
                        description="Allow friends to see when you are online."
                        isOn={settings.showActivity} 
                        onToggle={() => handleToggle('showActivity')}
                      />
                   </div>
                   
                   <h3 className="text-lg font-bold mt-8 mb-4">Data & Permissions</h3>
                   <button className="text-[#979696] hover:text-white text-sm font-bold underline decoration-[#7b00ff]">
                     Download My Data
                   </button>
                </div>
              )}

              {/* --- TAB: SECURITY --- */}
              {activeTab === 'security' && (
                <div>
                  <h2 className="text-2xl font-extrabold mb-6">Login & Security</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4">Change Password</h3>
                    <div className="space-y-4">
                       <div className="relative">
                         <input type={showPassword ? "text" : "password"} placeholder="Current Password" className="w-full bg-[#1d1c1c] border border-[#333] rounded-xl px-4 py-3 focus:border-[#7b00ff] outline-none"/>
                       </div>
                       <div className="relative">
                         <input type={showPassword ? "text" : "password"} placeholder="New Password" className="w-full bg-[#1d1c1c] border border-[#333] rounded-xl px-4 py-3 focus:border-[#7b00ff] outline-none"/>
                         <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-3.5 text-[#979696] hover:text-white">
                           {showPassword ? <FaEyeSlash/> : <FaEye/>}
                         </button>
                       </div>
                    </div>
                    <button className="mt-4 px-6 py-2 bg-[#333] hover:bg-[#444] rounded-lg font-bold text-sm transition-colors">
                      Update Password
                    </button>
                  </div>

                  <div className="bg-[#1d1c1c] rounded-2xl p-4 border border-[#333] mb-8">
                      <ToggleSwitch 
                        label="Two-Factor Authentication" 
                        description="Add an extra layer of security to your account."
                        isOn={settings.twoFactor} 
                        onToggle={() => handleToggle('twoFactor')}
                      />
                  </div>

                  {/* Danger Zone */}
                  <div className="border border-red-900/50 bg-red-900/10 rounded-2xl p-6">
                    <h3 className="text-red-500 font-bold mb-2 flex items-center gap-2"><FaShieldAlt/> Danger Zone</h3>
                    <p className="text-red-200/60 text-sm mb-4">
                      Once you delete your account, there is no going back. All your dares, badges, and points will be permanently removed.
                    </p>
                    <button className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-sm transition-colors">
                      <FaTrash size={12}/> Delete Account
                    </button>
                  </div>
                </div>
              )}

              {/* --- TAB: NOTIFICATIONS --- */}
              {activeTab === 'notifications' && (
                <div>
                   <h2 className="text-2xl font-extrabold mb-6">Notification Preferences</h2>
                   <div className="bg-[#1d1c1c] rounded-2xl p-4 border border-[#333]">
                      <ToggleSwitch 
                        label="Email Notifications" 
                        description="Receive weekly summaries and major updates."
                        isOn={settings.emailNotifs} 
                        onToggle={() => handleToggle('emailNotifs')}
                      />
                      <ToggleSwitch 
                        label="Push Notifications" 
                        description="Get alerted when someone challenges you or likes your proof."
                        isOn={settings.pushNotifs} 
                        onToggle={() => handleToggle('pushNotifs')}
                      />
                   </div>
                </div>
              )}

              {/* Save Button (Global) */}
              <div className="mt-10 pt-6 border-t border-[#333] flex justify-end">
                <button className="flex items-center gap-2 px-8 py-3 bg-[#7b00ff] hover:bg-[#6200cc] text-white rounded-xl font-bold text-lg shadow-lg shadow-[#7b00ff]/20 transition-all hover:scale-105">
                  <FaSave /> Save Changes
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </main>
    </div>
  );
};

export default SettingsPage;