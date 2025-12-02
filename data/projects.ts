import { Project, SectionMeta, HeroStats } from '@/lib/types';

export const heroStats: HeroStats[] = [
  { label: 'Audio Engineering', value: 'Diploma Qualified' },
  { label: 'Music Production', value: '5+ Years' },
  { label: 'AI Generation', value: 'Multi-Modal' },
  { label: 'Traffic Growth', value: '300% Increase' },
  { label: 'B2B SaaS', value: 'Content Operations' },
];

export const sections: SectionMeta[] = [
  {
    id: 'ai-generation',
    title: 'AI Generation & Prompt Engineering',
    intro: 'Multi-modal AI content pipeline demonstrating systematic prompt engineering across image (Midjourney), video (Runway), and voice (ElevenLabs) generation with character consistency control.',
    navLabel: 'AI Generation',
  },
  {
    id: 'audio',
    title: 'Audio Engineering & Music Production',
    intro: 'Professional audio production across music and podcast formats, demonstrating mastery of core engineering principles: frequency management, dynamic control, spatial design, and quality assurance workflows.',
    navLabel: 'Audio',
  },
  {
    id: 'knowledge-systems',
    title: 'Knowledge Systems & Search',
    intro: 'Converted entire social media content library and website into a semantically-connected knowledge base through automated scraping, LLM-powered metadata generation, and structured taxonomy.',
    navLabel: 'Knowledge Systems',
  },
  {
    id: 'content-operations',
    title: 'Content Operations & Delivery',
    intro: 'Cross-functional content creation collaborating with Sales and Product teams to produce webinars, feature demonstrations, and how-to videos that addressed pipeline friction and supported enterprise sales conversations.',
    navLabel: 'Content Ops',
  },
];

export const projects: Project[] = [
  {
    id: 'multi-modal-ai',
    title: 'Multi-Modal AI Content Pipeline',
    category: 'ai-generation',
    description: 'Systematic multi-stage AI generation workflow: Midjourney prompting → face-swap → Runway video generation → ElevenLabs voice cloning → lip-sync. Demonstrates consistency control and prompt engineering across modalities.',
    tools: ['Midjourney', 'Runway', 'ElevenLabs'],
    skills: ['Prompt Engineering', 'Multi-Modal AI', 'Character Consistency'],
    media: [
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=Vf9jqj8EM5w',
        title: 'Multi-modal AI workflow demonstration',
        aspectRatio: '9/16'
      },
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=pAFuH332sKE',
        title: 'AI-generated content showcase',
        aspectRatio: '9/16'
      },
      {
        type: 'youtube',
        url: 'https://www.youtube.com/watch?v=g3k0lHmiCoY',
        title: 'AI-generated content result',
        aspectRatio: '9/16'
      },
    ],
  },
  {
    id: 'music-production',
    title: 'Music Production Portfolio',
    category: 'audio',
    description: 'Original music production showcasing audio engineering fundamentals: sampling techniques, EQ, compression, mixing, and mastering.',
    technicalNotes: 'Each track demonstrates: Clean frequency separation, Dynamic range control, Spatial positioning with reverb/delay, Loudness normalisation to streaming standards.',
    tools: ['Ableton Live', 'Pro Tools'],
    skills: ['Sampling', 'Mixing', 'Mastering', 'Audio Engineering'],
    media: [
      {
        type: 'spotify',
        url: 'spotify:track:2XfGZExaTbQXQOt0zE2i9S',
        title: 'Track 1'
      },
      {
        type: 'spotify',
        url: 'spotify:track:1xa1RwCgY9IyvO785f561N',
        title: 'Track 2'
      },
    ],
  },
  {
    id: 'placeos-knowledge-base',
    title: 'PlaceOS Knowledge Base',
    category: 'knowledge-systems',
    description: 'Built a graph-based knowledge hub to help workplace, campus, and facilities teams explore how key smart building concepts like occupancy, utilisation, and automation connect. Created an interactive knowledge base that mapped key concepts to challenges, use cases, and modules across the platform.',
    outcome: '300% increase in organic traffic within 6 months. Generated over 100 inbound leads on launch, including from previously untapped markets. Improved search discoverability and reduced support tickets.',
    tools: ['Obsidian'],
    skills: ['Web Scraping', 'LLM Prompting', 'Metadata Architecture', 'SEO', 'Information Architecture'],
    media: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7314887707183222784',
        title: 'PlaceOS Knowledge Base Demo'
      }
    ],
    links: {
      live: 'https://publish.obsidian.md/placeos/Read+Me!',
    },
  },
  {
    id: 'discogs-web-app',
    title: 'Discogs Web App',
    category: 'knowledge-systems',
    description: 'Custom search interface for physical record stores integrating Discogs API with filtering functionality to reduce friction in collection discovery.',
    tools: ['React', 'TypeScript', 'Discogs API', 'Claude Code'],
    skills: ['API Integration', 'Search Systems', 'UI/UX Design'],
    media: [
      {
        type: 'discogs-skeleton',
        url: '',
        title: 'Discogs Music Discovery App'
      },
    ],
  },
  {
    id: 'webinars-sales',
    title: 'Sales-Driven Webinar Strategy',
    category: 'content-operations',
    description: 'Targeted webinar program addressing sales pipeline friction through cross-functional collaboration with Sales and Product teams, converting stalled MENA enterprise deals through strategic product demonstrations.',
    outcome: 'Drove 500+ total attendees across webinar series. Multiple high-value enterprise deals closed as direct result of targeted content. Contributed to new sales wins in MENA region.',
    tools: ['LinkedIn Live', 'OBS', 'Wistia'],
    skills: ['Live Streaming', 'Video Production', 'How-Tos', 'Sales Enablement'],
    media: [
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7303175591694934018',
        title: 'LinkedIn Post 1'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7275690614438948864',
        title: 'LinkedIn Post 2'
      },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7272435349392355328',
        title: 'LinkedIn Post 3'
      },
    ],
  },
  {
    id: 'placeos-podcast',
    title: 'PlaceOS Podcast Production',
    category: 'audio',
    description: 'Professional podcast production workflow maintaining consistent audio quality standards: clean EQ, artefact removal (clicks, pops, noise), smooth fades, and broadcast-ready loudness across episodes.',
    technicalNotes: 'Production workflow: Multi-track recording → noise reduction → EQ for clarity → compression → loudness normalisation to -16 LUFS (podcast standard).',
    tools: ['Premiere Pro', 'DaVinci Resolve'],
    skills: ['Podcast Production', 'EQ', 'Compression', 'Noise Reduction', 'Loudness Normalisation'],
    media: [
      {
        type: 'podcast',
        url: 'https://podcasts.apple.com/us/podcast/ai-cant-tell-the-difference-between-a-punch/id1436557479?i=1000680633073',
        title: 'AI Can\'t Tell the Difference Between a Punch'
      },
    ],
  },
];
