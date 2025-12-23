
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import GamePlayPage from './pages/GamePlayPage';
import AboutPage from './pages/AboutPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.remove('bg-slate-50');
      document.body.classList.add('bg-slate-900');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('bg-slate-900');
      document.body.classList.add('bg-slate-50');
    }
  }, [darkMode]);

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'dark text-slate-100' : 'text-slate-900'}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/game/:id" element={<GamePlayPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
        {/* Vercel Web Analytics for React (no route support in plain React) */}
        <Analytics />
        {/* Vercel Speed Insights Web Vitals */}
        <SpeedInsights />
      </div>
    </Router>
  );
};

export default App;
