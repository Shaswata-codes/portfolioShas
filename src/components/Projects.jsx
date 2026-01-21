import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../assets/assets';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="block mb-4 text-sm font-semibold tracking-widest uppercase text-emerald-400">
            Selected Work
          </span>

          <h2 className="mb-4 text-6xl font-bold tracking-tight text-white md:text-7xl">
            Innovative Projects
          </h2>

          <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-cyan-500" />

          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Cutting-edge digital experiences that push boundaries and deliver results
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="relative overflow-hidden border group rounded-2xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-emerald-500/50"
            >
              <div className="relative overflow-hidden h-72">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent group-hover:opacity-100" />
              </div>

              <div className="p-8">
                <h3 className="mb-3 text-3xl font-bold text-white transition-colors group-hover:text-emerald-300">
                  {project.title}
                </h3>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-2 font-semibold text-emerald-400"
                >
                View Project →
              </motion.a>


              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;