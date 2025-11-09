import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const chapters = [
  {
    title: 'The Fair Opens',
    text:
      'Curtains rise to a world of playful physics. Shapes hum, colors breathe, and characters peek from portals.',
  },
  {
    title: 'Whispers in the Midway',
    text:
      'Every step triggers a ripple. Hover to hear a giggle, tap to spark a twirl — stories stitched from interactions.',
  },
  {
    title: 'Parade of Possibilities',
    text:
      'We choreograph motion with intention: empathy in easing curves, personality in timing and spacing.',
  },
  {
    title: 'Curtain Call',
    text:
      'Beyond the spectacle lies craft — pipelines, tools, and care that turn ideas into living characters.',
  },
];

const StoryScroller = () => {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="relative bg-black py-28 text-white">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-fuchsia-500 via-cyan-400 to-emerald-400" />
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A Storytelling Stroll</h2>
          <motion.div style={{ width: progress }} className="h-1 rounded-full bg-white/30" />
        </div>

        <div className="space-y-20">
          {chapters.map((ch, i) => (
            <motion.article
              key={ch.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid grid-cols-1 items-start gap-6 sm:grid-cols-5"
            >
              <div className="sm:col-span-2">
                <h3 className="text-2xl font-semibold text-white">{ch.title}</h3>
              </div>
              <div className="sm:col-span-3">
                <p className="text-white/70">
                  {ch.text}
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 h-32 rounded-xl border border-white/10 bg-gradient-to-tr from-white/5 via-white/[0.03] to-transparent"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryScroller;
