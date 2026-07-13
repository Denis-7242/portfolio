"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Layout, Code2, ShieldCheck } from 'lucide-react';
import { GithubStats as GithubStatsType } from '@/lib/github';

interface GithubStatsProps {
  username?: string;
  stats: GithubStatsType;
}

const StatCard = ({ icon: Icon, label, value, color }: { icon: any, label: string, value: number | string, color: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
    >
      <div className={`absolute top-4 right-4 p-2 rounded-lg ${color} text-white opacity-20 group-hover:opacity-100 transition-opacity duration-300`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="text-4xl md:text-5xl font-extrabold mb-2 text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <CountUp value={typeof value === 'number' ? value : parseInt(value) || 0} />
        </motion.div>
        <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{label}</p>
      </div>
    </motion.div>
  );
};

const CountUp = ({ value }: { value: number }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
};

const GithubStats = ({ username = 'Denis-7242', stats }: GithubStatsProps) => {
  return (
    <section id="stats" className="py-24 relative overflow-hidden bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            GitHub <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Activity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Real-time statistics from my open-source contributions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            icon={Code2}
            label="Total Repositories"
            value={stats.repos}
            color="bg-blue-600"
          />
          <StatCard
            icon={Star}
            label="Total Stars"
            value={stats.stars}
            color="bg-purple-600"
          />
          <StatCard
            icon={ShieldCheck}
            label="Contributions"
            value={stats.contributions}
            color="bg-indigo-600"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group"
          >
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
            View Full Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
