import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import SectionWrapper from '../components/SectionWrapper';
import AccordionSection from '../components/AccordionSection';

const HomePage: React.FC = () => {
  const investorItems = [
    {
      title: 'Annual Reports and Accounts',
      content: 'Access our comprehensive annual reports and financial statements.',
      link: '#'
    },
    {
      title: 'Financial Results',
      content: 'View our latest quarterly and annual financial performance.',
      link: '#'
    },
    {
      title: 'Investor Relations Contacts',
      content: 'Get in touch with our investor relations team.',
      link: '#'
    },
    {
      title: 'Share Price Information',
      content: 'Real-time share price data and historical performance.',
      link: '#'
    }
  ];

  const sustainabilityItems = [
    {
      title: 'Environment',
      content: 'Our commitment to environmental sustainability and green building practices.',
      link: '#'
    },
    {
      title: 'Social Impact',
      content: 'Creating positive social outcomes in the communities we serve.',
      link: '#'
    },
    {
      title: 'Governance',
      content: 'Transparent governance practices and ethical business conduct.',
      link: '#'
    }
  ];

  return (
    <div className="animate-fade-in-up">
      <HeroSection />
      <StatsSection />

      {/* Who We Are */}
      <SectionWrapper variant="white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight-brand text-brand-neutral-dark mb-8">
            Who We Are
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
            <p>
              Highdorn Group is a premier property management organization that expertly manages both commercial and 
              residential properties across the UK. Under the stewardship of the Freshwater family, we've built a 
              reputation for excellence and innovation in property management.
            </p>
            <p>
              Our portfolio primarily consists of properties owned by two distinguished investment groups - 
              <a href="#" className="text-brand-primary hover:text-brand-primary-dark font-semibold transition-colors duration-200 mx-1">
                Daejan Holdings
              </a> 
              and 
              <a href="#" className="text-brand-primary hover:text-brand-primary-dark font-semibold transition-colors duration-200 mx-1">
                Centremanor Group
              </a>, 
              both under the Freshwater family's ownership.
            </p>
            <p>
              Together, these entities form what is colloquially known as the 
              <a href="#" className="text-brand-primary hover:text-brand-primary-dark font-semibold transition-colors duration-200 mx-1">
                Freshwater Group
              </a>, 
              representing a legacy of trust and excellence in property investment and management.
            </p>
          </div>
          <button className="mt-8 bg-brand-primary text-white px-8 py-3 rounded-md font-bold hover:bg-brand-primary-dark transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
            About Us →
          </button>
        </div>
      </SectionWrapper>

      {/* Our Purpose */}
      <SectionWrapper variant="colored">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight-brand text-brand-neutral-dark mb-8">
              Our Purpose
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 max-w-2xl">
              <p>
                Our purpose is to create and manage outstanding places that deliver positive outcomes for all our 
                stakeholders on a long term, sustainable basis. We call this Places People Prefer.
              </p>
              <p>
                We focus on creating environments that enhance the lives of those who work, live, and visit our 
                properties, while delivering exceptional returns for our investors.
              </p>
            </div>
            <button className="mt-8 bg-brand-primary text-white px-8 py-3 rounded-md font-bold hover:bg-brand-primary-dark transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
              Our Purpose →
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Modern office building"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Investor Centre */}
      <AccordionSection 
        title="Investor Centre"
        items={investorItems}
        variant="white"
      />

      {/* Sustainability */}
      <AccordionSection 
        title="Sustainability"
        items={sustainabilityItems}
        variant="colored"
      />

      {/* Newsletter */}
      <div className="bg-brand-neutral-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest property insights and company updates.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-brand-neutral-dark focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <button className="bg-brand-primary px-6 py-2 rounded-r-md font-medium hover:bg-brand-primary-dark transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Site Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">Terms of Use</a></li>
                <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">Data Privacy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">Modern Slavery Statement</a></li>
                <li><a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">Accessibility</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">LinkedIn</a>
                <a href="#" className="text-gray-300 hover:text-brand-primary transition-colors duration-200">Twitter</a>
              </div>
              <div className="mt-6">
                <p className="text-gray-300 text-sm">020 7123 1234</p>
                <p className="text-gray-300 text-sm">contact@domain.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;