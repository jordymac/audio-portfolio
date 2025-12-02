interface YouTubeEmbedProps {
  url: string;
  title?: string;
  aspectRatio?: string;
  showControls?: boolean;
  showTitle?: boolean;
  modestBranding?: boolean;
}

export const YouTubeEmbed = ({
  url,
  title,
  aspectRatio = '16/9',
  showControls = true,
  showTitle = false,
  modestBranding = true
}: YouTubeEmbedProps) => {
  // Extract video ID from various YouTube URL formats
  const getVideoId = (youtubeUrl: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/,
      /youtube\.com\/embed\/([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = youtubeUrl.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  const videoId = getVideoId(url);

  if (!videoId) {
    return (
      <div className="p-4 rounded-lg" style={{ backgroundColor: 'var(--color-gray-200)' }}>
        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          Invalid YouTube URL
        </p>
      </div>
    );
  }

  // Build embed URL with parameters
  const params = new URLSearchParams({
    controls: showControls ? '1' : '0',
    showinfo: showTitle ? '1' : '0',
    modestbranding: modestBranding ? '1' : '0',
    rel: '0', // Don't show related videos from other channels
    iv_load_policy: '3', // Hide annotations
  });

  const embedUrl = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      style={{ aspectRatio }}
    >
      <iframe
        src={embedUrl}
        title={title || 'YouTube video player'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};
