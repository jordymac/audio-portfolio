interface PodcastEmbedProps {
  url: string;
  title?: string;
  aspectRatio?: string;
}

export const PodcastEmbed = ({ url, title, aspectRatio = '16/9' }: PodcastEmbedProps) => {
  // Extract podcast and episode IDs from Apple Podcasts URL
  // Format: https://podcasts.apple.com/podcast/id1436557479?i=1000680633073
  const getEmbedUrl = (podcastUrl: string): string => {
    const match = podcastUrl.match(/id(\d+)\?i=(\d+)/);
    if (match) {
      const podcastId = match[1];
      const episodeId = match[2];
      return `https://embed.podcasts.apple.com/us/podcast/episode/id${podcastId}?i=${episodeId}`;
    }
    return podcastUrl;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      style={{ aspectRatio }}
    >
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameBorder="0"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={embedUrl}
        title={title || 'Apple Podcasts embed'}
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};
