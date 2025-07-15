import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: '1000+', label: 'Properties' },
    { value: '25+', label: 'Years Experience' },
    { value: '£2.8B', label: 'Assets Managed' }
  ];

  return (
    <div className="bg-brand-primary-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;