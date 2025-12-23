import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Last updated: December 23, 2025
          </p>
        </div>

        <div className="space-y-8 text-slate-700 dark:text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              1. Introduction
            </h2>
            <p>
              H5 Games ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website and play our games.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              2. Information We Collect
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Automatically Collected Information</h3>
                <p>When you visit our website, we automatically collect certain information about your device, including:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website</li>
                  <li>Device operating system</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">Analytics and Performance Data</h3>
                <p>We use Vercel Analytics and Speed Insights to understand how users interact with our site and to optimize performance. This data helps us improve your gaming experience.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and improve our services</li>
              <li>To analyze site usage and trends</li>
              <li>To monitor for security and fraud</li>
              <li>To personalize your gaming experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              4. Third-Party Services
            </h2>
            <p>
              Our website uses third-party services including GameDistribution for game embeds, Vercel for hosting and analytics, and Unsplash for images. These services have their own privacy policies governing the use of your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              5. Cookies
            </h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Note that disabling cookies may affect functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              7. Your Rights
            </h2>
            <p>
              Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete information. Contact us if you wish to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              8. Contact Us
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              If you have questions about this Privacy Policy or our privacy practices, please{' '}
              <Link to="/contact" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                contact us
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              9. Changes to This Policy
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting to the website.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-200 dark:border-indigo-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            By using H5 Games, you agree to our Privacy Policy. If you do not agree, please do not use our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
