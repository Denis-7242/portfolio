import Hero from '@/src/sections/Hero';
import About from '@/src/sections/About';
import Skills from '@/src/sections/Skills';
import Projects from '@/src/sections/Projects';
import Experience from '@/src/sections/Experience';
import Contact from '@/src/sections/Contact';

export default function Page() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}
