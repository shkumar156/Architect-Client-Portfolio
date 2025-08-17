import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Download, ExternalLink, Calendar, GraduationCap, Briefcase, Code, Star } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-slate-800">Mughees Khan</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-600 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('education')} className="text-slate-600 hover:text-blue-600 transition-colors">Education</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-blue-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 transition-colors text-left">About</button>
                <button onClick={() => scrollToSection('skills')} className="text-slate-600 hover:text-blue-600 transition-colors text-left">Skills</button>
                <button onClick={() => scrollToSection('experience')} className="text-slate-600 hover:text-blue-600 transition-colors text-left">Experience</button>
                <button onClick={() => scrollToSection('education')} className="text-slate-600 hover:text-blue-600 transition-colors text-left">Education</button>
                <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-blue-600 transition-colors text-left">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors text-left">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-4">
                Mughees Khan
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 mb-6">
                Building Design & Construction Professional
              </p>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Passionate about creating innovative architectural solutions with expertise in modern design tools and construction methodologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Get In Touch
                </button>
                <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                  <Download size={20} />
                  Download CV
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl">
                  <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-white flex items-center justify-center">
                    <img 
                      src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                      alt="Mughees Khan"
                      className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A dedicated building design and construction professional with expertise in cutting-edge design software and a passion for creating functional, aesthetic architectural solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-slate-600">Professional tools and technologies I work with</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">AutoCAD</h3>
              <p className="text-slate-600">2D and 3D technical drawing and design</p>
              <div className="mt-4 flex items-center">
                <div className="flex-1 bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full w-5/6"></div>
                </div>
                <span className="ml-2 text-sm text-slate-500">Expert</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Revit</h3>
              <p className="text-slate-600">Building Information Modeling (BIM)</p>
              <div className="mt-4 flex items-center">
                <div className="flex-1 bg-slate-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                </div>
                <span className="ml-2 text-sm text-slate-500">Advanced</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">SketchUp</h3>
              <p className="text-slate-600">3D modeling and architectural visualization</p>
              <div className="mt-4 flex items-center">
                <div className="flex-1 bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-4/5"></div>
                </div>
                <span className="ml-2 text-sm text-slate-500">Advanced</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Lumion</h3>
              <p className="text-slate-600">3D rendering and architectural animation</p>
              <div className="mt-4 flex items-center">
                <div className="flex-1 bg-slate-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full w-3/4"></div>
                </div>
                <span className="ml-2 text-sm text-slate-500">Proficient</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Experience</h2>
            <p className="text-lg text-slate-600">Professional journey and accomplishments</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Senior Design Consultant</h3>
                  <p className="text-blue-600 font-medium">ABC Construction Group</p>
                </div>
                <div className="flex items-center text-slate-500 mt-2 md:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span>2022 - Present</span>
                </div>
              </div>
              <p className="text-slate-600">
                Leading architectural design projects using AutoCAD and Revit, managing client relationships, and ensuring project delivery within timelines and budget constraints.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Junior Architect</h3>
                  <p className="text-blue-600 font-medium">XYZ Design Studio</p>
                </div>
                <div className="flex items-center text-slate-500 mt-2 md:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span>2020 - 2022</span>
                </div>
              </div>
              <p className="text-slate-600">
                Assisted in residential and commercial building designs, created detailed drawings using SketchUp and AutoCAD, and collaborated with senior architects on complex projects.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">Design Intern</h3>
                  <p className="text-blue-600 font-medium">Modern Architecture Firm</p>
                </div>
                <div className="flex items-center text-slate-500 mt-2 md:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span>2019 - 2020</span>
                </div>
              </div>
              <p className="text-slate-600">
                Gained hands-on experience in architectural visualization using Lumion, assisted in project documentation, and learned industry best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Education</h2>
            <p className="text-lg text-slate-600">Academic background and qualifications</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6 mt-1">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-800">Bachelor's Degree</h3>
                      <p className="text-xl text-blue-600 font-medium">Building Design and Construction</p>
                      <p className="text-slate-600">University of Architecture & Engineering</p>
                    </div>
                    <div className="flex items-center text-slate-500 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-2" />
                      <span>2016 - 2020</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Comprehensive study of architectural principles, construction methodologies, structural engineering, and modern design software applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Architectural Design</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Construction Management</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Structural Engineering</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Building Codes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600">Some of my recent architectural and design work</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Modern Residential Complex"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Modern Residential Complex</h3>
                <p className="text-slate-600 mb-4">Contemporary apartment building with sustainable design principles and modern amenities.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Completed 2023</span>
                  <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Commercial Office Building"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Commercial Office Building</h3>
                <p className="text-slate-600 mb-4">Multi-story office complex with energy-efficient design and flexible workspace layouts.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Completed 2023</span>
                  <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Luxury Villa Design"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Luxury Villa Design</h3>
                <p className="text-slate-600 mb-4">High-end residential villa with contemporary architecture and premium finishes.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Completed 2022</span>
                  <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    <ExternalLink size={16} />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-slate-300">Ready to discuss your next project? Let's connect!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-slate-300">03325516000</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-slate-300">mughees.khan@email.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-slate-300">Available for projects nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Mughees Khan. All rights reserved.</p>
            <p className="mt-2">Building Design & Construction Professional</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;