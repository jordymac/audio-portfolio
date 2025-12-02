import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  type?: 'tool' | 'skill';
}

const BADGE_STYLES = {
  tool: {
    color: '#3b82f6', // blue
  },
  skill: {
    color: '#8b5cf6', // purple
  },
};

export const Badge = ({ children, type = 'skill' }: BadgeProps) => {
  const { color } = BADGE_STYLES[type];

  return (
    <span
      className="inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full"
      style={{
        backgroundColor: `${color}1a`, // 10% opacity
        color: color,
      }}
    >
      {children}
    </span>
  );
};
