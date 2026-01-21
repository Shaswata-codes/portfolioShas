import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { navItems } from '../assets/assets'
import { toggleTheme } from '../utils/theme';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

const Header = () => {

  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setmobileMenuOpen] = useState(false);

  const handleToggleTheme = () =>{
    toggleTheme();
    setIsDark(!isDark);
  }

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ y: 0, opacity: 1, backdropFilter: "blur(20px)" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed z-50 w-full shadow-xl bg-white/10 dark:bg-black/10"
      >
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <motion.span
              className="text-lg text-2xl font-semibold font-bold text-gray-900 dark:text-white gradient-text"
              initial={{ opacity:0, x:-20}}
              animate={{ opacity:1, x:0}}
              transition={{duration:0.7}}
              whileHover={{scale:1.05}}
            >
              Coding Portfolio
            </motion.span>

            <div className='items-center hidden space-x-10 lg:flex'>
              {navItems.map((item, index) => (
                <motion.a key={item.label}
                href={item.href}
                className="relative group hover:text-cyan-400"
                initial={{ opacity:0, y:-15}}
                animate={{ opacity:1, y:0}}
                transition={{type:"spring", stiffness:120, delay:0.1}}
                whileHover={{scale:1.1}}
                
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.button
                whileHover={{
                scale: 1.06,
                boxShadow: "0 0 20px rgba(0, 255, 135, .5)"
                }}
                className='px-6 py-2 font-semibold cursor-pointer dark:border-gray-300'
              >
                Resume
              </motion.button>
              <motion.button onClick={handleToggleTheme}
              whileTap={{scale:0.8, rotate:180}}
              transition={{type:"spring", stiffness:200}}
              className='flex items-center justify-center w-10 h-10 rounded-full dark:glass'>
                {isDark?
                (<FiSun className='w-6 h-6 text-yellow-400' />):(<FiMoon className='w-6 h-6 text-neo-dark' />)}
                
              </motion.button>

              
            </div>

            {/*Mobile Menu Icon*/}
            
            <div className='flex space-x-4 lg:hidden'>
              <motion.button onClick={handleToggleTheme}
              whileTap={{scale:0.8, rotate:180}}
              transition={{type:"spring", stiffness:200}}
              className='flex items-center justify-center w-10 h-10 rounded-full dark:glass'>
                {isDark?
                (<FiSun className='w-6 h-6 text-yellow-400' />):(<FiMoon className='w-6 h-6 text-neo-dark' />)}
                
              </motion.button>
              <button onClick={()=>setmobileMenuOpen(true)} className='p-2 rounded-full lg:hidden glass dark:glass'>
                <FiMenu className='w-6 h-6'/>
              </button>
            </div>

          </div>
        </div>
      </motion.nav>

      {mobileMenuOpen && (
        <motion.div
        initial={{backdropFilter:"blur(0px)", opacity:0}}
        animate={{backdropFilter:"blur(20px)", opacity:1}}
        transition={{duration: 0.5, ease:"easeInOut"}}
        className='fixed inset-0 z-50 flex items-center justify-center'>
          <motion.div
          initial={{y:90, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{duration: 0.5, ease:"easeInOut"}}
          className='space-y-10 text-center'>
            {navItems.map((item, index) => (
              <motion.a
              key={item.label}
              href={item.href}
              className="block text-4xl font-bold hover:text-cyan-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setmobileMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button className='px-10 py-4 text-xl font-bold rounded rounded-full cursor-pointer neo-btn'
            whileHover={{scale:1.1}}
            >
              Download Resume
            </motion.button>
          </motion.div>
          
          <motion.button
          onClick={()=>setmobileMenuOpen(false)}
          initial={{scale:0}}
          animate={{scale:1}}
          whileHover={{
            rotate:90,
            scale :1.1
          }}
          className='absolute p-4 rounded-full cursor-pointer top-8 glass dark:glass right-8'>
            <FiX className='w-7 h-7'/>
          </motion.button>
          
        </motion.div>
      )}

    </>
  )
}

export default Header