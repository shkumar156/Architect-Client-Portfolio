import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Architecture Draftsman',
      company: 'DHA Office Bahawalpur',
      location: 'Pakistan, PK',
      duration: 'Jan 2025 - Mar 2025',
      description: 'Specialized in creating detailed architectural drawings and 3D visualizations using advanced software tools including AutoCAD, Revit, SketchUp, and Lumion for residential and commercial projects.',
      achievements: [
        'Produced comprehensive architectural drawings and construction documents using AutoCAD and Revit',
        'Created photorealistic 3D renderings and walkthroughs using Lumion and SketchUp',
        'Collaborated with design teams to develop detailed floor plans, elevations, and sections'
              ],
        type: 'work'
      }
    ];

  const education = [
    {
      degree: 'Bachelor of Building Design & Construction',
      institution: 'University of Management and Technology, Lahore',
      location: 'Pakistan, PK',
      duration: '2023 - Present',
      description: 'Comprehensive study of architectural design principles, construction methods, and building technology with hands-on experience in sustainable building practices.',
      type: 'education'
    }
  ];

  const allExperiences = [...experiences, ...education].sort((a, b) => {
    // Sort by start year (descending)
    const yearA = parseInt(a.duration.split(' - ')[0]);
    const yearB = parseInt(b.duration.split(' - ')[0]);
    return yearB - yearA;
  });

  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return '🎓';
      case 'internship':
        return '🌱';
      default:
        return <Briefcase size={20} />;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500';
      case 'internship':
        return 'bg-green-500';
      default:
        return 'bg-accent-500';
    }
  };

  return (
    <section id="experience" className="py-20 bg-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-800 mb-6">
            Experience
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            A journey through my professional career, showcasing growth in architectural 
            engineering and continuous learning in innovative design technologies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary-300"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {allExperiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 ${getColor(item.type)} rounded-full border-4 border-white shadow-lg z-10`}></div>

                {/* Content */}
                <div className="ml-20 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-semibold text-primary-800 mb-2">
                        {item.position || item.degree}
                      </h3>
                      <h4 className="text-lg text-accent-600 font-medium mb-2">
                        {item.company || item.institution}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-primary-600 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2">{getIcon(item.type)}</span>
                          <span className="capitalize font-medium">{item.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-primary-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {item.achievements && (
                    <div>
                      <h5 className="font-semibold text-primary-800 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-primary-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-accent-500 mb-2">3+</div>
            <div className="text-primary-600 font-medium">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-accent-500 mb-2">10+</div>
            <div className="text-primary-600 font-medium">Projects Completed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;