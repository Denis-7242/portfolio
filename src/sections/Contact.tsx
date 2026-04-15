"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              I'm always open to discussing new projects, collaborating on open-source
              software, or chatting about cybersecurity. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                  <p className="text-white font-medium">denismurithi@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Location</p>
                  <p className="text-white font-medium">Meru, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => setStatus('idle')}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-gray-500" />
                    <textarea
                      required
                      rows={4}
                      placeholder="How can I help you?"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white focus:border-blue-500 outline-none transition-all resize-none"
                    />
                  </div>
                </div>
                <Button
                  variant="primary"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
