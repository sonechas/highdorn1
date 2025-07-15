import React from 'react';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const ContactPage: React.FC = () => {
  const mainOffice = {
    name: 'Highdorn Co. Limited',
    building: 'Freshwater House',
    address: '158-162 Shaftesbury Avenue',
    city: 'London',
    postcode: 'WC2H 8HR'
  };

  const officeInfo = {
    company: 'Part of Freshwater Group of Companies',
    name: 'Highdorn Co. Limited.',
    registration: 'Registered in England',
    number: 'Number- 603121'
  };

  const officeLocations = [
    {
      title: 'Head Office',
      name: 'Freshwater House',
      address: '158-162 Shaftesbury Avenue, London, WC2H 8HR',
      phone: '020 7123 1234'
    },
    {
      title: 'London WC2',
      name: 'New London House',
      address: 'London, WC2H 8HR',
      phone: '020 7123 1234'
    },
    {
      title: "Queen's Park (Area 5)",
      name: '105-109 Salusbury Road',
      address: 'London, NW6 6RG',
      phone: '020 7123 1234'
    },
    {
      title: 'Croydon (Area Office)',
      name: '3rd Floor Suffolk House',
      address: 'George Street, Croydon, CR0 1PE',
      phone: '020 8662 8870'
    },
    {
      title: 'Croydon (Regional Executive)',
      name: '3rd Floor Suffolk House',
      address: 'George Street, Croydon, CR0 1PE',
      phone: '020 8662 2500'
    },
    {
      title: 'West Midlands',
      name: '4 Walmley Chambers',
      address: 'Walmley Close, Sutton Coldfield, West Midlands, B76 1NQ',
      phone: '0121 313 2255'
    }
  ];

  const documents = [
    { name: 'Gender Pay Gap', icon: '📄' },
    { name: 'FWG Staff Retirement Benefits Plan July 2023', icon: '📄' }
  ];

  return (
    <div className="min-h-screen bg-white pt-16 animate-fade-in-up">
      {/* Header */}
      <SectionWrapper variant="white">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight-brand text-brand-neutral-dark mb-4">
            Contact Us
          </h1>
        </div>

        {/* Main Office & Office Information */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-brand-primary/10 p-3 rounded-lg mr-4">
                <Building2 className="h-6 w-6 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-bold text-brand-neutral-dark">Main Office</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <p className="font-semibold text-lg text-brand-neutral-dark">{mainOffice.name}</p>
              <p>{mainOffice.building}</p>
              <p>{mainOffice.address}</p>
              <p>{mainOffice.city}</p>
              <p className="font-medium">{mainOffice.postcode}</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-brand-primary/10 p-3 rounded-lg mr-4">
                <Mail className="h-6 w-6 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-bold text-brand-neutral-dark">Office Information</h2>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>{officeInfo.company}</p>
              <p className="font-semibold text-brand-neutral-dark">{officeInfo.name}</p>
              <p>{officeInfo.registration}</p>
              <p className="font-medium">{officeInfo.number}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Office Address List */}
      <SectionWrapper variant="colored">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight-brand text-brand-neutral-dark text-center mb-16">
          Office Address List
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officeLocations.map((office, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-brand-primary/10 p-2 rounded-lg mr-3 flex-shrink-0">
                  <MapPin className="h-5 w-5 text-brand-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-neutral-dark leading-tight">{office.title}</h3>
              </div>
              <div className="space-y-2 text-gray-600 mb-4">
                <p className="font-medium text-brand-neutral-dark">{office.name}</p>
                <p className="text-sm leading-relaxed">{office.address}</p>
              </div>
              <div className="flex items-center text-brand-primary font-medium">
                <Phone className="h-4 w-4 mr-2" />
                <span>{office.phone}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Company Documents */}
      <SectionWrapper variant="white">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight-brand text-brand-neutral-dark mb-12">
            Company Documents
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {documents.map((doc, index) => (
              <button
                key={index}
                className="bg-brand-primary hover:bg-brand-primary-dark text-white px-8 py-4 rounded-md font-medium flex items-center space-x-3 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-xl">{doc.icon}</span>
                <span>{doc.name}</span>
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="bg-brand-neutral-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>020 7123 1234</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contact@domain.com</span>
            </div>
            <a href="#" className="hover:text-brand-primary transition-colors duration-200">Terms of Use</a>
            <a href="#" className="hover:text-brand-primary transition-colors duration-200">Data Privacy</a>
            <a href="#" className="hover:text-brand-primary transition-colors duration-200">Modern Slavery Statement</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;