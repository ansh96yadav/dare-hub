import React, { useState } from 'react';
import { 
  FaHome, FaQuestion, FaBolt, FaTrophy, FaUserAlt, FaUserPlus, 
  FaChartLine, FaUser, FaPhotoVideo, FaLock, FaYoutube, FaInstagram, 
  FaGithub, FaWhatsapp, FaCheckCircle, FaStar, FaBars, FaTimes, 
  FaFireAlt, FaCrown, FaArrowRight, FaPlay, FaQuoteRight
} from 'react-icons/fa';
import { MdLogin, MdEmojiEmotions } from 'react-icons/md';
import { IoMdRibbon } from 'react-icons/io';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const glowHover = {
  hover: { 
    y: -5,
    boxShadow: "0px 10px 30px rgba(123, 0, 255, 0.2)",
    borderColor: "rgba(123, 0, 255, 0.5)",
    transition: { duration: 0.3 }
  }
};

// --- MOCK DATA ---
const activityFeed = [
    { user: "Alex_99", action: "completed", dare: "Green Chili Challenge", time: "2m ago" },
    { user: "Sarah_K", action: "joined", dare: "Dare Hub", time: "5m ago" },
    { user: "Rohan_X", action: "uploaded", dare: "Street Singing Proof", time: "12m ago" },
    { user: "DareDevil", action: "ranked up", dare: "Level 5", time: "15m ago" },
];

const daresData = [
  { id: 1, dare: 'Eat a Spoon of Green Chili 🌶️', category: 'Funny', categoryBg: 'bg-purple-500/20 text-purple-300', points: 30, image: 'greenchili.png' },
  { id: 2, dare: 'Laugh loudly for no reason 😂', category: 'Extreme', categoryBg: 'bg-pink-500/20 text-pink-300', points: 40, image: 'laughing.png' },
  { id: 3, dare: 'Compliment a random object 📦', category: 'Silly', categoryBg: 'bg-green-500/20 text-green-300', points: 25, image: 'commenting.png' },
  { id: 4, dare: "Say “Happy Birthday” anyone 🥳", category: 'Funny', categoryBg: 'bg-purple-500/20 text-purple-300', points: 35, image: 'birthday.png' },
  { id: 5, dare: 'Give an autograph to crush ✍️', category: 'Extreme', categoryBg: 'bg-pink-500/20 text-pink-300', points: 50, image: 'autograph.png' },
  { id: 6, dare: 'Perform Bollywood dialogue 🗣️', category: 'Silly', categoryBg: 'bg-green-500/20 text-green-300', points: 35, image: 'dialouge.png' }
];

const featuresData = [
  { icon: MdEmojiEmotions, color: 'text-red-500', bg: 'bg-red-500/10', title: 'Daily Trends', desc: 'New viral dares added every 24 hours.' },
  { icon: FaChartLine, color: 'text-blue-500', bg: 'bg-blue-500/10', title: 'Growing Users', desc: 'Join 10k+ thrill seekers globally.' },
  { icon: IoMdRibbon, color: 'text-pink-500', bg: 'bg-pink-500/10', title: 'Badges', desc: 'Earn unique badges for your profile.' },
  { icon: FaUser, color: 'text-green-500', bg: 'bg-green-500/10', title: 'Creators', desc: 'Get verified and build a following.' },
  { icon: FaPhotoVideo, color: 'text-purple-500', bg: 'bg-purple-500/10', title: 'Video Proof', desc: 'Upload clips to verify your dares.' },
  { icon: FaLock, color: 'text-orange-500', bg: 'bg-orange-500/10', title: 'Privacy', desc: 'Control who sees your content.' },
];

const reviewsData = [
    { name: 'Ansh Yadav', role: 'Programmer', comment: "Insane UI! The 'Extreme' dares made my party alive.", image: 'boy.png', rating: 5 },
    { name: 'Priya Sharma', role: 'Influencer', comment: "Privacy features are top notch. Loving the leaderboard.", image: 'girl.png', rating: 5 },
    { name: 'Rahul Verma', role: 'Student', comment: "Simple, competitive, and hilarious. Better than Truth/Dare.", image: 'boy.png', rating: 4 }
];

// --- NAV ITEM COMPONENT ---
const NavItem = ({ href, icon: Icon, text }) => (
  <a href={href} className="group w-full">
    <li className='flex items-center w-full px-4 py-3 rounded-xl gap-4 text-[0.95rem] font-medium text-gray-400 group-hover:bg-[#252525] group-hover:text-white transition-all duration-300 border border-transparent group-hover:border-[#333]'>
      <Icon className="text-lg group-hover:text-[#7b00ff] transition-colors"/> 
      {text}
    </li>
  </a>
);

// --- MAIN PAGE COMPONENT ---
function HomePage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='flex flex-col lg:flex-row min-h-screen bg-[#0a0a0a] font-sans selection:bg-[#7b00ff] selection:text-white overflow-x-hidden'>
      
      {/* --- BACKGROUND FX (Global) --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#7b00ff] rounded-full blur-[200px] opacity-[0.06] animate-pulse"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#2af142] rounded-full blur-[200px] opacity-[0.04]"></div>
      </div>

      {/* --- MOBILE STICKY HEADER --- */}
      <div className="lg:hidden sticky top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#222] px-6 py-4 flex justify-between items-center shadow-lg shadow-black/50">
        <div className='flex items-center gap-3'>
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#7b00ff] to-[#d627e6] flex items-center justify-center shadow-lg shadow-[#7b00ff]/40">
             <span className="font-black text-white text-sm">DH</span>
          </div>
          <span className='text-white font-bold text-lg tracking-tight'>Dare Hub</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white text-2xl p-2 rounded-lg hover:bg-[#222] transition-colors">
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-[70px] left-0 w-full bg-[#0a0a0a] z-40 border-b border-[#222] shadow-2xl overflow-hidden"
          >
            <ul className='flex flex-col gap-2 p-6'>
              <NavItem href='#home' icon={FaHome} text="Home" />
              <NavItem href='#dares' icon={FaBolt} text="Trending" />
              <NavItem href='#leaderboard' icon={FaTrophy} text="Leaderboard" />
              <div className="h-px bg-[#222] my-2"></div>
              <button onClick={() => navigate('/game')} className='w-full py-3 bg-[#7b00ff] text-white rounded-xl font-bold'>Join Now</button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DESKTOP SIDEBAR (Sticky) --- */}
      <aside className='hidden lg:flex w-72 h-screen sticky top-0 bg-[#0a0a0a] border-r border-[#222] flex-col justify-between py-8 px-4 z-40'>
        <div>
          <div className='flex items-center gap-3 px-4 mb-10'>
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7b00ff] to-[#d627e6] flex items-center justify-center shadow-[0_0_15px_rgba(123,0,255,0.5)]">
                 <img src='DareHubb.png' className='w-full h-full object-cover rounded-xl opacity-90' alt="DH"/>
             </div>
             <div>
                <h1 className='text-white font-bold text-xl tracking-tight'>Dare Hub</h1>
                <p className='text-xs text-gray-500 font-bold uppercase tracking-wide'>Beta v2.0</p>
             </div>
          </div>
          
          <ul className='flex flex-col gap-1'>
            <NavItem href='#home' icon={FaHome} text="Home" />
            <NavItem href='#darehub' icon={FaQuestion} text="Explore" />
            <NavItem href='#dares' icon={FaBolt} text="Trending Dares" />
            <NavItem href='#leaderboard' icon={FaTrophy} text="Leaderboard" />
            <NavItem href='#about-us' icon={FaUserAlt} text="Creator Profile" />
          </ul>
        </div>

        <div className='px-2'>
           <div className="bg-gradient-to-b from-[#151515] to-[#0a0a0a] p-5 rounded-2xl border border-[#222] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-20 h-20 bg-[#7b00ff] blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
               <h4 className="text-white font-bold text-sm mb-1 relative z-10">Premium Access</h4>
               <p className="text-xs text-gray-400 mb-4 relative z-10 leading-relaxed">Unlock exclusive extreme dares and badges.</p>
               <button className="w-full py-2 bg-[#222] hover:bg-white hover:text-black border border-[#333] text-white text-xs font-bold rounded-lg transition-all relative z-10">
                  Upgrade Now
               </button>
           </div>
           
           <div className="mt-4 flex gap-2">
             <Link to="/login" className="flex-1 py-2.5 bg-[#1a1a1a] hover:bg-[#222] border border-[#333] rounded-xl text-white font-bold text-sm text-center transition-all">Login</Link>
             <Link to="/game" className="flex-1 py-2.5 bg-[#7b00ff] hover:bg-[#6b00dd] rounded-xl text-white font-bold text-sm text-center transition-all shadow-lg shadow-[#7b00ff]/20">Sign Up</Link>
           </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className='flex-1 w-full relative z-10'>
        
        {/* 1. HERO SECTION */}
        <section id='home' className='relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-16 py-20 overflow-hidden'>
          
          {/* Live Activity Ticker */}
          <div className="absolute top-24 lg:top-10 left-6 lg:left-16 flex items-center gap-3 overflow-hidden max-w-sm bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 z-20">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <div className="flex flex-col h-6 overflow-hidden">
                <div className="animate-slide-up">
                   {activityFeed.map((feed, i) => (
                      <p key={i} className="text-xs font-bold text-gray-500 whitespace-nowrap h-6 flex items-center">
                         <span className="text-white mr-1">{feed.user}</span> {feed.action} <span className="text-[#7b00ff] mx-1">{feed.dare}</span> • {feed.time}
                      </p>
                   ))}
                </div>
             </div>
          </div>

          <div className='w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center mt-10 lg:mt-0'>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151515] border border-[#333] text-xs font-bold text-[#7b00ff] mb-8 hover:bg-[#222] transition-colors cursor-default">
                  <FaFireAlt className="text-orange-500"/> #1 Social Challenge App
               </div>
               
               <h1 className='text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6'>
                 Prove Your <br/>
                 <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#7b00ff] via-[#d627e6] to-[#7b00ff] animate-gradient-x'><Link to='/login'>Boldness.</Link></span>
               </h1>
               
               <p className='text-gray-400 text-lg leading-relaxed max-w-lg mb-10'>
                <Link to='/arcade'> Take on viral challenges, upload video proof, and dominate the global leaderboard. Are you ready to play?</Link>
               </p>
               
               <div className='flex flex-col sm:flex-row gap-4'>
                 <button onClick={() => navigate('/dares')} className='px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2'>
                    <FaPlay className="text-xs"/> Start Daring
                 </button>
                 <button onClick={() => navigate('/leaderboard')} className='px-8 py-4 bg-[#151515] border border-[#333] text-white font-bold rounded-2xl hover:bg-[#222] hover:border-[#555] transition-all flex items-center justify-center gap-2'>
                    View Leaderboard
                 </button>
               </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className='relative hidden lg:block group'
            >
               {/* Glowing Orb */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#7b00ff]/20 to-[#2af142]/20 blur-[100px] rounded-full group-hover:opacity-70 transition-opacity duration-700"></div>
               <img src='DareHubb.png' className='relative z-10 w-full drop-shadow-2xl hover:rotate-2 transition-transform duration-500' alt="Hero"/>
               
               {/* Floating Stats Card */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }} 
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                 className="absolute bottom-10 -left-10 z-20 bg-[#151515]/90 backdrop-blur-md p-4 pr-8 rounded-2xl border border-[#333] shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform"
               >
                  <div className="w-12 h-12 rounded-full border-2 border-[#7b00ff] overflow-hidden">
                     <img src="boy.png" className="w-full h-full object-cover" alt="user"/>
                  </div>
                  <div>
                     <p className="text-white font-bold text-sm">Dare Completed</p>
                     <p className="text-[#2af142] text-xs font-bold flex items-center gap-1"><FaCheckCircle/> Verified Proof</p>
                  </div>
               </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 2. FEATURES GRID */}
        <section className='py-24 px-6 lg:px-16 relative'>
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                 <div>
                    <h2 className="text-[#7b00ff] font-bold tracking-widest uppercase text-xs mb-3"><Link to='/store'>Features</Link></h2>
                    <h3 className="text-3xl md:text-5xl font-black text-white"><Link to='/profile'>Go Viral Instantly.</Link></h3>
                 </div>
                 <p className="text-gray-500 max-w-sm text-sm font-medium">
                    <Link to='/settings'>We provide the platform, you provide the courage. Everything you need to become a legend.</Link>
                 </p>
              </div>

              <motion.div 
                variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                 {featuresData.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      variants={fadeInUp} 
                      whileHover={{ y: -5, borderColor: '#333' }}
                      className="bg-[#111] p-8 rounded-3xl border border-[#222] transition-all group hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    >
                       <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center text-2xl mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                          <feature.icon />
                       </div>
                       <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                       <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                    </motion.div>
                 ))}
              </motion.div>
           </div>
        </section>

        {/* 3. TRENDING DARES */}
        <section id='dares' className='py-24 px-6 lg:px-16 bg-[#0f0f0f] relative overflow-hidden'>
           {/* Background Decor */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#7b00ff] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

           <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-black text-white mb-4"><Link to='/friends'>Trending Dares 🔥</Link></h2>
                 <p className="text-gray-500"><Link to='/notifications'>The most attempted challenges this week.</Link></p>
              </div>

              <motion.div 
                 variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                 {daresData.map((dare, idx) => (
                    <motion.div 
                       key={idx}
                       variants={fadeInUp}
                       whileHover="hover"
                       variants={glowHover}
                       className="bg-[#151515] rounded-[2rem] border border-[#222] overflow-hidden group shadow-lg cursor-pointer"
                       onClick={() => navigate(`/dare/${dare.id}`)}
                    >
                       <div className="h-52 overflow-hidden relative">
                          <img src={dare.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Dare"/>
                          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-90"></div>
                          
                          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold border border-white/10 flex items-center gap-1">
                             <FaStar className="text-yellow-400"/> {dare.points} pts
                          </div>
                          
                          <div className="absolute bottom-4 left-4">
                             <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider backdrop-blur-md border border-white/5 ${dare.categoryBg}`}>
                                {dare.category}
                             </span>
                          </div>
                       </div>
                       
                       <div className="p-6 pt-4">
                          <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#7b00ff] transition-colors">{dare.dare}</h3>
                          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">{dare.paragraph}</p>
                          <div className="flex items-center justify-between pt-4 border-t border-[#222]">
                             <div className="flex -space-x-2">
                                {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-[#333] border border-[#151515]"></div>)}
                             </div>
                             <span className="text-xs font-bold text-gray-500 group-hover:text-white transition-colors flex items-center gap-1">
                                View Details <FaArrowRight/>
                             </span>
                          </div>
                       </div>
                    </motion.div>
                 ))}
              </motion.div>
              
              <div className="text-center mt-12">
                 <button onClick={() => navigate('/dares')} className="px-8 py-3 bg-[#1a1a1a] border border-[#333] text-white font-bold rounded-xl hover:bg-[#222] hover:border-[#555] transition-all hover:scale-105">
                    View All Dares
                 </button>
              </div>
           </div>
        </section>

        {/* 4. LEADERBOARD PREVIEW */}
        <section id='leaderboard' className='py-24 px-6 lg:px-16 relative overflow-hidden'>
           <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] to-[#151515]"></div>
           <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-12">
                 <FaTrophy className="text-5xl text-yellow-500 mx-auto mb-6 drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]" />
                 <h2 className="text-4xl font-black text-white mb-4"><Link to='/create-dare'>Hall of Fame</h2>
                 <p className="text-gray-400">Compete with the best and earn your spot on the top.</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[32px] overflow-hidden shadow-2xl">
                 <div className="grid grid-cols-12 gap-4 p-6 border-b border-[#2a2a2a] text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <div className="col-span-2 text-center">Rank</div>
                    <div className="col-span-7">User</div>
                    <div className="col-span-3 text-right">XP</div>
                 </div>
                 
                 {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="grid grid-cols-12 gap-4 p-5 items-center hover:bg-[#222] transition-colors border-b border-[#222] last:border-0">
                       <div className="col-span-2 text-center flex justify-center">
                          {i < 3 ? (
                             <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-black ${i===0?'bg-yellow-400':i===1?'bg-gray-300':'bg-orange-400'}`}>
                                {i+1}
                             </div>
                          ) : (
                             <span className="font-bold text-gray-500">#{i+1}</span>
                          )}
                       </div>
                       <div className="col-span-7 flex items-center gap-4">
                          <img src={i%2===0?'boy.png':'girl.png'} className="w-10 h-10 rounded-full bg-[#111]" alt="User"/>
                          <span className="font-bold text-white text-sm sm:text-base">DareDevil_{i+10}</span>
                       </div>
                       <div className="col-span-3 text-right font-mono font-bold text-[#7b00ff]">
                          {2500 - (i*150)}
                       </div>
                    </div>
                 ))}
                 
                 <div className="p-4 bg-[#222] text-center">
                    <Link to="/leaderboard" className="text-sm font-bold text-white hover:underline">View Full Leaderboard</Link>
                 </div>
              </div>
           </div>
        </section>

        {/* 5. CREATOR SPOTLIGHT */}
        <section className="py-24 px-6 lg:px-16 bg-gradient-to-b from-[#0f0f0f] to-[#151515] border-y border-[#222]">
           <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                 <div>
                    <h4 className="text-[#7b00ff] font-bold uppercase tracking-widest text-xs mb-4">Community Spotlight</h4>
                    <h2 className="text-4xl font-black text-white mb-6">Meet the <br/>Dare Master.</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                       Every week we feature a creator who pushes the boundaries. Meet <strong>Sarah_X</strong>, this week's top performer with over 50 completed extreme dares.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-6 mb-8">
                       {[
                          { val: "50+", lbl: "Dares" },
                          { val: "12k", lbl: "Followers" },
                          { val: "#1", lbl: "Rank" }
                       ].map((s, i) => (
                          <div key={i}>
                             <p className="text-2xl font-black text-white">{s.val}</p>
                             <p className="text-xs text-gray-500 font-bold uppercase">{s.lbl}</p>
                          </div>
                       ))}
                    </div>

                    <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
                       View Profile
                    </button>
                 </div>

                 <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#7b00ff] to-transparent opacity-20 blur-[60px] rounded-full"></div>
                    <div className="relative bg-[#1a1a1a] p-2 rounded-[40px] border border-[#333] rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                       <img src="girl.png" className="w-full h-80 object-cover rounded-[32px]" alt="Creator"/>
                       <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                          <FaCrown className="text-yellow-400 text-2xl drop-shadow-md"/>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 6. JOIN CTA */}
        <section className="py-24 px-6 lg:px-16 relative overflow-hidden">
           <div className="absolute inset-0 bg-[#7b00ff] opacity-[0.03]"></div>
           <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Ready to make history?</h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                 Join thousands of users creating content, having fun, and earning rewards. 
                 It takes less than 30 seconds to start.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button onClick={() => navigate('/game')} className="px-10 py-4 bg-gradient-to-r from-[#7b00ff] to-[#d627e6] text-white font-bold rounded-2xl shadow-xl shadow-[#7b00ff]/30 hover:scale-105 transition-transform">
                    Create Free Account
                 </button>
                 <button className="px-10 py-4 bg-[#1a1a1a] border border-[#333] text-white font-bold rounded-2xl hover:bg-[#222]">
                    Read Guidelines
                 </button>
              </div>
           </div>
        </section>

        {/* 7. TESTIMONIALS */}
        <section className="py-24 px-6 lg:px-16 bg-[#0f0f0f]">
           <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-black text-white mb-12 text-center">Community Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {reviewsData.map((review, i) => (
                    <motion.div 
                       key={i} 
                       whileHover={{ y: -5 }}
                       className="bg-[#151515] p-8 rounded-[32px] border border-[#222] relative group hover:border-[#333] transition-colors"
                    >
                       <FaQuoteRight className="text-[#222] text-6xl absolute top-8 right-8 group-hover:text-[#2a2a2a] transition-colors"/>
                       <div className="flex gap-1 mb-6 text-yellow-500 text-xs">
                          {[...Array(5)].map((_,x) => <FaStar key={x}/>)}
                       </div>
                       <p className="text-gray-300 text-lg font-medium leading-relaxed mb-8 relative z-10">"{review.comment}"</p>
                       <div className="flex items-center gap-4">
                          <img src={review.image} className="w-12 h-12 rounded-full border-2 border-[#222]" alt={review.name}/>
                          <div>
                             <h5 className="font-bold text-white">{review.name}</h5>
                             <p className="text-xs text-gray-500 font-bold uppercase">{review.role}</p>
                          </div>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* 8. FOOTER */}
        <footer className='bg-[#0a0a0a] border-t border-[#222] py-16 px-6 lg:px-16'>
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                 <div className='flex items-center gap-3 mb-6'>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7b00ff] to-[#d627e6]"></div>
                    <span className='text-white font-black text-2xl'>Dare Hub</span>
                 </div>
                 <p className="text-gray-500 max-w-sm mb-8">
                    The #1 platform for social challenges. Connect with friends, prove your courage, and have fun.
                 </p>
                 <div className="flex gap-4">
                    <FaInstagram className="text-2xl text-gray-400 hover:text-pink-500 cursor-pointer transition-colors"/>
                    <FaYoutube className="text-2xl text-gray-400 hover:text-red-500 cursor-pointer transition-colors"/>
                    <FaGithub className="text-2xl text-gray-400 hover:text-white cursor-pointer transition-colors"/>
                 </div>
              </div>
              
              <div>
                 <h4 className="text-white font-bold mb-6">Platform</h4>
                 <ul className="space-y-4 text-gray-500 text-sm font-medium">
                    <li><a href="#" className="hover:text-[#7b00ff]">Trending Dares</a></li>
                    <li><a href="#" className="hover:text-[#7b00ff]">Leaderboard</a></li>
                    <li><a href="#" className="hover:text-[#7b00ff]">Features</a></li>
                 </ul>
              </div>

              <div>
                 <h4 className="text-white font-bold mb-6">Legal</h4>
                 <ul className="space-y-4 text-gray-500 text-sm font-medium">
                    <li><a href="#" className="hover:text-[#7b00ff]">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-[#7b00ff]">Terms of Service</a></li>
                 </ul>
              </div>
           </div>
           <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#222] text-center text-gray-600 text-xs font-bold uppercase tracking-widest">
              © 2024 Dare Hub. Made for Fun.
           </div>
        </footer>

      </main>
    </div>
  )
}

export default HomePage;