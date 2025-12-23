import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
            About PlayHub
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            PlayHub is your ultimate destination for free, high-performance HTML5 browser games. We believe gaming should be accessible, fast, and fun—without downloads, installations, or compromises.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6">Our Mission</h2>
              <p className="text-slate-300 mb-4">
                We're dedicated to bringing the best gaming experience directly to your browser. No waiting, no installations, no hassle—just instant, world-class entertainment at your fingertips.
              </p>
              <p className="text-slate-300">
                Our curated collection of 60+ games spans every genre, from casual puzzles to intense racing challenges, ensuring there's something for every player.
              </p>
            </div>
            <div className="bg-indigo-600/20 border border-indigo-500/30 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-indigo-300">Play Instantly</h3>
              <p className="text-slate-400 mt-2">No downloads. No delays. Pure gaming.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-black mb-12 text-center">Why Choose PlayHub?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-colors">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-slate-400">
                Optimized games load instantly in your browser with minimal latency and maximum performance.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-colors">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-3">Carefully Curated</h3>
              <p className="text-slate-400">
                Every game is hand-picked and tested to ensure quality, fun factor, and engaging gameplay.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-colors">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-3">Community Focused</h3>
              <p className="text-slate-400">
                Join thousands of players enjoying our diverse game collection and share your high scores.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-colors">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3">Always Accessible</h3>
              <p className="text-slate-400">
                Play from any device, anytime, anywhere. No setup required—just click and play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Categories */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-black mb-8 text-center">Our Game Library</h2>
          <p className="text-slate-300 text-center mb-8">
            Explore games across multiple genres:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Puzzle', 'Racing', 'Action', 'Kids', 'Sports', 'Arcade', 'Casual', 'Strategy'].map((category) => (
              <div key={category} className="bg-indigo-600/20 border border-indigo-500/30 rounded-xl p-4 text-center hover:bg-indigo-600/30 transition-colors">
                <p className="text-indigo-300 font-bold">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-800 p-8 rounded-2xl">
              <div className="text-4xl font-black text-indigo-400 mb-2">60+</div>
              <p className="text-slate-400">Games Available</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl">
              <div className="text-4xl font-black text-indigo-400 mb-2">8</div>
              <p className="text-slate-400">Game Categories</p>
            </div>
            <div className="bg-slate-800 p-8 rounded-2xl">
              <div className="text-4xl font-black text-indigo-400 mb-2">100%</div>
              <p className="text-slate-400">Free to Play</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-t border-b border-indigo-500/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-black mb-4">Have Questions?</h2>
          <p className="text-slate-300 mb-8">
            Get in touch with our support team or learn more about our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold transition-colors">
              Contact Us
            </a>
            <a href="/" className="px-8 py-3 border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-600/10 rounded-xl font-bold transition-colors">
              Back to Games
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

