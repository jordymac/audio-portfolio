interface SpotifyEmbedProps {
  url: string;
  title?: string;
}

export const SpotifyEmbed = ({ url, title }: SpotifyEmbedProps) => {
  // Convert Spotify URI to embed URL
  // spotify:track:2XfGZExaTbQXQOt0zE2i9S -> https://open.spotify.com/embed/track/2XfGZExaTbQXQOt0zE2i9S
  const getEmbedUrl = (spotifyUrl: string): string => {
    if (spotifyUrl.startsWith('spotify:')) {
      const parts = spotifyUrl.split(':');
      const type = parts[1]; // 'track', 'album', 'playlist'
      const id = parts[2];
      return `https://open.spotify.com/embed/${type}/${id}`;
    }
    return spotifyUrl;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <iframe
      data-testid="embed-iframe"
      style={{ borderRadius: '12px' }}
      src={embedUrl}
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title={title || 'Spotify embed'}
    />
  );
};
