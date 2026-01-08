'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Natan Muleta</h3>
            <p className="text-sm leading-relaxed">
              Software Engineering student passionate about building innovative solutions 
              and creating impactful digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {['About', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="space-y-2">
              <a 
                href="mailto:natanmuleta77@gmail.com"
                className="block text-sm hover:text-purple-400 transition-colors"
              >
                natanmuleta77@gmail.com
              </a>
              <div className="flex gap-3 justify-end">
                <a 
                  href="#" 
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="#" 
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-700 text-center"
        >
          <p className="text-sm">
            © {currentYear} Natan Muleta. All rights reserved. Built with passion and modern web technologies.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;