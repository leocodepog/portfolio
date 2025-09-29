import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "leo.lin@example.com",
      link: "mailto:leo.lin@example.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "San Francisco, CA",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can create 
              something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-blue-400">Get In Touch</h3>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-blue-400 bg-gray-700 p-3 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{item.label}</div>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input 
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200"
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-blue-400 focus:outline-none transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;