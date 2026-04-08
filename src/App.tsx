/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import WhyLocart from './components/WhyLocart';
import Team from './components/Team';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body text-text selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <VisionMission />
        <Services />
        <WhyLocart />
        <Team />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
