import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiRedis, SiNextdotjs, SiExpress, SiFirebase, SiGraphql } from 'react-icons/si';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React', icon: FaReact, color: '#61DAFB', level: 95 },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 90 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 95 },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 88 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 92 },
    ],
    backend: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 90 },
      { name: 'Express', icon: SiExpress, color: '#ffffff', level: 88 },
      { name: 'Python', icon: FaPython, color: '#3776AB', level: 85 },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098', level: 82 },
    ],
    database: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 90 },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 85 },
      { name: 'Redis', icon: SiRedis, color: '#DC382D', level: 80 },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 87 },
    ],
    tools: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 92 },
      { name: 'Docker', icon: FaDocker, color: '#2496ED', level: 83 },
      { name: 'Figma', icon: FaFigma, color: '#F24E1E', level: 88 },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const skillVariants = {
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

  const SkillCard = ({ skill, index }) => (
    <motion.div
      variants={skillVariants}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        boxShadow: `0 20px 40px ${skill.color}20`
      }}
      className="relative p-6 overflow-hidden transition-all duration-300 border group rounded-2xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50"
    >
      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4">
          <skill.icon 
            className="w-16 h-16 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" 
            style={{ color: skill.color }}
          />
        </div>
        
        <h4 className="text-xl font-semibold text-center text-white transition-colors group-hover:text-purple-300">
          {skill.name}
        </h4>
      </div>
    </motion.div>
  );

  const CategorySection = ({ title, skills, delay = 0 }) => (
    <motion.div
      variants={categoryVariants}
      className="mb-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className="mb-8"
      >
        <h3 className="mb-2 text-3xl font-bold text-white md:text-4xl">
          {title}
        </h3>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 blur-3xl animate-pulse" />
        <div 
          className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 blur-3xl animate-pulse" 
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
          <span className="block mb-4 text-sm font-semibold tracking-widest text-purple-400 uppercase">
            Technical Expertise
          </span>

          <h2 className="mb-4 text-6xl font-bold tracking-tight text-white md:text-7xl">
            Skills & Technologies
          </h2>

          <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500" />

          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Categories */}
        <CategorySection 
          title="Frontend Development" 
          skills={skills.frontend} 
          delay={0}
        />
        
        <CategorySection 
          title="Backend Development" 
          skills={skills.backend} 
          delay={0.1}
        />
        
        <CategorySection 
          title="Database & Storage" 
          skills={skills.database} 
          delay={0.2}
        />
        
        <CategorySection 
          title="Tools & DevOps" 
          skills={skills.tools} 
          delay={0.3}
        />

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 gap-6 mt-20 md:grid-cols-4"
        >
          {[
            { value: '10+', label: 'Projects Completed' },
            { value: '3+', label: 'Years Experience' },
            { value: '30+', label: 'Happy Clients' },
            { value: '15+', label: 'Technologies' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 text-center transition-all duration-300 border group rounded-2xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: 'spring' }}
                className="mb-2 text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm font-medium text-slate-400 group-hover:text-slate-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;