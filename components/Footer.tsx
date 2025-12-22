
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">P</div>
              <span className="text-xl font-black text-slate-900 dark:text-white">PLAYHUB</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Your ultimate destination for free, high-performance H5 browser games. No downloads required, just pure gaming fun.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.id}`} className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors text-sm">
                    {cat.title} Games
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors text-sm">About Us</Link></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 transition-colors text-sm">Contact Support</a></li>
            </ul>
          </div>

          <div className="bg-indigo-50 dark:bg-slate-800 p-6 rounded-2xl">
            <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">Newsletter</h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs mb-4">Get the latest game updates and news.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Enter email..." 
                className="w-full px-4 py-2 rounded-xl text-sm border-none bg-white dark:bg-slate-700 focus:ring-2 focus:ring-indigo-600"
              />
              <button className="w-full py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
          <p className="text-slate-400 dark:text-slate-500 text-xs font-medium">
            &copy; {new Date().getFullYear()} PlayHub H5 Games. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
