import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, Palette } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
  >
    <div className="mb-3 flex items-center gap-3">
      <div className="rounded-full bg-white/10 p-2 text-white">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="text-sm text-white/70">{desc}</p>
  </motion.div>
);

const AboutStudio = () => {
  return (
    <section id="about" className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The Studio</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            We are an artwork and animation center crafting character-driven experiences for games,
            entertainment, and interactive media. Our process blends art direction, character design,
            and engineering — always in service of story.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Feature
            icon={Palette}
            title="Artful Foundations"
            desc="Design systems rooted in color, form, and composition that feel elevated and professional."
          />
          <Feature
            icon={Sparkles}
            title="Expressive Motion"
            desc="Micro-interactions, hover states, and scroll choreography that give characters a pulse."
          />
          <Feature
            icon={Rocket}
            title="Production Ready"
            desc="Tooling, pipelines, and performance tuning to ship delightful experiences at scale."
          />
        </div>
      </div>
    </section>
  );
};

export default AboutStudio;
