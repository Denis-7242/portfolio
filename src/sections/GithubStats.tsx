"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, Code2, ShieldCheck } from 'lucide-react';
import { GithubStats as GithubStatsType } from '@/lib/github';
import { DesignStatTile } from '@/components/ui/DesignStatTile';

interface GithubStatsProps {
  username?: string;
  stats: GithubStatsType;
}

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
    <section id="stats" className="py-24 relative overflow-hidden bg-bg-deep text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            GitHub <span className="text-accent-electric">Activity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-muted max-w-2xl mx-auto text-lg font-light"
          >
            Real-time statistics from my open-source contributions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DesignStatTile
            label="TOTAL_REPOSITORIES"
            value={<CountUp value={typeof stats.repos === 'number' ? stats.repos : parseInt(stats.repos) || 0} />}
            subtext="Active projects & experiments"
          />
          <DesignStatTile
            label="TOTAL_STARS"
            value={<CountUp value={typeof stats.stars === 'number' ? stats.stars : parseInt(stats.stars) || 0} />}
            subtext="Community recognition"
          />
          <DesignStatTile
            label="TOTAL_CONTRIBUTIONS"
            value={<CountUp value={typeof stats.contributions === 'number' ? stats.contributions : parseInt(stats.contributions) || 0} />}
            subtext="Commits & PRs merged"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-12"
        >
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-text-muted hover:text-accent-electric transition-colors group"
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
