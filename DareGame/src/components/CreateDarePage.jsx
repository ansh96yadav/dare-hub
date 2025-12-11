import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaImage, FaMagic } from 'react-icons/fa';

const CreateDarePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Funny',
    points: 10,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API Call would go here
    alert("Dare Submitted for Review!");
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#1d1c1c] text-white font-sans p-6 pb-20">
       <nav className="flex items-center gap-4 mb-8">
        <button onClick={() => navigate('/')} className="p-2 bg-[#252525] rounded-full hover:bg-white hover:text-black transition-colors">
          <FaArrowLeft />
        </button>
        <h1 className="text-2xl font-extrabold">Create New Dare</h1>
      </nav>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
                <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Dare Title</label>
                <input 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g., Dance with a Stranger" 
                    className="w-full bg-[#252525] border border-[#333] p-4 rounded-xl focus:border-[#7b00ff] outline-none text-white font-bold"
                    required
                />
            </div>

            <div>
                <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Description / Rules</label>
                <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Explain exactly what the user needs to do..." 
                    rows="4"
                    className="w-full bg-[#252525] border border-[#333] p-4 rounded-xl focus:border-[#7b00ff] outline-none text-white resize-none"
                    required
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Category</label>
                    <select 
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full bg-[#252525] border border-[#333] p-4 rounded-xl focus:border-[#7b00ff] outline-none text-white appearance-none"
                    >
                        <option>Funny</option>
                        <option>Extreme</option>
                        <option>Social</option>
                        <option>Silly</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-400 text-xs font-bold uppercase mb-2">Points Reward</label>
                    <input 
                        type="number"
                        name="points"
                        value={formData.points}
                        onChange={handleChange}
                        className="w-full bg-[#252525] border border-[#333] p-4 rounded-xl focus:border-[#7b00ff] outline-none text-white"
                        min="10" max="100"
                    />
                </div>
            </div>

            <div className="border-2 border-dashed border-[#333] rounded-xl p-8 text-center cursor-pointer hover:border-[#7b00ff] hover:bg-[#252525] transition-all">
                <FaImage className="mx-auto text-3xl text-gray-500 mb-2" />
                <p className="text-sm font-bold text-gray-400">Upload Cover Image</p>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-[#7b00ff] to-[#d627e6] rounded-xl font-bold text-lg shadow-lg hover:scale-[1.02] transition-transform">
                Submit Dare <FaMagic className="inline ml-2" />
            </button>

          </form>

          {/* PREVIEW */}
          <div>
            <label className="block text-gray-400 text-xs font-bold uppercase mb-4">Live Preview</label>
            <div className="bg-[#252525] rounded-[30px] border border-[#333] overflow-hidden shadow-2xl max-w-sm mx-auto opacity-90">
                <div className="h-60 bg-[#111] relative flex items-center justify-center">
                    <FaImage className="text-4xl text-[#333]" />
                    <span className="absolute top-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold border border-white/10">
                        ⭐ {formData.points} pts
                    </span>
                </div>
                <div className="p-6">
                    <span className="text-xs font-bold text-[#7b00ff] uppercase tracking-wider">{formData.category}</span>
                    <h2 className="text-2xl font-extrabold mt-2 mb-4 leading-tight">
                        {formData.title || "Your Dare Title"}
                    </h2>
                    <p className="text-gray-400 text-sm mb-6">
                        {formData.description || "Description will appear here..."}
                    </p>
                    <button className="w-full py-3 bg-[#333] text-gray-500 rounded-xl font-bold cursor-not-allowed">
                        View Dare
                    </button>
                </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default CreateDarePage;