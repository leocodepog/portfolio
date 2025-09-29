import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 92 },
        { name: "Next.js", level: 88 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 93 },
        { name: "Python", level: 87 },
        { name: "PostgreSQL", level: 89 },
        { name: "MongoDB", level: 86 },
        { name: "Redis", level: 82 }
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: 90 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 85 },
        { name: "CI/CD", level: 91 },
        { name: "Terraform", level: 83 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Jest", level: 89 },
        { name: "GraphQL", level: 86 },
        { name: "Microservices", level: 88 },
        { name: "System Design", level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit spanning the entire development stack, 
              from frontend frameworks to cloud infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-bold mb-6 text-center text-blue-400">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;