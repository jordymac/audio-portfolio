import { ReactNode } from 'react';

interface CalloutBoxProps {
  children: ReactNode;
  variant?: 'info' | 'success' | 'warning';
  className?: string;
}

export const CalloutBox = ({
  children,
  variant = 'info',
  className = ''
}: CalloutBoxProps) => {
  const variants = {
    info: 'bg-accent-50 border-accent-200 text-accent-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
  };

  return (
    <div className={`border-l-4 p-4 rounded ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};
