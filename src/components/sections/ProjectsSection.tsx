'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code } from 'lucide-react';

/* =========================
   PROJECT DATA (NATAN)
========================= */
const projects = [
  {
    title: 'Doctor Appointment Platform',
    type: 'Full-stack',
    description:
      'A modern doctor appointment platform enabling patients to register, book, and manage appointments while doctors oversee schedules. Features SMS reminders, admin OTP login, and production-grade monitoring.',
    tech: [
      'Next.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Appwrite',
      'Twilio',
      'Sentry',
    ],
    github: 'https://github.com/natanmuletahunde/Dr_appointment_with_SMSnextjs.git',
    live: 'https://dr-appointment-with-smsnextjs-4.onrender.com/',
  },
  {
    title: 'Video Meet App',
    type: 'Full-stack',
    description:
      'A real-time video conferencing application with personal meeting rooms, instant calls, and scheduled sessions. Built with modern authentication and a sleek, responsive UI.',
    tech: [
      'Next.js',
      'Stream Video SDK',
      'Clerk',
      'Tailwind CSS',
    ],
    github: 'https://github.com/natanmuletahunde/video-meet-app_next.js.git',
    live: 'https://video-meet-app-next-js-1.onrender.com/',
  },
  {
    title: 'AI-Converso (SaaS)',
    type: 'AI/ML',
    description:
      'A modern SaaS platform offering real-time AI conversations, secure authentication, and intelligent AI companions. Designed for scalability and seamless user experience.',
    tech: [
      'Next.js',
      'Tailwind CSS',
      'AI APIs',
      'SaaS Architecture',
    ],
    github: 'https://github.com/natanmuletahunde/Saas_Converso_teaching.git',
    live: 'https://saas-converso-teaching-5.onrender.com',
  },
];

const ProjectsSection = () => {
  const getProjectColor = (type: string) => {
    switch (type) {
      case 'Full-stack':
        return 'from-blue-500 to-cyan-500';
      case 'AI/ML':
        return 'from-purple-500 to-pink-500';
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
      default:
        return '💻';
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* ================= HEADER ================= */}
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
            High-impact projects focused on full-stack engineering, AI-powered
            systems, and real-world problem solving
          </p>
        </motion.div>

        {/* ================= PROJECTS GRID ================= */}
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
                {/* Gradient Top */}
                <div
                  className={`h-2 bg-gradient-to-r ${getProjectColor(
                    project.type
                  )}`}
                />

                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-gradient-to-r ${getProjectColor(
                        project.type
                      )}`}
                    >
                      {getProjectIcon(project.type)}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-slate-900 group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge className="mt-1 bg-slate-100 text-slate-600">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
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
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-slate-50 border-slate-300 text-slate-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
