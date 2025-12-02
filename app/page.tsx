import { Header } from '@/components/navigation/Header';
import { Hero } from '@/components/sections/Hero';
import { Section } from '@/components/sections/Section';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { Footer } from '@/components/sections/Footer';
import { sections, projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      {sections.map((section, index) => {
        const sectionProjects = projects.filter(p => p.category === section.id);
        const background = index % 2 === 0 ? 'white' : 'gray';

        return (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            intro={section.intro}
            background={background}
          >
            {sectionProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Section>
        );
      })}

      <Footer />
    </>
  );
}
