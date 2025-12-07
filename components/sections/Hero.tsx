'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SparklesText } from '@/components/ui/sparkles-text';
import { ParticleButton } from '@/components/ui/particle-button';
import { heroStats } from '@/data/projects';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center" style={{ backgroundColor: 'var(--color-background)' }}>
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <SparklesText
            text="Jordy McIntyre"
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-16"
            colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
            sparklesCount={15}
          />

          {/* Stats Grid */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-16">
            {heroStats.map((stat, index) => (
              <React.Fragment key={stat.label}>
                <div className="text-center">
                  <div className="text-lg md:text-xl lg:text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {stat.label}
                  </div>
                  <div className="text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                    {stat.value}
                  </div>
                </div>
                {index < heroStats.length - 1 && (
                  <div className="w-16 h-px md:w-px md:h-16" style={{ backgroundColor: 'var(--color-text-secondary)', opacity: 0.3 }} />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <ParticleButton
              successDuration={1000}
              variant="default"
              size="lg"
              onClick={() => {
                const element = document.getElementById('ai-generation');
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Take me to the portfolio
            </ParticleButton>
          </div>
        </div>
      </Container>
    </section>
  );
};
