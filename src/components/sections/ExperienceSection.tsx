'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-50 to-white">
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
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            My journey through software testing, web development, and UI/UX design
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg border-slate-200 hover:shadow-xl transition-all duration-300">
                {/* Card Header */}
                <div className={`h-1 bg-gradient-to-r ${
                  index === 0 ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-pink-500'
                }`}></div>
                
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        index === 0 ? 'bg-blue-100' : 'bg-purple-100'
                      }`}>
                        <Briefcase className={`w-6 h-6 ${
                          index === 0 ? 'text-blue-600' : 'text-purple-600'
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-900">
                          {exp.company}
                        </CardTitle>
                        <p className="text-lg text-slate-600 font-medium">
                          {exp.position}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge 
                        variant="outline" 
                        className={`${
                          index === 0 
                            ? 'border-blue-200 text-blue-700 bg-blue-50' 
                            : 'border-purple-200 text-purple-700 bg-purple-50'
                        }`}
                      >
                        {exp.type}
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600">
                        {exp.duration}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        index === 0 ? 'bg-blue-500' : 'bg-purple-500'
                      }`}></div>
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: (index * 0.2) + (respIndex * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3 text-slate-600"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                            index === 0 ? 'bg-blue-400' : 'bg-purple-400'
                          }`}></div>
                          <span className="text-sm leading-relaxed">{responsibility}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Experience Details */}
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      {exp.company === "Awura Tech" && (
                        <>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Weekly Saturday Sessions</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Thursday Progress Reports</span>
                          </div>
                        </>
                      )}
                      {exp.company === "Omishtu-Joy" && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>In-person Collaboration</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Professional Growth
              </h3>
              <p className="text-slate-600 max-w-3xl mx-auto text-lg mb-6">
                Through these experiences, I've developed strong skills in software testing, 
                web development, and UI/UX design. Each role has contributed to my understanding 
                of the complete software development lifecycle.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">Testing</div>
                  <div className="text-sm text-slate-600">Quality Assurance</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">Design</div>
                  <div className="text-sm text-slate-600">UI/UX</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-green-600">Development</div>
                  <div className="text-sm text-slate-600">Web Apps</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">Collaboration</div>
                  <div className="text-sm text-slate-600">Team Work</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;