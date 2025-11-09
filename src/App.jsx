import React from 'react';
import Hero from './components/Hero';
import CharacterGallery from './components/CharacterGallery';
import StoryScroller from './components/StoryScroller';
import AboutStudio from './components/AboutStudio';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <CharacterGallery />
      <StoryScroller />
      <AboutStudio />
      <Footer />
    </div>
  );
}

export default App;
