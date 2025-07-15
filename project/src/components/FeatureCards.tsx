import React from 'react';
import { Home, Sparkles } from 'lucide-react';

const FeatureCards: React.FC = () => {
  const features = [
    {
      title: 'Premium Properties',
      description: 'Explore our collection of handpicked luxury properties in prime locations.',
      image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Home,
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Modern Living',
      description: 'Experience contemporary design and premium amenities in every property.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Sparkles,
      gradient: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Image */}
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                  <div className="bg-white bg-opacity-20 p-4 rounded-2xl mb-6 group-hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-center group-hover:scale-105 transition-transform duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-center leading-relaxed text-blue-100 group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Call to Action */}
                  <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-50">
                    Learn More
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white border-opacity-30 rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;