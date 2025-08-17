import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'Excellence in Sustainable Design',
      organization: 'American Institute of Architects',
      year: '2023',
      description: 'Recognized for outstanding contribution to sustainable architecture and green building practices.',
      icon: <Award className="w-8 h-8" />,
      category: 'Professional'
    },
    {
      title: 'Innovation in Structural Engineering',
      organization: 'Structural Engineering Institute',
      year: '2023',
      description: 'Awarded for innovative approaches to complex structural challenges in high-rise buildings.',
      icon: <Trophy className="w-8 h-8" />,
      category: 'Technical'
    },
    {
      title: 'Young Engineer of the Year',
      organization: 'National Society of Professional Engineers',
      year: '2022',
      description: 'Honored for exceptional professional achievements and contributions to the engineering community.',
      icon: <Star className="w-8 h-8" />,
      category: 'Recognition'
    },
    {
      title: 'LEED AP Building Design + Construction',
      organization: 'U.S. Green Building Council',
      year: '2022',
      description: 'Advanced certification demonstrating expertise in sustainable building design and construction.',
      icon: <Medal className="w-8 h-8" />,
      category: 'Certification'
    },
    {
      title: 'Best Mixed-Use Development',
      organization: 'International Property Awards',
      year: '2021',
      description: 'Project recognition for exceptional design and execution of urban mixed-use development.',
      icon: <Trophy className="w-8 h-8" />,
      category: 'Project'
    },
    {
      title: 'Emerging Professional Award',
      organization: 'American Society of Civil Engineers',
      year: '2021',
      description: 'Recognition for leadership and innovative contributions in early career development.',
      icon: <Award className="w-8 h-8" />,
      category: 'Professional'
    }
  ];

  const certifications = [
    {
      title: 'Professional Engineer (PE)',
      organization: 'State Board of Professional Engineers',
      year: '2018',
      status: 'Active'
    },
    {
      title: 'LEED AP BD+C',
      organization: 'USGBC',
      year: '2022',
      status: 'Current'
    },
    {
      title: 'Certified Construction Manager (CCM)',
      organization: 'CMAA',
      year: '2020',
      status: 'Active'
    },
    {
      title: 'BIM Professional Certification',
      organization: 'Autodesk',
      year: '2019',
      status: 'Current'
    }
  ];

  const getIconColor = (category) => {
    const colors = {
      'Professional': 'text-blue-500',
      'Technical': 'text-accent-500',
      'Recognition': 'text-yellow-500',
      'Certification': 'text-green-500',
      'Project': 'text-purple-500'
    };
    return colors[category] || 'text-primary-500';
  };

  const getBadgeColor = (category) => {
    const colors = {
      'Professional': 'bg-blue-100 text-blue-700',
      'Technical': 'bg-accent-100 text-accent-700',
      'Recognition': 'bg-yellow-100 text-yellow-700',
      'Certification': 'bg-green-100 text-green-700',
      'Project': 'bg-purple-100 text-purple-700'
    };
    return colors[category] || 'bg-primary-100 text-primary-700';
  };

  return (
    <section id="awards" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-800 mb-6">
            Awards & Recognition
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Professional achievements and certifications that reflect commitment to excellence 
            in architectural engineering and sustainable design practices.
          </p>
        </motion.div>

        {/* Awards Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-semibold text-primary-800 mb-8 text-center"
          >
            Awards & Honors
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group border border-primary-100 hover:border-accent-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${getIconColor(award.category)} group-hover:scale-110 transition-transform duration-300`}>
                    {award.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getBadgeColor(award.category)}`}>
                    {award.category}
                  </span>
                </div>
                
                <h4 className="text-lg font-display font-semibold text-primary-800 mb-2">
                  {award.title}
                </h4>
                
                <div className="text-accent-600 font-medium mb-2">
                  {award.organization}
                </div>
                
                <div className="text-primary-500 text-sm mb-3 font-medium">
                  {award.year}
                </div>
                
                <p className="text-primary-600 text-sm leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-semibold text-primary-800 mb-8 text-center">
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-primary-200 rounded-xl p-6 text-center hover:border-accent-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Medal className="w-6 h-6 text-accent-500" />
                </div>
                
                <h4 className="font-display font-semibold text-primary-800 mb-2">
                  {cert.title}
                </h4>
                
                <p className="text-primary-600 text-sm mb-2">
                  {cert.organization}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-primary-500 text-sm">
                    {cert.year}
                  </span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    {cert.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-display font-bold mb-4">
            Committed to Excellence
          </h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto opacity-90">
            These recognitions reflect my dedication to pushing the boundaries of architectural 
            engineering while maintaining the highest standards of professional practice and 
            sustainable design innovation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-accent-100">Awards Received</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-accent-100">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-accent-100">Years Recognized</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;