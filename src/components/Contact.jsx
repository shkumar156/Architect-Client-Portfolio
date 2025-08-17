import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'khanz.m.101@email.com',
      href: 'mailto:khanz.m.101@email.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+92 332 5516000',
      href: 'tel:+923325516000'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: '#'
    }
  ];

  

  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary-800 mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-lg text-primary-600 max-w-3xl mx-auto">
            Ready to discuss your next architectural project? I'd love to hear from you. 
            Let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-display font-semibold text-primary-800 mb-6">
                Let's Connect
              </h3>
              <p className="text-primary-600 leading-relaxed mb-8">
                Whether you're looking to collaborate on a project, need architectural 
                consultation, or want to discuss innovative design solutions, I'm here to help. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-accent-500 shadow-md group-hover:shadow-lg transition-shadow duration-300 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-primary-500 font-medium">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-primary-800 font-semibold hover:text-accent-500 transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-display font-semibold text-primary-800 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-primary-600 mb-6 max-w-2xl mx-auto">
            From concept to completion, I'll work with you to bring your architectural vision to life. 
            Let's discuss how we can create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:khanz.m.101@email.com"
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me Directly
            </a>
            <a
              href="#portfolio"
              className="bg-primary-100 hover:bg-primary-200 text-primary-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;