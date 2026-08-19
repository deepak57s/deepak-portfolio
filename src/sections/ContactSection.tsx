import React, { useState } from 'react';
import { Send, Mail, MapPin, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import Magnet from '../components/Magnet';
import DotField from '../components/DotField';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Dispatch mail client using mailto
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:deepakparker222@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 relative w-full bg-background overflow-hidden border-t border-white/[0.04]"
    >
      {/* Interactive DotField background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <DotField
          dotRadius={2.5}
          dotSpacing={28}
          bulgeStrength={20}
          glowRadius={80}
          sparkle
          waveAmplitude={2}
          cursorForce={0.8}
          gradientFrom="#240344"
          gradientTo="#38bdf8"
          glowColor="#000000"
        />
      </div>

      {/* Decorative ambient glowing blur circles */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-purple/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent-blue/[0.015] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column: Context Card */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-blue mb-6">
              <Sparkles className="w-4 h-4 text-accent-blue" />
              Get In Touch
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold font-kanit uppercase italic text-white mb-6 leading-tight pr-4">
              Let's Build <span className="inline-block pr-4 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Together</span>
            </h2>

            <p className="text-primary-light/70 text-sm md:text-base max-w-md mb-10 leading-relaxed font-outfit">
              Seeking opportunities in native Android engineering, fintech mobility, and AI-powered software systems. Open to full-time engineering roles, technical collaboration, and innovative projects.
            </p>

            {/* Direct Channels */}
            <div className="flex flex-col gap-5 w-full max-w-sm mb-8">
              <div className="flex items-center gap-4 p-3.5 rounded-2xl glass border border-white/[0.04] hover:border-white/[0.1] transition-all">
                <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] text-primary-light/40 font-bold uppercase tracking-widest">
                    Direct Email
                  </h4>
                  <a
                    href="mailto:deepakparker222@gmail.com"
                    className="text-xs font-bold text-white hover:text-accent-blue transition-colors"
                  >
                    deepakparker222@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-2xl glass border border-white/[0.04] hover:border-white/[0.1] transition-all">
                <div className="p-3 rounded-xl bg-accent-emerald/10 text-accent-emerald">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] text-primary-light/40 font-bold uppercase tracking-widest">
                    Location
                  </h4>
                  <p className="text-xs font-bold text-white">
                    Visakhapatnam, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-2xl glass border border-white/[0.04] hover:border-white/[0.1] transition-all">
                <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] text-primary-light/40 font-bold uppercase tracking-widest">
                    Availability
                  </h4>
                  <p className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                    Open for Engineering Roles & Projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-panel p-8 md:p-12 rounded-[32px] border border-white/[0.06] relative">

              {status === 'success' ? (
                <div className="py-16 flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center text-accent-emerald mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-kanit uppercase tracking-wider text-white mb-2">
                    Message Dispatched
                  </h3>
                  <p className="text-sm text-primary-light/70 max-w-sm">
                    Thank you. Your inquiry has been routed to Deepak. He will follow up with you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2 items-start text-left">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-primary-light/50">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] focus:border-accent-blue/40 focus:bg-white/[0.04] text-sm text-white placeholder-primary-light/25 outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2 items-start text-left">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-primary-light/50">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] focus:border-accent-blue/40 focus:bg-white/[0.04] text-sm text-white placeholder-primary-light/25 outline-none transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2 items-start text-left">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-primary-light/50">
                      Project Details / Opportunity
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, team opportunity, or inquiry..."
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] focus:border-accent-blue/40 focus:bg-white/[0.04] text-sm text-white placeholder-primary-light/25 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="flex justify-end mt-2">
                    <Magnet range={50} strength={0.25} className="w-full md:w-auto">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-accent-purple to-accent-blue text-black hover:shadow-[0_0_25px_rgba(192,132,252,0.35)] transition-all duration-300 disabled:opacity-50"
                      >
                        {status === 'sending' ? (
                          <>Dispatching...</>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </Magnet>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Global Footer */}
        <div className="border-t border-white/[0.06] mt-24 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-sm font-bold font-kanit text-white tracking-widest uppercase mb-1">
              SRINIVAS DEEPAK <span className="text-accent-blue">&bull;</span> ANDROID DEVELOPER
            </h3>
            <p className="text-[11px] text-primary-light/50 tracking-wider">
              B.Tech CSE (AI-ML) &bull; Native Android &bull; Clean Architecture &bull; Fintech Systems
            </p>
          </div>

          <p className="text-[11px] text-primary-light/40 font-medium tracking-wider">
            &copy; {new Date().getFullYear()} Srinivas Deepak. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/deepak57s', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/srinivas-deepak-a87a532a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:deepakparker222@gmail.com', label: 'Email' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-lg text-primary-light/50 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
