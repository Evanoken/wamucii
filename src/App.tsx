import Background3D from './components/Background3D';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { PROFILE } from './data';
import { useScrollProgress } from './hooks';

export default function App() {
  const progress = useScrollProgress();
  return (
    <>
      <Background3D />
      <div className="progress" style={{ width: `${progress}%` }}></div>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <footer>
        <div className="wrap">{PROFILE.fullName} · Built with React, TypeScript &amp; Three.js</div>
      </footer>
    </>
  );
}
