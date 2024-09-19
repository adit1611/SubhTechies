import React from 'react';
import Photo from '../assets/Photo';
import myImage from '../assets/heart.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-white lg:mb-5 md:mb-14 xs:mb-14">
      <div className="flex flex-col md:flex-row relative h-auto md:h-1/2 w-full my-10">
        <div className="d1 h-auto md:h-1/2 w-full md:w-1/2 my-10">
          <div className="d11 flex items-center justify-center mx-4 md:mx-14 my-5 xs:my-0">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold animate-pulse">Hello,</h1>
            <span className="text-3xl sm:text-4xl md:text-6xl ml-2 animate-wave">👋</span>
          </div>
          <div className="d12 flex flex-col md:flex-row">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold px-4 md:px-16">
              We are Information Technology <br /> Service Provider
            </h1>
            <div className="flex justify-center md:justify-start mb-6 mt-4 -ml-14 md:mt-0">
              <img src={myImage} alt="Heart" className="h-12 sm:h-16 md:h-20 w-12 sm:w-16 md:w-20 animate-scaleUp" />
            </div>
          </div>
          <div className="d2 hidden lg:block absolute top-24 lg:left-1/2 transform lg:-translate-x-1/2 w-[20px] h-[40vh] xs:top-40">
            <hr className="w-2 h-[60vh] rounded-lg" style={{
              backgroundImage: 'linear-gradient(to bottom, #A8AEB3 4%, #A085E7 15%, #A085E7 40%, #ACA740 70%, #FC0664 90%, #A8AEB3 5%)',
            }} />
          </div>
          {/* Spinning Photo */}
          <div className="d3 absolute h-48 w-48 right-[10vw] transform -translate-x-20 top-5 lg:top-0 lg:left-[70vw] lg:right-[20px] animate-spinSlow xs:top-40">
            <style>
              {`
                @keyframes spin {
                  from { transform: rotateY(0deg); }
                  to { transform: rotateY(180deg); }
                }

                .animate-spinSlow {
                  animation: spin 10s linear infinite;
                }
              `}
            </style>
            <Photo />
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="relative lg:my-[80vh] w-full lg:h-[80vh] bg-blue-600 bg-opacity-25 p-8 rounded-3xl border-4 border-cyan-300 overflow-auto">
        <h1 className="text-violet-400 text-lg sm:text-2xl md:text-3xl font-extrabold uppercase underline mb-4 text-right">Our Story</h1>
        <p className="text-justify text-stone-300 text-base sm:text-lg md:text-xl leading-relaxed">
          <span className='text-xl sm:text-2xl md:text-3xl font-bold text-[#036257] border-pink-400 border-l-2 border-b-4 bg-fuchsia-400 m-4'>
            "Swarm-Subh Techie"
          </span>
          :- This story is about how today's tech world can generate opportunities to build a start-up. Our founder came in contact with a niche social media group dedicated to web development, graphic design, and app development. Though they’ve never met in person, they bond over a shared passion for tech and creativity. Together, they conceived the idea for a platform called "LifeHackr," which uses AI to simplify and gamify web development, design, and app creation. With no funding or connections, they decide to bootstrap their startup by participating in hackathons, eventually earning enough to rent a small office space.
          ...
        </p>
        <div className="text-center mt-6">
          <Link to="/about">
            <button className="h-10 sm:h-12 w-28 sm:w-36 bg-pink-400 rounded-lg text-white font-semibold hover:bg-pink-600 transition duration-300">
              Read more <span className='animate-pulse'>👉🏻</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
