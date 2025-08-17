import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-primary-900/80 via-primary-800/60 to-transparent">
          <img
            src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Architecture"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-6 text-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mughees Khan
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-primary-200 mb-4 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Architect Engineer
          </motion.p>
          
          <motion.p
            className="text-lg sm:text-xl text-primary-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Designing innovative structures that blend architectural vision with engineering excellence. 
            Creating sustainable spaces for the future.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button
              onClick={() => document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="group bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View My Work
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
            </button>
            
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
};

export default Hero;