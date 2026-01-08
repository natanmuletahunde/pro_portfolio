'use client';

import { motion } from 'framer-motion';
import { projects } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code } from 'lucide-react';

const ProjectsSection = () => {
  const getProjectColor = (type: string) => {
    switch (type) {
      case 'Full-stack':
        return 'from-blue-500 to-cyan-500';
      case 'AI/ML':
        return 'from-purple-500 to-pink-500';
      case 'Full-stack & Testing':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-slate-500 to-slate-600';
    }
  };

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'Full-stack':
        return '🌐';
      case 'AI/ML':
        return '🤖';
      case 'Full-stack & Testing':
        return '🧪';
      default:
        return '💻';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50">
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
            Projects Showcase
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A selection of my notable projects demonstrating full-stack development, 
            AI applications, and comprehensive testing solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-white shadow-lg border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Project Header */}
                <div className={`h-2 bg-gradient-to-r ${getProjectColor(project.type)}`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-gradient-to-r ${getProjectColor(project.type)} bg-opacity-10`}>
                        {getProjectIcon(project.type)}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-slate-900 group-hover:text-purple-600 transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-1 bg-slate-100 text-slate-600">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Project Description */}
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: (index * 0.2) + (techIndex * 0.05) 
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge 
                            variant="outline" 
                            className="bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors text-sm"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Projects Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Development Philosophy
              </h3>
              <p className="text-slate-600 max-w-3xl mx-auto text-lg mb-6">
                My projects reflect a commitment to clean code, user-centered design, and 
                comprehensive testing. I focus on building scalable solutions that solve 
                real-world problems while maintaining high standards of quality and performance.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-semibold text-slate-900">Performance</div>
                  <div className="text-sm text-slate-600">Optimized for speed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="font-semibold text-slate-900">Design</div>
                  <div className="text-sm text-slate-600">User-focused</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl mb-2">🔒</div>
                  <div className="font-semibold text-slate-900">Quality</div>
                  <div className="text-sm text-slate-600">Thoroughly tested</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl mb-2">📈</div>
                  <div className="font-semibold text-slate-900">Scalable</div>
                  <div className="text-sm text-slate-600">Future-ready</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;