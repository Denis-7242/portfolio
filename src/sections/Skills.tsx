"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Smartphone, Database, Shield, Terminal } from 'lucide-react';
import { DesignCard } from '@/components/ui/DesignCard';
import { DesignBadge } from '@/components/ui/DesignBadge';

interface Skill {
  name: string;
  icon: string;
}

interface Category {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: Category[] = [
  {
    name: 'Frontend',
    icon: <Layout className="w-5 h-5" />,
    skills: [
      { name: 'React', icon: 'devicon-react-original' },
      { name: 'Next.js', icon: 'devicon-nextjs-original' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
      { name: 'HTML5', icon: 'devicon-html5-plain' },
      { name: 'CSS3', icon: 'devicon-css3-plain' },
    ],
  },
  {
    name: 'Backend',
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain' },
      { name: 'Express', icon: 'devicon-express-original' },
      { name: 'Java', icon: 'devicon-java-plain' },
    ],
  },
  {
    name: 'Mobile',
    icon: <Smartphone className="w-5 h-5" />,
    skills: [
      { name: 'Flutter', icon: 'devicon-flutter-plain' },
      { name: 'Dart', icon: 'devicon-dart-plain' },
      { name: 'Kotlin', icon: 'devicon-kotlin-plain' },
      { name: 'Android', icon: 'devicon-android-plain' },
    ],
  },
  {
    name: 'Databases',
    icon: <Database className="w-5 h-5" />,
    skills: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      { name: 'MySQL', icon: 'devicon-mysql-plain' },
      { name: 'Supabase', icon: 'devicon-supabase-plain' },
      { name: 'Firebase', icon: 'devicon-firebase-plain' },
    ],
  },
  {
    name: 'Cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    skills: [
      { name: 'Kali Linux', icon: 'devicon-kali-plain' },
      { name: 'Linux', icon: 'devicon-os-plain' },
      { name: 'Wireshark', icon: 'devicon-wireshark-plain' },
      { name: 'Metasploit', icon: 'devicon-metasploit-plain' },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: <Terminal className="w-5 h-5" />,
    skills: [
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'VS Code', icon: 'devicon-vscode-plain' },
      { name: 'Android Studio', icon: 'devicon-android-plain' },
    ],
  },
];

const TechBadge = ({ skill }: { skill: Skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 209, 255, 0.1)' }}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-text-muted hover:text-white transition-all duration-300 cursor-default group"
    >
      <i className={`${skill.icon} text-lg text-accent-electric group-hover:scale-110 transition-transform`} />
      <span className="text-xs font-mono font-medium">{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-deep text-white">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-electric/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Technical <span className="text-accent-electric">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-muted max-w-2xl mx-auto text-lg font-light"
          >
            A comprehensive overview of my technical stack and the tools I use to build secure, high-performance applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <DesignCard className="h-full group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent-electric/20 text-accent-electric flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    {cat.name}
                    <div className="h-px flex-grow bg-gradient-to-r from-accent-electric/40 to-transparent" />
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map(skill => (
                    <TechBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </DesignCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Devicon CDN Load */}
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/gh/devicons/devicon@latest/index.min.css');
      `}</style>
    </section>
  );
};

export default Skills;
