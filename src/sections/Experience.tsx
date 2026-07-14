"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { DesignCard } from '@/components/ui/DesignCard';

const experiences = [
  {
    year: '2024 - Present',
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
    year: '2025 - Present',
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
    <section id="experience" className="py-24 relative overflow-hidden bg-bg-deep text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            My <span className="text-accent-electric">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-muted max-w-2xl mx-auto text-lg font-light"
          >
            A timeline of my academic and professional growth in the tech ecosystem.
          </motion.p>
        </div>

        <div className="relative space-y-16">
          {/* Technical "Circuit" Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-electric/50 via-blue-600/30 to-transparent -translate-x-1/2 hidden sm:block" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Solder Point / Node */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-electric rounded-full border-4 border-bg-deep -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0, 209, 255, 0.6)]" />

              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                <DesignCard className="p-6 group transition-all">
                  <div className="flex items-center gap-2 text-accent-electric text-xs font-mono uppercase tracking-widest mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.year}
                  </div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-accent-electric transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-4 font-medium">
                    {exp.organization}
                  </p>
                  <p className="text-text-muted mb-6 leading-relaxed font-light text-sm">
                    {exp.description}
                  </p>
                  <ul className="space-y-3">
                    {exp.milestones.map((m, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                        <div className="mt-1 p-0.5 rounded-full bg-accent-electric/20">
                          <CheckCircle2 className="w-3 h-3 text-accent-electric" />
                        </div>
                        {m}
                      </li>
                    ))}
                  </ul>
                </DesignCard>
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
