"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Folder, Star, GitFork, PackageX } from 'lucide-react';
import { HybridProject } from '@/lib/github';
import { Button } from '@/components/ui/Button';
import { DesignCard } from '@/components/ui/DesignCard';
import { DesignBadge } from '@/components/ui/DesignBadge';
import Image from 'next/image';

const CATEGORIES = ['Web Apps', 'Mobile Apps', 'Cybersecurity'];

interface ProjectsProps {
  initialProjects: HybridProject[];
}

const Projects = ({ initialProjects }: ProjectsProps) => {
  const [projects] = useState<HybridProject[]>(initialProjects);
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p =>
      p.tags.some(tag =>
        tag.toLowerCase().includes(filter.toLowerCase().replace(' apps', ''))
      )
    );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.stargazers_count - a.stargazers_count;
  }).slice(0, 6);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-bg-deep text-text-primary scroll-mt-16">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-electric/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-foreground"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-muted max-w-2xl mx-auto mb-12 text-lg font-light"
          >
            A curation of my best work, merging live GitHub data with custom insights.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['All', ...CATEGORIES].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 border ${
                  filter === cat
                    ? 'bg-accent-electric text-bg-deep border-accent-electric shadow-lg shadow-accent-electric/30 scale-105'
                    : 'bg-white/[0.03] text-text-muted border-white/10 hover:text-text-primary hover:bg-white/[0.08] hover:scale-105'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {sortedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <DesignCard className="h-full flex flex-col group relative">
                  {project.featured && (
                    <div className="absolute -top-3 -right-3 bg-accent-electric text-bg-deep text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider shadow-lg shadow-accent-electric/50 z-20 group-hover:scale-110 transition-transform duration-300">
                      Featured
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-electric/20 text-accent-electric flex items-center justify-center group-hover:bg-accent-electric group-hover:text-bg-deep transition-all duration-300">
                      <Folder className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-3 text-text-muted text-xs font-mono">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {project.stargazers_count}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        {project.forks_count}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-electric transition-colors line-clamp-1">
                    {project.customTitle}
                  </h3>

                  <p className="text-text-muted text-sm mb-6 line-clamp-3 flex-grow font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <DesignBadge key={tag} variant="muted">
                        {tag}
                      </DesignBadge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between gap-4 mt-auto">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-widest text-text-muted hover:text-text-primary hover:bg-white/[0.05] transition-all duration-300"
                    >
                      <Github className="w-4 h-4 text-text-muted group-hover:text-text-primary" />
                      Code
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-widest text-accent-electric hover:text-text-primary hover:bg-accent-electric/10 transition-all duration-300"
                      >
                        Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </DesignCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {sortedProjects.length === 0 && (
          <div className="text-center py-20 flex flex-col items-center gap-4">
            <PackageX className="w-12 h-12 text-text-muted/50 mb-2" />
            <p className="text-text-muted font-mono text-sm uppercase tracking-widest">No projects found in this category.</p>
            <button
              onClick={() => setFilter('All')}
              className="text-accent-electric text-xs font-mono uppercase tracking-widest hover:underline underline-offset-4"
            >
              Clear Filters
            </button>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mt-20"
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 rounded-xl transition-all duration-300"
            onClick={() => window.open('https://github.com/Denis-7242?tab=repositories', '_blank')}
          >
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
