'use client';

interface AudioEmbedProps {
  url: string;
  title?: string;
  aspectRatio?: string;
}

export const AudioEmbed = ({ url, title, aspectRatio = '9/16' }: AudioEmbedProps) => {
  return (
    <div className="space-y-2">
      {title && (
        <div className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
          {title}
        </div>
      )}
      <div
        className="relative w-full bg-gray-900 rounded-lg overflow-hidden border border-gray-700 flex items-center justify-center p-6"
        style={{ aspectRatio }}
      >
        <audio
          controls
          className="w-full"
          style={{ filter: 'invert(1) hue-rotate(180deg)' }}
        >
          <source src={url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};
