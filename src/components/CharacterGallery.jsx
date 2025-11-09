import React from 'react';
import { motion } from 'framer-motion';

const characters = [
  {
    name: 'Pixel Ranger',
    tag: 'Guardian of Glows',
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
    description:
      'A neon-suited sentinel patrolling between scenes, bending light into whimsical shapes.',
  },
  {
    name: 'Glyph Whisperer',
    tag: 'Keeper of Letters',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    description:
      'Conjures type and motion to make words dance and meanings shine.',
  },
  {
    name: 'Echo Sprite',
    tag: 'Beat Alchemist',
    gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
    description:
      'Speaks in pulses and ripples; turns interactions into playful echoes.',
  },
  {
    name: 'Sketch Nomad',
    tag: 'Wanderer of Lines',
    gradient: 'from-amber-400 via-orange-500 to-red-500',
    description:
      'Travels light, draws worlds, leaves trails of friendly monsters behind.',
  },
];

const Card = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-0.5 backdrop-blur-md"
    >
      <div className={`relative h-48 w-full rounded-2xl bg-gradient-to-br ${item.gradient} p-4`}></div>
      <div className="space-y-1 p-4">
        <div className="flex items-baseline justify-between">
          <h3 className="text-lg font-semibold text-white">{item.name}</h3>
          <span className="text-xs uppercase tracking-wide text-white/50">{item.tag}</span>
        </div>
        <p className="text-sm text-white/70">{item.description}</p>
      </div>
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.12), transparent 40%)',
        }}
      />
    </motion.div>
  );
};

const CharacterGallery = () => {
  return (
    <section id="gallery" className="relative isolate bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet the Cast</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Our characters are designed for story-first experiences with expressive motion,
              playful physics, and interactive charm.
            </p>
          </div>
          <a
            href="#about"
            className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
          >
            Learn how we build them
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {characters.map((c, i) => (
            <Card key={c.name} item={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterGallery;
