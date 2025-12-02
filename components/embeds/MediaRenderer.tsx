'use client';

import { MediaItem } from '@/lib/types';
import { SpotifyEmbed } from './SpotifyEmbed';
import { InstagramEmbed } from './InstagramEmbed';
import { YouTubeEmbed } from './YouTubeEmbed';
import { PodcastEmbed } from './PodcastEmbed';
import { IframeEmbed } from './IframeEmbed';
import { LinkedInEmbed } from './LinkedInEmbed';
import { DiscogsAppSkeleton } from './DiscogsAppSkeleton';
import Image from 'next/image';

interface MediaRendererProps {
  media: MediaItem;
  isLinkedInModalOpen?: boolean;
  onLinkedInModalClose?: () => void;
  onLinkedInModalOpen?: () => void;
  isDiscogsModalOpen?: boolean;
  onDiscogsModalClose?: () => void;
  onDiscogsModalOpen?: () => void;
}

export const MediaRenderer = ({
  media,
  isLinkedInModalOpen,
  onLinkedInModalClose,
  onLinkedInModalOpen,
  isDiscogsModalOpen,
  onDiscogsModalClose,
  onDiscogsModalOpen
}: MediaRendererProps) => {
  switch (media.type) {
    case 'spotify':
      return <SpotifyEmbed url={media.url} title={media.title} />;

    case 'instagram':
      return <InstagramEmbed url={media.url} caption={media.caption} />;

    case 'youtube':
      return (
        <YouTubeEmbed
          url={media.url}
          title={media.title}
          aspectRatio={media.aspectRatio}
        />
      );

    case 'podcast':
      return (
        <PodcastEmbed
          url={media.url}
          title={media.title}
          aspectRatio={media.aspectRatio}
        />
      );

    case 'linkedin':
      return <LinkedInEmbed url={media.url} title={media.title} />;

    case 'discogs-skeleton':
      return (
        <div className="w-full aspect-video rounded-lg overflow-hidden">
          <DiscogsAppSkeleton
            isModalOpen={isDiscogsModalOpen}
            onModalClose={onDiscogsModalClose}
            onModalOpen={onDiscogsModalOpen}
          />
        </div>
      );

    case 'iframe':
      return (
        <IframeEmbed
          url={media.url}
          title={media.title}
          aspectRatio={media.aspectRatio}
          skeletonImage={media.skeletonImage}
          buttonText={media.buttonText}
          modalTitle={media.modalTitle}
        />
      );

    case 'image':
      return (
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src={media.url}
            alt={media.caption || media.title || 'Project image'}
            width={1200}
            height={675}
            className="w-full h-auto"
          />
        </div>
      );

    default:
      return (
        <div
          className="p-4 rounded-lg"
          style={{ backgroundColor: 'var(--color-gray-200)' }}
        >
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Unsupported media type: {media.type}
          </p>
        </div>
      );
  }
};
