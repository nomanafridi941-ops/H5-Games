
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { GAMES } from '../constants';

const GamePlayPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const game = GAMES.find(g => g.slug === slug);

  useEffect(() => {
    // Simulate game assets loading
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-black mb-4">Game Not Found</h1>
        <Link to="/" className="text-indigo-600 font-bold underline">Back to Games</Link>
      </div>
    );
  }

  const relatedGames = GAMES.filter(g => g.category === game.category && g.id !== game.id).slice(0, 4);

  const playable = Boolean(game.playUrl);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-sm font-bold text-slate-400 mb-6">
        <Link to="/" className="hover:text-indigo-600">Home</Link>
        <span>/</span>
        <Link to={`/category/${game.category}`} className="hover:text-indigo-600">{game.category}</Link>
        <span>/</span>
        <span className="text-indigo-600 truncate">{game.title}</span>
      </nav>

      <div className={`flex flex-col lg:flex-row gap-8 ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
        {/* Main Content Area */}
        <div className={isFullscreen ? 'w-full h-full' : 'lg:w-3/4'}>
          {/* Game Player Container */}
          <div className={`relative bg-black ${isFullscreen ? 'w-full h-full rounded-none' : 'rounded-3xl aspect-video'} overflow-hidden shadow-2xl transition-all duration-500 group`}>
            
            {loading ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 overflow-hidden">
                {/* Blurred backdrop using game thumbnail */}
                <div 
                  className="absolute inset-0 bg-cover bg-center scale-110 blur-2xl opacity-40" 
                  style={{ backgroundImage: `url(${game.thumbnail})` }}
                ></div>
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
                
                <div className="relative z-20 flex flex-col items-center animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 border-b-4 border-amber-400 rounded-full animate-spin mb-6"></div>
                  <img src={game.thumbnail} alt="Loading" className="w-32 h-32 rounded-3xl object-cover shadow-2xl mb-6 border-2 border-white/20" />
                  <h3 className="text-white text-xl font-black uppercase tracking-widest">{game.title}</h3>
                  <p className="text-indigo-300 text-sm mt-2 font-bold">READY TO PLAY...</p>
                </div>
              </div>
            ) : (
              playable ? (
                <iframe 
                  src={game.playUrl}
                  className="w-full h-full border-none"
                  title={game.title}
                  allowFullScreen
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-presentation allow-downloads"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-white text-center px-8">
                  <h3 className="text-xl font-black mb-3">Playable link not available</h3>
                  <p className="text-slate-300 mb-6 max-w-xl">We could not find an embeddable version for this title. Tap the button below to open it in a new tab.</p>
                  <Link 
                    to="/" 
                    className="px-6 py-3 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              )
            )}

            {/* Controls Bar Overlay (Optional/Static) */}
            {!loading && playable && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl z-20 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
                <button 
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="text-white hover:text-amber-400 transition-colors flex items-center space-x-2 text-sm font-bold"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
                </button>
                {game.playUrl && (
                  <a 
                    href={game.playUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-amber-400 transition-colors text-sm font-bold underline"
                  >
                    Open in new tab
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Game Info Details */}
          {!isFullscreen && (
          <div className="mt-8 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-slate-100 dark:border-slate-700">
              <div className="flex items-center space-x-6">
                <img src={game.thumbnail} alt={game.title} className="w-16 h-16 rounded-2xl object-cover shadow-lg" />
                <div>
                  <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">{game.title}</h1>
                  <p className="text-slate-500 font-medium">{game.tagline}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <button className="flex-1 md:flex-none px-6 py-3 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-none">
                    Favorite
                 </button>
                 <button className="flex-1 md:flex-none px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white font-bold rounded-2xl hover:bg-slate-200 transition-colors">
                    Share
                 </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-lg font-bold mb-4">Description</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {game.description}
                </p>
                <h3 className="text-lg font-bold mb-4">Instructions</h3>
                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                    <li className="flex items-start space-x-3">
                      <span className="w-6 h-6 flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                      <span>Use Arrow Keys or WASD to move your character.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-6 h-6 flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                      <span>Press SPACE to activate your special ability.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-6 h-6 flex-shrink-0 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center font-bold text-xs">3</span>
                      <span>Collect 10 coins to unlock the next level.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Game Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                    <span className="text-sm font-medium text-slate-500">Rating</span>
                    <span className="font-black text-amber-500">⭐ {game.rating}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                    <span className="text-sm font-medium text-slate-500">Total Plays</span>
                    <span className="font-black text-slate-900 dark:text-white">{game.plays}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl">
                    <span className="text-sm font-medium text-slate-500">Category</span>
                    <span className="font-black text-indigo-600">{game.category}</span>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-2">
                  {game.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          )}
        </div>

        {/* Sidebar / Related Games */}
        {!isFullscreen && (
        <div className="lg:w-1/4">
          <div className="sticky top-24">
            <h3 className="text-xl font-black mb-6">Related Games</h3>
            <div className="flex flex-col gap-6">
              {relatedGames.map(g => (
                <Link 
                  key={g.id} 
                  to={`/game/${g.id}`} 
                  className="flex items-center space-x-4 group bg-white dark:bg-slate-800 p-3 rounded-2xl hover:shadow-lg transition-all border border-slate-100 dark:border-slate-700"
                >
                  <img src={g.thumbnail} alt={g.title} className="w-20 h-20 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors line-clamp-1">{g.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{g.category}</p>
                    <div className="flex items-center space-x-1 mt-2">
                       <span className="text-[10px] font-bold text-amber-500">★ {g.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Ad Placement Mockup */}
            <div className="mt-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Advertisement</span>
              <div className="w-full aspect-square bg-slate-200 dark:bg-slate-900 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=300&h=300" alt="Ad" className="w-full h-full object-cover opacity-50" />
              </div>
              <p className="text-xs font-bold text-slate-500">Sponsored Content</p>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default GamePlayPage;
