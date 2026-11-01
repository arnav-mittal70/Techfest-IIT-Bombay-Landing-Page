import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import About from './components/About';
import Events from './components/Events';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-space-950 text-slate-100 flex flex-col relative selection:bg-cyber-cyan selection:text-space-950">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Official Stats & Patronage Strip */}
        <StatsBanner />

        {/* About Techfest IIT Bombay Section */}
        <About />

        {/* Competitions & Events Section */}
        <Events />

        {/* The Techfest Experience Section */}
        <Experience />

        {/* Gallery / Visual Archives Section */}
        <Gallery />

        {/* Contact & Campus Inquiries Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
