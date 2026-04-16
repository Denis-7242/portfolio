"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ShieldCheck, Cpu, Code, Smartphone, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black text-white">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Side: Fancy Decorative Content (Replaces Image) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-purple-500/30"
              />

              {/* Center Card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl text-center w-64 h-64 flex flex-col justify-center items-center gap-4"
                >
                  <div className="p-4 bg-blue-500/20 rounded-2xl text-blue-400 animate-pulse">
                    <Award className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold">BSc Computer Technology</h3>
                  <p className="text-gray-400 text-sm px-4">
                    Meru University of Science and Technology
                  </p>
                  <div className="absolute -bottom-4 -right-4 p-4 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/40">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                I am a passionate developer and security researcher currently pursuing a
                <span className="text-white font-medium"> Bachelor of Science in Computer Technology</span> at Meru University of Science and Technology.
                My journey is driven by a fascination with how complex systems work and a commitment to making them secure and efficient.
              </p>
              <p>
                With a diverse toolkit spanning <span className="text-white font-medium">Full-Stack Web Development, Android Development</span>,
                and <span className="text-white font-medium">Cybersecurity</span>, I bridge the gap between functional design and robust architecture.
              </p>

              {/* Enhanced Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                {[
                  { icon: Code, color: "text-blue-400", title: "Full Stack", desc: "Scalable web apps", bg: "bg-blue-500/10" },
                  { icon: Smartphone, color: "text-purple-400", title: "Mobile", desc: "Flutter & Kotlin", bg: "bg-purple-500/10" },
                  { icon: ShieldCheck, color: "text-green-400", title: "Cybersecurity", desc: "Defensive & Offensive", bg: "bg-green-500/10" },
                  { icon: Cpu, color: "text-yellow-400", title: "AI Systems", desc: "Intelligent automation", bg: "bg-yellow-500/10" },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className={`flex items-start gap-4 p-4 rounded-2xl border border-white/5 ${skill.bg} transition-all cursor-default`}
                  >
                    <skill.icon className={`w-6 h-6 ${skill.color} shrink-0`} />
                    <div>
                      <p className="text-white font-bold text-sm">{skill.title}</p>
                      <p className="text-xs text-gray-400">{skill.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
