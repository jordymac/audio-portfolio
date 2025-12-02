import { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';

interface SectionProps {
  id: string;
  title: string;
  intro: string;
  children: ReactNode;
  background?: 'white' | 'gray';
}

export const Section = ({
  id,
  title,
  intro,
  children,
  background = 'white'
}: SectionProps) => {
  const bgColor = background === 'gray' ? 'var(--color-surface)' : 'var(--color-background)';

  return (
    <section
      id={id}
      className="section-spacing"
      style={{ backgroundColor: bgColor }}
    >
      <Container>
        <div className="max-w-3xl mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-primary)'
            }}
          >
            {title}
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            {intro}
          </p>
        </div>
        <div className="space-y-16">
          {children}
        </div>
      </Container>
    </section>
  );
};
