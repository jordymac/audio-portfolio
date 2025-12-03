'use client';

interface VideoEmbedProps {
  url: string;
  title?: string;
  aspectRatio?: string;
}

export const VideoEmbed = ({ url, title, aspectRatio = '9/16' }: VideoEmbedProps) => {
  return (
    <div
      className="relative w-full bg-gray-900 rounded-lg overflow-hidden"
      style={{ aspectRatio }}
    >
      <video
        controls
        className="w-full h-full object-cover"
        playsInline
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video element.
      </video>
    </div>
  );
};
