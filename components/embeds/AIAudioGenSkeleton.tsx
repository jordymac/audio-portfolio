'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui/Modal';

interface AIAudioGenSkeletonProps {
  isModalOpen?: boolean;
  onModalClose?: () => void;
  onModalOpen?: () => void;
}

export function AIAudioGenSkeleton({
  isModalOpen: externalIsModalOpen,
  onModalClose,
  onModalOpen
}: AIAudioGenSkeletonProps = {}) {
  const [internalIsModalOpen, setInternalIsModalOpen] = useState(false);

  const isModalOpen = externalIsModalOpen !== undefined ? externalIsModalOpen : internalIsModalOpen;
  const setIsModalOpen = onModalClose && onModalOpen
    ? (open: boolean) => open ? onModalOpen() : onModalClose()
    : setInternalIsModalOpen;

  return (
    <>
      <div
        className="w-full bg-gray-900 rounded-xl overflow-hidden cursor-pointer group relative"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-8 flex items-center justify-center" style={{ minHeight: '400px' }}>
          <div className="w-full max-w-md space-y-6">
            {/* Waveform visualization */}
            <div className="flex items-end justify-center gap-1 h-32">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 bg-purple-400 rounded-full"
                  style={{
                    height: `${Math.random() * 100}%`,
                    opacity: 0.6
                  }}
                ></div>
              ))}
            </div>

            {/* Track info */}
            <div className="space-y-2">
              <div className="h-6 w-48 bg-gray-800 rounded mx-auto"></div>
              <div className="h-4 w-32 bg-gray-700 rounded mx-auto"></div>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-purple-500 rounded-full"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>1:23</span>
                <span>3:45</span>
              </div>
            </div>

            {/* Player controls */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
              <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
            </div>

            {/* Volume & other controls */}
            <div className="flex justify-between items-center">
              <div className="h-8 w-8 bg-gray-800 rounded"></div>
              <div className="flex-1 mx-4 h-1 bg-gray-800 rounded-full"></div>
              <div className="h-8 w-8 bg-gray-800 rounded"></div>
            </div>
          </div>
        </div>

        {/* Hover overlay with CTA */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors transform group-hover:scale-105"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            Create Your First Song
          </button>
        </div>
      </div>

      {/* Modal with live app */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="AI Audio Generation System"
      >
        <div className="w-full h-full">
          <iframe
            src="https://ai-audio-gen.vercel.app/"
            title="AI Audio Generation System"
            className="w-full h-full"
            style={{ border: 'none' }}
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  );
}
