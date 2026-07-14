"use client";

import React from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { BookOpen, ShieldCheck, Cpu, Code, Smartphone, Award } from 'lucide-react';
import { DesignCard } from '@/components/ui/DesignCard';
import { DesignBadge } from '@/components/ui/DesignBadge';

const About = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="py-24 relative overflow-hidden bg-bg-deep text-white"
    >
      {/* Mouse-following Spotlight - Refined for Electric Blue */}
      <motion.div
        style={{
          left: springX,
          top: springY,
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-electric/10 rounded-full blur-3xl pointer-events-none z-[-2]"
      />

      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-electric/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left Side: Precision Decorative Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Animated Rings - Updated to Electric Blue / Navy */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-accent-electric/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-blue-600/30"
              />

              {/* Center Card - Now using DesignCard */}
              <div className="absolute inset-0 flex items-center justify-center">
                <DesignCard className="relative p-8 text-center w-64 h-64 flex flex-col justify-center items-center gap-4">
                  <div className="p-4 bg-accent-electric/20 rounded-2xl text-accent-electric animate-pulse">
                    <Award className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold">BSc Computer Technology</h3>
                  <p className="text-text-muted text-sm px-4 font-light">
                    Meru University of Science and Technology
                  </p>
                  <div className="absolute -bottom-4 -right-4 p-4 bg-accent-electric rounded-2xl shadow-lg shadow-accent-electric/40 text-bg-deep">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </DesignCard>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              About <span className="bg-gradient-to-r from-accent-electric to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>

            <div className="space-y-6 text-text-muted leading-relaxed text-lg">
              <p>
                I am a passionate developer and security researcher currently pursuing a
                <span className="text-white font-medium"> Bachelor of Science in Computer Technology</span>
                at Meru University of Science and Technology.
                My journey is driven by a fascination with how complex systems work and a commitment to making them secure and efficient.
              </p>
              <p>
                With a diverse toolkit spanning <span className="text-white font-medium">Full-Stack Web Development, Android Development</span>,
                and <span className="text-white font-medium">Cybersecurity</span>, I bridge the gap between functional design and robust architecture.
              </p>

              {/* Refined Skills Grid using DesignCard & DesignBadge */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                {[
                  { icon: Code, label: "Full Stack", desc: "Scalable web apps", variant: "primary" },
                  { icon: Smartphone, label: "Mobile", desc: "Flutter & Kotlin", variant: "primary" },
                  { icon: ShieldCheck, label: "Cybersecurity", desc: "Defensive & Offensive", variant: "accent" },
                  { icon: Cpu, label: "AI Systems", desc: "Intelligent automation", variant: "primary" },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <DesignCard className="flex items-start gap-4 p-4 group">
                      <div className="p-2 rounded-lg bg-white/5 group-hover:bg-accent-electric/20 transition-colors">
                        <skill.icon className="w-6 h-6 text-accent-electric" />
                      </div>
                      <div>
                        <DesignBadge variant={skill.variant}>{skill.label}</DesignBadge>
                        <p className="text-xs text-text-muted mt-1">{skill.desc}</p>
                      </div>
                    </DesignCard>
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
