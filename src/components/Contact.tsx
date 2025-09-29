import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart, Star, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "leo.lin@example.com",
      link: "mailto:leo.lin@example.com",
      emoji: "📧",
      color: "from-pink-400 to-red-400"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      emoji: "📱",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "San Francisco, CA",
      link: null,
      emoji: "🌸",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com",
      color: "from-gray-400 to-gray-600",
      emoji: "🐙"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com",
      color: "from-blue-400 to-blue-600",
      emoji: "💼"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com",
      color: "from-cyan-400 to-blue-400",
      emoji: "🐦"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 text-8xl text-pink-300 anime-float">💌</div>
        <div className="absolute top-40 right-20 text-6xl text-blue-300 anime-float" style={{animationDelay: '1s'}}>✨</div>
        <div className="absolute bottom-40 left-20 text-7xl text-yellow-300 anime-float" style={{animationDelay: '2s'}}>🌟</div>
        <div className="absolute bottom-20 right-10 text-5xl text-green-300 anime-float" style={{animationDelay: '0.5s'}}>💫</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block anime-card p-6 rounded-3xl mb-6 sketch-decoration">
              <h2 className="text-5xl md:text-6xl font-bold anime-text font-['Caveat']">
                Let's Create Magic Together! ✨
              </h2>
            </div>
            <div className="w-32 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 mx-auto rounded-full sketch-wiggle mb-6"></div>
            <p className="text-xl text-white max-w-3xl mx-auto font-['Caveat']">
              Ready for an epic collaboration? Let's turn your wildest ideas into digital reality! 🚀
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left column - Contact info */}
            <div>
              <div className="anime-card p-8 rounded-3xl mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-pink-400 sketch-wiggle" />
                  <h3 className="text-3xl font-bold text-white font-['Caveat']">
                    Get In Touch! 💌
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 anime-card p-4 rounded-2xl hover:scale-105 transition-all duration-300"
                    >
                      <div className={`bg-gradient-to-r ${item.color} p-3 rounded-full text-white`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-white font-['Caveat'] text-lg">{item.label}</span>
                          <span className="text-xl">{item.emoji}</span>
                        </div>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="text-pink-300 hover:text-white transition-colors duration-200 font-medium"
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
              </div>

              {/* Social links */}
              <div className="anime-card p-8 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="w-8 h-8 text-yellow-400 sketch-wiggle" />
                  <h4 className="text-2xl font-bold text-white font-['Caveat']">
                    Follow My Adventures! 🌟
                  </h4>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`bg-gradient-to-r ${social.color} hover:scale-110 p-4 rounded-2xl transition-all duration-300 flex items-center gap-3 text-white font-['Caveat'] font-medium`}
                      aria-label={social.name}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                      <span className="text-lg">{social.emoji}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Contact form */}
            <div className="anime-card p-8 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-8 h-8 text-cyan-400 sketch-wiggle" />
                <h3 className="text-3xl font-bold text-white font-['Caveat']">
                  Send a Message! 📝
                </h3>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-['Caveat'] text-lg mb-2">
                      Your Name ✨
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 anime-card rounded-2xl border-2 border-white/20 focus:border-pink-400 focus:outline-none transition-all duration-200 text-white placeholder-white/50"
                      placeholder="Enter your awesome name!"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-['Caveat'] text-lg mb-2">
                      Email Address 📧
                    </label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 anime-card rounded-2xl border-2 border-white/20 focus:border-cyan-400 focus:outline-none transition-all duration-200 text-white placeholder-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-['Caveat'] text-lg mb-2">
                    Project Subject 🎯
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 anime-card rounded-2xl border-2 border-white/20 focus:border-purple-400 focus:outline-none transition-all duration-200 text-white placeholder-white/50"
                    placeholder="What magical project do you have in mind?"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-['Caveat'] text-lg mb-2">
                    Your Message 💭
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 anime-card rounded-2xl border-2 border-white/20 focus:border-green-400 focus:outline-none transition-all duration-200 resize-none text-white placeholder-white/50"
                    placeholder="Tell me about your epic project idea! The more details, the better! ✨"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full sketch-button py-4 font-bold text-white text-lg font-['Caveat'] flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  <span>Send Magic Message!</span>
                  <Sparkles size={20} />
                </button>
              </form>
            </div>
          </div>

          {/* Fun closing section */}
          <div className="text-center mt-16">
            <div className="anime-card p-8 rounded-3xl">
              <div className="text-6xl mb-4 anime-float">🎌</div>
              <h3 className="text-2xl font-bold text-white mb-4 font-['Caveat']">
                "Every great project starts with a simple 'Hello!' 👋"
              </h3>
              <p className="text-pink-300 font-['Caveat'] text-lg">
                - Leo Lin, Your Friendly Neighborhood Code Wizard ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;