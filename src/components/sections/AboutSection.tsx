'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/constants';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const timelineEvents = [
    {
      year: "2019",
      title: "Started Software Engineering",
      description: "Began journey at Adama Science and Technology University",
      highlight: true
    },
    {
      year: "2020-2023",
      title: "Development Experience",
      description: "Built 4+ years of hands-on development skills"
    },
    {
      year: "2023",
      title: "UI/UX Internship",
      description: "Web development and design at Omishtu-Joy"
    },
    {
      year: "2024",
      title: "Software Testing Role",
      description: "Cypress testing at Awura Tech"
    },
    {
      year: "2024",
      title: "Machine Learning Focus",
      description: "Specializing in TensorFlow and AI applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My journey as a software engineer and my passion for creating impactful solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white shadow-lg border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Hi i am  Natan Muleta
              </h3>
              <div className="space-y-4 text-slate-600">
                <p className="text-lg leading-relaxed">
                  Im a {personalInfo.year}-year Software Engineering student at {personalInfo.university},
                  passionate about building innovative software solutions that make a real impact.
                </p>
                <p className="text-lg leading-relaxed">
                  With {personalInfo.experience} of development experience, Ive worked across various
                  technologies and domains, from web development to software testing and now focusing on
                  {personalInfo.focus}.
                </p>
                <p className="text-lg leading-relaxed">
                  I thrive in collaborative environments and love solving complex problems through
                  clean, efficient code and thoughtful design.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {personalInfo.experience}
                  </div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">
                    {personalInfo.year}
                  </div>
                  <div className="text-sm text-slate-600">Education Level</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200"></div>

            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-8 last:mb-0"
              >
                <div
                  className={`absolute left-6 w-5 h-5 rounded-full border-4 border-white ${
                    event.highlight ? 'bg-purple-600' : 'bg-purple-400'
                  }`}
                ></div>

                <div className="ml-16">
                  <Card
                    className={`p-4 ${
                      event.highlight
                        ? 'bg-purple-50 border-purple-200 shadow-md'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-sm font-semibold ${
                          event.highlight ? 'text-purple-600' : 'text-slate-500'
                        }`}
                      >
                        {event.year}
                      </span>
                      {event.highlight && (
                        <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">
                      {event.title}
                    </h4>
                    <p className="text-slate-600">{event.description}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
