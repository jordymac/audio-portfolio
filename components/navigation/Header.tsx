'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { ExpandableTabs } from '@/components/ui/expandable-tabs';
import { useActiveSection } from '@/hooks/useActiveSection';
import { sections } from '@/data/projects';
import { Home, Sparkles, Headphones, Database, Video, FileText } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  ...sections.map(section => ({ id: section.id, label: section.navLabel }))
];

const ICON_MAP: Record<string, any> = {
  'hero': Home,
  'ai-generation': Sparkles,
  'audio': Headphones,
  'knowledge-systems': Database,
  'content-operations': Video,
  'how-tos-features': FileText,
};

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
      const headerOffset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const MOBILE_LABELS: Record<string, string> = {
    'hero': 'Home',
    'ai-generation': 'AI',
    'audio': 'Audio',
    'knowledge-systems': 'Knowledge',
    'content-operations': 'Content',
    'how-tos-features': 'How-Tos',
  };

  const mobileTabs = NAV_ITEMS.map((item) => ({
    title: MOBILE_LABELS[item.id] || item.label,
    icon: ICON_MAP[item.id] || Home,
  }));

  // Find the index of the active section for mobile tabs
  const activeTabIndex = NAV_ITEMS.findIndex(item => item.id === activeSection);

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
            className="text-xl font-bold hidden md:block"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-primary)'
            }}
          >
            Jordy
          </button>

          {/* Desktop Navigation */}
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

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <ExpandableTabs
              tabs={mobileTabs}
              activeIndex={activeTabIndex !== -1 ? activeTabIndex : null}
              onChange={(index) => {
                if (index !== null) {
                  scrollToSection(NAV_ITEMS[index].id);
                }
              }}
            />
          </div>
        </nav>
      </Container>
    </header>
  );
};
