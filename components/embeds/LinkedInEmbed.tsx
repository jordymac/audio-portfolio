'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

interface LinkedInPost {
  url: string;
  title?: string;
}

interface LinkedInEmbedProps {
  posts?: LinkedInPost[];
  url?: string;
  title?: string;
  showSkeleton?: boolean;
  isModalOpen?: boolean;
  onModalClose?: () => void;
  onModalOpen?: () => void;
}

export const LinkedInEmbed = ({
  posts: propPosts,
  url,
  title,
  showSkeleton = true,
  isModalOpen: externalIsModalOpen,
  onModalClose,
  onModalOpen
}: LinkedInEmbedProps) => {
  const [internalIsModalOpen, setInternalIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Support both single post and multiple posts
  const posts = propPosts || (url ? [{ url, title }] : []);

  // Use external modal state if provided, otherwise use internal state
  const isModalOpen = externalIsModalOpen !== undefined ? externalIsModalOpen : internalIsModalOpen;
  const setIsModalOpen = onModalClose && onModalOpen
    ? (open: boolean) => open ? onModalOpen() : onModalClose()
    : setInternalIsModalOpen;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : posts.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < posts.length - 1 ? prev + 1 : 0));
  };

  const handleSelectPost = (index: number) => {
    setCurrentIndex(index);
  };

  if (!showSkeleton) {
    return null;
  }

  return (
    <>
      {/* LinkedIn Post Skeleton */}
      <div
        className="relative w-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Header */}
        <div className="p-4 flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
            <div className="h-3 bg-gray-100 rounded w-24" />
          </div>
        </div>

        {/* Content Preview */}
        <div className="px-4 pb-4 space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
          <div className="h-3 bg-gray-200 rounded w-4/6" />
        </div>

        {/* Media Placeholder */}
        <div className="w-full aspect-video bg-gradient-to-br from-gray-100 to-gray-200" />

        {/* Engagement Bar */}
        <div className="px-4 py-3 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="h-3 bg-gray-100 rounded w-16" />
            <div className="h-3 bg-gray-100 rounded w-20" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 py-2 border-t border-gray-100 flex justify-around">
          <div className="h-8 bg-gray-50 rounded w-20" />
          <div className="h-8 bg-gray-50 rounded w-20" />
          <div className="h-8 bg-gray-50 rounded w-20" />
        </div>

        {/* Multiple Posts Badge */}
        {posts.length > 1 && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
            {posts.length} Posts
          </div>
        )}

        {/* Overlay with CTA Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            className="px-6 py-3 rounded-lg font-semibold transition-transform transform group-hover:scale-105"
            style={{
              backgroundColor: 'var(--color-accent-500)',
              color: 'white'
            }}
          >
            View LinkedIn {posts.length > 1 ? 'Posts' : 'Post'}
          </button>
        </div>
      </div>

      {/* Modal with actual LinkedIn embed */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          posts.length > 1 ? (
            <div className="relative inline-block">
              <select
                value={currentIndex}
                onChange={(e) => {
                  handleSelectPost(Number(e.target.value));
                }}
                className="px-4 py-2 pr-10 rounded-lg text-base font-semibold cursor-pointer appearance-none"
                style={{
                  backgroundColor: '#f3f4f6',
                  color: '#1a1a1a',
                  border: '1px solid #e5e7eb'
                }}
              >
                {posts.map((post, index) => (
                  <option key={index} value={index}>
                    Post {index + 1}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={20}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                color="#1a1a1a"
                strokeWidth={2}
              />
            </div>
          ) : (
            'LinkedIn Post'
          )
        }
      >
        <div className="flex flex-col p-6 h-full">

          {/* LinkedIn Embed Container - takes remaining height */}
          <div className="flex items-center justify-center gap-6 flex-1 min-h-0">
            {/* Previous Button */}
            {posts.length > 1 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handlePrevious();
                }}
                className="p-2 transition-all hover:scale-110 flex-shrink-0 z-50"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none'
                }}
                aria-label="Previous post"
                type="button"
              >
                <ChevronLeft size={40} strokeWidth={2} color="#6b7280" />
              </button>
            )}

            {/* LinkedIn Post - fills available height */}
            <div className="w-full max-w-lg h-full flex flex-col">
              <iframe
                key={currentIndex}
                src={posts[currentIndex].url}
                title={posts[currentIndex].title || 'LinkedIn embed'}
                frameBorder="0"
                allowFullScreen
                className="w-full flex-1 rounded-lg"
                style={{
                  border: 'none'
                }}
              />
            </div>

            {/* Next Button */}
            {posts.length > 1 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleNext();
                }}
                className="p-2 transition-all hover:scale-110 flex-shrink-0 z-50"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none'
                }}
                aria-label="Next post"
                type="button"
              >
                <ChevronRight size={40} strokeWidth={2} color="#6b7280" />
              </button>
            )}
          </div>

          {/* Post Counter */}
          {posts.length > 1 && (
            <div className="text-center mt-4 text-base font-semibold flex-shrink-0" style={{ color: 'var(--color-text-primary)' }}>
              {currentIndex + 1} of {posts.length}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
