"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Layout, Server, Smartphone, Shield, Terminal, Globe } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: <Layout className="w-5 h-5" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    name: 'Backend',
    icon: <Server className="w-5 h-5" />,
    skills: ['Node.js', 'Express', 'Python', 'Go', 'REST APIs', 'GraphQL', 'WebSocket'],
    color: 'text-green-400',
    bg: 'bg-green-400/10'
  },
  {
    name: 'Mobile',
    icon: <Smartphone className="w-5 h-5" />,
    skills: ['Flutter', 'Dart', 'Kotlin', 'Android SDK', 'Firebase', 'State Management'],
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    name: 'Databases',
    icon: <Database className="w-5 h-5" />,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Prisma', 'Mongoose'],
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10'
  },
  {
    name: 'Cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    skills: ['Penetration Testing', 'Network Security', 'OWASP Top 10', 'Metasploit', 'Wireshark', 'Kali Linux'],
    color: 'text-red-400',
    bg: 'bg-red-400/10'
  },
  {
    name: 'DevOps & Tools',
    icon: <Terminal className="w-5 h-5" />,
    skills: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'Vercel', 'Postman', 'AWS'],
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Technical <span className="text-blue-400">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical stack and the tools I use to build secure, high-performance applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${cat.bg} ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs font-medium hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
