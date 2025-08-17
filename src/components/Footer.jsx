import React from 'react';
import { Heart, ArrowUp, Linkedin, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#experience', label: 'Experience' },
    { href: '#awards', label: 'Awards' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: '#',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: '#',
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: '#',
      label: 'Twitter',
      color: 'hover:text-blue-300'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:alex.morgan@email.com',
      label: 'Email',
      color: 'hover:text-accent-400'
    }
  ];

  const services = [
    'Architectural Design',
    'Structural Engineering',
    'BIM Modeling',
    'Project Management',
    'Sustainable Design',
    'Construction Consultation'
  ];

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4 text-white">
              Mughees Khan
            </h3>
            <p className="text-primary-300 mb-4 leading-relaxed">
              Architect Engineer dedicated to creating innovative and sustainable 
              structures that shape the future of our built environment.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`text-primary-400 ${social.color} transition-colors duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-primary-300 hover:text-accent-400 transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-primary-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-primary-300">
              <p>
                <span className="block text-sm">Email:</span>
                <a 
                  href="mailto:alex.morgan@email.com"
                  className="hover:text-accent-400 transition-colors duration-300"
                >
                  khanz.m.101@email.com
                </a>
              </p>
              <p>
                <span className="block text-sm">Phone:</span>
                <a 
                  href="tel:+923325516000"
                  className="hover:text-accent-400 transition-colors duration-300"
                >
                  +92 3325516000
                </a>
              </p>
              <p>
                <span className="block text-sm">Location:</span>
                Lahore, PK, Pakistan
              </p>
            </div>
          </div>
        </div>


      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-400 text-sm mb-4 md:mb-0">
              <p>
                © {currentYear} Mughees Khan. Made with{' '}
                <Heart className="w-4 h-4 inline-block text-red-500" />{' '}
                in Pakistan.
              </p>
            </div>
            
            <button
              onClick={scrollToTop}
              className="bg-primary-800 hover:bg-primary-700 text-primary-300 hover:text-white p-2 rounded-full transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;