// import React from 'react'
// import * as FaIcons from 'react-icons/fa';
// import { MdLogin, MdEmojiEmotions } from 'react-icons/md';
// import { IoMdRibbon } from 'react-icons/io'


// function Try() {


//   const navTagsStyle = 'flex justify-center items-center w-full h-fit px-6 py-2 border-[#ffffff] gap-2 text-[1.1rem] font-extrabold text-[#979696] hover:bg-[#2a2a2a] hover:text-[white] cursor-pointer hover:scale-110'

//   const dares = [
//     {
//       dare: 'Eat a Spoon of Green Chili 🌶️🌶️',
//       category: 'Funny',
//       categoryBg: 'bg-[#7e1bef]',
//       points: '30 pts',
//       paragraph: 'Take a small spoon of green chili, eat it and then record and show your reaction.',
//       image: 'greenchili.png',
//     },
//     {
//       dare: 'Laugh loudly for no reason 😂🤣',
//       category: 'Extreme',
//       categoryBg: 'bg-[#ed2bd0]',
//       points: '40 pts',
//       paragraph: 'Laugh loudly for no reason and stop suddenly & then record others reactions.',
//       image: 'laughing.png',
//     },
//     {
//       dare: 'Compliment a random object 📦📦',
//       category: 'Silly',
//       categoryBg: 'bg-[#2af142]',
//       points: '25 pts',
//       paragraph: 'Complement random object:“Wow,what a beautiful dustbin!” Record others reaction',
//       image: 'commenting.png',
//     },
//     {
//       dare: "Say “Happy Birthday” anyone 🥳",
//       category: 'Funny',
//       categoryBg: 'bg-[#7e1bef]',
//       points: '35 pts',
//       paragraph: "Sing “Happy Birthday” to someone even if it's not his birthday.Share reaction.",
//       image: 'birthday.png',
//     },
//     {
//       dare: 'Give an autograph to crush ✍️✍️',
//       category: 'Extreme',
//       categoryBg: 'bg-[#ed2bd0]',
//       points: '50 pts',
//       paragraph: 'Ask your crush if he/she want your autograph.Share his/her response for this.',
//       image: 'autograph.png',
//     },
//     {
//       dare: 'Perform Bollywood dialogue 🗣️🗣️',
//       category: 'Silly',
//       categoryBg: 'bg-[#2af142]',
//       points: '35 pts',
//       paragraph: 'Perform this dialouge : "Basanti, in kutton ko idli vada mat khilana".And Share',
//       image: 'dialouge.png',
//     }
//   ]

//   const featuresData = [
//     {
//       icon: MdEmojiEmotions,
//       iconBg: 'bg-[#f7f75f]',
//       iconContainerBg: 'bg-[#444a2c]',
//       title: 'Daily Trending Dares',
//       description: 'In our site there are more than 1.5 thousands funny and crazy dares to do of all categories, which you will select.',
//       statValue: '⭐ 1500+',
//       statLabel: 'Dare Challenges',
//       statColor: 'text-[#f7f71b]',
//     },
//     {
//       icon: FaIcons.FaChartLine,
//       iconBg: 'bg-[#685cf4]',
//       iconContainerBg: 'bg-[#302c4a]',
//       title: 'Increasing Users',
//       description: 'Our site is continously reaching to the new users and the users are really enjoying it by doing funny and crazy dares.',
//       statValue: '👥 10000+',
//       statLabel: 'Active Users',
//       statColor: 'text-[#584af0]',
//     },
//     {
//       icon: IoMdRibbon,
//       iconBg: 'bg-[#ef64e6]',
//       iconContainerBg: 'bg-[#4a2c45]',
//       title: 'Achievement Badges',
//       description: 'Get the Achievement Badges by doing crazy dares and sharing the proof of doing dare through image or a video or audio.',
//       statValue: '🥇 25+',
//       statLabel: 'Badges',
//       statColor: 'text-[#ea55e0]',
//     },
//     {
//       icon: FaIcons.FaUser,
//       iconBg: 'bg-[#5ff57d]',
//       iconContainerBg: 'bg-[#2c4a2d]',
//       title: 'Creator Profiles',
//       description: 'Creators are those who are doing dares and sharing proof publicly. Become a creator and enjoy some extra features.',
//       statValue: '👤 1000+',
//       statLabel: 'Creators',
//       statColor: 'text-[#43f566]',
//     },
//     {
//       icon: FaIcons.FaPhotoVideo,
//       iconBg: 'bg-[#b24eec]',
//       iconContainerBg: 'bg-[#3f2c4a]',
//       title: 'Proof-First Social Media',
//       description: "Shared proofs of doing dares.This help people to see your efforts.If you didn't want to share proof that is not mandatory(Be Private).",
//       statValue: '🎥 2000+',
//       statLabel: 'Shared Proofs',
//       statColor: 'text-[#a019ef]',
//     },
//     {
//       icon: FaIcons.FaLock,
//       iconBg: 'bg-[#f18d4f]',
//       iconContainerBg: 'bg-[#4a392c]',
//       title: 'Account Privacy',
//       description: 'Privates account will be far from public reach and achievement board and your details will also be private, if anyone visit you.',
//       statValue: '🔒 2100+',
//       statLabel: 'Private Accounts',
//       statColor: 'text-[#ef7b34]',
//     },
//   ];

//   const usageData = [
//     {
//       icon: FaIcons.FaBullseye,
//       iconBg: 'bg-[#302344]',
//       iconColor: 'text-[#9c22d5]',
//       heading: '1)Pick a Dare',
//       headingColor: 'text-[#cda0ed]',
//       subHeading: 'Choose Your Challenge',
//       paragraph: 'Choose from trending, funny, or crazy challenges',
//     },
//     {
//       icon: FaIcons.FaCamera,
//       iconBg: 'bg-[#3d4423]',
//       iconColor: 'text-[#b4d522]',
//       heading: '2)Do It & Record',
//       headingColor: 'text-[#edeca0]',
//       subHeading: 'Complete the Dare',
//       paragraph: 'Make your move and capture real proof — photo or video',
//     },
//     {
//       icon: FaIcons.FaTrophy,
//       iconBg: 'bg-[#234428]',
//       iconColor: 'text-[#22d531]',
//       heading: '3)Earn Points & Rank Up',
//       headingColor: 'text-[#a0eda6]',
//       subHeading: 'Earn Rewards',
//       paragraph: 'Get points, unlock badges, and climb the leaderboard',
//     },
//   ]

//   const Dare = ({ dare, category, categoryBg, points, paragraph, image }) => (
//     // FIX 1: Changed w-40 h-40 image to be responsive using w-full/max-w
//     <div className='w-full h-fit max-w-sm self-center p-4 flex flex-col bg-[#1e1d1d] rounded-[20px] m-auto'>
//       <h1 className='text-[1.5rem] whitespace-pre-wrap capitalize text-[white] font-extrabold text-center'>
//         {dare}
//       </h1>
//       <p className={`text-[#ffffff] text-[0.9rem] font-bold w-fit h-fit px-4 py-[4px] mt-[1rem] rounded-[10px] ${categoryBg}`}>
//         {category}
//       </p>
//       <p className='text-[#ffffff] text-[1rem] font-bold mt-[1rem]'>
//         ⭐{points}
//       </p>
//       <p className='text-[#dbd8d8] text-center text-[0.8rem] mt-[1rem]'>
//         {paragraph}
//       </p>
//       {/* RENDER FIX: Made image size responsive for better mobile layout */}
//       <img src={image} className='w-full max-w-[160px] h-40 object-cover m-auto rounded-[10px] mt-[1rem] sm:w-60 sm:h-60' />
//       <button className='w-fit h-fit py-2 px-4 rounded-[20px] bg-[#503bf0] text-[white] cursor-pointer font-bold text-[1.1rem] m-auto mt-[1rem] '>👀 View Dare</button>
//     </div>
//   )

//   const FeatureCard = ({ icon: Icon, iconBg, iconContainerBg, title, description, statValue, statLabel, statColor }) => (
//     // Component already uses w-full and responsive grid layout
//     <div className='flex flex-col w-full h-fit py-10 px-8 mt-[1rem] rounded-[10px] bg-[#1e1e1e] justify-center items-center'>
//       <div className={`w-fit h-fit p-2 rounded-[20px] ${iconContainerBg}`}>
//         <Icon className={`w-18 h-18 p-4 rounded-[20px] text-[#ffffff] ${iconBg}`} />
//       </div>
//       <h3 className='mt-[1.2rem] text-[#ffffff] text-[1.5rem] font-bold text-center'>{title}</h3>
//       <p className='text-[#a4a4a4] text-center mt-[0.4rem]'>{description}</p>
//       <hr className='mt-[1.5rem] w-4/5 h-px bg-[#a9a9a9] border-none' />
//       <div className='flex flex-col items-center justify-center'>
//         <p className={`text-[1.5rem] font-bold ${statColor}`}>{statValue}</p>
//         <p className='text-[0.9rem] text-[#c2c2c2]'>{statLabel}</p>
//       </div>
//     </div>
//   );

//   const UsageCards = ({ icon: Icon, headingColor, iconBg, iconColor, heading, subHeading, paragraph }) => (
//     // Component already uses w-full and max-w-sm
//     <div className='flex flex-col w-full max-w-sm'>
//       <h2 className={`text-[1.5rem] ${headingColor} font-bold text-center`}>{heading}</h2>
//       {/* FIX 2: Changed w-fit to w-full for the inner card to utilize max-w-sm fully */}
//       <div className='flex flex-col w-full h-fit p-4 mt-[1rem] rounded-[10px] bg-[#1e1e1e] justify-center items-center'>
//         <Icon className={`w-15 h-15 p-4 rounded-[50%] ${iconBg} ${iconColor}`} />
//         <h3 className='mt-[0.5rem] text-[#ffffff] text-[1.3rem] font-extrabold text-center'>{subHeading}</h3>
//         <p className='text-[#a4a4a4] text-center'>{paragraph}</p></div></div>
//   )

//   return (
//     // FIX 3: Adjusted main wrapper layout and padding for responsiveness
//     <div className='flex flex-col lg:flex-row p-4 lg:p-10 gap-4 lg:gap-20 w-full min-h-screen bg-[#232222]'>
//       <nav className='w-fit h-fit lg:sticky lg:top-[6%] hidden lg:flex bg-[#1d1c1c] py-8 px-12 flex-col rounded-[20px]'>
//         <div className='flex flex-col'>
//           <img src='DareHubb.png' className='w-25 rounded-[50%] m-auto' />
//           <p className='text-center text-white mt-[0.5rem] font-extrabold text-[1.5rem] lg:text-[2rem]'>Dare Hub</p> {/* FIX 4: Added mobile text size */}
//           <p className='text-[0.8rem] text-[gray] text-center'>Dares • Proofs • Leaderboard</p>
//         </div>
//         <div className='flex flex-col gap-6'>
//           <ul className='flex gap-4 flex-col mt-[1rem]'>
//             <a href='#home'>
//               <li className={`${navTagsStyle}`} style={{ transition: 'all 0.2s linear' }}>
//                 <FaIcons.FaHome />Home</li></a>
//             <a href='#darehub'>
//               <li className={`${navTagsStyle} whitespace-nowrap`} style={{ transition: 'all 0.2s linear' }}>
//                 <FaIcons.FaQuestion />What is DareHub</li></a>
//             <a href='#dares'>
//               <li className={`${navTagsStyle}`} style={{ transition: 'all 0.2s linear' }}>
//                 <FaIcons.FaBolt />Dares</li></a>
//             <a href='#leaderboard'>
//               <li className={`${navTagsStyle}`} style={{ transition: 'all 0.2s linear' }}>
//                 <FaIcons.FaTrophy />Leaderboard</li></a>
//             <a href='#home'><li className={`${navTagsStyle}`} style={{ transition: 'all 0.2s linear' }}>
//               <FaIcons.FaUserAlt />About Us</li></a>
//           </ul>
//           <ul className='flex gap-4 flex-col'>
//             <li className='flex justify-center items-center w-full h-fit px-5 py-2 bg-[#f15ff1] rounded-[10px] text-[white] cursor-pointer text-[1.1rem] gap-2 font-extrabold'>
//               <FaIcons.FaUserPlus />Sign up</li>
//             <li className='flex justify-center items-center w-full h-fit px-5 py-2 bg-[#755ff1] rounded-[10px] text-[white] cursor-pointer text-[1.1rem] gap-2 font-extrabold'>
//               <MdLogin />Login</li>
//           </ul>
//         </div>
//       </nav>
//       {/* FIX 5: Ensure main takes full width */}
//       <main className='w-full'>
//         <section id='home' className='grid lg:grid-cols-2 grid-cols-1 py-10 sm:py-20 w-full'> {/* FIX 6: Adjust py for mobile */}
//           <div className='flex flex-col items-center lg:items-start text-center lg:text-left px-4'> {/* FIX 7: Center content on mobile, add mobile padding */}
//             <h1 className='text-white font-extrabold text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem]'>Dare Hub</h1> {/* FIX 8: Made h1 text size responsive */}
//             <h2 className='text-[#dedbdb] font-bold text-[1.4rem] lg:text-[1.8rem]'>Create Connect Stand Out</h2> {/* FIX 9: Made h2 text size responsive */}
//             <p className='text-[#c6c4c4] mt-[1rem] text-[0.9rem] lg:text-[1.1rem] whitespace-break-spaces'>
//               The ultimate place to take bold dares, upload proof, and climb the leaderboard. Simple. Fun. Competitive.</p>
//             <div className='flex gap-4 sm:gap-6 flex-wrap justify-center lg:justify-start'> {/* FIX 10: Centered buttons on mobile */}
//               <button className='w-fit h-fit mt-[3rem] px-6 sm:px-10 py-3 sm:py-4 rounded-[20px] cursor-pointer bg-[white] font-bold text-[1rem] sm:text-[1.2rem]'>
//                 Get Started</button>
//               <button className='w-fit h-fit mt-[3rem] px-6 sm:px-10 py-3 sm:py-4 rounded-[20px] cursor-pointer bg-[transparent] border border-[white] border-solid text-[white] font-bold text-[1rem] sm:text-[1.2rem]'>
//                 Explore Dares</button></div>
//             <div className='flex flex-wrap mt-[2rem] justify-center lg:justify-start items-center gap-6 sm:gap-8'> {/* FIX 11: Centered social icons on mobile */}
//               <div className='w-fit h-fit p-2 rounded-[10px] bg-[#513535] text-[red] hover:text-[white] hover:bg-[red] hover:scale-110 cursor-pointer'
//                 style={{ transition: 'all 0.4s linear' }}>
//                 <FaIcons.FaYoutube className='w-8 h-8' /></div>
//               <div className='w-fit h-fit p-2 rounded-[10px] bg-[#4f3551] text-[#d627e6] hover:text-[white] hover:bg-[#d627e6]  hover:scale-110 cursor-pointer'
//                 style={{ transition: 'all 0.4s linear' }}>
//                 <FaIcons.FaInstagram className='w-8 h-8' /></div>
//               <div className='w-fit h-fit p-2 rounded-[10px] bg-[#464444] text-[black] hover:text-[white] hover:bg-[black] hover:scale-110 cursor-pointer'
//                 style={{ transition: 'all 0.4s linear' }}>
//                 <FaIcons.FaGithub className='w-8 h-8' /></div>
//               <div className='w-fit h-fit p-2 rounded-[10px] bg-[#35513c] text-[#48db48] hover:text-[white] hover:bg-[#48db48] hover:scale-110 cursor-pointer'
//                 style={{ transition: 'all 0.4s linear' }}>
//                 <FaIcons.FaWhatsapp className='w-8 h-8' /></div>
//             </div>
//           </div>
//           <div className='flex justify-center items-center mt-8 lg:mt-0'> {/* FIX 12: Adjusted vertical margin for mobile, reset on desktop */}
//             {/* FIX 13: Made image width responsive */}
//             <img src='DareHub12.png' className='w-60 sm:w-80 lg:w-120' style={{ filter: 'drop-shadow(5px 5px 10px white)' }} />
//           </div>
//         </section>

//         <hr className='border-t border-gray-700 my-8' />

//         <section id='darehub'>
//           <div className='px-4 lg:px-0'> {/* FIX 14: Added mobile padding */}
//             <h1 className='text-[3rem] mt-[5rem] text-[white] font-extrabold text-center'>Dare Hub?</h1> {/* FIX 15: Adjusted mt for better spacing */}
//             <h1 className='text-[2rem] mt-[2rem] font-extrabold text-[white] text-center'>What is Dare Hub?</h1>
//             <p className='text-[1.1rem] mt-[0.5rem] font-bold text-[gray] text-center max-w-4xl m-auto'>
//               Dare Hub is a platform to find/get interesting, funny and crazy dares to do.
//               In this platform you will find dares, you have to do those and have to share
//               proof as a video/image/audio to maintain trust between users those who are using it.
//               If you have any privacy issue for sharing the proof you could skip it.
//               Here you can play Truth or Dare with your friends or random people around world.
//             </p>
//             <h1 className='text-[1.8rem] mt-[2rem] text-[white] font-extrabold text-center'>
//               How Dare Hub Works?
//             </h1>

//             {/* Usage Cards: Already uses flex-wrap and max-w-sm for responsiveness */}
//             <div className='flex gap-4 flex-wrap items-center justify-center mt-[2rem]'>
//               {usageData.map((usage, index) => (
//                 <UsageCards key={index} {...usage} />
//               ))}
//             </div>
//           </div>
//           <div className='px-4 lg:px-0'>
//             <h1 className='text-[1.8rem] mt-[5rem] text-[white] font-extrabold text-center'>Why Dare Hub?</h1> {/* FIX 16: Adjusted mt for better spacing */}
//             {/* Feature Cards: Uses responsive grid */}
//             <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 items-stretch justify-center mt-[2rem] p-4 lg:p-0'>
//               {featuresData.map((feature, index) => (
//                 <FeatureCard key={index} {...feature} />
//               ))}
//             </div>
//           </div>
//         </section>

//         <hr className='border-t border-gray-700 my-8' />

//         <section id='dares'>
//           <h1 className='text-[3rem] mt-[5rem] text-[white] font-extrabold text-center'>Dares</h1> {/* FIX 17: Adjusted mt for better spacing */}
//           <div className='px-4 lg:px-0'>
//             <h2 className='text-[1.8rem] mt-[1rem] text-[white] font-extrabold text-center'>Trending Dares</h2>
//             {/* Dares Grid: Uses responsive grid */}
//             <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 wrap-anywhere mt-[1rem]'>
//               {dares.map((dare, index) => (
//                 <Dare key={index} {...dare} />
//               ))}</div>
//           </div>
//         </section>

//         <hr className='border-t border-gray-700 my-8' />

//         <section id='leaderboard'>
//           <h1 className='text-[3rem] mt-[5rem] text-[white] font-extrabold text-center'>Leaderboard</h1> {/* FIX 18: Adjusted mt for better spacing */}
//           {/* FIX 19: Made the table responsive using a wrapper and adjusted classes */}
//           <div className='overflow-x-auto w-full'>
//             <table className='m-auto border-separate border-spacing-4 w-full max-w-4xl'>
//               <caption className='text-[1.8rem] mt-[1rem] text-[white] font-extrabold text-center'>Ranking</caption>
//               <thead>
//                 <tr>
//                   <th className='py-2 px-2 sm:px-4 text-[1rem] sm:text-[1.3rem] font-extrabold bg-[#151515] text-[white] rounded-tl-lg'>#</th>
//                   <th className='py-2 px-2 sm:px-4 text-[1rem] sm:text-[1.3rem] font-extrabold bg-[#151515] text-[white]'>Picture</th>
//                   <th className='py-2 px-4 sm:px-10 text-[1rem] sm:text-[1.3rem] font-extrabold bg-[#151515] text-[white]'>Users</th>
//                   <th className='py-2 px-2 sm:px-4 text-[1rem] sm:text-[1.3rem] font-extrabold bg-[#151515] text-[white] rounded-tr-lg'>Points</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Simplified and standardized table rows for better responsiveness */}
//                 {[...Array(10)].map((_, index) => ( // Render 10 rows for example
//                   <tr key={index}>
//                     <td className='bg-[#b8b8b832] text-[white] text-[1.5rem] py-2 px-2 text-center rounded-bl-lg'>{index === 0 ? <IoMdRibbon className='text-center m-auto text-yellow-500' /> : index + 1}</td>
//                     <td className='bg-[#b8b8b832] text-[white] text-[1.5rem] py-2 px-2'><img src={index % 2 === 0 ? 'boy.png' : 'girl.png'} className='w-8 h-8 sm:w-10 sm:h-10 m-auto rounded-full' /></td>
//                     <td className='bg-[#b8b8b832] text-[white] text-[1rem] sm:text-[1.1rem] py-2 px-4 text-center'>{index % 2 === 0 ? 'Unknown Boy' : 'Unknown Girl'}</td>
//                     <td className='bg-[#b8b8b832] text-[white] text-[1rem] sm:text-[1.1rem] py-2 px-4 text-center rounded-br-lg'>{index % 2 === 0 ? 1500 : 1000}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

// export default Try





// import React from 'react'
// import * as FaIcons from 'react-icons/fa';
// import { MdLogin, MdEmojiEmotions } from 'react-icons/md';
// import { IoMdRibbon } from 'react-icons/io'
// import { RiCloseFill } from 'react-icons/ri'; // Added for Mobile Nav close button

// function Try() {

//   // ENHANCED: Added hover-scale-105 for primary interaction effects
//   const navTagsStyle = 'flex items-center w-full h-fit px-6 py-3 gap-3 text-[1.1rem] font-medium text-[#c4c4c4] hover:bg-[#323232] hover:text-[#f15ff1] cursor-pointer rounded-lg transition duration-200 hover:scale-[1.03]'

//   // --- State for Mobile Navigation ---
//   const [isNavOpen, setIsNavOpen] = React.useState(false);

//   // --- Data Definitions (Kept as is for structure) ---
//   const dares = [
//     {
//       dare: 'Eat a Spoon of Green Chili 🌶️🌶️',
//       category: 'Funny',
//       categoryBg: 'bg-[#7e1bef]',
//       points: '30 pts',
//       paragraph: 'Take a small spoon of green chili, eat it and then record and show your reaction.',
//       image: 'greenchili.png', 
//     },
//     {
//       dare: 'Laugh loudly for no reason 😂🤣',
//       category: 'Extreme',
//       categoryBg: 'bg-[#ed2bd0]',
//       points: '40 pts',
//       paragraph: 'Laugh loudly for no reason and stop suddenly & then record others reactions.',
//       image: 'laughing.png', 
//     },
//     {
//       dare: 'Compliment a random object 📦📦',
//       category: 'Silly',
//       categoryBg: 'bg-[#2af142]',
//       points: '25 pts',
//       paragraph: 'Complement random object:“Wow,what a beautiful dustbin!” Record others reaction',
//       image: 'commenting.png', 
//     },
//     {
//       dare: "Say “Happy Birthday” anyone 🥳",
//       category: 'Funny',
//       categoryBg: 'bg-[#7e1bef]',
//       points: '35 pts',
//       paragraph: "Sing “Happy Birthday” to someone even if it's not his birthday.Share reaction.",
//       image: 'birthday.png', 
//     },
//     {
//       dare: 'Give an autograph to crush ✍️✍️',
//       category: 'Extreme',
//       categoryBg: 'bg-[#ed2bd0]',
//       points: '50 pts',
//       paragraph: 'Ask your crush if he/she want your autograph.Share his/her response for this.',
//       image: 'autograph.png', 
//     },
//     {
//       dare: 'Perform Bollywood dialogue 🗣️🗣️',
//       category: 'Silly',
//       categoryBg: 'bg-[#2af142]',
//       points: '35 pts',
//       paragraph: 'Perform this dialouge : "Basanti, in kutton ko idli vada mat khilana".And Share',
//       image: 'dialouge.png', 
//     }
//   ]

//   const featuresData = [
//     {
//       icon: MdEmojiEmotions,
//       iconBg: 'bg-[#f7f75f]',
//       iconContainerBg: 'bg-[#444a2c]',
//       title: 'Daily Trending Dares',
//       description: 'In our site there are more than 1.5 thousands funny and crazy dares to do of all categories, which you will select.',
//       statValue: '⭐ 1500+',
//       statLabel: 'Dare Challenges',
//       statColor: 'text-[#f7f71b]',
//     },
//     {
//       icon: FaIcons.FaChartLine, 
//       iconBg: 'bg-[#685cf4]',
//       iconContainerBg: 'bg-[#302c4a]',
//       title: 'Increasing Users',   
//       description: 'Our site is continously reaching to the new users and the users are really enjoying it by doing funny and crazy dares.',
//       statValue: '👥 10000+',
//       statLabel: 'Active Users',
//       statColor: 'text-[#584af0]',
//     },
//     {
//       icon: IoMdRibbon,
//       iconBg: 'bg-[#ef64e6]',
//       iconContainerBg: 'bg-[#4a2c45]',
//       title: 'Achievement Badges',
//       description: 'Get the Achievement Badges by doing crazy dares and sharing the proof of doing dare through image or a video or audio.',
//       statValue: '🥇 25+',
//       statLabel: 'Badges',
//       statColor: 'text-[#ea55e0]',
//     },
//     {
//       icon: FaIcons.FaUser, 
//       iconBg: 'bg-[#5ff57d]',
//       iconContainerBg: 'bg-[#2c4a2d]',
//       title: 'Creator Profiles',
//       description: 'Creators are those who are doing dares and sharing proof publicly. Become a creator and enjoy some extra features.',
//       statValue: '👤 1000+',
//       statLabel: 'Creators',
//       statColor: 'text-[#43f566]',
//     },
//     {
//       icon: FaIcons.FaPhotoVideo, 
//       iconBg: 'bg-[#b24eec]',
//       iconContainerBg: 'bg-[#3f2c4a]',
//       title: 'Proof-First Social Media',
//       description: "Shared proofs of doing dares.This help people to see your efforts.If you didn't want to share proof that is not mandatory(Be Private).",
//       statValue: '🎥 2000+',
//       statLabel: 'Shared Proofs',
//       statColor: 'text-[#a019ef]',
//     },
//     {
//       icon: FaIcons.FaLock, 
//       iconBg: 'bg-[#f18d4f]',
//       iconContainerBg: 'bg-[#4a392c]',
//       title: 'Account Privacy',
//       description: 'Privates account will be far from public reach and achievement board and your details will also be private, if anyone visit you.',
//       statValue: '🔒 2100+',
//       statLabel: 'Private Accounts',
//       statColor: 'text-[#ef7b34]',
//     },
//   ];

//   const usageData = [
//     {
//       icon: FaIcons.FaBullseye,
//       iconBg: 'bg-[#302344]',
//       iconColor: 'text-[#9c22d5]',
//       heading: '1)Pick a Dare',
//       headingColor: 'text-[#cda0ed]',
//       subHeading: 'Choose Your Challenge',
//       paragraph: 'Choose from trending, funny, or crazy challenges',
//     },
//     {
//       icon: FaIcons.FaCamera,
//       iconBg: 'bg-[#3d4423]',
//       iconColor: 'text-[#b4d522]',
//       heading: '2)Do It & Record',
//       headingColor: 'text-[#edeca0]',
//       subHeading: 'Complete the Dare',
//       paragraph: 'Make your move and capture real proof — photo or video',
//     },
//     {
//       icon: FaIcons.FaTrophy,
//       iconBg: 'bg-[#234428]',
//       iconColor: 'text-[#22d531]',
//       heading: '3)Earn Points & Rank Up',
//       headingColor: 'text-[#a0eda6]',
//       subHeading: 'Earn Rewards',
//       paragraph: 'Get points, unlock badges, and climb the leaderboard',
//     },
//   ]
//   // --- Component Definitions ---

//   const Dare = ({dare, category, categoryBg, points, paragraph, image}) => (
//     <div className='w-full h-fit max-w-sm self-center p-6 flex flex-col items-center bg-[#1e1d1d] rounded-[20px] shadow-lg hover:shadow-xl hover:shadow-[#1e1d1d] transition duration-300 m-auto border border-[#333]'>
//       <h1 className='text-[1.5rem] whitespace-pre-wrap capitalize text-[white] font-extrabold text-center'>
//         {dare}
//       </h1>
//       <p className={`text-[#ffffff] text-[0.9rem] font-bold w-fit h-fit px-4 py-1 mt-[1rem] rounded-full ${categoryBg} shadow-md`}>
//         {category}
//       </p>
//       <p className='text-[#ffffff] text-[1.1rem] font-bold mt-[1rem]'>
//         ⭐{points}
//       </p>
//       <p className='text-[#dbd8d8] text-center text-[0.9rem] mt-[1rem] px-2'>
//         {paragraph}
//       </p>
//       {/* IMPROVEMENT: Responsive image sizing */}
//       <img src={image} className='w-full max-w-[200px] h-40 object-cover m-auto rounded-[10px] mt-[1.5rem] sm:w-60 sm:h-60 shadow-md'/>
//       {/* IMPROVEMENT: Stronger button styling */}
//       <button className='w-full max-w-[200px] h-fit py-3 px-4 rounded-[30px] bg-[#503bf0] text-[white] cursor-pointer font-bold text-[1.1rem] m-auto mt-[2rem] hover:bg-[#6c50ff] transition duration-200 shadow-lg hover:scale-[1.05]'>👀 View Dare</button>
//      </div>
//   )

//   const FeatureCard = ({ icon: Icon, iconBg, iconContainerBg, title, description, statValue, statLabel, statColor }) => (
//     <div className='flex flex-col w-full h-full py-10 px-8 mt-[1rem] rounded-[20px] bg-[#1e1e1e] justify-center items-center shadow-lg hover:shadow-xl hover:shadow-[#1e1d1d] transition duration-300 border border-[#333]'>
//       <div className={`w-fit h-fit p-3 rounded-full ${iconContainerBg} shadow-inner`}>
//         {/* IMPROVEMENT: Consistent icon size for better look */}
//         <Icon className={`w-12 h-12 p-3 rounded-full text-[#ffffff] ${iconBg}`} /> 
//       </div>
//       <h3 className='mt-[1.5rem] text-[#ffffff] text-[1.6rem] font-bold text-center'>{title}</h3>
//       <p className='text-[#a4a4a4] text-center mt-[0.6rem] text-[0.95rem]'>{description}</p>
//       {/* IMPROVEMENT: Used visible divider */}
//       <div className='mt-[2rem] w-full h-px bg-[#333]'></div> 
//       <div className='flex flex-col items-center justify-center pt-6'>
//         <p className={`text-[1.8rem] font-extrabold ${statColor}`}>{statValue}</p>
//         <p className='text-[1rem] text-[#c2c2c2] font-semibold'>{statLabel}</p>
//       </div>
//     </div>
//   );

//   const UsageCards = ({icon: Icon, headingColor, iconBg, iconColor, heading, subHeading, paragraph}) => (
//     <div className='flex flex-col w-full max-w-sm items-center'>
//       <h2 className={`text-[1.7rem] ${headingColor} font-extrabold text-center mb-4`}>{heading}</h2>
//      <div className='flex flex-col w-full h-fit p-6 rounded-[20px] bg-[#1e1e1e] justify-center items-center shadow-lg hover:shadow-xl hover:shadow-[#1e1d1d] transition duration-300 border border-[#333]'>
//        {/* IMPROVEMENT: Stronger visual for icon */}
//      <Icon className={`w-16 h-16 p-4 rounded-full ${iconBg} ${iconColor} shadow-xl`}/>
//     <h3 className='mt-[1rem] text-[#ffffff] text-[1.4rem] font-extrabold text-center'>{subHeading}</h3>
//     <p className='text-[#a4a4a4] text-center mt-2'>{paragraph}</p></div></div>
//   )


//   // --- Main Component Render ---
//   return (
//     <div className='flex flex-col lg:flex-row p-0 lg:p-10 gap-0 lg:gap-20 w-full min-h-screen bg-[#232222] relative'>
      
//       {/* Mobile Menu Button */}
//       <button 
//         className='lg:hidden fixed top-4 left-4 z-50 p-3 bg-[#503bf0] rounded-full text-white shadow-xl hover:bg-[#6c50ff] transition duration-200'
//         onClick={() => setIsNavOpen(true)}
//       >
//         <FaIcons.FaBars className='w-6 h-6'/>
//       </button>

//       {/* Navigation (Sidebar) */}
//       <nav 
//         className={`w-72 h-full fixed top-0 left-0 lg:static lg:w-fit lg:h-fit bg-[#1d1c1c] py-8 px-8 flex-col rounded-none lg:rounded-[20px] shadow-2xl z-40 transition-transform duration-300 ${isNavOpen ? 'translate-x-0 flex' : '-translate-x-full hidden lg:flex'}`}
//       >
//         <button 
//             className='lg:hidden absolute top-4 right-4 text-white hover:text-[#f15ff1]'
//             onClick={() => setIsNavOpen(false)}
//           >
//             <RiCloseFill className='w-8 h-8'/>
//           </button>
//         <div className='flex flex-col items-center mb-8'>
//           <img src='DareHubb.png' className='w-20 h-20 rounded-full m-auto shadow-lg border border-[#333]'/>
//           <p className='text-center text-white mt-[0.5rem] font-extrabold text-[1.8rem] lg:text-[2rem]'>Dare Hub</p>
//           <p className='text-[0.9rem] text-[#a4a4a4] text-center'>Dares • Proofs • Leaderboard</p>
//         </div>
//         <div className='flex flex-col gap-8'>
//           <ul className='flex gap-2 flex-col'>
//             {['home', 'darehub', 'dares', 'leaderboard', 'aboutus'].map((tag, index) => (
//               <a href={`#${tag}`} key={index} onClick={() => setIsNavOpen(false)}>
//                 <li className={`${navTagsStyle}`}>
//                   {index === 0 && <FaIcons.FaHome/>}
//                   {index === 1 && <FaIcons.FaQuestion/>}
//                   {index === 2 && <FaIcons.FaBolt/>}
//                   {index === 3 && <FaIcons.FaTrophy/>}
//                   {index === 4 && <FaIcons.FaUserAlt/>}
//                   {index === 0 ? 'Home' : index === 1 ? 'What is DareHub' : index === 2 ? 'Dares' : index === 3 ? 'Leaderboard' : 'About Us'}
//                 </li>
//               </a>
//             ))}
//           </ul>
//           <ul className='flex gap-4 flex-col mt-4'>
//             <li className='flex justify-center items-center w-full h-fit px-5 py-3 bg-[#f15ff1] rounded-[30px] text-[white] cursor-pointer text-[1.1rem] gap-2 font-extrabold hover:bg-[#d640d6] transition duration-200 shadow-lg'>
//               <FaIcons.FaUserPlus/>Sign up</li>
//             <li className='flex justify-center items-center w-full h-fit px-5 py-3 bg-[#755ff1] rounded-[30px] text-[white] cursor-pointer text-[1.1rem] gap-2 font-extrabold hover:bg-[#5a48d9] transition duration-200 shadow-lg'>
//               <MdLogin/>Login</li>
//           </ul>
//         </div>
//       </nav>

//       {/* Main Content Area */}
//       <main className='w-full px-4 lg:px-0'>

//         {/* Home Section */}
//         <section id='home' className='grid lg:grid-cols-2 grid-cols-1 py-20 lg:py-32 w-full'>
//           <div className='flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0'>
//             <h1 className='text-white font-extrabold text-[3rem] sm:text-[4rem] lg:text-[5.5rem] leading-none'>Dare Hub</h1>
//             <h2 className='text-[#dedbdb] font-bold text-[1.5rem] sm:text-[1.8rem] lg:text-[2.2rem] mt-2'>Create <span className='text-[#f15ff1]'>Connect</span> Stand Out</h2>
//             <p className='text-[#c6c4c4] mt-[1.5rem] text-[1rem] lg:text-[1.1rem] max-w-xl'>
//             The ultimate place to take bold dares, upload proof, and climb the leaderboard. Simple. Fun. Competitive.</p>
            
//             <div className='flex gap-4 sm:gap-6 flex-wrap justify-center lg:justify-start mt-[3rem]'>
//               <button className='w-fit h-fit px-8 sm:px-10 py-3 sm:py-4 rounded-[30px] cursor-pointer bg-white text-[#232222] font-bold text-[1.1rem] sm:text-[1.2rem] hover:bg-gray-200 transition duration-200 shadow-lg hover:scale-[1.05]'>
//               Get Started</button>
//               <button className='w-fit h-fit px-8 sm:px-10 py-3 sm:py-4 rounded-[30px] cursor-pointer bg-transparent border border-2 border-white text-white font-bold text-[1.1rem] sm:text-[1.2rem] hover:bg-white hover:text-[#232222] transition duration-200 shadow-lg hover:scale-[1.05]'>
//                 Explore Dares</button>
//             </div>
            
//             <div className='flex flex-wrap mt-[3rem] justify-center lg:justify-start items-center gap-6 sm:gap-8'>
//               {/* IMPROVEMENT: Added box-shadow-xl and clear colors for social icons */}
//               <div className='w-fit h-fit p-3 rounded-[10px] bg-[#331a1a] text-[#ff0000] hover:text-[white] hover:bg-[#ff0000] hover:scale-110 cursor-pointer shadow-xl' style={{transition: 'all 0.4s linear'}}>
//                 <FaIcons.FaYoutube className='w-8 h-8'/></div>
//               <div className='w-fit h-fit p-3 rounded-[10px] bg-[#331a33] text-[#d627e6] hover:text-[white] hover:bg-[#d627e6] hover:scale-110 cursor-pointer shadow-xl' style={{transition: 'all 0.4s linear'}}>
//                 <FaIcons.FaInstagram className='w-8 h-8'/></div>
//               <div className='w-fit h-fit p-3 rounded-[10px] bg-[#333333] text-[white] hover:text-[#232222] hover:bg-[white] hover:scale-110 cursor-pointer shadow-xl' style={{transition: 'all 0.4s linear'}}>
//                 <FaIcons.FaGithub className='w-8 h-8'/></div>
//               <div className='w-fit h-fit p-3 rounded-[10px] bg-[#1a3322] text-[#48db48] hover:text-[white] hover:bg-[#48db48] hover:scale-110 cursor-pointer shadow-xl' style={{transition: 'all 0.4s linear'}}>
//                 <FaIcons.FaWhatsapp className='w-8 h-8'/></div>
//             </div>
//           </div>
//           {/* IMPROVEMENT: Responsive image sizing and improved filter effect */}
//           <div className='flex justify-center items-center mt-12 lg:mt-0'>
//             <img src='DareHub12.png' className='w-64 sm:w-80 lg:w-120' style={{filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))'}}/>
//           </div>
//         </section>

//         <div className='w-full my-16 h-px bg-[#3a3a3a]'></div>

//         {/* What is Dare Hub? Section */}
//         <section id='darehub' className='py-10'>
//           <h1 className='text-[3rem] sm:text-[4rem] text-[white] font-extrabold text-center'>Dare Hub?</h1>
//           <h1 className='text-[2rem] mt-[1rem] font-extrabold text-[white] text-center'>What is Dare Hub?</h1>
//           <p className='text-[1.1rem] mt-[1rem] font-medium text-[#c6c4c4] text-center max-w-4xl m-auto px-4'>
//             Dare Hub is a platform to find/get interesting, funny and crazy dares to do.
//             In this platform you will find dares, you have to do those and have to share 
//             proof as a video/image/audio to maintain trust between users those who are using it.
//             If you have any privacy issue for sharing the proof you could skip it.
//             Here you can play Truth or Dare with your friends or random people around world.
//           </p>
          
//           <h1 className='text-[2rem] mt-[4rem] text-[white] font-extrabold text-center'>
//             How Dare Hub Works?
//           </h1>
          
//           {/* IMPROVEMENT: Uses responsive flex/wrap */}
//           <div className='flex gap-8 flex-wrap items-stretch justify-center mt-[3rem]'>
//             {usageData.map((usage, index) => (
//               <UsageCards key={index} {...usage}/>
//             ))}
//           </div>

//           <h1 className='text-[2rem] mt-[5rem] text-[white] font-extrabold text-center'>Why Dare Hub?</h1>
//           {/* IMPROVEMENT: Uses responsive grid with stretch items */}
//           <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 items-stretch justify-center mt-[3rem]'>
//             {featuresData.map((feature, index) => (
//               <FeatureCard key={index} {...feature}/>
//             ))}
//           </div>
//         </section>

//         <div className='w-full my-16 h-px bg-[#3a3a3a]'></div>

//         {/* Dares Section */}
//         <section id='dares' className='py-10'>
//           <h1 className='text-[3rem] sm:text-[4rem] text-[white] font-extrabold text-center'>Dares</h1>
//           <h2 className='text-[2rem] mt-[1rem] text-[white] font-extrabold text-center'>Trending Dares</h2>
//           {/* IMPROVEMENT: Uses responsive grid */}
//           <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 mt-[3rem]'>
//             {dares.map((dare, index) => (
//               <Dare key={index} {...dare}/>
//             ))}
//           </div>
//         </section>

//         <div className='w-full my-16 h-px bg-[#3a3a3a]'></div>

//         {/* Leaderboard Section */}
//         <section id='leaderboard' className='py-10 overflow-x-auto'>
//           <h1 className='text-[3rem] sm:text-[4rem] text-[white] font-extrabold text-center'>Leaderboard</h1>
//            <table className='border-separate border-spacing-2 sm:border-spacing-4 m-auto w-full max-w-4xl mt-8'>
//             <caption className='text-[1.8rem] mt-[1rem] text-white font-extrabold text-center mb-4'>Top DareDevils</caption>
//             <thead>
//               <tr className='bg-[#151515] rounded-lg shadow-inner'>
//                 {/* IMPROVEMENT: Adjusted padding for responsiveness */}
//                 <th className='py-3 px-4 text-[1rem] sm:text-[1.3rem] font-extrabold text-[#f15ff1] rounded-l-lg'>Pos</th>
//                 <th className='py-3 px-4 text-[1rem] sm:text-[1.3rem] font-extrabold text-[#f15ff1]'>Pic</th>
//                 <th className='py-3 px-4 text-[1rem] sm:text-[1.3rem] font-extrabold text-[#f15ff1]'>User</th>
//                 <th className='py-3 px-4 text-[1rem] sm:text-[1.3rem] font-extrabold text-[#f15ff1] rounded-r-lg'>Points</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Dynamic row rendering to avoid repetition */}
//               {[...Array(10)].map((_, index) => (
//                 <tr key={index} className={`bg-[#1e1d1d] text-white text-[1.1rem] ${index % 2 === 0 ? 'hover:bg-[#2a2a2a]' : 'hover:bg-[#2a2a2a]'} transition duration-200 shadow-md`}>
//                   <td className={`text-center py-3 ${index === 0 ? 'text-yellow-400 text-2xl font-black' : index === 1 ? 'text-gray-400 text-xl font-bold' : index === 2 ? 'text-amber-700 text-xl font-bold' : 'text-gray-500 font-bold'}`}>{index < 3 ? <IoMdRibbon className='m-auto'/> : `#${index + 1}`}</td>
//                   <td className='text-center py-3'><img src={index % 2 === 0 ? 'boy.png' : 'girl.png'} className='w-10 h-10 m-auto rounded-full border-2 border-white shadow-lg'/></td>
//                   {/* IMPROVEMENT: Adjusted px- to max-w- on table data */}
//                   <td className='text-center py-3 font-semibold max-w-[100px] sm:max-w-none truncate'>{`Unknown ${index % 2 === 0 ? 'Boy' : 'Girl'} ${index + 1}`}</td>
//                   <td className='text-center py-3 font-bold text-lg'>{1500 - (index * 50)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table> 
//         </section>
//       </main>
//     </div>
//   )
// }

// export default Try





// import React from 'react'
// import * as FaIcons from 'react-icons/fa';
// import { MdLogin, MdEmojiEmotions } from 'react-icons/md';
// import { IoMdRibbon } from 'react-icons/io'

// function Try() {
//   const navTagsStyle = 'flex justify-center items-center w-full h-fit px-6 py-2 border-[#ffffff] gap-2 text-[1.1rem] font-extrabold text-[#979696] hover:bg-[#2a2a2a] hover:text-[white] cursor-pointer hover:scale-110'

//   const dares = [
//     {
//       dare: 'Eat a Spoon of Green Chili 🌶️🌶️',
//       category: 'Funny',
//       categoryBg: 'bg-[#7e1bef]',
//       points: '30 pts',
//       paragraph: 'Take a small spoon of green chili, eat it and then record and show your reaction.',
//       image: 'greenchili.png', 
//     },
//     {
//       dare: 'Laugh loudly for no reason 😂🤣',
//       category: 'Extreme',
//       categoryBg: 'bg-[#ed2bd0]',
//       points: '40 pts',
//       paragraph: 'Laugh loudly for no reason and stop suddenly & then record others reactions.',
//       image: 'laughing.png', 
//     },
//     {
//       dare: 'Compliment a random object 📦📦',
//       category: 'Silly',
//       categoryBg: 'bg-[#2af142]',
//       points: '25 pts',
//       paragraph: 'Complement random object:"Wow,what a beautiful dustbin!" Record others reaction',
//       image: 'commenting.png', 
//     },
//     {
//       dare: "Say 'Happy Birthday' anyone 🥳",
//       category: 'Funny',
//       categoryBg: 'bg-[#7e1bef]',
//       points: '35 pts',
//       paragraph: "Sing 'Happy Birthday' to someone even if it's not his birthday.Share reaction.",
//       image: 'birthday.png', 
//     },
//     {
//       dare: 'Give an autograph to crush ✍️✍️',
//       category: 'Extreme',
//       categoryBg: 'bg-[#ed2bd0]',
//       points: '50 pts',
//       paragraph: 'Ask your crush if he/she want your autograph.Share his/her response for this.',
//       image: 'autograph.png', 
//     },
//     {
//       dare: 'Perform Bollywood dialogue 🗣️🗣️',
//       category: 'Silly',
//       categoryBg: 'bg-[#2af142]',
//       points: '35 pts',
//       paragraph: 'Perform this dialouge : "Basanti, in kutton ko idli vada mat khilana".And Share',
//       image: 'dialouge.png', 
//     }
//   ]

//   const featuresData = [
//     {
//       icon: MdEmojiEmotions,
//       iconBg: 'bg-[#f7f75f]',
//       iconContainerBg: 'bg-[#444a2c]',
//       title: 'Daily Trending Dares',
//       description: 'In our site there are more than 1.5 thousands funny and crazy dares to do of all categories, which you will select.',
//       statValue: '⭐ 1500+',
//       statLabel: 'Dare Challenges',
//       statColor: 'text-[#f7f71b]',
//     },
//     {
//       icon: FaIcons.FaChartLine, 
//       iconBg: 'bg-[#685cf4]',
//       iconContainerBg: 'bg-[#302c4a]',
//       title: 'Increasing Users',   
//       description: 'Our site is continously reaching to the new users and the users are really enjoying it by doing funny and crazy dares.',
//       statValue: '👥 10000+',
//       statLabel: 'Active Users',
//       statColor: 'text-[#584af0]',
//     },
//     {
//       icon: IoMdRibbon,
//       iconBg: 'bg-[#ef64e6]',
//       iconContainerBg: 'bg-[#4a2c45]',
//       title: 'Achievement Badges',
//       description: 'Get the Achievement Badges by doing crazy dares and sharing the proof of doing dare through image or a video or audio.',
//       statValue: '🥇 25+',
//       statLabel: 'Badges',
//       statColor: 'text-[#ea55e0]',
//     },
//     {
//       icon: FaIcons.FaUser, 
//       iconBg: 'bg-[#5ff57d]',
//       iconContainerBg: 'bg-[#2c4a2d]',
//       title: 'Creator Profiles',
//       description: 'Creators are those who are doing dares and sharing proof publicly. Become a creator and enjoy some extra features.',
//       statValue: '👤 1000+',
//       statLabel: 'Creators',
//       statColor: 'text-[#43f566]',
//     },
//     {
//       icon: FaIcons.FaPhotoVideo, 
//       iconBg: 'bg-[#b24eec]',
//       iconContainerBg: 'bg-[#3f2c4a]',
//       title: 'Proof-First Social Media',
//       description: "Shared proofs of doing dares.This help people to see your efforts.If you didn't want to share proof that is not mandatory(Be Private).",
//       statValue: '🎥 2000+',
//       statLabel: 'Shared Proofs',
//       statColor: 'text-[#a019ef]',
//     },
//     {
//       icon: FaIcons.FaLock, 
//       iconBg: 'bg-[#f18d4f]',
//       iconContainerBg: 'bg-[#4a392c]',
//       title: 'Account Privacy',
//       description: 'Privates account will be far from public reach and achievement board and your details will also be private, if anyone visit you.',
//       statValue: '🔒 2100+',
//       statLabel: 'Private Accounts',
//       statColor: 'text-[#ef7b34]',
//     },
//   ];

//   const usageData = [
//     {
//       icon: FaIcons.FaBullseye,
//       iconBg: 'bg-[#302344]',
//       iconColor: 'text-[#9c22d5]',
//       heading: '1)Pick a Dare',
//       headingColor: 'text-[#cda0ed]',
//       subHeading: 'Choose Your Challenge',
//       paragraph: 'Choose from trending, funny, or crazy challenges',
//     },
//     {
//       icon: FaIcons.FaCamera,
//       iconBg: 'bg-[#3d4423]',
//       iconColor: 'text-[#b4d522]',
//       heading: '2)Do It & Record',
//       headingColor: 'text-[#edeca0]',
//       subHeading: 'Complete the Dare',
//       paragraph: 'Make your move and capture real proof — photo or video',
//     },
//     {
//       icon: FaIcons.FaTrophy,
//       iconBg: 'bg-[#234428]',
//       iconColor: 'text-[#22d531]',
//       heading: '3)Earn Points & Rank Up',
//       headingColor: 'text-[#a0eda6]',
//       subHeading: 'Earn Rewards',
//       paragraph: 'Get points, unlock badges, and climb the leaderboard',
//     },
//   ]

//   const Dare = ({dare, category, categoryBg, points, paragraph, image}) => (
//     <div className='w-full h-fit max-w-sm self-center p-4 flex flex-col bg-[#1e1d1d] rounded-[20px] m-auto'>
//       <h1 className='text-[1.3rem] sm:text-[1.5rem] whitespace-pre-wrap capitalize text-[white] font-extrabold text-center'>
//         {dare}
//       </h1>
//       <p className={`text-[#ffffff] text-[0.9rem] font-bold w-fit h-fit px-4 py-[4px] mt-[1rem] rounded-[10px] ${categoryBg}`}>
//         {category}
//       </p>
//       <p className='text-[#ffffff] text-[1rem] font-bold mt-[1rem]'>
//         ⭐{points}
//       </p>
//       <p className='text-[#dbd8d8] text-center text-[0.8rem] mt-[1rem]'>
//         {paragraph}
//       </p>
//       <img src={image} className='w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 object-cover m-auto rounded-[10px] mt-[1rem]'/>
//       <button className='w-fit h-fit py-2 px-4 rounded-[20px] bg-[#503bf0] text-[white] cursor-pointer font-bold text-[1.1rem] m-auto mt-[1rem]'>👀 View Dare</button>
//     </div>
//   )

//   const FeatureCard = ({ icon: Icon, iconBg, iconContainerBg, title, description, statValue, statLabel, statColor }) => (
//     <div className='flex flex-col w-full h-fit py-10 px-8 mt-[1rem] rounded-[10px] bg-[#1e1e1e] justify-center items-center'>
//       <div className={`w-fit h-fit p-2 rounded-[20px] ${iconContainerBg}`}>
//         <Icon className={`w-12 h-12 sm:w-16 sm:h-16 p-3 sm:p-4 rounded-[20px] text-[#ffffff] ${iconBg}`} />
//       </div>
//       <h3 className='mt-[1.2rem] text-[#ffffff] text-[1.3rem] sm:text-[1.5rem] font-bold text-center'>{title}</h3>
//       <p className='text-[#a4a4a4] text-center mt-[0.4rem] text-sm sm:text-base'>{description}</p>
//       <hr className='mt-[1.5rem] w-4/5 h-px bg-[#a9a9a9] border-none' />
//       <div className='flex flex-col items-center justify-center'>
//         <p className={`text-[1.3rem] sm:text-[1.5rem] font-bold ${statColor}`}>{statValue}</p>
//         <p className='text-[0.8rem] sm:text-[0.9rem] text-[#c2c2c2]'>{statLabel}</p>
//       </div>
//     </div>
//   );

//   const UsageCards = ({icon: Icon, headingColor, iconBg, iconColor, heading, subHeading, paragraph}) => (
//     <div className='flex flex-col w-full max-w-sm'>
//       <h2 className={`text-[1.3rem] sm:text-[1.5rem] ${headingColor} font-bold text-center`}>{heading}</h2>
//       <div className='flex flex-col w-fit h-fit p-4 mt-[1rem] rounded-[10px] bg-[#1e1e1e] justify-center items-center'>
//         <Icon className={`w-12 h-12 sm:w-16 sm:h-16 p-3 sm:p-4 rounded-[50%] ${iconBg} ${iconColor}`}/>
//         <h3 className='mt-[0.5rem] text-[#ffffff] text-[1.1rem] sm:text-[1.3rem] font-extrabold text-center'>{subHeading}</h3>
//         <p className='text-[#a4a4a4] text-center text-sm sm:text-base'>{paragraph}</p>
//       </div>
//     </div>
//   )

//   const leaderboardData = [
//     { user: 'Unknown Boy', img: 'boy.png', points: 1500 },
//     { user: 'Unknown Girl', img: 'girl.png', points: 1000 },
//     { user: 'Unknown Boy', img: 'boy.png', points: 1500 },
//     { user: 'Unknown Girl', img: 'girl.png', points: 1000 },
//     { user: 'Unknown Boy', img: 'boy.png', points: 1500 },
//     { user: 'Unknown Girl', img: 'girl.png', points: 1000 },
//     { user: 'Unknown Boy', img: 'boy.png', points: 1500 },
//     { user: 'Unknown Girl', img: 'girl.png', points: 1000 },
//     { user: 'Unknown Boy', img: 'boy.png', points: 1500 },
//     { user: 'Unknown Girl', img: 'girl.png', points: 1000 },
//   ];

//   return (
//     <div className='flex flex-col lg:flex-row p-4 lg:p-10 gap-4 lg:gap-20 w-full h-full bg-[#232222]'>
//       <nav className='w-fit h-fit lg:sticky lg:top-[6%] hidden lg:flex bg-[#1d1c1c] py-8 px-12 flex-col rounded-[20px]'>
//         <div className='flex flex-col'>
//           <img src='DareHubb.png' className='w-20 h-20 rounded-[50%] m-auto'/>
//           <p className='text-center text-white mt-[0.5rem] font-extrabold lg:text-[2rem]'>Dare Hub</p>
//           <p className='text-[0.8rem] text-[gray] text-center'>Dares • Proofs • Leaderboard</p>
//         </div>
//         <div className='flex flex-col gap-6'>
//           <ul className='flex gap-4 flex-col mt-[1rem]'>
//             <a href='#home'>
//               <li className={`${navTagsStyle}`} style={{transition: 'all 0.2s linear'}}>
//               <FaIcons.FaHome/>Home</li></a>
//             <a href='#darehub'>
//               <li className={`${navTagsStyle} whitespace-nowrap`} style={{transition: 'all 0.2s linear'}}>
//               <FaIcons.FaQuestion/>What is DareHub</li></a>
//             <a href='#dares'>
//               <li className={`${navTagsStyle}`} style={{transition: 'all 0.2s linear'}}>
//               <FaIcons.FaBolt/>Dares</li></a>
//             <a href='#leaderboard'>
//               <li className={`${navTagsStyle}`} style={{transition: 'all 0.2s linear'}}>
//               <FaIcons.FaTrophy/>Leaderboard</li></a>
//             <a href='#home'><li className={`${navTagsStyle}`} style={{transition: 'all 0.2s linear'}}>
//               <FaIcons.FaUserAlt/>About Us</li></a>
//           </ul>
//           <ul className='flex gap-4 flex-col'>
//             <li className='flex justify-center items-center w-full h-fit px-5 py-2 bg-[#f15ff1] rounded-[10px] text-[white] cursor-pointer text-[1.1rem] gap-2 font-extrabold'>
//               <FaIcons.FaUserPlus/>Sign up</li>
//             <li className='flex justify-center items-center w-full h-fit px-5 py-2 bg-[#755ff1] rounded-[10px] text-[white] cursor-pointer text-[1.1rem] gap-2 font-extrabold'>
//               <MdLogin/>Login</li>
//           </ul>
//         </div>
//       </nav>
      
//       <main className='flex-1 min-w-0'>
//         <section id='home' className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 py-10 sm:py-20 w-full'>
//           <div>
//             <h1 className='text-white font-extrabold text-[2.5rem] sm:text-[3rem] lg:text-[4.5rem]'>Dare Hub</h1>
//             <h2 className='text-[#dedbdb] font-bold text-[1.1rem] sm:text-[1.5rem] lg:text-[1.8rem]'>Create Connect Stand Out</h2>
//             <p className='text-[#c6c4c4] mt-[1rem] text-[0.85rem] sm:text-[1rem] lg:text-[1.1rem] whitespace-break-spaces'>
//             The ultimate place to take bold dares, upload proof, and climb the leaderboard. Simple. Fun. Competitive.</p>
//             <div className='flex gap-4 sm:gap-6 flex-wrap'>
//               <button className='w-fit h-fit mt-[2rem] sm:mt-[3rem] px-6 sm:px-10 py-3 sm:py-4 rounded-[20px] cursor-pointer bg-[white] font-bold text-[1rem] sm:text-[1.2rem]'>
//               Get Started</button>
//               <button className='w-fit h-fit mt-[2rem] sm:mt-[3rem] px-6 sm:px-10 py-3 sm:py-4 rounded-[20px] cursor-pointer bg-[transparent] border border-[white] border-solid text-[white] font-bold text-[1rem] sm:text-[1.2rem]'>
//                 Explore Dares</button>
//             </div>
//             <div className='flex flex-wrap mt-[2rem] justify-center items-center gap-4 sm:gap-8'>
//               <div className='w-fit h-fit p-2 rounded-[10px] bg-[#513535] text-[red] hover:text-[white] hover:bg-[red] hover:scale-110 cursor-pointer' 
//               style={{transition: 'all 0.4s linear'}}>
//                 <FaIcons.FaYoutube className='w-6 h-6 sm:w-8 sm:h-8'/></div>
//               <div className='w-fit h-fit p-2 rounded-[10px] bg-[#4f3551] text-[#d627e6] hover:text-[white] hover:bg-[#d627e6]  hover:scale-110 cursor-pointer' 
//               style={{transition: 'all 0.4s linear'}}>
//                 <FaIcons.FaInstagram className='w-6 h-6 sm:w-8 sm:h-8'/></div>
//               <div className='w-fit h-fit p-2 rounded-[10px] bg-[#464444] text-[black] hover:text-[white] hover:bg-[black] hover:scale-110 cursor-pointer' 
//               style={{transition: 'all 0.4s linear'}}>
//                 <FaIcons.FaGithub className='w-6 h-6 sm:w-8 sm:h-8'/></div>
//               <div className='w-fit h-fit p-2 rounded-[10px] bg-[#35513c] text-[#48db48] hover:text-[white] hover:bg-[#48db48] hover:scale-110 cursor-pointer' 
//               style={{transition: 'all 0.4s linear'}}>
//                 <FaIcons.FaWhatsapp className='w-6 h-6 sm:w-8 sm:h-8'/></div>
//             </div>
//           </div>
//           <div className='flex justify-center items-center'>
//             <img src='DareHub12.png' className='w-64 sm:w-80 lg:w-full max-w-md' style={{filter: 'drop-shadow(5px 5px 10px white)'}}/>
//           </div>
//         </section>
        
//         <section id='darehub'>
//           <div>
//             <h1 className='text-[2.5rem] sm:text-[3rem] mt-[5rem] sm:mt-[9rem] text-[white] font-extrabold text-center'>Dare Hub?</h1>
//             <h1 className='text-[1.5rem] sm:text-[2rem] mt-[2rem] font-extrabold text-[white] text-center'>What is Dare Hub?</h1>
//             <p className='text-[0.95rem] sm:text-[1.1rem] mt-[0.5rem] font-bold text-[gray] text-center max-w-4xl m-auto px-4'>
//               Dare Hub is a platform to find/get interesting, funny and crazy dares to do.
//               In this platform you will find dares, you have to do those and have to share 
//               proof as a video/image/audio to maintain trust between users those who are using it.
//               If you have any privacy issue for sharing the proof you could skip it.
//               Here you can play Truth or Dare with your friends or random people around world.
//             </p>
//             <h1 className='text-[1.5rem] sm:text-[1.8rem] mt-[2rem] text-[white] font-extrabold text-center'>
//               How Dare Hub Works?
//             </h1>
          
//             <div className='flex gap-4 flex-wrap items-center justify-center mt-[2rem] px-4'>
//               {usageData.map((usage, index) => (
//                 <UsageCards key={index} {...usage}/>
//               ))}
//             </div>
//           </div>
//           <div>
//             <h1 className='text-[1.5rem] sm:text-[1.8rem] mt-[2.5rem] text-[white] font-extrabold text-center'>Why Dare Hub?</h1>
//             <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 items-stretch justify-center mt-[2rem] p-4 lg:p-0'>
//               {featuresData.map((feature, index) => (
//                 <FeatureCard key={index} {...feature}/>
//               ))}
//             </div>
//           </div>
//         </section>
        
//         <section id='dares'>
//           <h1 className='text-[2.5rem] sm:text-[3rem] mt-[5rem] sm:mt-[9rem] text-[white] font-extrabold text-center'>Dares</h1>
//           <div>
//             <h2 className='text-[1.5rem] sm:text-[1.8rem] mt-[1rem] text-[white] font-extrabold text-center'>Trending Dares</h2>
//             <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mt-[1rem]'>
//               {dares.map((dare, index) => (
//                 <Dare key={index} {...dare}/>
//               ))}
//             </div>            
//           </div>
//         </section>
        
//         <section id='leaderboard'>
//           <h1 className='text-[2.5rem] sm:text-[3rem] mt-[5rem] sm:mt-[9rem] text-[white] font-extrabold text-center'>Leaderboard</h1>
//           <h2 className='text-[1.5rem] sm:text-[1.8rem] mt-[1rem] text-[white] font-extrabold text-center'>Ranking</h2>
          
//           <div className='overflow-x-auto mt-[2rem]'>
//             <table className='w-full max-w-4xl m-auto border-collapse'>
//               <thead>
//                 <tr>
//                   <th className='px-3 sm:px-6 py-3 text-[1rem] sm:text-[1.3rem] font-extrabold bg-[#151515] text-[white]'>Position</th>
//                   <th className='px-3 sm:px-6 py-3 text-[1rem] sm:text-[1.3rem] font-extrabold bg-[#151515] text-[white]'>Picture</th>
//                   <th className='px-3 sm:px-6 py-3 text-[1rem] sm:text-[1.3rem] font-extrabold bg-[#151515] text-[white]'>Users</th>
//                   <th className='px-3 sm:px-6 py-3 text-[1rem] sm:text-[1.3rem] font-extrabold bg-[#151515] text-[white]'>Points</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {leaderboardData.map((entry, index) => (
//                   <tr key={index}>
//                     <td className='px-3 sm:px-6 py-3 bg-[#b8b8b832] text-[white] text-center'>
//                       <IoMdRibbon className='text-[1.5rem] sm:text-[2rem] m-auto'/>
//                     </td>
//                     <td className='px-3 sm:px-6 py-3 bg-[#b8b8b832] text-[white] text-center'>
//                       <img src={entry.img} className='w-8 h-8 sm:w-10 sm:h-10 m-auto rounded-full'/>
//                     </td>
//                     <td className='px-3 sm:px-6 py-3 bg-[#b8b8b832] text-[white] text-[0.9rem] sm:text-[1.1rem] text-center'>
//                       {entry.user}
//                     </td>
//                     <td className='px-3 sm:px-6 py-3 bg-[#b8b8b832] text-[white] text-[0.9rem] sm:text-[1.1rem] text-center'>
//                       {entry.points}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }

// export default Try














import * as FaIcons from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';

function Try() {
// Define navTagsStyle outside of the components if it's not passed as a prop
// I will define a basic one here for the component to be runnable/valid
const navTagsStyle = 'flex items-center gap-3 text-white cursor-pointer hover:text-[#f15ff1] font-bold text-[1rem] py-2';

// --- Placeholder Data (Assuming these are defined elsewhere) ---
const usageData = [
  { icon: FaIcons.FaLightbulb, headingColor: 'text-[#f1b35f]', iconBg: 'bg-[#5e4835]', iconColor: 'text-[#f1b35f]', heading: 'Get a Dare', subHeading: 'Choose or be given a challenge.', paragraph: 'Users can browse or be assigned a random dare based on category and difficulty.' },
  { icon: FaIcons.FaCameraRetro, headingColor: 'text-[#f15f7b]', iconBg: 'bg-[#5e353f]', iconColor: 'text-[#f15f7b]', heading: 'Upload Proof', subHeading: 'Record your completion.', paragraph: 'Capture a video or photo as proof of completing the dare. Maintain authenticity.' },
  { icon: FaIcons.FaTrophy, headingColor: 'text-[#5ff1c3]', iconBg: 'bg-[#355e4e]', iconColor: 'text-[#5ff1c3]', heading: 'Climb Leaderboard', subHeading: 'Earn points and rank up.', paragraph: 'Points are awarded upon verification, pushing you up the global leaderboard.' },
];

const featuresData = [
  { icon: FaIcons.FaBolt, iconBg: 'bg-[#ff5733]', iconContainerBg: 'bg-[#3b2721]', title: 'High-Impact Dares', description: 'Challenges that are guaranteed to make a story worth telling.', statValue: '1000+', statLabel: 'Unique Dares', statColor: 'text-[#ff5733]' },
  { icon: FaIcons.FaShieldAlt, iconBg: 'bg-[#33c9ff]', iconContainerBg: 'bg-[#21353b]', title: 'Safety & Trust', description: 'Verified proof system to ensure fair play and honest competition.', statValue: '99%', statLabel: 'Verification Rate', statColor: 'text-[#33c9ff]' },
  { icon: FaIcons.FaUsers, iconBg: 'bg-[#7bff33]', iconContainerBg: 'bg-[#2b3b21]', title: 'Community & Connect', description: 'Connect with a global community of daredevils and cheer them on.', statValue: '50K+', statLabel: 'Active Users', statColor: 'text-[#7bff33]' },
];

const dares = [
  { dare: 'greenchili', category: 'Creative', categoryBg: 'bg-pink-600', points: 150, paragraph: 'Record a video of yourself performing a minute-long dance to a random song genre selected by the community.', image: 'greenchili.png' },
  { dare: 'Random Act of Kindness', category: 'Social', categoryBg: 'bg-blue-600', points: 50, paragraph: 'Perform a selfless act for a stranger and capture their reaction (with permission). Blur faces for privacy.', image: 'laughing.png' },
  { dare: 'The Plank Challenge', category: 'Physical', categoryBg: 'bg-green-600', points: 250, paragraph: 'Hold a perfect plank for a full 5 minutes and record it as proof. No shaking allowed!', image: 'commenting.png' },
];
// --- End Placeholder Data ---


const Dare = ({dare, category, categoryBg, points, paragraph, image}) => (
  // Change w-[80%] to w-full and add max-w-sm to constrain it on larger screens
  <div className='w-full h-fit max-w-sm self-center p-4 flex flex-col bg-[#1e1d1d] rounded-[20px] m-auto'> 
    <h1 className='text-[1.5rem] whitespace-pre-wrap capitalize text-[white] font-extrabold text-center'>
      {dare}
    </h1>
    <p className={`text-[#ffffff] text-[0.9rem] font-bold w-fit h-fit px-4 py-[4px] mt-[1rem] rounded-[10px] ${categoryBg}`}>
      {category}
    </p>
    <p className='text-[#ffffff] text-[1rem] font-bold mt-[1rem]'>
      ⭐{points}
    </p>
    <p className='text-[#dbd8d8] text-center text-[0.8rem] mt-[1rem]'>
      {paragraph}
    </p>
    {/* Adjusted image sizing to be more fluid but contained */}
    <img src={image} className='w-full max-w-[200px] h-40 object-cover m-auto rounded-[10px] mt-[1rem] sm:w-60 sm:h-60'/> 
    <button className='w-fit h-fit py-2 px-4 rounded-[20px] bg-[#503bf0] text-[white] cursor-pointer font-bold text-[1.1rem] m-auto mt-[1rem] '>👀 View Dare</button>
   </div>
)

const FeatureCard = ({ icon: Icon, iconBg, iconContainerBg, title, description, statValue, statLabel, statColor }) => (
  // Change w-[80%] to w-full and let the grid/flex layout handle max width/spacing
  <div className='flex flex-col w-full h-fit py-10 px-8 mt-[1rem] rounded-[10px] bg-[#1e1e1e] justify-center items-center'> 
    <div className={`w-fit h-fit p-2 rounded-[20px] ${iconContainerBg}`}>
      <Icon className={`w-18 h-18 p-4 rounded-[20px] text-[#ffffff] ${iconBg}`} />
    </div>
    <h3 className='mt-[1.2rem] text-[#ffffff] text-[1.5rem] font-bold text-center'>{title}</h3>
    <p className='text-[#a4a4a4] text-center mt-[0.4rem]'>{description}</p>
    {/* Adjusted hr to be w-4/5 for better look on small screens */}
    <hr className=' mt-[1.5rem] w-4/5 h-px bg-[#a9a9a9] border-none' /> 
    <div className='flex flex-col items-center justify-center'>
      <p className={`text-[1.5rem] font-bold ${statColor}`}>{statValue}</p>
      <p className='text-[0.9rem] text-[#c2c2c2]'>{statLabel}</p>
    </div>
  </div>
);

const UsageCards = ({icon: Icon, headingColor, iconBg, iconColor, heading, subHeading, paragraph}) => (
  // Change w-[80%] to w-full. Add max-w-sm to constrain it inside the flex/grid container
  <div className='flex flex-col w-full max-w-sm'> 
    <h2 className={`text-[1.5rem] ${headingColor} font-bold text-center`}>{heading}</h2>
   <div className='flex flex-col w-full h-fit p-4 mt-[1rem] rounded-[10px] bg-[#1e1e1e] justify-center items-center'> 
    <Icon className={`w-15 h-15 p-4 rounded-[50%] ${iconBg} ${iconColor}`}/>
  <h3 className='mt-[0.5rem] text-[#ffffff] text-[1.3rem] font-extrabold text-center'>{subHeading}</h3>
  <p className='text-[#a4a4a4] text-center'>{paragraph}</p></div></div>
)

  return (
    // Adjusted padding for small screens, kept large padding for big screens
    <div className='flex flex-col lg:flex-row p-4 lg:p-10 gap-4 lg:gap-20 w-full h-full bg-[#232222]'> 
      {/* NAV BAR:
        - hidden by default, shown on lg screens
        - uses 'fixed' on mobile (not used here) or 'sticky' on desktop
        - lg:w-fit to only take up necessary space on large screens
      */}
      <nav className='lg:w-fit h-fit lg:sticky lg:top-[6%] hidden lg:flex bg-[#1d1c1c] py-8 px-12 flex-col rounded-[20px]'> 
        <div className='flex flex-col'>
          <img src='DareHubb.png' className='w-25 rounded-[50%] m-auto'/>
          <p className='text-center text-white mt-[0.5rem] font-extrabold text-[1.5rem] lg:text-[2rem]'>Dare Hub</p>
          <p className='text-[0.8rem] text-[gray] text-center'>Dares • Proofs • Leaderboard</p>
        </div>
        <div className='flex flex-col gap-6'>
          <ul className='flex gap-4 flex-col mt-[1rem]'>
            <a href='#home'>
              <li className={`${navTagsStyle}`} style={{transition: 'all 0.2s linear'}}>
              <FaIcons.FaHome/>Home</li></a>
            <a href='#darehub'>
              <li className={`${navTagsStyle} whitespace-nowrap`} style={{transition: 'all 0.2s linear'}}>
              <FaIcons.FaQuestion/>What is DareHub</li></a>
            <a href='#dares'>
              <li className={`${navTagsStyle}`} style={{transition: 'all 0.2s linear'}}>
              <FaIcons.FaBolt/>Dares</li></a>
            <a href='#leaderboard'>
              <li className={`${navTagsStyle}`} style={{transition: 'all 0.2s linear'}}>
              <FaIcons.FaTrophy/>Leaderboard</li></a>
            <a href='#home'><li className={`${navTagsStyle}`} style={{transition: 'all 0.2s linear'}}>
              <FaIcons.FaUserAlt/>About Us</li></a>
          </ul>
          <ul className='flex gap-4 flex-col'>
            <li className='flex justify-center items-center w-full h-fit px-5 py-2 bg-[#f15ff1] rounded-[10px] text-[white] cursor-pointer text-[1.1rem] gap-2 font-extrabold'>
              <FaIcons.FaUserPlus/>Sign up</li>
            <li className='flex justify-center items-center w-full h-fit px-5 py-2 bg-[#755ff1] rounded-[10px] text-[white] cursor-pointer text-[1.1rem] gap-2 font-extrabold'>
              <MdLogin/>Login</li>
          </ul>
        </div>
      </nav>
      {/* MAIN CONTENT AREA */}
      <main className='w-full'> 
        <section id='home' className='grid lg:grid-cols-2 grid-cols-1 py-10 w-full'>
          <div className='flex flex-col items-center lg:items-start text-center lg:text-left'> 
          <h1 className='text-white font-extrabold text-[2.5rem] sm:text-[3rem] lg:text-[4.5rem]'>Dare Hub</h1>
          <h2 className='text-[#dedbdb] font-bold text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem]'>Create Connect Stand Out</h2>
          <p className='text-[#c6c4c4] mt-[1rem] text-[0.9rem] lg:text-[1.1rem] whitespace-break-spaces px-4 lg:px-0'> 
          The ultimate place to take bold dares, upload proof, and climb the leaderboard. Simple. Fun. Competitive.</p>
          <div className='flex gap-4 sm:gap-6 flex-wrap justify-center lg:justify-start'> 
          <button className='w-fit h-fit mt-[3rem] px-6 sm:px-10 py-3 sm:py-4 rounded-[20px] cursor-pointer bg-[white] font-bold text-[1rem] sm:text-[1.2rem]'>
          Get Started</button>
          <button className='w-fit h-fit mt-[3rem] px-6 sm:px-10 py-3 sm:py-4 rounded-[20px] cursor-pointer bg-[transparent] border border-[white] border-solid text-[white] font-bold text-[1rem] sm:text-[1.2rem]'>
            Explore Dares</button></div>
          <div className='flex flex-wrap mt-[2rem] justify-center lg:justify-start items-center gap-6 sm:gap-8'>
            {/* Social Icons - Looks fine, just ensuring consistency */}
            <div className='w-fit h-fit p-2 rounded-[10px] bg-[#513535] text-[red] hover:text-[white] hover:bg-[red] hover:scale-110 cursor-pointer' 
            style={{transition: 'all 0.4s linear'}}>
              <FaIcons.FaYoutube className='w-7 h-7 sm:w-8 sm:h-8'/></div>
            <div className='w-fit h-fit p-2 rounded-[10px] bg-[#4f3551] text-[#d627e6] hover:text-[white] hover:bg-[#d627e6] hover:scale-110 cursor-pointer' 
            style={{transition: 'all 0.4s linear'}}>
              <FaIcons.FaInstagram className='w-7 h-7 sm:w-8 sm:h-8'/></div>
            <div className='w-fit h-fit p-2 rounded-[10px] bg-[#464444] text-[black] hover:text-[white] hover:bg-[black] hover:scale-110 cursor-pointer' 
            style={{transition: 'all 0.4s linear'}}>
              <FaIcons.FaGithub className='w-7 h-7 sm:w-8 sm:h-8'/></div>
            <div className='w-fit h-fit p-2 rounded-[10px] bg-[#35513c] text-[#48db48] hover:text-[white] hover:bg-[#48db48] hover:scale-110 cursor-pointer' 
            style={{transition: 'all 0.4s linear'}}>
              <FaIcons.FaWhatsapp className='w-7 h-7 sm:w-8 sm:h-8'/></div>
          </div>
        </div>
        <div className='flex justify-center items-center mt-10 lg:mt-0'> 
          {/* Adjusted image sizing to prevent overflow on small screens */}
          <img src='DareHub12.png' className='w-60 sm:w-80 lg:w-120' style={{filter: 'drop-shadow(5px 5px 10px white)'}}/>
          </div>
        </section>
        
        <hr className='border-t border-gray-700 my-8' />

        <section id='darehub'>
          <div className='px-4 lg:px-0'> 
          <h1 className='text-[3rem] mt-[5rem] text-[white] font-extrabold text-center'>Dare Hub?</h1>
          <h1 className='text-[2rem] mt-[2rem] font-extrabold text-[white] text-center'>What is Dare Hub?</h1>
          <p className='text-[1.1rem] mt-[0.5rem] font-bold text-[gray] text-center max-w-4xl m-auto'> 
            Dare Hub is a platform to find/get interesting, funny and crazy dares to do.
            In this platform you will find dares, you have to do those and have to share 
            proof as a video/image/audio to maintain trust between users those who are using it.
            If you have any privacy issue for sharing the proof you could skip it.
            Here you can play Truth or Dare with your friends or random people around world.
            </p>
          <h1 className='text-[1.8rem] mt-[2rem] text-[white] font-extrabold text-center'>
            How Dare Hub Works?
            </h1>
          
          {/* Usage Cards: Now uses a responsive grid/flex and lets cards take full width, constrained by max-w-sm */}
          <div className='flex gap-4 flex-wrap items-center justify-center mt-[2rem]'>
            {usageData.map((usage, index) => (
              <UsageCards key={index} {...usage}/>
            ))}
          </div>
          </div>
          <div className='px-4 lg:px-0'> 
            <h1 className='text-[1.8rem] mt-[5rem] text-[white] font-extrabold text-center'>Why Dare Hub?</h1>
            {/* Feature Cards: Uses a responsive grid */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 items-stretch justify-center mt-[2rem] p-4 lg:p-0'> 
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature}/>
          ))}
        </div>
          </div>
        </section>

        <hr className='border-t border-gray-700 my-8' />
        
        <section id='dares'>
          <h1 className='text-[3rem] mt-[5rem] text-[white] font-extrabold text-center'>Dares</h1>
          <div className='px-4 lg:px-0'> 
            <h2 className='text-[1.8rem] mt-[1rem] text-[white] font-extrabold text-center'>Trending Dares</h2>
            {/* Dares: Uses a responsive grid, cards are max-w-sm */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 wrap-anywhere mt-[1rem]'> 
              {dares.map((dare, index) => (
              <Dare key={index} {...dare}/>
            ))}</div> 
          </div>
        </section>
      </main>
    </div>
  );
}

export default Try