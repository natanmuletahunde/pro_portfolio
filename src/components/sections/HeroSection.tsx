/* eslint-disable react-hooks/purity */
'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <motion.h1
                            className="text-5xl lg:text-7xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {personalInfo.name}
                        </motion.h1>

                        <motion.div
                            className="text-2xl lg:text-3xl text-purple-200 mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {personalInfo.title}
                        </motion.div>

                        <motion.div
                            className="text-lg text-purple-100 mb-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {personalInfo.university} • {personalInfo.year}
                        </motion.div>

                        <motion.p
                            className="text-gray-300 mb-8 text-lg"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {personalInfo.experience} of development experience • Passionate about solving real-world problems •
                            Currently focused on {personalInfo.focus}
                        </motion.p>

                        <motion.div
                            className="flex gap-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <Button
                                size="lg"
                                className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Projects
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-purple-400 text-purple-200 hover:bg-purple-800/20 px-8"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Contact Me
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative"
                    >
                        <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>

                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-400/30">
                                <Image
                                    src="/images/natanimages.jpg"
                                    alt={personalInfo.name}
                                    fill
                                    className="object-cover scale-110 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
