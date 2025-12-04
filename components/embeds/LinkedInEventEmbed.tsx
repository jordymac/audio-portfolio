'use client';

import { ExternalLink } from 'lucide-react';

interface LinkedInEventEmbedProps {
  url: string;
  title?: string;
}

export const LinkedInEventEmbed = ({
  url,
  title = 'LinkedIn Event'
}: LinkedInEventEmbedProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group"
    >
      {/* Header */}
      <div className="p-4 flex items-start gap-3 border-b border-gray-100">
        <div className="w-12 h-12 rounded bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-gray-900 mb-1">{title}</div>
          <div className="text-sm text-gray-500">LinkedIn Event</div>
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
      </div>

      {/* Event Preview Area */}
      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="text-gray-700 font-medium">View Event on LinkedIn</div>
          <div className="text-sm text-gray-500">Click to see event details, attendees, and registration</div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
          <span>Open LinkedIn Event</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
};
