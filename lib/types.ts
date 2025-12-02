export interface HeroStats {
  label: string;
  value: string;
}

export interface SectionMeta {
  id: string;
  title: string;
  intro: string;
  navLabel: string;
}

export type MediaType = 'spotify' | 'instagram' | 'youtube' | 'podcast' | 'iframe' | 'image' | 'linkedin' | 'discogs-skeleton';

export interface MediaItem {
  type: MediaType;
  url: string;
  title?: string;
  caption?: string;
  aspectRatio?: string;
  gridSpan?: number;
  skeletonImage?: string;
  buttonText?: string;
  modalTitle?: string;
}

export interface ProcessStep {
  label: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  whyItMatters?: string;
  technologies?: string[]; // deprecated, use tools and skills instead
  tools?: string[];
  skills?: string[];
  media: MediaItem[];
  process?: ProcessStep[];
  technicalNotes?: string;
  outcome?: string;
  links?: {
    live?: string;
    github?: string;
  };
  isHero?: boolean;
}
