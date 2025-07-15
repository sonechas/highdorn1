import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  variant?: 'white' | 'colored';
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  variant = 'white',
  className = '' 
}) => {
  const baseClasses = variant === 'white' 
    ? 'bg-white py-16 md:py-20' 
    : 'bg-brand-primary bg-opacity-6 py-20 md:py-24';

  return (
    <section className={`${baseClasses} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;