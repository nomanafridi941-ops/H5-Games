
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
            Instant Fun, <span className="text-indigo-600">Everywhere.</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">
            PlayHub is the world's leading platform for high-quality browser-based gaming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              We believe that gaming should be accessible to everyone, regardless of their hardware. By focusing on modern Web technologies (HTML5), we've built a platform that removes the friction of massive downloads and long installation times.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether you have 5 minutes between meetings or 5 hours on a weekend, PlayHub provides instant gratification through high-quality interactive experiences.
            </p>
          </div>
          <div className="relative">
            <img src="https://picsum.photos/seed/vision/600/400" alt="Vision" className="rounded-3xl shadow-2xl" />
            <div className="absolute -bottom-6 -right-6 bg-amber-400 p-8 rounded-3xl shadow-xl hidden md:block">
              <span className="text-4xl font-black text-indigo-900">500+</span>
              <p className="text-indigo-900 font-bold text-sm">Active Games</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl text-center shadow-sm">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">High Speed</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Optimized assets for instant loading on any connection.</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl text-center shadow-sm">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold mb-2">Mobile First</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Seamless experience on smartphones, tablets and PCs.</p>
          </div>
          <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl text-center shadow-sm">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">Safe & Free</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">No accounts or hidden fees. Just click and play safely.</p>
          </div>
        </div>

        {/* Get Started - Vercel Speed Insights */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Get Started</h2>
          <p className="text-slate-600 dark:text-slate-400">To start collecting performance metrics, follow these steps.</p>

          <div className="mt-8 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Next.js</h3>

            {/* Step 1 */}
            <div className="mb-10">
              <div className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">1. Install our package</div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Start by installing <span className="font-semibold">@vercel/speed-insights</span> in your existing project.</p>

              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">npm</div>
                <pre className="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-auto text-sm"><code>npm i @vercel/speed-insights</code></pre>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-10">
              <div className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">2. Add the Next.js component</div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Import and use the <span className="font-semibold">&lt;SpeedInsights /&gt;</span> Next.js component into your app's layout or your main file.</p>
              <pre className="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-auto text-sm"><code>import { SpeedInsights } from "@vercel/speed-insights/next"</code></pre>
              <p className="text-slate-600 dark:text-slate-400 mt-3">For full examples and further reference, please refer to our documentation.</p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">3. Deploy &amp; Visit your Site</div>
              <p className="text-slate-600 dark:text-slate-400">Deploy your changes and visit the deployment to collect your first data points.</p>
              <p className="text-slate-600 dark:text-slate-400 mt-3">If you don't see data after 30 seconds, please check for content blockers and try to navigate between pages on your site.</p>
            </div>
          </div>
        </div>

        {/* Get Started - Vercel Analytics */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Get Started</h2>
          <p className="text-slate-600 dark:text-slate-400">To start counting visitors and page views, follow these steps.</p>

          <div className="mt-8 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Next.js</h3>

            {/* Step 1 */}
            <div className="mb-10">
              <div className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">1. Install our package</div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Start by installing <span className="font-semibold">@vercel/analytics</span> in your existing project.</p>

              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">npm</div>
                <pre className="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-auto text-sm"><code>npm i @vercel/analytics</code></pre>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-10">
              <div className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">2. Add the React component</div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">Import and use the <span className="font-semibold">&lt;Analytics /&gt;</span> React component into your app's layout.</p>
              <pre className="bg-slate-900 text-slate-100 rounded-xl p-4 overflow-auto text-sm"><code>import { Analytics } from "@vercel/analytics/next"</code></pre>
              <p className="text-slate-600 dark:text-slate-400 mt-3">For full examples and further reference, please refer to our documentation.</p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">3. Deploy &amp; Visit your Site</div>
              <p className="text-slate-600 dark:text-slate-400">Deploy your changes and visit the deployment to collect your page views.</p>
              <p className="text-slate-600 dark:text-slate-400 mt-3">If you don't see data after 30 seconds, please check for content blockers and try to navigate between pages on your site.</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-600 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl font-black mb-6">Ready to jump into the action?</h2>
          <p className="text-indigo-100 mb-10 max-w-xl mx-auto">
            Discover your next favorite game today. No sign-up required.
          </p>
          <Link to="/" className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-all hover:scale-105 inline-block">
            Start Playing Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
