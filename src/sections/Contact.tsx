"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Get In <span className="text-blue-400">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            I'm always open to discussing new projects, collaborating on open-source
            software, or chatting about cybersecurity. Feel free to reach out through any of the channels below!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/[0.08] flex flex-col items-center text-center"
          >
            <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Email</h3>
            <p className="text-gray-500 text-sm mb-6">Best for professional inquiries</p>
            <a
              href="mailto:dexdenis3@gmail.com"
              className="mt-auto w-full py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all active:scale-95"
            >
              dexdenis3@gmail.com
            </a>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:bg-white/[0.08] flex flex-col items-center text-center"
          >
            <div className="p-4 rounded-2xl bg-green-500/10 text-green-400 mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">WhatsApp</h3>
            <p className="text-gray-500 text-sm mb-6">Best for quick chats</p>
            <a
              href="https://wa.me/254793472969"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full py-3 rounded-xl bg-green-600 text-white font-medium hover:bg-green-500 transition-all active:scale-95"
            >
              +254 793 472 969
            </a>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/[0.08] flex flex-col items-center text-center"
          >
            <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Location</h3>
            <p className="text-gray-500 text-sm mb-6">Where I'm based</p>
            <div className="mt-auto w-full py-3 rounded-xl bg-white/10 text-white font-medium border border-white/10">
              Meru, Kenya
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
