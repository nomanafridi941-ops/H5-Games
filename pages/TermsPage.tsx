import React from 'react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Last updated: December 23, 2025
          </p>
        </div>

        <div className="space-y-8 text-slate-700 dark:text-slate-300">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              1. Agreement to Terms
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              By accessing and using H5 Games ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to abide by these terms, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              2. Use License
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              Permission is granted to temporarily download one copy of the materials (information or software) on H5 Games for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              3. Disclaimer
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              The materials on H5 Games are provided on an 'as is' basis. H5 Games makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              4. Limitations
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              In no event shall H5 Games or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on H5 Games.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              5. Accuracy of Materials
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              The materials appearing on H5 Games could include technical, typographical, or photographic errors. H5 Games does not warrant that any of the materials on the website are accurate, complete, or current. H5 Games may make changes to the materials contained on the website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              6. Links
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              H5 Games has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by H5 Games of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              7. Modifications
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              H5 Games may revise these Terms of Service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              8. User Responsibilities
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              Users agree to use H5 Games responsibly and not to:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Engage in illegal activities</li>
              <li>Harass, abuse, or harm others</li>
              <li>Spam or send unsolicited content</li>
              <li>Distribute viruses or malicious code</li>
              <li>Attempt to gain unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              9. Third-Party Games
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              H5 Games provides access to games developed and hosted by third parties through GameDistribution. We are not responsible for the content, functionality, or availability of these games. Use of third-party games is governed by their respective terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              10. Governing Law
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which H5 Games operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              11. Contact Information
            </h2>
            <p className="text-slate-700 dark:text-slate-300">
              If you have questions about these Terms of Service, please{' '}
              <Link to="/contact" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                contact us
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200 dark:border-amber-800">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            These Terms of Service constitute the entire agreement between you and H5 Games regarding your use of the website and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
