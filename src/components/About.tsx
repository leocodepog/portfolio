import React from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full-Stack Expertise",
      description: "Master of modern web technologies, from React & Node.js to cloud architectures"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance Focused",
      description: "Optimizing applications for speed, scalability, and exceptional user experience"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Leadership",
      description: "Leading development teams and mentoring junior developers to success"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation Driven",
      description: "Constantly exploring new technologies and implementing cutting-edge solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">
                Crafting Digital Excellence
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                With over 8 years of experience in software development, I specialize in building 
                scalable web applications and leading high-performing development teams. My passion 
                lies in solving complex problems through elegant, maintainable code.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I thrive in fast-paced environments where innovation meets execution, consistently 
                delivering projects that exceed expectations and drive business growth.
              </p>
              <div className="flex space-x-8">
                <div>
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">8+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400">15+</div>
                  <div className="text-gray-400">Team Members Led</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-blue-400 mr-4">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;