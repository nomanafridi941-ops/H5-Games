
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import GameCard from '../components/GameCard';
import { GAMES, CATEGORIES } from '../constants';

const HomePage: React.FC = () => {
  const featuredGames = GAMES.filter(g => g.isFeatured);
  const newGames = GAMES.filter(g => g.isNew);

  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />

      {/* Featured Games Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">Featured Games</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Most played games this week</p>
          </div>
          <Link to="/category/Action" className="hidden md:flex items-center space-x-2 text-indigo-600 font-bold hover:text-indigo-700">
            <span>View All</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Quick Categories */}
      <section className="mb-16">
        <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar">
          {CATEGORIES.map(cat => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.id}`}
              className={`flex-shrink-0 flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all hover:scale-105 ${cat.color} font-bold shadow-sm`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span>{cat.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Recently Added Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">New Arrivals</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Hot off the press</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {newGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Category Wise Preview Sections */}
      {CATEGORIES.slice(0, 3).map(category => {
        const catGames = GAMES.filter(g => g.category === category.id).slice(0, 4);
        if (catGames.length === 0) return null;

        return (
          <section key={category.id} className="mb-16">
             <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${category.color}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white">{category.title} Games</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Explore the best of {category.title.toLowerCase()}</p>
                  </div>
                </div>
                <Link to={`/category/${category.id}`} className="text-sm font-bold text-slate-500 hover:text-indigo-600 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl transition-colors">
                  See All
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {catGames.map(game => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </section>
        );
      })}

      {/* SEO Content Footer */}
      <section className="py-12 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-4">Why Play on PlayHub?</h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            PlayHub offers a premium selection of HTML5 games that require no installation. Our platform is optimized for performance, ensuring that whether you're playing a high-intensity racing game or a meditative puzzle, your experience is smooth and lag-free. With new games added daily, there's always something new to discover.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
