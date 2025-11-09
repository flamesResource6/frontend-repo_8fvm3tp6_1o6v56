import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-10 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Toon Fair — An artwork & animation center.</p>
        <nav className="flex items-center gap-5 text-sm">
          <a href="#gallery" className="hover:text-white">Characters</a>
          <a href="#about" className="hover:text-white">Studio</a>
          <a href="#top" className="hover:text-white">Back to top</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
