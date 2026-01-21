import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCommentDots, FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'
import { assets } from '../assets/assets'

// Mock social platforms data - replace with your actual import
const socialPlatforms = [
  { href: '#', icon: FaGithub, label: 'GitHub' },
  { href: '#', icon: FaLinkedin, label: 'LinkedIn' },
  { href: '#', icon: FaTwitter, label: 'Twitter' },
  { href: '#', icon: FaDribbble, label: 'Dribbble' }
]

const Hero = () => {
  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.6 + index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    })
  }

  return (
    <section id='home' className='relative z-10 flex items-center min-h-screen pt-16 overflow-hidden'>
      {/* Animated background elements */}
      <motion.div
        className='absolute inset-0 opacity-30'
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      >
        <div className='absolute rounded-full top-1/4 left-1/4 w-72 h-72 bg-emerald-500/20 blur-3xl animate-pulse' />
        <div className='absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse' style={{ animationDelay: '1s' }} />
      </motion.div>

      <div className='relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16'>
          {/* LEFT PART */}
          <motion.div
            className='order-2 text-center lg:order-1 lg:text-left'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.span
              variants={itemVariants}
              className='inline-block px-5 py-2.5 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full glass dark:glass text-emerald-400 backdrop-blur-md shadow-lg border border-white/20'
            >
              ✨ Designing Forward
            </motion.span>
            
            <motion.h1
              variants={itemVariants}
              className='mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl'
            >
              <motion.span
                className='inline-block text-transparent bg-gradient-to-r from-emerald-400 via-cyan-500 to-yellow-400 bg-clip-text'
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Crafting Digital
              </motion.span>
              <motion.span
                className='block mt-2'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Experiences
              </motion.span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-600 sm:text-xl lg:mx-0 dark:text-gray-300"
            >
              Transforming ideas into beautiful, functional digital solutions that make an impact. Let's build something extraordinary together.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className='flex flex-col justify-center gap-4 mb-12 sm:flex-row sm:gap-4 lg:justify-start'
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,255,135,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className='relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold transition-all duration-300 rounded-full shadow-lg text-slate-900 group neo-btn-full hover:shadow-2xl bg-gradient-to-r from-emerald-400 to-cyan-400'
              >
                <span className='relative z-10 flex items-center'>
                  View My Work
                  <FaArrowRight className='ml-2 transition-transform duration-300 group-hover:translate-x-2' />
                </span>
                <motion.div
                  className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-cyan-400 to-yellow-400 group-hover:opacity-100'
                  initial={false}
                />
              </motion.a>
              
              <motion.button
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(0, 255, 135, 0.8)',
                  boxShadow: "0 10px 30px rgba(0, 255, 135, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-300 border-2 rounded-full group border-emerald-400 hover:bg-emerald-400/20 backdrop-blur-sm"
              >
                Contact Me
                <FaCommentDots className='ml-2 transition-transform duration-300 group-hover:rotate-12' />
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className='flex justify-center mt-12 space-x-4 lg:justify-start'
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.href}
                  custom={index}
                  variants={socialIconVariants}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    backgroundColor: 'rgba(0, 255, 135, 0.2)',
                    borderColor: 'rgba(0, 255, 135, 0.5)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className='flex items-center justify-center w-12 h-12 text-lg transition-all duration-300 border border-transparent rounded-full shadow-lg md:w-14 md:h-14 glass dark:glass backdrop-blur-md hover:shadow-xl hover:text-emerald-400'
                  aria-label={platform.label}
                >
                  <platform.icon />
                </motion.a>
              ))}
            </motion.div>

            {/* Decorative line */}
            <motion.div
              className='relative hidden mt-16 lg:block'
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className='h-px bg-gradient-to-r from-emerald-500/50 via-cyan-500/50 to-transparent' />
              <motion.div
                className='absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-emerald-500 to-cyan-500'
                animate={{
                  x: [0, 300, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* RIGHT PART - Profile Image */}
          <motion.div
            className='relative flex items-center justify-center order-1 lg:order-2'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Animated ring orbits */}
            <motion.div
              className='absolute inset-0 flex items-center justify-center'
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className='w-[380px] h-[380px] md:w-[480px] md:h-[480px] rounded-full border-2 border-dashed border-emerald-400/30'></div>
            </motion.div>

            <motion.div
              className='absolute inset-0 flex items-center justify-center'
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className='w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full border border-cyan-500/20'></div>
            </motion.div>

            {/* Floating decorative dots */}
            <motion.div
              className='absolute top-0 right-0 w-4 h-4 rounded-full bg-emerald-400'
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className='absolute bottom-0 left-0 w-3 h-3 rounded-full bg-cyan-500'
              animate={{
                y: [0, 20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
              className='absolute left-0 w-2 h-2 bg-yellow-400 rounded-full top-1/4'
              animate={{
                x: [0, -15, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Main profile container */}
            <motion.div
              className='relative z-10'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient glow background */}
              <motion.div
                className='absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-500 to-yellow-400 blur-2xl opacity-40'
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Profile image wrapper */}
              <div className='relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]'>
                {/* Multi-layer border effect */}
                <div className='absolute inset-0 p-1 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-500 to-yellow-400'>
                  <div className='w-full h-full p-2 bg-white rounded-full dark:bg-gray-900'>
                    <div className='relative w-full h-full overflow-hidden border-4 rounded-full shadow-2xl border-white/50 dark:border-gray-800/50'>
                      <img
                        src={assets.profileImg}
                        alt="Profile"
                        className='object-cover w-full h-full'
                      />
                      {/* Overlay gradient on hover */}
                      <motion.div
                        className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 hover:opacity-100'
                      />
                    </div>
                  </div>
                </div>

                
              
              </div>
            </motion.div>

            {/* Corner decorative elements */}
            <motion.div
              className='absolute w-20 h-20 border-t-4 border-l-4 rounded-tl-3xl top-8 left-8 border-emerald-400/30'
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            />
            <motion.div
              className='absolute w-20 h-20 border-b-4 border-r-4 rounded-br-3xl bottom-8 right-8 border-cyan-500/30'
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero