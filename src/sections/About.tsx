"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, ShieldCheck, Cpu, Code, Smartphone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2xl shadow-blue-500/20 overflow-hidden relative">
              <div className="w-full h-full rounded-2xl bg-black overflow-hidden relative group">
                {/* Blurred Background Layer for Depth */}
                <div className="absolute inset-0 scale-110 blur-xl opacity-50">
                  <img
                    src="/assets/pic1.jpeg"
                    alt="Denis Murithi Blur"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Main Image Layer */}
                <div className="absolute inset-0 z-10">
                  <img
                    src="/assets/pic1.jpeg"
                    alt="Denis Murithi"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-20" />
                <div className="absolute bottom-6 left-6 right-6 z-30">
                  <p className="text-white font-bold text-xl">Denis Murithi</p>
                  <p className="text-gray-400 text-sm">BSc Computer Technology</p>
                </div>
              </div>
            </div>
            {/* Floating Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -right-4 md:-bottom-6 md:-right-6 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-2xl shadow-2xl hidden md:block group hover:border-blue-500/50 transition-all duration-500 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-xl group-hover:bg-blue-500/40 transition-colors duration-300">
                  <BookOpen className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[10px] text-blue-400 uppercase font-bold tracking-widest mb-1">Academic Pursuits</p>
                  <p className="text-sm font-bold text-white leading-tight">Meru University of Science and Technology</p>
                  <p className="text-xs text-gray-400 font-medium">BSc Computer Technology</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                I am a passionate developer and security researcher currently pursuing a
                <span className="text-white font-medium"> Bachelor of Science in Computer Technology</span> at Meru University of Science and Technology.
                My journey is driven by a fascination with how complex systems work and a commitment to making them secure and efficient.
              </p>
              <p>
                With a diverse toolkit spanning <span className="text-white font-medium">Full-Stack Web Development, Android Engineering</span>,
                and <span className="text-white font-medium">Cybersecurity</span>, I bridge the gap between functional design and robust architecture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <Code className="w-6 h-6 text-blue-400 shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Full Stack</p>
                    <p className="text-xs">Scalable web apps</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <Smartphone className="w-6 h-6 text-purple-400 shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Mobile</p>
                    <p className="text-xs">Flutter & Kotlin</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <ShieldCheck className="w-6 h-6 text-green-400 shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">Cybersecurity</p>
                    <p className="text-xs">Defensive & Offensive</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <Cpu className="w-6 h-6 text-yellow-400 shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm">AI Systems</p>
                    <p className="text-xs">Intelligent automation</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
