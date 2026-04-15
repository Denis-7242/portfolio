"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, ShieldCheck, Cpu } from 'lucide-react';

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
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2xl shadow-blue-500/20">
              <div className="w-full h-full rounded-2xl bg-black overflow-hidden relative group">
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                  <User className="w-32 h-32 opacity-20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl">Denis Murithi</p>
                  <p className="text-gray-400 text-sm">BSc Computer Technology</p>
                </div>
              </div>
            </div>
            {/* Floating Experience Card */}
            <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">Education</p>
                  <p className="text-sm font-medium">Meru University of Science and Technology</p>
                </div>
              </div>
            </div>
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
