"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { DesignCard } from '@/components/ui/DesignCard';
import { DesignBadge } from '@/components/ui/DesignBadge';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-bg-deep text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-sxl font-bold mb-6 tracking-tight"
          >
            Get In <span className="text-accent-electric">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-muted text-lg leading-relaxed font-light"
          >
            I'm always open to discussing new projects, collaborating on open-source
            software, or chatting about cybersecurity. Feel free to reach out through any of the channels below!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <DesignCard className="flex flex-col h-full group relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 rounded-xl bg-accent-electric/10 text-accent-electric group-hover:bg-accent-electric group-hover:text-bg-deep transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <DesignBadge variant="accent">Professional</DesignBadge>
                </div>

                <div className="mb-8">
                  <h3 className="text-white font-bold text-2xl mb-1">Email</h3>
                  <p className="text-text-muted text-sm font-light">Best for formal inquiries</p>
                </div>

                <div className="mt-auto">
                  <a
                    href="mailto:dexdenis3@gmail.com"
                    className="block w-full py-4 px-6 rounded-xl bg-accent-electric text-bg-deep font-bold text-center transition-all hover:bg-blue-400 active:scale-95 shadow-lg shadow-accent-electric/20"
                  >
                    dexdenis3@gmail.com
                  </a>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent-electric/10 blur-3xl rounded-full" />
            </DesignCard>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <DesignCard className="flex flex-col h-full group relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 rounded-xl bg-accent-electric/10 text-accent-electric group-hover:bg-accent-electric group-hover:text-bg-deep transition-all duration-300">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <DesignBadge variant="accent">Quick Chat</DesignBadge>
                </div>

                <div className="mb-8">
                  <h3 className="text-white font-bold text-2xl mb-1">WhatsApp</h3>
                  <p className="text-text-muted text-sm font-light">Immediate response</p>
                </div>

                <div className="mt-auto">
                  <a
                    href="https://wa.me/254793472969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 px-6 rounded-xl bg-accent-electric text-bg-deep font-bold text-center transition-all hover:bg-blue-400 active:scale-95 shadow-lg shadow-accent-electric/20"
                  >
                    +254 793 472 969
                  </a>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent-electric/10 blur-3xl rounded-full" />
            </DesignCard>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <DesignCard className="flex flex-col h-full group relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 rounded-xl bg-accent-electric/10 text-accent-electric group-hover:bg-accent-electric group-hover:text-bg-deep transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <DesignBadge variant="accent">Based In</DesignBadge>
                </div>

                <div className="mb-8">
                  <h3 className="text-white font-bold text-2xl mb-1">Location</h3>
                  <p className="text-text-muted text-sm font-light">East Africa Region</p>
                </div>

                <div className="mt-auto">
                  <div className="block w-full py-4 px-6 rounded-xl bg-white/5 text-white font-bold text-center border border-white/10 backdrop-blur-sm">
                    Meru, Kenya
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-accent-electric/10 blur-3xl rounded-full" />
            </DesignCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
