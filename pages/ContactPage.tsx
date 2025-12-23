import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Contact Support
          </h1>
          <p className="text-lg text-slate-700 dark:text-slate-400">
            Have questions or need help? We're here to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center space-x-2">
                <span className="text-2xl">📧</span>
                <span>Email</span>
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                For general inquiries:
                <br />
                <a href="mailto:support@h5gamestore.site" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                  support@h5gamestore.site
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center space-x-2">
                <span className="text-2xl">🐛</span>
                <span>Report Issues</span>
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Found a bug or broken game?
                <br />
                <a href="mailto:bugs@h5gamestore.site" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                  bugs@h5gamestore.site
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center space-x-2">
                <span className="text-2xl">🎮</span>
                <span>Game Suggestions</span>
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Recommend a game to add:
                <br />
                <a href="mailto:games@h5gamestore.site" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                  games@h5gamestore.site
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center space-x-2">
                <span className="text-2xl">⏱️</span>
                <span>Response Time</span>
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                We typically respond within 24-48 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-900 dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                  placeholder="Tell us more..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-emerald-100 dark:bg-emerald-900/20 border border-emerald-400 dark:border-emerald-700 rounded-lg text-emerald-700 dark:text-emerald-300 text-sm font-bold text-center">
                  ✓ Thanks! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                Do I need an account to play games?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                No! All games on H5 Games are completely free and require no sign-up or account creation.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                Are the games safe to play?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Yes. All games are hosted through GameDistribution and are regularly reviewed for quality and safety.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                Can I download games?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                No downloads needed! All games play directly in your browser on desktop, tablet, or mobile.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                Why is a game not loading?
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Check your internet connection and try disabling ad blockers. If the issue persists,{' '}
                <a href="mailto:bugs@h5gamestore.site" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                  report it to us
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-12 text-center space-y-3">
          <p className="text-slate-700 dark:text-slate-300">
            Need more information?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
              About Us
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/privacy" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
              Privacy Policy
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/terms" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
