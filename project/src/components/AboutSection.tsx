import React, { useRef, useEffect, useState } from 'react';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Building2, value: '1000+', label: 'Properties Managed', color: 'from-blue-500 to-blue-600' },
    { icon: Users, value: '50+', label: 'Expert Team Members', color: 'from-purple-500 to-purple-600' },
    { icon: Award, value: '25+', label: 'Years of Excellence', color: 'from-green-500 to-green-600' },
    { icon: TrendingUp, value: '£2.8B', label: 'Assets Under Management', color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <div ref={sectionRef} className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-blue-700 font-semibold text-sm">About Highdorn Group</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Redefining Property
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Management Excellence
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative">
                <div className={`bg-gradient-to-r ${stat.color} p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium leading-tight">{stat.label}</div>
              </div>
              
              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Highdorn Group is a premier property management organization that expertly manages both commercial and 
                residential properties across the UK. Under the stewardship of the Freshwater family, we've built a 
                reputation for excellence and innovation in property management.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Our portfolio primarily consists of properties owned by two distinguished investment groups - 
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 mx-1 relative group">
                  Daejan Holdings
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a> 
                and 
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 mx-1 relative group">
                  Centremanor Group
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>, 
                both under the Freshwater family's ownership.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Together, these entities form what is colloquially known as the 
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 mx-1 relative group">
                  Freshwater Group
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>, 
                representing a legacy of trust and excellence in property investment and management.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 px-6 py-3 rounded-full border border-blue-200">
                <span className="text-blue-700 font-semibold text-sm">Commercial Properties</span>
              </div>
              <div className="bg-purple-50 px-6 py-3 rounded-full border border-purple-200">
                <span className="text-purple-700 font-semibold text-sm">Residential Management</span>
              </div>
              <div className="bg-green-50 px-6 py-3 rounded-full border border-green-200">
                <span className="text-green-700 font-semibold text-sm">Investment Advisory</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Highdorn Group Office"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                    <div className="text-2xl font-bold mb-1">Freshwater House</div>
                    <div className="text-blue-200 text-sm">London Headquarters</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;