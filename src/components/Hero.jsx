import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette and gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-extrabold tracking-tight text-white"
          style={{
            fontFamily: 'Mona Sans, Inter, system-ui, sans-serif',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: 1.05,
          }}
        >
          Toon Fair
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-white/80"
        >
          A story-led showcase of imaginary characters — crafted with heart, motion, and playful depth.
        </motion.p>

        <div className="mt-8 flex items-center gap-4">
          <motion.a
            href="#gallery"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-white/10 transition-colors hover:bg-white/90"
          >
            Meet the Cast
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            About the Studio
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
