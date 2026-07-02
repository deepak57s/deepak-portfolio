import React, { useState } from 'react';
import { Send, Mail, MapPin, Calendar, Sparkles } from 'lucide-react';
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

    // Dispatch actual mail client opening using mailto
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:deepakparker222@gmail.com?subject=${subject}&body=${body}`;

    // Trigger opening default client
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-6 relative w-full bg-background overflow-hidden border-t border-white/[0.04]"
    >
      {/* Interactive DotField background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <DotField
          dotRadius={3}
          dotSpacing={27}
          bulgeStrength={22}
          glowRadius={90}
          sparkle
          waveAmplitude={2}
          cursorForce={0.89}
          gradientFrom="#240344"
          gradientTo="#8b74a0"
          glowColor="#000000"
        />
      </div>
      {/* Decorative glows */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-purple/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent-blue/[0.015] blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column: Context Card */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue mb-6">
              <Sparkles className="w-4 h-4 text-accent-blue" />
              Let's Connect
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold font-kanit uppercase italic text-white mb-6 leading-tight pr-4">
              Start a <span className="inline-block pr-4 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">Project</span>
            </h2>

            <p className="text-primary-light/60 text-sm md:text-base max-w-md mb-10 leading-relaxed font-outfit">
              Have an idea for a premium responsive web application, interactive 3D WebGL portal, or custom automation architecture? Drop a message!
            </p>

            {/* Direct Channels */}
            <div className="flex flex-col gap-6 w-full max-w-sm mb-12">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl glass border border-white/[0.05] text-accent-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-primary-light/40 font-bold uppercase tracking-widest">
                    Direct Email
                  </h4>
                  <a
                    href="mailto:deepakparker222@gmail.com"
                    className="text-sm font-semibold text-white hover:text-accent-blue transition-colors"
                  >
                    deepakparker222@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl glass border border-white/[0.05] text-accent-emerald">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-primary-light/40 font-bold uppercase tracking-widest">
                    Current Location
                  </h4>
                  <p className="text-sm font-semibold text-white">
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl glass border border-white/[0.05] text-accent-purple">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] text-primary-light/40 font-bold uppercase tracking-widest">
                    Availability Status
                  </h4>
                  <p className="text-sm font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                    Open for Projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-panel p-8 md:p-12 rounded-[32px] border border-white/[0.04] relative">

              {status === 'success' ? (
                <div className="py-16 flex flex-col items-center justify-center text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center text-accent-emerald mb-6">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-kanit uppercase tracking-wider text-white mb-2">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-primary-light/60 max-w-sm">
                    Thank you. Your inquiry has been routed successfully. Deepak will follow up with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2 items-start text-left">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-primary-light/45">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] focus:border-accent-blue/30 focus:bg-white/[0.04] text-sm text-white placeholder-primary-light/25 outline-none transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2 items-start text-left">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-primary-light/45">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] focus:border-accent-blue/30 focus:bg-white/[0.04] text-sm text-white placeholder-primary-light/25 outline-none transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-2 items-start text-left">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-primary-light/45">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Details about your inquiry..."
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] focus:border-accent-blue/30 focus:bg-white/[0.04] text-sm text-white placeholder-primary-light/25 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="flex justify-end mt-4">
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

        {/* Footer Area */}
        <div className="border-t border-white/[0.06] mt-24 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-sm font-bold font-kanit text-white tracking-widest uppercase mb-1">
              DEEPAK <span className="text-accent-blue">•</span> CREATIVE DEVELOPER
            </h3>
            <p className="text-[10px] text-primary-light/40 tracking-wider">
              Representing Srinivas Deepak. Portofilo Built with React, Tailwind & Three.js.
            </p>
          </div>

          <p className="text-[10px] text-primary-light/35 font-medium tracking-wider">
            &copy; {new Date().getFullYear()} Srinivas Deepak. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/deepak57' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/srinivas-deepak-a87a532a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
              { icon: Mail, href: 'mailto:deepakparker222@gmail.com' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-primary-light/40 hover:text-white bg-white/[0.01] hover:bg-white/[0.04] border border-white/[0.04] transition-all"
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
