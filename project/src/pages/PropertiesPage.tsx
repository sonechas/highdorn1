import React from 'react';
import { MapPin, Bed, Bath, Square, Star } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const PropertiesPage: React.FC = () => {
  const properties = [
    {
      id: 1,
      title: 'Luxury Modern Villa',
      location: 'Kensington, London',
      price: '£2,500,000',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 4,
      baths: 3,
      sqft: 2500,
      rating: 4.9,
      type: 'For Sale'
    },
    {
      id: 2,
      title: 'Contemporary Penthouse',
      location: 'Chelsea, London',
      price: '£1,800,000',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 3,
      baths: 2,
      sqft: 1800,
      rating: 4.8,
      type: 'For Sale'
    },
    {
      id: 3,
      title: 'Georgian Townhouse',
      location: 'Mayfair, London',
      price: '£3,200,000',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 5,
      baths: 4,
      sqft: 3200,
      rating: 5.0,
      type: 'For Sale'
    },
    {
      id: 4,
      title: 'Modern Apartment',
      location: 'Canary Wharf, London',
      price: '£850,000',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 2,
      baths: 2,
      sqft: 1200,
      rating: 4.7,
      type: 'For Sale'
    },
    {
      id: 5,
      title: 'Victorian House',
      location: 'Notting Hill, London',
      price: '£2,100,000',
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 4,
      baths: 3,
      sqft: 2200,
      rating: 4.9,
      type: 'For Sale'
    },
    {
      id: 6,
      title: 'Riverside Apartment',
      location: 'Thames Side, London',
      price: '£1,200,000',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      beds: 2,
      baths: 2,
      sqft: 1400,
      rating: 4.8,
      type: 'For Sale'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16 animate-fade-in-up">
      {/* Header */}
      <SectionWrapper variant="white">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight-brand text-brand-neutral-dark mb-4">
            Premium Properties
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our exclusive collection of luxury properties in London's most prestigious locations
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={property.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-lg flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{property.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-brand-neutral-dark group-hover:text-brand-primary transition-colors duration-200">
                    {property.title}
                  </h3>
                  <span className="text-2xl font-bold text-brand-primary">
                    {property.price}
                  </span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Features */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{property.beds} beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{property.baths} baths</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{property.sqft} sqft</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 bg-brand-primary text-white py-3 rounded-md font-medium hover:bg-brand-primary-dark transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Call to Action */}
      <SectionWrapper variant="colored">
        <div className="text-center">
          <div className="bg-gradient-to-r from-brand-primary to-brand-primary-dark rounded-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Looking for Something Specific?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our expert team can help you find the perfect property that matches your unique requirements
            </p>
            <button className="bg-white text-brand-primary px-8 py-4 rounded-md font-bold hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg">
              Contact Our Experts
            </button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PropertiesPage;