import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../assets/assets';

const Projects = () => {

  // ✅ Container animation (stagger)
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // ✅ Card animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // ✅ Optional hover variants (safe)
  const linkedVariants = {
    hover: {
      x: 6,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.06,
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  };

  return (
    <section id="projects" className="relative z-10 py-16 md:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mb-12 text-center md:mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 font-medium rounded-full glass dark:glass text-neo-secondary">
            SELECTED WORK
          </span>

          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="gradient-text">Innovative Projects</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl">
            Cutting-edge digital experiences that push boundaries and deliver results
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className="relative overflow-hidden shadow-lg h-80 md:h-96 rounded-3xl glass dark:glass"
            >
              {/* project content here */}
              <div>
                
              </div>
              <motion.img
              src={project.image} alt={project.title} className='object-cover w-full h-full'
              whileHover={{scale:1.12}}
              transition={{duration:0.6}}/>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
