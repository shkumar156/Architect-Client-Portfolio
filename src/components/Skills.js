import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Design & Modeling',
      skills: [
        { name: 'AutoCAD', level: 95, icon: '🔧' },
        { name: 'Revit', level: 90, icon: '🏗️' },
        { name: 'SketchUp', level: 85, icon: '📐' },
        { name: 'Rhino 3D', level: 80, icon: '🦏' },
      ]
    },
    {
      title: 'Visualization',
      skills: [
        { name: 'Lumion', level: 88, icon: '💡' },
        { name: '3ds Max', level: 82, icon: '🎨' },
        { name: 'V-Ray', level: 85, icon: '☀️' },
        { name: 'Photoshop', level: 75, icon: '🖼️' },
      ]
    },
    {
      title: 'Analysis & Engineering',
      skills: [
        { name: 'STAAD Pro', level: 92, icon: '⚡' },
        { name: 'ETABS', level: 90, icon: '🏢' },
        { name: 'SAP2000', level: 85, icon: '📊' },
        { name: 'Robot Structural', level: 78, icon: '🤖' },
      ]
    },
    {
      title: 'Project Management',
      skills: [
        { name: 'Primavera P6', level: 80, icon: '📅' },
        { name: 'MS Project', level: 85, icon: '📈' },
        { name: 'BIM 360', level: 88, icon: '🔄' },
        { name: 'Navisworks', level: 82, icon: '🔍' },
      ]
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-800 mb-6">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Proficient in industry-leading software and tools for architectural design, 
            structural analysis, and project management.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-display font-semibold text-primary-800 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{skill.icon}</span>
                        <span className="font-medium text-primary-700">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-primary-600">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-primary-200 rounded-full h-3">
                      <motion.div
                        className="bg-gradient-to-r from-accent-400 to-accent-600 h-3 rounded-full shadow-sm"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-display font-semibold text-primary-800 mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Sustainable Design',
              'LEED Certification',
              'Building Codes',
              'Construction Management',
              'Site Planning',
              'Energy Modeling',
              'Seismic Analysis',
              'Green Building',
              'Value Engineering',
              'Risk Assessment'
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white text-primary-700 px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-accent-50 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;