'use client';

import { motion } from 'framer-motion';
import { education } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  Calendar,
  X,
  Download,
  Mail,
  User,
  MessageSquare,
  Send
} from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const EducationContactSection = () => {
  const [activeCertificate, setActiveCertificate] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ================= EDUCATION SECTION ================= */}
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
            {/* ================= EXISTING EDUCATION ================= */}
            {education.map((edu, index) => {
              let certificateImage: string | null = null;

              if (edu.degree.toLowerCase().includes('mysql')) {
                certificateImage = '/images/mysql.png';
              }

              if (edu.degree.toLowerCase().includes('real estate')) {
                certificateImage = '/images/real_estate.png';
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Card className="h-full bg-white shadow-lg border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />

                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-100">
                          <Award className="w-6 h-6 text-blue-600" />
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

                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                          Certified
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0 space-y-4">
                      {certificateImage && (
                        <div
                          className="relative w-full h-48 rounded-lg overflow-hidden border cursor-pointer group"
                          onClick={() => setActiveCertificate(certificateImage)}
                        >
                          <Image
                            src={certificateImage}
                            alt="Certificate"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold">
                            Click to View
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            {/* ================= ✅ THIRD CARD: REAL ESTATE CERTIFICATE ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-full bg-white shadow-lg border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />

                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-emerald-100">
                      <Award className="w-6 h-6 text-emerald-600" />
                    </div>

                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-900 mb-2">
                        Real Estate Management System
                      </CardTitle>
                      <p className="text-lg font-medium text-slate-600 mb-1">
                        Laravel Project Certification
                      </p>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Calendar className="w-4 h-4" />
                        <span>2024</span>
                      </div>
                    </div>

                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                      Certified
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div
                    className="relative w-full h-48 rounded-lg overflow-hidden border cursor-pointer group"
                    onClick={() => setActiveCertificate('/images/real_estate.png')}
                  >
                    <Image
                      src="/images/real_estate.png"
                      alt="Real Estate Certificate"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold">
                      Click to View
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CERTIFICATE MODAL ================= */}
      {activeCertificate && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-lg max-w-3xl w-full p-4">
            <button
              onClick={() => setActiveCertificate(null)}
              className="absolute top-4 right-4 z-10 text-slate-600 hover:text-slate-900"
            >
              <X />
            </button>

            <div className="relative w-full h-[70vh]">
              <Image
                src={activeCertificate}
                alt="Certificate Preview"
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <a
                href={activeCertificate}
                download
                onClick={() => setActiveCertificate(null)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                <Download className="w-4 h-4" />
                Download Certificate
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
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
              I'm always interested in hearing about new opportunities and exciting projects
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white shadow-lg border-slate-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Email Me</h3>
                    <p className="text-slate-600">natanmuleta77@gmail.com</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-slate-600">
                  <p>
                    Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                  </p>
                  <p>
                    I'm currently open to new opportunities and would be happy to discuss how I can contribute to your team.
                  </p>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="font-semibold text-slate-800 mb-2">What I can help with:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Full-stack web development
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        UI/UX design and implementation
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Testing and quality assurance
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        AI/ML project development
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white shadow-lg border-slate-200 p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      <User className="inline w-4 h-4 mr-2" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-2" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      <MessageSquare className="inline w-4 h-4 mr-2" />
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                      Failed to send message. Please try again later.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
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
