'use client';

import React from 'react';
import { Project } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { MediaRenderer } from '@/components/embeds/MediaRenderer';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isLinkedInModalOpen, setIsLinkedInModalOpen] = React.useState(false);
  const [isDiscogsModalOpen, setIsDiscogsModalOpen] = React.useState(false);

  // Group consecutive LinkedIn posts together
  const groupedMedia: (typeof project.media[0] | { type: 'linkedin-group'; posts: typeof project.media })[] = [];
  let linkedInBuffer: typeof project.media = [];
  let linkedInPosts: typeof project.media = [];

  project.media.forEach((media, idx) => {
    if (media.type === 'linkedin') {
      linkedInBuffer.push(media);
      linkedInPosts.push(media);
    } else {
      if (linkedInBuffer.length > 0) {
        groupedMedia.push({ type: 'linkedin-group', posts: linkedInBuffer });
        linkedInBuffer = [];
      }
      groupedMedia.push(media);
    }
  });

  // Don't forget remaining LinkedIn posts
  if (linkedInBuffer.length > 0) {
    groupedMedia.push({ type: 'linkedin-group', posts: linkedInBuffer });
  }

  // Check if project has modal-capable media
  const hasLinkedIn = linkedInPosts.length > 0;
  const hasDiscogs = project.media.some(m => m.type === 'discogs-skeleton');

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${project.isHero ? 'border-2 rounded-lg p-6' : ''}`} style={project.isHero ? {
      borderColor: 'var(--color-accent-500)',
      backgroundColor: 'var(--color-accent-50)'
    } : {}}>
      {/* Left Column - Text Content */}
      <div>
        <h3
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-text-primary)'
          }}
        >
          {project.title}
        </h3>

        {/* Technology Tags */}
        <div className="space-y-4">
          {/* Tools Row */}
          {project.tools && project.tools.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              {project.tools.map((tool) => (
                <Badge key={tool} type="tool">{tool}</Badge>
              ))}
            </div>
          )}

          {/* Skills Row */}
          {project.skills && project.skills.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
              {project.skills.map((skill) => (
                <Badge key={skill} type="skill">{skill}</Badge>
              ))}
            </div>
          )}

          {/* Fallback for old technologies array */}
          {!project.tools && !project.skills && project.technologies && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        {project.description && (
          <p className="text-sm leading-relaxed mt-4" style={{ color: 'var(--color-text-secondary)' }}>
            {project.description}
          </p>
        )}

        {/* Modal Buttons */}
        {hasLinkedIn && (
          <button
            onClick={() => setIsLinkedInModalOpen(true)}
            className="mt-4 px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
            style={{
              backgroundColor: '#22c55e',
              color: 'white'
            }}
          >
            View LinkedIn Posts
          </button>
        )}
        {hasDiscogs && (
          <button
            onClick={() => setIsDiscogsModalOpen(true)}
            className="mt-4 px-6 py-3 rounded-lg font-semibold transition-transform hover:scale-105"
            style={{
              backgroundColor: '#22c55e',
              color: 'white'
            }}
          >
            Explore Live App
          </button>
        )}
      </div>

      {/* Right Column - Media Embeds */}
      <div className="space-y-6">
        {groupedMedia.map((media, idx) => {
          if ('posts' in media && media.type === 'linkedin-group') {
            // Render grouped LinkedIn posts
            const { LinkedInEmbed } = require('@/components/embeds/LinkedInEmbed');
            return (
              <LinkedInEmbed
                key={`linkedin-group-${idx}`}
                posts={media.posts.map(p => ({ url: p.url, title: p.title }))}
                isModalOpen={isLinkedInModalOpen}
                onModalClose={() => setIsLinkedInModalOpen(false)}
                onModalOpen={() => setIsLinkedInModalOpen(true)}
              />
            );
          }

          // Check if we have multiple Spotify embeds in a row
          if (media.type === 'spotify') {
            // Look ahead to see if next items are also Spotify
            const spotifyGroup = [media];
            let nextIdx = idx + 1;
            while (nextIdx < groupedMedia.length) {
              const nextItem = groupedMedia[nextIdx];
              if ('posts' in nextItem || nextItem.type !== 'spotify') break;
              spotifyGroup.push(nextItem);
              nextIdx++;
            }

            // If we have multiple Spotify embeds, render them in a grid
            if (spotifyGroup.length > 1) {
              // Skip the next items since we're rendering them here
              groupedMedia.splice(idx + 1, spotifyGroup.length - 1);

              const gridCols = spotifyGroup.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

              return (
                <div key={`spotify-grid-${idx}`} className={`grid grid-cols-1 ${gridCols} gap-4`}>
                  {spotifyGroup.map((spotifyMedia, spotifyIdx) => (
                    <MediaRenderer
                      key={`spotify-${idx}-${spotifyIdx}`}
                      media={spotifyMedia}
                      isLinkedInModalOpen={isLinkedInModalOpen}
                      onLinkedInModalClose={() => setIsLinkedInModalOpen(false)}
                      onLinkedInModalOpen={() => setIsLinkedInModalOpen(true)}
                      isDiscogsModalOpen={isDiscogsModalOpen}
                      onDiscogsModalClose={() => setIsDiscogsModalOpen(false)}
                      onDiscogsModalOpen={() => setIsDiscogsModalOpen(true)}
                    />
                  ))}
                </div>
              );
            }
          }

          // Check if we have multiple YouTube embeds in a row
          if (media.type === 'youtube') {
            // Look ahead to see if next items are also YouTube
            const youtubeGroup = [media];
            let nextIdx = idx + 1;
            while (nextIdx < groupedMedia.length) {
              const nextItem = groupedMedia[nextIdx];
              if ('posts' in nextItem || nextItem.type !== 'youtube') break;
              youtubeGroup.push(nextItem);
              nextIdx++;
            }

            // If we have multiple YouTube embeds, render them in a grid
            if (youtubeGroup.length > 1) {
              // Skip the next items since we're rendering them here
              groupedMedia.splice(idx + 1, youtubeGroup.length - 1);

              const gridCols = youtubeGroup.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

              return (
                <div key={`youtube-grid-${idx}`} className={`grid grid-cols-1 ${gridCols} gap-4`}>
                  {youtubeGroup.map((youtubeMedia, youtubeIdx) => (
                    <MediaRenderer
                      key={`youtube-${idx}-${youtubeIdx}`}
                      media={youtubeMedia}
                      isLinkedInModalOpen={isLinkedInModalOpen}
                      onLinkedInModalClose={() => setIsLinkedInModalOpen(false)}
                      onLinkedInModalOpen={() => setIsLinkedInModalOpen(true)}
                      isDiscogsModalOpen={isDiscogsModalOpen}
                      onDiscogsModalClose={() => setIsDiscogsModalOpen(false)}
                      onDiscogsModalOpen={() => setIsDiscogsModalOpen(true)}
                    />
                  ))}
                </div>
              );
            }
          }

          return (
            <MediaRenderer
              key={idx}
              media={media}
              isLinkedInModalOpen={isLinkedInModalOpen}
              onLinkedInModalClose={() => setIsLinkedInModalOpen(false)}
              onLinkedInModalOpen={() => setIsLinkedInModalOpen(true)}
              isDiscogsModalOpen={isDiscogsModalOpen}
              onDiscogsModalClose={() => setIsDiscogsModalOpen(false)}
              onDiscogsModalOpen={() => setIsDiscogsModalOpen(true)}
            />
          );
        })}
      </div>
    </div>
  );
};
