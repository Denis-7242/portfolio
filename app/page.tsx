import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import GithubStats from '@/sections/GithubStats';
import Projects from '@/sections/Projects';
import Experience from '@/sections/Experience';
import Contact from '@/sections/Contact';
import { fetchHybridProjects, fetchGithubStats } from '@/lib/github';

export default async function Page() {
  const [projects, stats] = await Promise.all([
    fetchHybridProjects(),
    fetchGithubStats('Denis-7242')
  ]);

  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Skills />
      <GithubStats stats={stats} />
      <Projects initialProjects={projects} />
      <Experience />
      <Contact />
    </div>
  );
}
