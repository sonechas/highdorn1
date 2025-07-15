import React from 'react';
import { FileText, Download } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const PensionsPage: React.FC = () => {
  const pensionDocuments = [
    {
      title: 'Pension Fund Implementation Statement 2023',
      description: 'Annual implementation statement for pension fund 2023',
      icon: '📄'
    },
    {
      title: 'Pension Fund Implementation Statement 2024',
      description: 'Annual implementation statement for pension fund 2024',
      icon: '📄'
    },
    {
      title: 'Pension Fund Statement of Investment Principles',
      description: 'Statement outlining our investment principles and approach',
      icon: '📄'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16 animate-fade-in-up">
      {/* Header */}
      <SectionWrapper variant="white">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight-brand text-brand-neutral-dark mb-4">
            Pension Fund Links
          </h1>
        </div>

        {/* Pension Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pensionDocuments.map((doc, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-brand-primary to-brand-primary-dark rounded-lg p-8 text-white transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <Download className="h-6 w-6 text-white opacity-70 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-200" />
              </div>
              <h3 className="text-xl font-bold mb-4 leading-tight">
                {doc.title}
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                {doc.description}
              </p>
              <div className="mt-6 pt-4 border-t border-blue-400 border-opacity-30">
                <span className="text-sm text-blue-200">Click to download</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-brand-secondary-bg rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-brand-neutral-dark mb-4">
            Pension Fund Information
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our pension fund documents provide transparency into our investment approach and implementation. 
            These documents are updated annually and reflect our commitment to responsible investing and 
            fiduciary duty to our members.
          </p>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="bg-brand-neutral-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm">
            <span>020 7123 1234</span>
            <span>contact@domain.com</span>
            <a href="#" className="hover:text-brand-primary transition-colors duration-200">Terms of Use</a>
            <a href="#" className="hover:text-brand-primary transition-colors duration-200">Data Privacy</a>
            <a href="#" className="hover:text-brand-primary transition-colors duration-200">Modern Slavery Statement</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PensionsPage;