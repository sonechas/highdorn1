import React from 'react';
import { Mail, Phone, Linkedin, Users, Award, Target } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const PeoplePage: React.FC = () => {
  const team = [
    {
      name: 'James Freshwater',
      position: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading the Freshwater Group with over 20 years of experience in property management and investment.',
      email: 'j.freshwater@highdorn.co.uk',
      phone: '+44 20 7123 1234'
    },
    {
      name: 'Sarah Mitchell',
      position: 'Head of Property Management',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Overseeing our extensive property portfolio with expertise in both commercial and residential management.',
      email: 's.mitchell@highdorn.co.uk',
      phone: '+44 20 7123 1235'
    },
    {
      name: 'David Thompson',
      position: 'Regional Director - London',
      image: 'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Managing our London operations and driving expansion across key metropolitan areas.',
      email: 'd.thompson@highdorn.co.uk',
      phone: '+44 20 7123 1236'
    },
    {
      name: 'Emma Richardson',
      position: 'Head of Finance',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Financial strategist with expertise in property investment and pension fund management.',
      email: 'e.richardson@highdorn.co.uk',
      phone: '+44 20 7123 1237'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Development',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Leading our property development initiatives and new acquisition strategies.',
      email: 'm.chen@highdorn.co.uk',
      phone: '+44 20 7123 1238'
    },
    {
      name: 'Lisa Parker',
      position: 'Regional Director - Midlands',
      image: 'https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Expanding our presence in the Midlands region with focus on sustainable growth.',
      email: 'l.parker@highdorn.co.uk',
      phone: '+44 121 313 2255'
    }
  ];

  const stats = [
    { icon: Users, label: 'Team Members', value: '50+' },
    { icon: Award, label: 'Years Experience', value: '25+' },
    { icon: Target, label: 'Properties Managed', value: '1000+' }
  ];

  return (
    <div className="min-h-screen bg-white pt-16 animate-fade-in-up">
      {/* Header */}
      <SectionWrapper variant="white">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight-brand text-brand-neutral-dark mb-4">
            Our People
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated professionals who drive our success and deliver exceptional service to our clients
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-brand-secondary-bg rounded-lg p-8 text-center transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-brand-primary/10 p-4 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-brand-primary" />
              </div>
              <div className="text-3xl font-black text-brand-neutral-dark mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team Grid */}
      <SectionWrapper variant="colored">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-200">{member.position}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>

                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 hover:text-brand-primary transition-colors duration-200">
                    <Mail className="h-4 w-4 mr-3" />
                    <a href={`mailto:${member.email}`} className="text-sm">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600 hover:text-brand-primary transition-colors duration-200">
                    <Phone className="h-4 w-4 mr-3" />
                    <a href={`tel:${member.phone}`} className="text-sm">
                      {member.phone}
                    </a>
                  </div>
                </div>

                {/* LinkedIn Button */}
                <button className="w-full mt-6 bg-brand-primary text-white py-3 rounded-md font-medium hover:bg-brand-primary-dark transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                  <Linkedin className="h-4 w-4" />
                  <span>Connect</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper variant="white">
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team. Explore career opportunities with us.
            </p>
            <button className="bg-white text-brand-primary px-8 py-4 rounded-md font-bold hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
              View Careers
            </button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PeoplePage;