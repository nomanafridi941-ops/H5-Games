
import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { GAMES, CATEGORIES } from '../constants';
import { Category } from '../types';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [filter, setFilter] = useState<'Popular' | 'New' | 'Top Rated'>('Popular');

  const categoryInfo = useMemo(() => {
    return CATEGORIES.find(c => c.id === category as Category);
  }, [category]);

  const filteredGames = useMemo(() => {
    let games = category === Category.ALL 
      ? GAMES 
      : GAMES.filter(g => g.category === category as Category);
    
    if (filter === 'New') {
      return [...games].sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
    }
    if (filter === 'Top Rated') {
      return [...games].sort((a, b) => b.rating - a.rating);
    }
    // Default: Popular (by plays)
    return [...games].sort((a, b) => parseFloat(b.plays) - parseFloat(a.plays));
  }, [category, filter]);

  if (!categoryInfo) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-black mb-4">Category Not Found</h1>
        <Link to="/" className="text-indigo-600 font-bold underline">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <nav className="flex items-center space-x-2 text-sm font-bold text-slate-400 mb-4">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <span>/</span>
            <span className="text-indigo-600">{categoryInfo.title}</span>
          </nav>
          <div className="flex items-center space-x-4">
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-3xl flex items-center justify-center text-4xl shadow-xl shadow-slate-200 dark:shadow-none ${categoryInfo.color}`}>
              {categoryInfo.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white">
                {categoryInfo.id === Category.ALL ? (
                  <span className="text-indigo-600">All Games</span>
                ) : (
                  <>
                    {categoryInfo.title} <span className="text-indigo-600">Games</span>
                  </>
                )}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">
                Showing {filteredGames.length} amazing titles
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl w-fit self-start">
          {(['Popular', 'New', 'Top Rated'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 md:px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                filter === f 
                  ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Categories to Explore */}
      <section className="mb-12">
        <h3 className="text-xl font-bold mb-8">Categories to Explore</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CATEGORIES.filter(c => c.id !== categoryInfo.id).map(cat => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.id}`}
              className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-indigo-600 transition-colors group"
            >
              <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{cat.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Grid */}
      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredGames.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <div className="text-6xl mb-4">🎮</div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No games yet in this category</h2>
          <p className="text-slate-500 max-w-sm mx-auto">We're working hard to bring you the best {categoryInfo.title.toLowerCase()} games. Check back soon!</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
