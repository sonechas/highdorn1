import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content?: string;
  link?: string;
}

interface AccordionSectionProps {
  title: string;
  items: AccordionItem[];
  variant?: 'white' | 'colored';
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ 
  title, 
  items, 
  variant = 'colored' 
}) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const isColored = variant === 'colored';

  return (
    <div className={`py-20 md:py-24 ${isColored ? 'bg-brand-primary bg-opacity-6' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-4xl md:text-5xl font-black uppercase tracking-tight-brand mb-16 ${
          isColored ? 'text-brand-neutral-dark' : 'text-brand-neutral-dark'
        }`}>
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div 
              key={index}
              className={`border-b transition-all duration-300 ${
                isColored ? 'border-brand-primary/20' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleItem(index)}
                className={`w-full flex items-center justify-between py-6 text-left hover:text-brand-primary transition-colors duration-200 ${
                  openItems.includes(index) ? 'text-brand-primary' : 'text-brand-neutral-dark'
                }`}
                aria-expanded={openItems.includes(index)}
              >
                <span className="text-lg font-medium pr-4">{item.title}</span>
                <ChevronDown 
                  className={`h-5 w-5 transition-transform duration-300 flex-shrink-0 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openItems.includes(index) && (
                <div className="pb-6 animate-fade-in-up">
                  {item.content && (
                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                      {item.content}
                    </p>
                  )}
                  {item.link && (
                    <a 
                      href={item.link}
                      className="inline-flex items-center text-brand-primary hover:text-brand-primary-dark font-medium transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details
                      <ChevronDown className="h-4 w-4 ml-1 -rotate-90" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;