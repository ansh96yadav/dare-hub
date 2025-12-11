import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom
import { 
  FaUser, FaLock, FaEnvelope, FaGoogle, FaFacebook, 
  FaArrowLeft, FaEye, FaEyeSlash 
} from 'react-icons/fa';

const InputField = ({ icon: Icon, type, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="relative mb-5 group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#979696] group-focus-within:text-[#7b00ff] transition-colors">
        <Icon />
      </div>
      <input 
        type={isPassword ? (showPassword ? 'text' : 'password') : type} 
        placeholder={placeholder}
        className="w-full pl-12 pr-12 py-4 bg-[#2a2a2a] border border-[#333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#7b00ff] focus:ring-1 focus:ring-[#7b00ff] transition-all duration-300 shadow-inner"
      />
      {isPassword && (
        <button 
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#979696] hover:text-white cursor-pointer transition-colors"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      )}
    </div>
  );
};

const SocialButton = ({ icon: Icon, color, label }) => (
  <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-[#2a2a2a] border border-[#333] rounded-xl text-white hover:bg-[#333] hover:border-gray-500 transition-all duration-300 group">
    <Icon className={`text-xl ${color} group-hover:scale-110 transition-transform`} />
    <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{label}</span>
  </button>
);

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen w-full bg-[#1d1c1c] flex items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-[#7b00ff] selection:text-white">
      
      {/* Background Decor (Glows) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7b00ff] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d627e6] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

      {/* Back Button */}
      <button 
        onClick={() => navigate('/')} 
        className="absolute top-6 left-6 flex items-center gap-2 text-[#979696] hover:text-white font-bold transition-colors z-20"
      >
        <FaArrowLeft /> Back to Home
      </button>

      {/* Main Card */}
      <div className="w-full max-w-5xl bg-[#181818] rounded-[30px] shadow-2xl border border-[#333] overflow-hidden flex flex-col md:flex-row relative z-10 min-h-[600px]">
        
        {/* LEFT SIDE: Form Container */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative bg-[#181818]">
            <AnimatePresence mode='wait'>
                
                {/* LOGIN FORM */}
                {isLogin ? (
                    <motion.div 
                        key="login"
                        variants={containerVariants}
                        initial="hidden" animate="visible" exit="exit"
                        className="w-full max-w-sm mx-auto"
                    >
                        <div className="mb-8">
                            <h1 className="text-3xl font-extrabold text-white mb-2">Welcome Back! 👋</h1>
                            <p className="text-[#979696]">Ready to take on some new dares?</p>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <InputField icon={FaEnvelope} type="email" placeholder="Email Address" />
                            <InputField icon={FaLock} type="password" placeholder="Password" />
                            
                            <div className="flex justify-end mb-6">
                                <a href="#" className="text-xs font-bold text-[#7b00ff] hover:text-[#d627e6] transition-colors">
                                    Forgot Password?
                                </a>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-[#d627e6] to-[#7b00ff] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(123,0,255,0.4)] hover:shadow-[0_0_30px_rgba(123,0,255,0.6)] hover:scale-[1.02] transition-all duration-300">
                                Log In
                            </button>
                        </form>

                        <div className="my-8 flex items-center gap-4">
                            <div className="h-px bg-[#333] flex-1"></div>
                            <span className="text-gray-500 text-sm">Or continue with</span>
                            <div className="h-px bg-[#333] flex-1"></div>
                        </div>

                        <div className="flex gap-4">
                            <SocialButton icon={FaGoogle} color="text-red-500" label="Google" />
                            <SocialButton icon={FaFacebook} color="text-blue-500" label="Facebook" />
                        </div>

                        <p className="mt-8 text-center text-[#979696] text-sm">
                            Don't have an account?{' '}
                            <button onClick={() => setIsLogin(false)} className="text-white font-bold hover:underline decoration-[#7b00ff]">
                                Sign Up
                            </button>
                        </p>
                    </motion.div>
                ) : (
                
                /* SIGNUP FORM */
                    <motion.div 
                        key="signup"
                        variants={containerVariants}
                        initial="hidden" animate="visible" exit="exit"
                        className="w-full max-w-sm mx-auto"
                    >
                        <div className="mb-8">
                            <h1 className="text-3xl font-extrabold text-white mb-2">Join Dare Hub 🚀</h1>
                            <p className="text-[#979696]">Create an account to start your journey.</p>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <InputField icon={FaUser} type="text" placeholder="Username" />
                            <InputField icon={FaEnvelope} type="email" placeholder="Email Address" />
                            <InputField icon={FaLock} type="password" placeholder="Password" />
                            <InputField icon={FaLock} type="password" placeholder="Confirm Password" />

                            <button className="w-full py-4 bg-gradient-to-r from-[#7b00ff] to-[#d627e6] text-white font-bold rounded-xl shadow-[0_0_20px_rgba(214,39,230,0.4)] hover:shadow-[0_0_30px_rgba(214,39,230,0.6)] hover:scale-[1.02] transition-all duration-300 mt-2">
                                Create Account
                            </button>
                        </form>

                        <p className="mt-8 text-center text-[#979696] text-sm">
                            Already have an account?{' '}
                            <button onClick={() => setIsLogin(true)} className="text-white font-bold hover:underline decoration-[#d627e6]">
                                Log In
                            </button>
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        {/* RIGHT SIDE: Visual/Image Panel */}
        <div className="hidden md:flex w-1/2 bg-[#1a1a1a] relative overflow-hidden items-center justify-center p-12">
            
            {/* Background Image/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-black z-0"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
            
            {/* Animated Content */}
            <div className="relative z-10 text-center">
                <motion.div
                    key={isLogin ? "login-img" : "signup-img"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="mb-6 mx-auto w-24 h-24 bg-gradient-to-br from-[#7b00ff] to-[#d627e6] rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(123,0,255,0.5)] transform rotate-12">
                         <img src='/DareHubb.png' className="w-16 drop-shadow-lg" alt="Logo"/>
                    </div>
                    
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        {isLogin ? "Prove Your Boldness." : "Challenge The World."}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xs mx-auto leading-relaxed">
                        {isLogin 
                         ? "Log in to track your progress, earn badges, and climb the global leaderboard." 
                         : "Join the fastest growing community of thrill-seekers and content creators."}
                    </p>
                </motion.div>

                {/* Decor shapes */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#7b00ff] rounded-full blur-[80px] opacity-40 animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#d627e6] rounded-full blur-[80px] opacity-40 animate-pulse delay-700"></div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AuthPage;