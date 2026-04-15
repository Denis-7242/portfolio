"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    year: '2023 - Present',
    title: 'BSc Computer Technology Student',
    organization: 'Meru University of Science and Technology',
    description: 'Focusing on software engineering, network security, and advanced computing architectures.',
    milestones: [
      'Developing full-stack applications with modern frameworks',
      'Exploring offensive security and penetration testing',
      'Collaborating on open-source Android projects',
    ],
  },
  {
    year: '2021 - 2023',
    title: 'Freelance Developer',
    organization: 'Self-Employed',
    description: 'Building custom software solutions for various clients, focusing on mobile and web platforms.',
    milestones: [
      'Developed multiple Android apps using Flutter',
      'Implemented secure API integrations for e-commerce platforms',
      'Optimized website performance for local businesses',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="text-blue-400">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A timeline of my academic and professional growth in the tech ecosystem.
          </motion.p>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent -translate-x-1/2 hidden sm:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-bold mb-2">
                    <Calendar className="w-4 h-4" />
                    {exp.year}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{exp.organization}</p>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.milestones.map((m, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
