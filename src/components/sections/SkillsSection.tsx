'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: skills.frontend,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      skills: skills.backend,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mobile Development",
      icon: "📱", 
      skills: skills.mobile,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Databases & Services",
      icon: "🗄️",
      skills: skills.databases,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "UI/UX & Design",
      icon: "🎯",
      skills: skills.uiux,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Testing & QA",
      icon: "🧪",
      skills: skills.testing,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI / Machine Learning",
      icon: "🤖",
      skills: skills.aiMl,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Skills & Tech Stack
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="h-full bg-white shadow-lg border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Category Header */}
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (index * 0.1) + (skillIndex * 0.05) 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-sm px-3 py-1"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Technical Proficiency
            </h3>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              My skill set spans the full software development lifecycle, from concept and design 
              to implementation and testing. I specialize in building scalable web applications 
              with modern frameworks and am continuously expanding my knowledge in emerging technologies 
              like AI and machine learning.
            </p>
            
            <div className="mt-6 flex justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">7+</div>
                <div className="text-sm text-slate-600">Technology Domains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">30+</div>
                <div className="text-sm text-slate-600">Technologies & Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;