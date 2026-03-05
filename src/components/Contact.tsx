import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, CheckCircle2, Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 10 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 10000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium"
          >
            Ready to start your dream project? Contact us today and let's build something amazing together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-50 p-8 md:p-10 rounded-3xl border border-zinc-200 shadow-sm relative"
          >
            {isSubmitted ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 rounded-3xl z-10 p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Message Sent!</h3>
                <p className="text-zinc-500 mb-8">Thank you for reaching out. Our team will get back to you shortly.</p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center gap-4"
                >
                  <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Share your experience</span>
                  <div className="flex items-center gap-4">
                    <a 
                      href="https://twitter.com/intent/tweet?text=Just%20reached%20out%20to%20Jain%20Architect%20for%20my%20dream%20project!%20%F0%9F%8F%97%EF%B8%8F%E2%9C%A8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-zinc-100 hover:bg-[#1DA1F2] hover:text-white text-zinc-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.facebook.com/sharer/sharer.php?u=https://jainarchitect.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-zinc-100 hover:bg-[#4267B2] hover:text-white text-zinc-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https://jainarchitect.com&title=Building%20my%20dream%20home%20with%20Jain%20Architect" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-zinc-100 hover:bg-[#0077b5] hover:text-white text-zinc-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-semibold text-zinc-900">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-semibold text-zinc-900">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-zinc-900">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-semibold text-zinc-900">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-zinc-900">Your Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    Send Message <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Map & Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full gap-8"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="tel:+919876543210"
                className="bg-zinc-900 p-6 rounded-2xl text-white flex flex-col gap-4 hover:bg-zinc-800 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-zinc-400 group-hover:text-white transition-colors">+91 98765 43210</p>
                </div>
              </a>
              <a 
                href="mailto:hello@jainarchitect.com"
                className="bg-zinc-900 p-6 rounded-2xl text-white flex flex-col gap-4 hover:bg-zinc-800 transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-zinc-400 group-hover:text-white transition-colors">hello@jainarchitect.com</p>
                </div>
              </a>
            </div>

            {/* Map Container */}
            <div className="bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-sm flex-1 min-h-[400px] relative group">
              <iframe 
                src="https://maps.google.com/maps?q=Akshay+patra+temple,+Jagatpura,+Jaipur,+Rajasthan,+302017,+india&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'contrast(1.1) saturate(1.2)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
