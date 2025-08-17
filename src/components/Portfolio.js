import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      category: 'Residential',
      year: '2023',
      location: 'New York, NY',
      description: 'A sustainable 150-unit residential complex featuring modern amenities and energy-efficient design.',
      image: 'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      details: 'This project showcases innovative sustainable design principles with advanced BIM modeling and structural optimization.',
      tech: ['Revit', 'ETABS', 'Lumion', 'STAAD Pro']
    },
    {
      id: 2,
      title: 'Corporate Headquarters',
      category: 'Commercial',
      year: '2023',
      location: 'San Francisco, CA',
      description: 'A 20-story corporate headquarters with cutting-edge design and LEED Platinum certification.',
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      details: 'A landmark building featuring advanced structural systems and sustainable technologies.',
      tech: ['Revit', 'SAP2000', '3ds Max', 'BIM 360']
    },
    {
      id: 3,
      title: 'Cultural Arts Center',
      category: 'Cultural',
      year: '2022',
      location: 'Chicago, IL',
      description: 'A multi-purpose cultural center featuring innovative acoustic design and flexible spaces.',
      image: 'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      details: 'This cultural center represents the perfect blend of artistic vision and engineering precision.',
      tech: ['SketchUp', 'Lumion', 'AutoCAD', 'V-Ray']
    },
    {
      id: 4,
      title: 'Luxury Hotel Resort',
      category: 'Hospitality',
      year: '2022',
      location: 'Miami, FL',
      description: 'A luxury resort complex featuring sustainable design and panoramic ocean views.',
      image: 'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      details: 'A resort that harmonizes luxury with environmental responsibility through innovative design.',
      tech: ['Revit', 'Rhino 3D', 'Lumion', 'ETABS']
    },
    {
      id: 5,
      title: 'Educational Campus',
      category: 'Educational',
      year: '2021',
      location: 'Boston, MA',
      description: 'A modern university campus designed for collaborative learning and research.',
      image: 'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      details: 'An educational facility designed to inspire learning through thoughtful architectural design.',
      tech: ['Revit', 'STAAD Pro', '3ds Max', 'Navisworks']
    },
    {
      id: 6,
      title: 'Mixed-Use Development',
      category: 'Mixed-Use',
      year: '2021',
      location: 'Seattle, WA',
      description: 'A vibrant mixed-use development combining retail, office, and residential spaces.',
      image: 'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=800',
      gallery: [
        'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ],
      details: 'A comprehensive development that creates a vibrant urban community through integrated design.',
      tech: ['Revit', 'AutoCAD', 'Lumion', 'BIM 360']
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-800 mb-6">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Explore a collection of innovative architectural and engineering projects 
            that showcase creativity, sustainability, and technical excellence.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-accent-500 text-white shadow-lg'
                  : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <ExternalLink size={32} className="mx-auto mb-2" />
                      <p className="font-medium">View Project</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-primary-800 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-primary-600 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{project.year}</span>
                    <MapPin size={16} className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-primary-600 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.gallery[0]}
                    alt={selectedProject.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-display font-bold text-primary-800 mb-4">
                      {selectedProject.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-4 text-primary-600 mb-4">
                      <div className="flex items-center">
                        <Calendar size={18} className="mr-2" />
                        <span>{selectedProject.year}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={18} className="mr-2" />
                        <span>{selectedProject.location}</span>
                      </div>
                      <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-lg text-primary-600 mb-6 leading-relaxed">
                    {selectedProject.details}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedProject.gallery.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedProject.title} ${index + 2}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;