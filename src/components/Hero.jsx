import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCommentDots, FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa'

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
        <div className='absolute rounded-full top-1/4 left-1/4 w-72 h-72 bg-neo-primary/20 blur-3xl animate-pulse' />
        <div className='absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 blur-3xl animate-pulse' style={{ animationDelay: '1s' }} />
      </motion.div>

      <div className='relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='grid items-center grid-cols-1 gap-16 lg:grid-cols-2'>
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
              className='inline-block px-5 py-2.5 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full glass dark:glass text-neo-secondary backdrop-blur-md shadow-lg border border-white/20'
            >
              ✨ Designing Forward
            </motion.span>
            
            <motion.h1
              variants={itemVariants}
              className='mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl'
            >
              <motion.span
                className='inline-block text-transparent bg-gradient-to-r from-neo-primary via-purple-600 to-pink-600 bg-clip-text'
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
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className='relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white transition-all duration-300 rounded-full shadow-lg group neo-btn-full hover:shadow-2xl'
              >
                <span className='relative z-10 flex items-center'>
                  View My Work
                  <FaArrowRight className='ml-2 transition-transform duration-300 group-hover:translate-x-2' />
                </span>
                <motion.div
                  className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:opacity-100'
                  initial={false}
                />
              </motion.a>
              
              <motion.button
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(147, 51, 234, 0.8)',
                  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-300 border-2 rounded-full group border-neo-primary hover:bg-neo-primary/20 backdrop-blur-sm"
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
                    backgroundColor: 'rgba(147, 51, 234, 0.2)',
                    borderColor: 'rgba(147, 51, 234, 0.5)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className='flex items-center justify-center w-12 h-12 text-lg transition-all duration-300 border border-transparent rounded-full shadow-lg md:w-14 md:h-14 glass dark:glass backdrop-blur-md hover:shadow-xl hover:text-neo-primary'
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
              <div className='h-px bg-gradient-to-r from-neo-primary/50 via-purple-600/50 to-transparent' />
              <motion.div
                className='absolute top-0 left-0 w-20 h-px bg-gradient-to-r from-neo-primary to-purple-600'
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
        </div>
      </div>
    </section>
  )
}

export default Hero