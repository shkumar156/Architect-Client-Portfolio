import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Kanal House DHA Bahawalpur',
      category: 'Residential',
      year: '2024',
      location: 'Pakistan, PK',
      description: 'A modern 1 Kanal house in DHA Bahawalpur designed for elegance, functionality, and contemporary living.',
      image: '/Images/1 Kanal House DHA Bahawalpur/Kanal3.jpeg',
      gallery: [
        '/Images/1 Kanal House DHA Bahawalpur/Kanal3.jpeg',
        '/Images/1 Kanal House DHA Bahawalpur/Kanal2.jpeg',
        '/Images/1 Kanal House DHA Bahawalpur/Kanal3.jpeg',
        '/Images/1 Kanal House DHA Bahawalpur/Kanal4.jpeg',
        '/Images/1 Kanal House DHA Bahawalpur/Kanal5.jpeg',
        '/Images/1 Kanal House DHA Bahawalpur/Kanal6.jpeg',
        '/Images/1 Kanal House DHA Bahawalpur/Kanal7.jpeg',
        '/Images/1 Kanal House DHA Bahawalpur/Kanal8.jpeg',
        '/Images/1 Kanal House DHA Bahawalpur/Kanal9.jpeg',
        '/Images/1 Kanal House DHA Bahawalpur/Kanal10.jpeg',
        '/Images/1 Kanal House DHA Bahawalpur/Kanal11.jpeg',
        '/Images/1 Kanal House DHA Bahawalpur/Kanal12.jpeg',
        '/Images/1 Kanal House DHA Bahawalpur/Kanal13.jpeg'
      ],
      details: 'This project showcases innovative sustainable design principles with advanced BIM modeling and structural optimization.',
      tech: ['Revit', 'AutoCad', 'Lumion']
    },
          {
        id: 2,
        title: 'Beauty Salon Bahawalpur',
        category: 'Commercial',
        year: '2025',
        location: 'Pakistan, PK',
        description: 'A chic beauty salon in Bahawalpur featuring a modern interior design that blends style, comfort, and functionality.',
        image: '/Images/BeautySalon/BeautySalon2.png',
        gallery: [
          '/Images/BeautySalon/BeautySalon1.png',
          '/Images/BeautySalon/BeautySalon2.png',
          '/Images/BeautySalon/BeautySalon3.png',
          '/Images/BeautySalon/BeautySalon4.png',
          '/Images/BeautySalon/BeautySalon5.png',
          '/Images/BeautySalon/BeautySalon6.png',
          '/Images/BeautySalon/BeautySalon7.png',
          '/Images/BeautySalon/BeautySalon8.png',
          '/Images/BeautySalon/BeautySalon9.png',
          '/Images/BeautySalon/BeautySalon10.png',
          '/Images/BeautySalon/BeautySalon11.png'
        ],
      
      tech: ['Sketchup', 'Lumion', 'AutoCad', 'BIM 360']
    },
          {
        id: 3,
        title: '14 Marla Architecture Drawing Set Bahria Town',
        category: 'Residential',
        year: '2023',
        location: 'Pakistan, PK',
        description: 'A comprehensive architectural drawing set for a 14 Marla residential project in Bahria Town Lahore.',
        image: '/Images/14 Marla Bahria Town Lahore/1.jpg',
        gallery: [
          '/Images/14 Marla Bahria Town Lahore/1.jpg',
          '/Images/14 Marla Bahria Town Lahore/2.jpg',
          '/Images/14 Marla Bahria Town Lahore/3.jpg',
          '/Images/14 Marla Bahria Town Lahore/4.jpg',
          '/Images/14 Marla Bahria Town Lahore/5.jpg',
          '/Images/14 Marla Bahria Town Lahore/6.jpg',
          '/Images/14 Marla Bahria Town Lahore/7.jpg',
          '/Images/14 Marla Bahria Town Lahore/8.jpg',
          '/Images/14 Marla Bahria Town Lahore/9.jpg',
          '/Images/14 Marla Bahria Town Lahore/10.jpg',
          '/Images/14 Marla Bahria Town Lahore/11.jpg',
          '/Images/14 Marla Bahria Town Lahore/12.jpg',
          '/Images/14 Marla Bahria Town Lahore/13.jpg',
          '/Images/14 Marla Bahria Town Lahore/14.jpg',
          '/Images/14 Marla Bahria Town Lahore/15.jpg'
        ],
        details: 'A comprehensive architectural drawing set showcasing detailed plans, elevations, and sections for a modern residential design in Bahria Town Lahore.',
        tech: ['AutoCAD', 'Photoshop']
      },
    {
      id: 4,
      title: 'Architecture Plan',
      category: 'Residential',
      year: '2024',
      location: 'Pakisyan, PK',
      description: 'A luxury resort complex featuring sustainable design and panoramic ocean views.',
      image: '/Images/Architecture Plan/1-1.png',
      gallery: [
        '/Images/Architecture Plan/1-1.png',
        '/Images/Architecture Plan/2-1.png',
        '/Images/Architecture Plan/3-1.png',
        '/Images/Architecture Plan/4-1.png'
      ],
      
      tech: ['AutoCad']
    },
    {
      id: 5,
      title: 'Educational Building',
      category: 'Educational',
      year: '2023',
      location: 'Pakistan, PK',
      description: 'The UMT Library features a modern design that fosters learning and collaboration.',
      image: '/Images/Educational Building/13-1.png',
      gallery: [
        '/Images/Educational Building/1-1.png',
        '/Images/Educational Building/2-1.png',
        '/Images/Educational Building/3-1.png',
        '/Images/Educational Building/4-1.png',
        '/Images/Educational Building/5-1.png',
        '/Images/Educational Building/6-1.png',
        '/Images/Educational Building/7-1.png',
        '/Images/Educational Building/8-1.png',
        '/Images/Educational Building/9-1.png',
        '/Images/Educational Building/10-1.png',
        '/Images/Educational Building/11-1.png',
        '/Images/Educational Building/12-1.png',
        '/Images/Educational Building/13-1.png',
        '/Images/Educational Building/0-1.png'
      ],
      tech: ['Revit', 'AutoCad']
    },
    {
      id: 6,
      title: 'Parking Plaza',
      category: 'Commercial',
      year: '2022',
      location: 'Pakistan, PK',
      description: 'A modern multi-level parking plaza with efficient space utilization and contemporary design.',
      image: '/Images/Parking Plaza/1-1.png',
      gallery: [
        '/Images/Parking Plaza/1-1.png',
        '/Images/Parking Plaza/2-1.png',
        '/Images/Parking Plaza/3,4,5,6-1.png',
        '/Images/Parking Plaza/7,8,9,10-1.png',
        '/Images/Parking Plaza/11,12-1.png',
        '/Images/Parking Plaza/Elevation 1-1.png',
        '/Images/Parking Plaza/Elevation 2-1.png',
        '/Images/Parking Plaza/Sections-1.png',
        '/Images/Parking Plaza/views-1.png',
        '/Images/Parking Plaza/Green White Modern Thank You Poster-1.png'
      ],
  
      tech: ['Revit', 'AutoCAD', 'BIM 360']
    },
    {
      id: 7,
      title: 'Working Drawing Electrical and Plumbing',
      category: 'Residential',
      year: '2024',
      location: 'Pakistan, PK',
      description: 'Comprehensive electrical and plumbing working drawings with detailed technical specifications.',
      image: '/Images/WORKING DRAWING Electrical & Plumbing/1-1.png',
      gallery: [
        '/Images/WORKING DRAWING Electrical & Plumbing/1-1.png',
        '/Images/WORKING DRAWING Electrical & Plumbing/2-1.png',
        '/Images/WORKING DRAWING Electrical & Plumbing/3-1.png',
        '/Images/WORKING DRAWING Electrical & Plumbing/4-1.png',
        '/Images/WORKING DRAWING Electrical & Plumbing/5-1.png',
        '/Images/WORKING DRAWING Electrical & Plumbing/6-1.png',
        '/Images/WORKING DRAWING Electrical & Plumbing/7-1.png',
        '/Images/WORKING DRAWING Electrical & Plumbing/8-1.png',
        '/Images/WORKING DRAWING Electrical & Plumbing/9-1.png',
        '/Images/WORKING DRAWING Electrical & Plumbing/10-1.png',
        '/Images/WORKING DRAWING Electrical & Plumbing/11-1.png',
        '/Images/WORKING DRAWING Electrical & Plumbing/Grey Black Minimalist Modern Team Building Poster_2-1.png'
      ],
  
      tech: ['Revit', 'AutoCAD', 'BIM 360']
    },
    {
      id: 8,
      title: 'Visual Communcation',
      category: 'Mixed-Use',
      year: '2024',
      location: 'Pakistan, PK',
      description: 'Creative visual communication designs showcasing innovative presentation and graphic design skills.',
      image: '/Images/Final VC/PortFolio.jpg',
      gallery: [
        '/Images/Final VC/PortFolio.jpg',
        '/Images/Final VC/1.jpg',
        '/Images/Final VC/2.jpg',
        '/Images/Final VC/3.jpg',
        '/Images/Final VC/4.jpg',
        '/Images/Final VC/5.jpg',
        '/Images/Final VC/6.jpg',
        '/Images/Final VC/Mid 7.jpg',
        '/Images/Final VC/8.jpg',
        '/Images/Final VC/9.jpg',
        '/Images/Final VC/10.jpg',
        '/Images/Final VC/11.jpg',
        '/Images/Final VC/12.jpg',
        '/Images/Final VC/Final 1.jpg',
        '/Images/Final VC/Final 2.jpg',
        '/Images/Final VC/Final 3.jpg'
      ],
  
      tech: ['Revit', 'AutoCAD', 'BIM 360']
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
                  {project.image.toLowerCase().endsWith('.mp4') || project.image.toLowerCase().endsWith('.mov') || project.image.toLowerCase().endsWith('.avi') ? (
                    <video
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      muted
                      loop
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
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
                    className="w-full h-64 md:h-96 object-cover cursor-pointer hover:opacity-80 transition-opacity duration-300"
                    onClick={() => setSelectedImage(selectedProject.gallery[0])}
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
                    {selectedProject.gallery.slice(1).map((item, index) => {
                      const isVideo = item.toLowerCase().endsWith('.mp4') || item.toLowerCase().endsWith('.mov') || item.toLowerCase().endsWith('.avi');
                      
                      if (isVideo) {
                        return (
                          <video
                            key={index}
                            src={item}
                            className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                            onClick={() => setSelectedImage(item)}
                            controls
                            muted
                          />
                        );
                      }
                      
                      return (
                        <img
                          key={index}
                          src={item}
                          alt={`${selectedProject.title} ${index + 2}`}
                          className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity duration-300"
                          onClick={() => setSelectedImage(item)}
                        />
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedImage.toLowerCase().endsWith('.mp4') || selectedImage.toLowerCase().endsWith('.mov') || selectedImage.toLowerCase().endsWith('.avi') ? (
                  <video
                    src={selectedImage}
                    className="max-w-full max-h-full object-contain rounded-lg"
                    controls
                    autoPlay
                    muted
                  />
                ) : (
                  <img
                    src={selectedImage}
                    alt="Full view"
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                )}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X size={24} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;