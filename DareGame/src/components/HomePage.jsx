import React from 'react'
import * as FaIcons from 'react-icons/fa';
import { MdLogin, MdEmojiEmotions } from 'react-icons/md';
import { IoMdRibbon } from 'react-icons/io'
import { NavHashLink } from 'react-router-hash-link'



function HomePage() {


  const navTagsStyle = 'flex justify-center items-center w-full h-fit px-6 py-2 border-[#ffffff] gap-2 text-[1.1rem] font-extrabold text-[#979696] hover:bg-[#2a2a2a] hover:text-[white] cursor-pointer hover:scale-110'

  const dares = [
    {
      dare: 'Eat a Spoon of Green Chili 🌶️🌶️',
      category: 'Funny',
      categoryBg: 'bg-[#7e1bef]',
      points: '30 pts',
      paragraph: 'Take a small spoon of green chili, eat it and then record and show your reaction.',
      image: 'greenchili.png', 
    },
    {
      dare: 'Laugh loudly for no reason 😂🤣',
      category: 'Extreme',
      categoryBg: 'bg-[#ed2bd0]',
      points: '40 pts',
      paragraph: 'Laugh loudly for no reason and stop suddenly & then record others reactions.',
      image: 'laughing.png', 
    },
    {
      dare: 'Compliment a random object 📦📦',
      category: 'Silly',
      categoryBg: 'bg-[#2af142]',
      points: '25 pts',
      paragraph: 'Complement random object:“Wow,what a beautiful dustbin!” Record others reaction',
      image: 'commenting.png', 
    },
    {
      dare: "Say “Happy Birthday” anyone 🥳",
      category: 'Funny',
      categoryBg: 'bg-[#7e1bef]',
      points: '35 pts',
      paragraph: "Sing “Happy Birthday” to someone even if it's not his birthday.Share reaction.",
      image: 'birthday.png', 
    },
    {
      dare: 'Give an autograph to crush ✍️✍️',
      category: 'Extreme',
      categoryBg: 'bg-[#ed2bd0]',
      points: '50 pts',
      paragraph: 'Ask your crush if he/she want your autograph.Share his/her response for this.',
      image: 'autograph.png', 
    },
    {
      dare: 'Perform Bollywood dialogue 🗣️🗣️',
      category: 'Silly',
      categoryBg: 'bg-[#2af142]',
      points: '35 pts',
      paragraph: 'Perform this dialouge : "Basanti, in kutton ko idli vada mat khilana".And Share',
      image: 'dialouge.png', 
    }
  ]

  const featuresData = [
  {
    icon: MdEmojiEmotions,
    iconBg: 'bg-[#ef2b2b]',
    iconContainerBg: 'bg-[#432e2e]',
    title: 'Daily Trending Dares',
    description: 'In our site there are more than 1.5 thousands funny and crazy dares to do of all categories, which you will select.',
    statValue: '⭐ 1500+',
    statLabel: 'Dare Challenges',
    statColor: 'text-[#f01212]',
  },
  {
    icon: FaIcons.FaChartLine, 
    iconBg: 'bg-[#685cf4]',
    iconContainerBg: 'bg-[#302c4a]',
    title: 'Increasing Users',   
    description: 'Our site is continously reaching to the new users and the users are really enjoying it by doing funny and crazy dares.',
    statValue: '👥 10000+',
    statLabel: 'Active Users',
    statColor: 'text-[#584af0]',
  },
  {
    icon: IoMdRibbon,
    iconBg: 'bg-[#ef64e6]',
    iconContainerBg: 'bg-[#4a2c45]',
    title: 'Achievement Badges',
    description: 'Get the Achievement Badges by doing crazy dares and sharing the proof of doing dare through image or a video or audio.',
    statValue: '🥇 25+',
    statLabel: 'Badges',
    statColor: 'text-[#ea55e0]',
  },
  {
    icon: FaIcons.FaUser, 
    iconBg: 'bg-[#5ff57d]',
    iconContainerBg: 'bg-[#2c4a2d]',
    title: 'Creator Profiles',
    description: 'Creators are those who are doing dares and sharing proof publicly. Become a creator and enjoy some extra features.',
    statValue: '👤 1000+',
    statLabel: 'Creators',
    statColor: 'text-[#43f566]',
  },
  {
    icon: FaIcons.FaPhotoVideo, 
    iconBg: 'bg-[#b24eec]',
    iconContainerBg: 'bg-[#3f2c4a]',
    title: 'Proof-First Social Media',
    description: "Shared proofs of doing dares.This help people to see your efforts.If you didn't want to share proof that is not mandatory(Be Private).",
    statValue: '🎥 2000+',
    statLabel: 'Shared Proofs',
    statColor: 'text-[#a019ef]',
  },
  {
    icon: FaIcons.FaLock, 
    iconBg: 'bg-[#f18d4f]',
    iconContainerBg: 'bg-[#4a392c]',
    title: 'Account Privacy',
    description: 'Privates account will be far from public reach and achievement board and your details will also be private, if anyone visit you.',
    statValue: '🔒 2100+',
    statLabel: 'Private Accounts',
    statColor: 'text-[#ef7b34]',
  },
];

const usageData = [
  {
    icon: FaIcons.FaBullseye,
    iconBg: 'bg-[#302344]',
    iconColor: 'text-[#9c22d5]',
    heading: '1)Pick a Dare',
    headingColor: 'text-[#cda0ed]',
    subHeading: 'Choose Your Challenge',
    paragraph: 'Choose from trending, funny, or crazy challenges',
  },
  {
    icon: FaIcons.FaCamera,
    iconBg: 'bg-[#3d4423]',
    iconColor: 'text-[#b4d522]',
    heading: '2)Do It & Record',
    headingColor: 'text-[#edeca0]',
    subHeading: 'Complete the Dare',
    paragraph: 'Make your move and capture real proof — photo or video',
  },
  {
    icon: FaIcons.FaTrophy,
    iconBg: 'bg-[#234428]',
    iconColor: 'text-[#22d531]',
    heading: '3)Earn Points & Rank Up',
    headingColor: 'text-[#a0eda6]',
    subHeading: 'Earn Rewards',
    paragraph: 'Get points, unlock badges, and climb the leaderboard',
  },
]

const Dare = ({dare, category, categoryBg, points, paragraph, image}) => (
  <div className='w-full h-fit max-w-sm self-center p-4 flex flex-col bg-[#1e1d1d] rounded-[20px] m-auto'>
    <h1 className='text-[1.5rem] whitespace-pre-wrap capitalize text-[white] font-extrabold text-center'>
      {dare}
    </h1>
    <div className='flex justify-between'><p className={`text-[#ffffff] text-[0.9rem] font-bold w-fit h-fit px-4 py-[4px] mt-[1rem] rounded-[10px] ${categoryBg}`}>
      {category}
    </p>
    <p className='text-[#ffffff] text-[1rem] font-bold mt-[1rem]'>
      ⭐{points}
    </p></div>
    <p className='text-[#dbd8d8] text-center text-[0.8rem] mt-[1rem]'>
      {paragraph}
    </p>
    <img src={image} className='lg:w-60 lg:h-60 w-40 h-40 object-cover m-auto rounded-[10px] mt-[1rem]'/>
    <button className='w-fit h-fit py-2 px-4 rounded-[20px] bg-[#503bf0] text-[white] cursor-pointer font-bold text-[1.1rem] m-auto mt-[1rem] '>👀 View Dare</button>
   </div>
)

const FeatureCard = ({ icon: Icon, iconBg, iconContainerBg, title, description, statValue, statLabel, statColor }) => (
  <div className='flex flex-col w-full h-fit py-10 px-8 mt-[1rem] rounded-[10px] bg-[#1e1e1e] justify-center items-center'>
    <div className={`w-fit h-fit p-2 rounded-[20px] ${iconContainerBg}`}>
      <Icon className={`w-18 h-18 p-4 rounded-[20px] text-[#ffffff] ${iconBg}`} />
    </div>
    <h3 className='mt-[1.2rem] text-[#ffffff] text-[1.5rem] font-bold text-center'>{title}</h3>
    <p className='text-[#a4a4a4] text-center mt-[0.4rem]'>{description}</p>
    <hr className='mt-[1.5rem] w-4/5 h-px bg-[#a9a9a9] border-none' />
    <div className='flex flex-col items-center justify-center'>
      <p className={`text-[1.5rem] font-bold ${statColor}`}>{statValue}</p>
      <p className='text-[0.9rem] text-[#c2c2c2]'>{statLabel}</p>
    </div>
  </div>
);

const UsageCards = ({icon: Icon, headingColor, iconBg, iconColor, heading, subHeading, paragraph}) => (
  <div className='flex flex-col w-full max-w-sm'>
      <h2 className={`text-[1.5rem] ${headingColor} font-bold text-center`}>{heading}</h2>
   <div className='flex flex-col w-fit h-fit p-4 mt-[1rem] rounded-[10px] bg-[#1e1e1e] justify-center items-center'>
   <Icon className={`w-15 h-15 p-4 rounded-[50%] ${iconBg} ${iconColor}`}/>
  <h3 className='mt-[0.5rem] text-[#ffffff] text-[1.3rem] font-extrabold text-center'>{subHeading}</h3>
  <p className='text-[#a4a4a4] text-center'>{paragraph}</p></div></div>
)

  return (
    <div className='flex flex-col lg:flex-row p-4 lg:p-10 gap-4 lg:gap-20 w-full h-full bg-[#232222]'>
      <nav className='w-fit h-fit lg:sticky lg:top-[6%] hidden lg:flex bg-[#1d1c1c] py-8 px-12 flex-col rounded-[20px]'>
        <div className='flex flex-col'>
          <img src='DareHubb.png' className='w-25 rounded-[50%] m-auto'/>
          <p className='text-center text-white mt-[0.5rem] font-extrabold lg:text-[2rem]'>Dare Hub</p>
          <p className='text-[0.8rem] text-[gray] text-center'>Dares • Proofs • Leaderboard</p>
        </div>
        <div className='flex flex-col gap-6'>
          <ul className='flex gap-4 flex-col mt-[1rem]'>
            <a href='#home'>
              <li className={`${navTagsStyle}`} style={{transition: 'all 0.2s linear'}}>
              <FaIcons.FaHome/>Home</li></a>
            {/* <NavHashLink to='/#darehub' smooth className={({ isActive }) => `${isActive ? 'text-[#979696]' : 'text-[white]'}`}> */}
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
      <main>
        <section id='home' className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 py-20 w-full'>
          <div>
          <h1 className='text-white font-extrabold text-[2.5rem] sm:text-[3rem] lg:text-[4.5rem]'>Dare Hub</h1>
          <h2 className='text-[#dedbdb] font-bold text-[1.2rem] sm:text-[1.5rem] lg:text-[1.8rem]'>Create Connect Stand Out</h2>
          <p className='text-[#c6c4c4] mt-[1rem] text-[0.9rem] lg:text-[1.1rem] whitespace-break-spaces'>
          The ultimate place to take bold dares, upload proof, and climb the leaderboard. Simple. Fun. Competitive.</p>
          <div className='flex gap-6 flex-wrap'>
          <button className='w-fit h-fit mt-[3rem] px-10 py-4 rounded-[20px] cursor-pointer bg-[white] font-bold text-[1.2rem]'>
          Get Started</button>
          <button className='w-fit h-fit mt-[3rem] px-10 py-4 rounded-[20px] cursor-pointer bg-[transparent] border boder-[white] border-solid text-[white] font-bold text-[1.2rem]'>
            Explore Dares</button></div>
          <div className='flex flex-wrap mt-[2rem] justify-center items-center gap-8'>
            <div className='w-fit h-fit p-2 rounded-[10px] bg-[#513535] text-[red] hover:text-[white] hover:bg-[red] hover:scale-110 cursor-pointer' 
            style={{transition: 'all 0.4s linear'}}>
              <FaIcons.FaYoutube className='w-8 h-8'/></div>
            <div className='w-fit h-fit p-2 rounded-[10px] bg-[#4f3551] text-[#d627e6] hover:text-[white] hover:bg-[#d627e6]  hover:scale-110 cursor-pointer' 
            style={{transition: 'all 0.4s linear'}}>
              <FaIcons.FaInstagram className='w-8 h-8'/></div>
            <div className='w-fit h-fit p-2 rounded-[10px] bg-[#464444] text-[black] hover:text-[white] hover:bg-[black] hover:scale-110 cursor-pointer' 
            style={{transition: 'all 0.4s linear'}}>
              <FaIcons.FaGithub className='w-8 h-8'/></div>
            <div className='w-fit h-fit p-2 rounded-[10px] bg-[#35513c] text-[#48db48] hover:text-[white] hover:bg-[#48db48] hover:scale-110 cursor-pointer' 
            style={{transition: 'all 0.4s linear'}}>
              <FaIcons.FaWhatsapp className='w-8 h-8'/></div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img src='DareHub12.png' className='lg:w-120 w-80' style={{filter: 'drop-shadow(5px 5px 10px white)'}}/>
          </div>
        </section>
        
        <section id='darehub'>
          <div>
          <h1 className='text-[3rem] mt-[9rem] text-[white] font-extrabold text-center'>Dare Hub?</h1>
          <h1 className='text-[2rem] mt-[2rem] font-extrabold text-[white] bg-[#7b00ff] rounded-2xl text-center'>What is Dare Hub?</h1>
          <p className='text-[1.1rem] mt-[0.5rem] font-bold text-[gray] text-center max-w-4xl m-auto'>
            Dare Hub is a platform to find/get interesting, funny and crazy dares to do.
            In this platform you will find dares, you have to do those and have to share 
            proof as a video/image/audio to maintain trust between users those who are using it.
            If you have any privacy issue for sharing the proof you could skip it.
            Here you can play Truth or Dare with your friends or random people around world.
            </p>
          <h1 className='text-[1.8rem] mt-[2rem] text-[#ffffff] bg-[#7b00ff] rounded-2xl font-extrabold text-center'>
            How Dare Hub Works?
            </h1>
          
          <div className='flex gap-4 flex-wrap items-center justify-center mt-[2rem]'>
            {usageData.map((usage, index) => (
              <UsageCards key={index} {...usage}/>
            ))}
          </div>
          </div>
          <div>
            <h1 className='text-[1.8rem] mt-[2.5rem] text-[white] font-extrabold bg-[#7b00ff] rounded-2xl text-center'>Why Dare Hub?</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 items-stretch justify-center mt-[2rem] p-4 lg:p-0'>
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature}/>
        ))}
      </div>
          </div>
        </section>
        <section id='dares'>
          <h1 className='text-[3rem] mt-[9rem] text-[white] font-extrabold text-center'>Dares</h1>
          <div>
            <h2 className='text-[1.8rem] mt-[1rem] text-[white] font-extrabold bg-[#7b00ff] rounded-2xl text-center'>Trending Dares</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 wrap-anywhere mt-[1rem]'>
               {dares.map((dare, index) => (
              <Dare key={index} {...dare}/>
            ))}</div>
                       
          </div>
        </section>
        <section id='leaderboard'>
                  <h1 className='text-[3rem] mt-[5rem] text-[white] font-extrabold text-center'>Leaderboard</h1> {/* FIX 18: Adjusted mt for better spacing */}
                  {/* FIX 19: Made the table responsive using a wrapper and adjusted classes */}
                  <div className='overflow-x-auto w-full'>
                    <table className='m-auto border-separate border-spacing-4 w-full max-w-4xl'>
                      <caption className='text-[1.8rem] mt-[1rem] text-[white] bg-[#7b00ff] rounded-2xl font-extrabold text-center'>Ranking</caption>
                      <thead>
                        <tr>
                          <th className='py-2 px-2 sm:px-4 text-[1rem] sm:text-[1.3rem] font-extrabold bg-[#151515] text-[white] rounded-tl-lg'>#</th>
                          <th className='py-2 px-2 sm:px-4 text-[1rem] sm:text-[1.3rem] font-extrabold bg-[#151515] text-[white]'>Picture</th>
                          <th className='py-2 px-4 sm:px-10 text-[1rem] sm:text-[1.3rem] font-extrabold bg-[#151515] text-[white]'>Users</th>
                          <th className='py-2 px-2 sm:px-4 text-[1rem] sm:text-[1.3rem] font-extrabold bg-[#151515] text-[white] rounded-tr-lg'>Points</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* Simplified and standardized table rows for better responsiveness */}
                        {[...Array(10)].map((_, index) => ( // Render 10 rows for example
                          <tr key={index} className={`bg-[#1e1d1d] text-white text-[1.1rem] ${index % 2 === 0 ? 'hover:bg-[#2a2a2a]' : 'hover:bg-[#2a2a2a]'} transition duration-200 shadow-md`}>
                   <td className={`text-center py-3 ${index === 0 ? 'text-yellow-400 text-2xl font-black' : index === 1 ? 'text-gray-400 text-xl font-bold' : index === 2 ? 'text-amber-700 text-xl font-bold' : 'text-gray-500 font-bold'}`}>{index < 3 ? <IoMdRibbon className='m-auto'/> : `#${index + 1}`}</td>
                   <td className='text-center py-3'><img src={index % 2 === 0 ? 'boy.png' : 'girl.png'} className='w-10 h-10 m-auto rounded-full border-2 border-white shadow-lg'/></td>
                   <td className='text-center py-3 font-semibold max-w-[100px] sm:max-w-none truncate'>{`Unknown ${index % 2 === 0 ? 'Boy' : 'Girl'} ${index + 1}`}</td>
                   <td className='text-center py-3 font-bold text-lg'>{1500 - (index * 50)}</td>
                 </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
      </main>
    </div>
  )
}

export default HomePage 
