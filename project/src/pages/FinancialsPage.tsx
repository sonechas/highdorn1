import React from 'react';
import { TrendingUp, DollarSign, PieChart, BarChart3, FileText, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const FinancialsPage: React.FC = () => {
  const financialHighlights = [
    {
      title: 'Total Assets Under Management',
      value: '£2.8B',
      change: '+12.5%',
      icon: TrendingUp,
      positive: true
    },
    {
      title: 'Annual Revenue',
      value: '£156M',
      change: '+8.3%',
      icon: DollarSign,
      positive: true
    },
    {
      title: 'Portfolio Growth',
      value: '15.2%',
      change: '+2.1%',
      icon: PieChart,
      positive: true
    },
    {
      title: 'Properties Managed',
      value: '1,247',
      change: '+5.8%',
      icon: BarChart3,
      positive: true
    }
  ];

  const reports = [
    {
      title: 'Annual Report 2023',
      description: 'Comprehensive overview of our financial performance and strategic initiatives',
      date: 'December 2023',
      type: 'Annual Report'
    },
    {
      title: 'Q4 2023 Financial Results',
      description: 'Quarterly earnings report and market analysis',
      date: 'January 2024',
      type: 'Quarterly Report'
    },
    {
      title: 'Sustainability Report 2023',
      description: 'Our commitment to environmental and social responsibility',
      date: 'November 2023',
      type: 'ESG Report'
    },
    {
      title: 'Investment Portfolio Review',
      description: 'Detailed analysis of our investment performance and strategy',
      date: 'October 2023',
      type: 'Investment Report'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16 animate-fade-in-up">
      {/* Header */}
      <SectionWrapper variant="white">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight-brand text-brand-neutral-dark mb-4">
            Financial Information
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transparent financial reporting and performance metrics from the Freshwater Group
          </p>
        </div>

        {/* Financial Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {financialHighlights.map((item, index) => (
            <div 
              key={index}
              className="bg-brand-secondary-bg rounded-lg p-6 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-brand-primary/10 p-3 rounded-lg">
                  <item.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  item.positive ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
                }`}>
                  {item.change}
                </span>
              </div>
              <div className="text-3xl font-black text-brand-neutral-dark mb-2">{item.value}</div>
              <div className="text-gray-600 text-sm">{item.title}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Financial Reports */}
      <SectionWrapper variant="colored">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight-brand text-brand-neutral-dark text-center mb-16">
          Financial Reports & Documents
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {reports.map((report, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-brand-primary/10 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-brand-primary" />
                </div>
                <span className="bg-brand-secondary-bg text-brand-primary px-3 py-1 rounded-full text-sm font-medium">
                  {report.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-neutral-dark mb-3 group-hover:text-brand-primary transition-colors duration-200">
                {report.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {report.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {report.date}
                </div>
                <button className="text-brand-primary font-medium hover:text-brand-primary-dark transition-colors duration-200">
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Investment Strategy */}
      <SectionWrapper variant="white">
        <div className="bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">
            Our Investment Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Long-term Growth</h3>
              <p className="text-blue-100 text-sm">
                Sustainable investment strategies focused on long-term value creation
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <PieChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Diversified Portfolio</h3>
              <p className="text-blue-100 text-sm">
                Balanced approach across commercial and residential properties
              </p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-lg w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Performance Focus</h3>
              <p className="text-blue-100 text-sm">
                Data-driven decisions to maximize returns for our stakeholders
              </p>
            </div>
          </div>
          <button className="bg-white text-brand-primary px-8 py-4 rounded-md font-bold hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
            Learn More About Our Strategy
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default FinancialsPage;