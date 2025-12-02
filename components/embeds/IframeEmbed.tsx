'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Modal } from '@/components/ui/Modal';

interface IframeEmbedProps {
  url: string;
  title?: string;
  aspectRatio?: string;
  skeletonImage?: string;
  buttonText?: string;
  modalTitle?: string;
}

export const IframeEmbed = ({
  url,
  title,
  aspectRatio = '16/9',
  skeletonImage,
  buttonText = 'View Website',
  modalTitle
}: IframeEmbedProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // If skeleton image is provided, show preview with button
  if (skeletonImage) {
    return (
      <>
        <div className="relative w-full overflow-hidden rounded-lg group cursor-pointer">
          <Image
            src={skeletonImage}
            alt={title || 'Website preview'}
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          {/* Overlay with button */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-lg font-semibold transition-transform transform group-hover:scale-105"
              style={{
                backgroundColor: 'var(--color-accent-500)',
                color: 'white'
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalTitle || title}
        >
          <div className="w-full h-[80vh]">
            <iframe
              src={url}
              title={title || 'Embedded content'}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </Modal>
      </>
    );
  }

  // Default inline iframe (no skeleton)
  const isLinkedIn = url.includes('linkedin.com');

  if (isLinkedIn) {
    return (
      <div className="w-full" style={{ minHeight: '500px' }}>
        <iframe
          src={url}
          title={title || 'LinkedIn embed'}
          frameBorder="0"
          allowFullScreen
          scrolling="no"
          className="w-full"
          style={{ height: '600px', border: 'none' }}
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      style={{ aspectRatio }}
    >
      <iframe
        src={url}
        title={title || 'Embedded content'}
        frameBorder="0"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};
