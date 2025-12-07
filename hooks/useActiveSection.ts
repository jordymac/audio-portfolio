'use client';

import { useEffect, useState } from 'react';

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter to only visible entries
        const visibleEntries = entries.filter(entry => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Find the section that is most prominently in the viewport
          // Prioritize sections closer to the top of the viewport
          const mostVisible = visibleEntries.reduce((prev, current) => {
            const prevTop = prev.boundingClientRect.top;
            const currentTop = current.boundingClientRect.top;

            // If both are below the header (positive top), choose the one higher up
            if (prevTop > 0 && currentTop > 0) {
              return currentTop < prevTop ? current : prev;
            }

            // If one is below and one above header, choose the one below
            if (prevTop <= 0 && currentTop > 0) return current;
            if (currentTop <= 0 && prevTop > 0) return prev;

            // Both above header, choose the one with highest intersection ratio
            return current.intersectionRatio > prev.intersectionRatio ? current : prev;
          });

          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: [0, 0.1, 0.3, 0.5],
        rootMargin: '-100px 0px -50% 0px', // Adjust for header height
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};
