'use client';

import { useEffect, useRef } from 'react';

interface InstagramEmbedProps {
  url: string;
  caption?: string;
}

export const InstagramEmbed = ({ url, caption }: InstagramEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Instagram embed script
    const loadScript = () => {
      if (!(window as any).instgrm) {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        script.onload = () => {
          if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
          }
        };
        document.body.appendChild(script);
      } else {
        (window as any).instgrm.Embeds.process();
      }
    };

    loadScript();
  }, [url]);

  return (
    <div ref={containerRef} className="w-full">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: 0,
          width: 'calc(100% - 2px)',
        }}
      />
    </div>
  );
};
