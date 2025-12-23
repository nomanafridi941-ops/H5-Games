
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 py-20 md:py-32 rounded-3xl mb-12">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center md:text-left">
            <div className="inline-block px-5 py-2 mb-8 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/30">
              ✨ Instant Play • No Downloads
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Level Up Your <span className="text-amber-300 drop-shadow-lg">Free Time</span> Anywhere.
            </h1>
            
            <p className="text-indigo-100 text-lg md:text-xl mb-10 font-medium max-w-2xl leading-relaxed">
              Dive into hundreds of high-quality H5 games directly in your browser. Mobile, Tablet, or PC — just click and play!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 flex-wrap">
              <Link to="/category/Action" className="group px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-amber-300 transition-all duration-300 hover:scale-105 shadow-2xl shadow-indigo-900/30 flex items-center space-x-2">
                <span>🎮 Browse Action Games</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link to="/about" className="group px-8 py-4 bg-transparent border-2 border-white/40 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm flex items-center space-x-2">
                <span>📖 Learn More</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-black text-amber-300">60+</div>
                <div className="text-sm text-indigo-200 font-medium">Games</div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-300">100%</div>
                <div className="text-sm text-indigo-200 font-medium">Free Play</div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-300">∞</div>
                <div className="text-sm text-indigo-200 font-medium">Fun</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="block relative">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-300/20 to-indigo-300/20 rounded-3xl blur-xl"></div>
              
              {/* Image */}
              <img 
                src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&q=80&w=800&h=700" 
                alt="H5 Games Gaming Experience" 
                loading="lazy"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.src = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=700';
                }}
                className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/3] md:aspect-square transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-400 to-amber-300 p-5 rounded-2xl shadow-2xl animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <div className="font-black text-indigo-900 text-lg">4.8/5</div>
                    <div className="text-xs font-bold text-indigo-700">Rated</div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">🎮</div>
                  <div>
                    <div className="font-black text-indigo-900">Play Now</div>
                    <div className="text-xs text-indigo-600 font-semibold">No sign-up needed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
