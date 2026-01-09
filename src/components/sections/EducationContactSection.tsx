'use client';

import { motion } from 'framer-motion';
import { education, personalInfo } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const EducationContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Education & Certifications
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Academic background and professional certifications that shape my expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="h-full bg-white shadow-lg border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`h-1 bg-gradient-to-r ${
                    edu.status === 'Current'
                      ? 'from-purple-500 to-pink-500'
                      : 'from-blue-500 to-cyan-500'
                  }`}></div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        edu.status === 'Current'
                          ? 'bg-purple-100'
                          : 'bg-blue-100'
                      }`}>
                        {edu.status === 'Current' ? (
                          <GraduationCap className={`w-6 h-6 text-purple-600`} />
                        ) : (
                          <Award className={`w-6 h-6 text-blue-600`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-slate-900 mb-2">
                          {edu.institution}
                        </CardTitle>
                        <p className="text-lg font-medium text-slate-600 mb-1">
                          {edu.degree}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                      {edu.status === 'Current' && (
                        <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                          Current
                        </Badge>
                      )}
                      {edu.status === 'Certification' && (
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                          Certified
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="text-slate-600">
                      {edu.status === 'Current' && (
                        <p className="text-sm">
                          Currently pursuing {edu.degree} with focus on advanced software engineering
                          concepts and practical applications.
                        </p>
                      )}
                      {edu.status === 'Certification' && (
                        <p className="text-sm">
                          Comprehensive MySQL training covering database design, optimization,
                          and advanced query techniques.
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Lets discuss opportunities, collaborations, or just have a conversation about technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Lets Connect
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Im always interested in hearing about new opportunities, exciting projects,
                  or discussing technology and software development. Feel free to reach out!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-purple-600 hover:text-purple-700 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/60 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Current Focus</h4>
                  <p className="text-sm text-slate-600">
                    Actively seeking opportunities in software development, especially in roles
                    involving full-stack development, AI/ML applications, or software testing.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white shadow-lg border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Send Message
                </h3>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-700 text-center">
                      ✅ Message sent successfully! Ill get back to you soon.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationContactSection;