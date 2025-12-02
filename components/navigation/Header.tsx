'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { useActiveSection } from '@/hooks/useActiveSection';
import { sections } from '@/data/projects';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  ...sections.map(section => ({ id: section.id, label: section.navLabel }))
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(NAV_ITEMS.map(item => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'shadow-sm'
          : ''
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      }}
    >
      <Container>
        <nav className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-primary)'
            }}
          >
            Jordy
          </button>

          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'border-b-2'
                    : ''
                }`}
                style={{
                  color: activeSection === item.id
                    ? 'var(--color-accent-500)'
                    : 'var(--color-text-secondary)',
                  borderColor: activeSection === item.id
                    ? 'var(--color-accent-500)'
                    : 'transparent',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
};
