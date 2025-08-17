import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Senior Architecture Engineer',
      company: 'Innovative Structures Inc.',
      location: 'New York, NY',
      duration: '2020 - Present',
      description: 'Leading architectural and structural design teams for large-scale commercial projects. Specializing in BIM implementation and sustainable design practices.',
      achievements: [
        'Led design team for $50M+ commercial projects',
        'Implemented BIM workflows reducing design time by 30%',
        'Achieved LEED Platinum certification on 5 major projects'
      ],
      type: 'work'
    },
    {
      position: 'Architecture Engineer',
      company: 'Modern Design Solutions',
      location: 'San Francisco, CA',
      duration: '2018 - 2020',
      description: 'Specialized in residential and mixed-use developments with focus on sustainable design and energy efficiency.',
      achievements: [
        'Designed 200+ residential units with energy-efficient systems',
        'Collaborated with multidisciplinary teams on complex projects',
        'Reduced project delivery time by 25% through process optimization'
      ],
      type: 'work'
    },
    {
      position: 'Junior Structural Engineer',
      company: 'Precision Engineering Group',
      location: 'Chicago, IL',
      duration: '2016 - 2018',
      description: 'Focused on structural analysis and design using advanced computational tools. Gained expertise in seismic and wind load analysis.',
      achievements: [
        'Completed structural analysis for 50+ buildings',
        'Specialized in seismic retrofit projects',
        'Mastered advanced structural analysis software'
      ],
      type: 'work'
    },
    {
      position: 'Architecture Intern',
      company: 'Creative Spaces Studio',
      location: 'Boston, MA',
      duration: '2015 - 2016',
      description: 'Gained hands-on experience in architectural design and 3D modeling. Contributed to design development and construction documentation.',
      achievements: [
        'Assisted in design development for 10+ projects',
        'Created detailed 3D models and renderings',
        'Supported construction administration tasks'
      ],
      type: 'internship'
    }
  ];

  const education = [
    {
      degree: 'Master of Architecture Engineering',
      institution: 'MIT School of Architecture',
      location: 'Cambridge, MA',
      duration: '2013 - 2015',
      description: 'Focused on advanced structural systems and sustainable design technologies.',
      type: 'education'
    },
    {
      degree: 'Bachelor of Civil Engineering',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      duration: '2009 - 2013',
      description: 'Strong foundation in structural engineering with honors in structural design.',
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
            <div className="text-3xl font-bold text-accent-500 mb-2">8+</div>
            <div className="text-primary-600 font-medium">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-accent-500 mb-2">50+</div>
            <div className="text-primary-600 font-medium">Projects Completed</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-accent-500 mb-2">4</div>
            <div className="text-primary-600 font-medium">Companies</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;