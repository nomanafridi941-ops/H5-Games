
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-indigo-600 py-16 md:py-24 rounded-3xl mb-12">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-3/5 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest animate-bounce">
            Instant Play • No Downloads
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            Level Up Your <span className="text-amber-300">Free Time</span> Anywhere.
          </h1>
          <p className="text-indigo-100 text-lg md:text-xl mb-8 font-medium max-w-xl">
            Dive into hundreds of high-quality H5 games directly in your browser. Mobile, Tablet, or PC — just click and play!
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link to="/category/Action" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-all hover:scale-105 shadow-xl shadow-indigo-900/20">
              Browse Action Games
            </Link>
            <Link to="/about" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all">
              Learn More
            </Link>
          </div>
        </div>

        <div className="md:w-2/5 hidden md:block">
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/50 to-transparent"></div>
             <img 
               src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=600" 
               alt="Featured Gaming" 
               className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 object-cover aspect-video md:aspect-auto"
             />
             <div className="absolute -top-4 -right-4 bg-amber-400 p-4 rounded-2xl shadow-lg animate-pulse">
                <svg className="w-8 h-8 text-indigo-900" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
