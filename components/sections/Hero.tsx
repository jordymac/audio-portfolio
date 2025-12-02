'use client';

import { Container } from '@/components/ui/Container';
import { heroStats } from '@/data/projects';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center" style={{ backgroundColor: 'var(--color-background)' }}>
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6" style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-text-primary)'
          }}>
            Jordy McIntyre
          </h1>
          <p className="text-2xl md:text-3xl mb-4" style={{ color: 'var(--color-text-secondary)' }}>
            Audio Craft Specialist
          </p>
          <p className="text-lg md:text-xl mb-12" style={{ color: 'var(--color-text-tertiary)' }}>
            Audio Engineering + AI Generation Systems + Content Operations
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--color-accent-500)' }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
