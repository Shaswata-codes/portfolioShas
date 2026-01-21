import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'shaswatasarkar05@gmail.com',
      link: 'mailto:shaswatasarkar05@gmail.com',
      color: '#00FF87'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9339014803',
      link: 'tel:+919339014803',
      color: '#00E5FF'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Bhubaneswar, India',
      link: null,
      color: '#FFD700'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, link: 'https://github.com/Shaswata-codes', label: 'GitHub', color: '#00FF87' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/shaswatasarkar/', label: 'LinkedIn', color: '#00E5FF' },
    { icon: FaTwitter, link: 'https://twitter.com/yourusername', label: 'Twitter', color: '#FFD700' },
    { icon: FaInstagram, link: 'https://www.instagram.com/sarkar_shas/', label: 'Instagram', color: '#00FF87' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 blur-3xl animate-pulse" />
        <div 
          className="absolute rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 blur-3xl animate-pulse" 
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
          <span className="block mb-4 text-sm font-semibold tracking-widest uppercase text-emerald-400">
            Get In Touch
          </span>

          <h2 className="mb-4 text-6xl font-bold tracking-tight text-white md:text-7xl">
            Let's Talk
          </h2>

          <div className="w-32 h-1 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-cyan-500" />

          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Contact Info & Social */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="relative p-6 overflow-hidden transition-all duration-300 border group rounded-2xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-emerald-500/50"
                >
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 group-hover:opacity-100" />
                  
                  <div className="relative z-10 flex items-center space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20"
                    >
                      <info.icon 
                        className="w-7 h-7"
                        style={{ color: info.color }}
                      />
                    </motion.div>
                    
                    <div>
                      <h3 className="mb-1 text-sm font-semibold text-slate-400">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-lg font-medium text-white transition-colors hover:text-emerald-400"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-white">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="p-8 border shadow-xl rounded-2xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50"
            >
              <h3 className="mb-6 text-2xl font-bold text-white">
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: `0 10px 30px ${social.color}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring', stiffness: 200 }}
                    className="flex flex-col items-center justify-center p-6 transition-all duration-300 border group rounded-2xl bg-slate-900/50 border-slate-700 hover:border-emerald-500"
                  >
                    <social.icon 
                      className="w-8 h-8 mb-2 transition-colors"
                      style={{ color: social.color }}
                    />
                    <span className="text-sm font-medium text-slate-400 group-hover:text-white">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quote Box */}
            <motion.div
              variants={itemVariants}
              className="p-8 border shadow-xl rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border-emerald-500/30"
            >
              <p className="text-lg italic leading-relaxed text-slate-300">
                "The best way to predict the future is to create it. Let's build something amazing together."
              </p>
              <div className="w-20 h-1 mt-4 bg-gradient-to-r from-emerald-500 to-cyan-500" />
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="p-8 border shadow-2xl md:p-10 rounded-3xl bg-slate-800/50 backdrop-blur-sm border-slate-700/50"
            >
              <h3 className="mb-8 text-3xl font-bold text-white">
                Send Me a Message
              </h3>

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-semibold text-slate-300">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-5 py-4 text-white transition-all duration-300 border rounded-xl bg-slate-900/50 border-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder=""
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-semibold text-slate-300">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-5 py-4 text-white transition-all duration-300 border rounded-xl bg-slate-900/50 border-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder=""
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-slate-300">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-5 py-4 text-white transition-all duration-300 border rounded-xl bg-slate-900/50 border-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-semibold text-slate-300">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="6"
                    whileFocus={{ scale: 1.01 }}
                    className="w-full px-5 py-4 text-white transition-all duration-300 border resize-none rounded-xl bg-slate-900/50 border-slate-600 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 20px 40px rgba(0, 255, 135, 0.4)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full px-8 py-4 overflow-hidden font-bold transition-all duration-300 shadow-lg text-slate-900 group rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Send Message
                    <FaPaperPlane className="ml-2 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1" />
                  </span>
                  <motion.div
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-cyan-400 to-yellow-400 group-hover:opacity-100"
                    initial={false}
                  />
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;