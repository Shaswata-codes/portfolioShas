import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: 'Full-Stack Expertise',
      description: 'Proficient in building end-to-end applications with MERN stack',
      color: '#00FF87'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solver',
      description: 'Breaking down complex challenges into elegant solutions',
      color: '#00E5FF'
    },
    {
      icon: FaRocket,
      title: 'Performance Focused',
      description: 'Creating fast, scalable, and maintainable applications',
      color: '#FFD700'
    },
    {
      icon: FaHeart,
      title: 'Passionate Learner',
      description: 'Always exploring new technologies and best practices',
      color: '#00FF87'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-cyan-950 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute rounded-full top-1/4 right-1/4 w-96 h-96 bg-emerald-400/30 dark:bg-emerald-500/20 blur-3xl animate-pulse" />
        <div 
          className="absolute rounded-full bottom-1/3 left-1/4 w-96 h-96 bg-cyan-400/30 dark:bg-cyan-500/20 blur-3xl animate-pulse" 
          style={{ animationDelay: '1s' }} 
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="block mb-4 text-sm font-semibold tracking-widest uppercase text-emerald-400 dark:text-emerald-400">
            Get To Know Me
          </span>

          <h2 className="mb-4 text-6xl font-bold tracking-tight text-white dark:text-white md:text-7xl">
            About Me
          </h2>

          <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-cyan-500" />

          <p className="max-w-2xl mx-auto text-lg text-gray-300 dark:text-slate-400">
            Passionate developer crafting digital experiences that matter
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="p-6 border shadow-lg border-emerald-500/30 rounded-2xl bg-slate-900/80 dark:bg-slate-800/50 backdrop-blur-sm dark:border-slate-700"
            >
              <p className="text-lg leading-relaxed text-gray-200 dark:text-gray-300">
                I'm a <span className="font-semibold text-emerald-400 dark:text-emerald-400">full-stack web developer</span> who loves turning ideas into clean, functional, and scalable digital experiences. I enjoy working across the stack—building intuitive frontends, designing reliable backends, and connecting everything into smooth, real-world applications.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 border shadow-lg border-cyan-500/30 rounded-2xl bg-slate-900/80 dark:bg-slate-800/50 backdrop-blur-sm dark:border-slate-700"
            >
              <p className="text-lg leading-relaxed text-gray-200 dark:text-gray-300">
                My core strength lies in <span className="font-semibold text-cyan-400 dark:text-cyan-400">JavaScript and the MERN stack</span>, with hands-on experience in React, Node.js, Express, and MongoDB. I've built projects ranging from real-time chat applications to authentication systems and browser extensions, always focusing on performance, usability, and maintainable code.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 border shadow-lg border-emerald-500/30 rounded-2xl bg-slate-900/80 dark:bg-slate-800/50 backdrop-blur-sm dark:border-slate-700"
            >
              <p className="text-lg leading-relaxed text-gray-200 dark:text-gray-300">
                What sets me apart is my <span className="font-semibold text-emerald-400 dark:text-emerald-400">curiosity and problem-solving mindset</span>. I enjoy breaking down complex problems, learning new tools when needed, and continuously improving my skills. I believe good software isn't just about writing code—it's about creating solutions that actually help users.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 border shadow-lg border-yellow-500/30 rounded-2xl bg-slate-900/80 dark:bg-slate-800/50 backdrop-blur-sm dark:border-slate-700"
            >
              <p className="text-lg leading-relaxed text-gray-200 dark:text-gray-300">
                When I'm not coding, I like exploring new technologies, improving my design sense, and refining my development workflow. I'm always excited to collaborate, learn, and take on challenging projects that push my limits.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Highlight Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: `0 20px 40px ${item.color}30`
                }}
                className="relative p-8 overflow-hidden transition-all duration-300 border shadow-lg border-emerald-500/30 group rounded-2xl bg-slate-900/80 dark:bg-slate-800/50 backdrop-blur-sm dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500"
              >
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 group-hover:opacity-100" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-emerald-900/50 to-cyan-900/50 dark:from-emerald-900/30 dark:to-cyan-900/30"
                  >
                    <item.icon 
                      className="w-8 h-8"
                      style={{ color: item.color }}
                    />
                  </motion.div>
                  
                  <h3 className="mb-3 text-xl font-bold text-white dark:text-white">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-gray-300 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-3xl p-8 text-center border shadow-2xl border-emerald-400/50 rounded-3xl bg-gradient-to-br from-emerald-500 to-cyan-500"
          >
            <h3 className="mb-4 text-3xl font-bold text-white">
              Let's Build Something Amazing Together
            </h3>
            <p className="mb-6 text-lg text-emerald-50">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-semibold transition-shadow rounded-full shadow-lg text-slate-900 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:shadow-xl"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;