import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="w-8 h-8" />, value: '50+', label: 'Projects Completed' },
    { icon: <Users className="w-8 h-8" />, value: '8+', label: 'Years Experience' },
    { icon: <Lightbulb className="w-8 h-8" />, value: '25+', label: 'Design Awards' },
    { icon: <Target className="w-8 h-8" />, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3760071/pexels-photo-3760071.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Alex Morgan"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent-500 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-2xl font-bold">8+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute top-4 left-4 w-full h-full bg-primary-100 rounded-2xl -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-800 mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-accent-500 mb-6"></div>
              <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                I'm Alex Morgan, a passionate Architecture Engineer with over 8 years of experience 
                in designing and engineering innovative structures. My expertise lies in bridging the 
                gap between architectural creativity and structural engineering precision.
              </p>
              <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                I specialize in sustainable design, BIM modeling, and cutting-edge construction 
                technologies. My work spans from residential complexes to large-scale commercial 
                projects, always with a focus on sustainability and human-centered design.
              </p>
              <p className="text-lg text-primary-600 mb-8 leading-relaxed">
                When I'm not designing the next architectural marvel, you'll find me exploring new 
                technologies, mentoring young engineers, or sketching ideas for future projects.
              </p>
            </div>

            {/* Expertise Areas */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary-800 mb-4">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Structural Engineering',
                  'BIM & 3D Modeling',
                  'Sustainable Design',
                  'Project Management',
                  'Construction Technology',
                  'Building Information Systems'
                ].map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                    <span className="text-primary-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors duration-300"
            >
              <div className="text-accent-500 mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary-800 mb-2">
                {stat.value}
              </div>
              <div className="text-primary-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;