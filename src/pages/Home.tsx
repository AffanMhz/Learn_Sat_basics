import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'Rasterization Fundamentals',
      description: 'Learn the basics of converting vector data to raster format, understanding pixel grids, and spatial resolution.',
      icon: '🗺️',
      link: '/rasterization'
    },
    {
      title: 'Satellite Data Processing',
      description: 'Comprehensive guide to working with satellite imagery, data formats, and preprocessing techniques.',
      icon: '🛰️',
      link: '/satellite-data'
    },
    {
      title: 'Machine Learning Applications',
      description: 'Explore how ML and AI are revolutionizing satellite data analysis and geospatial intelligence.',
      icon: '🤖',
      link: '/machine-learning'
    },
    {
      title: 'QGIS Tutorials',
      description: 'Step-by-step guides for using QGIS in satellite data analysis and visualization.',
      icon: '🌍',
      link: '/qgis'
    },
    {
      title: 'ISRO Hackathon Guide',
      description: 'Specific preparation and problem-solving strategies for ISRO hackathon challenges.',
      icon: '🚀',
      link: '/isro-hackathon'
    },
    {
      title: 'Preparation Resources',
      description: 'Tools, datasets, and practice problems to enhance your geospatial analysis skills.',
      icon: '📚',
      link: '/preparation'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Master Satellite Data Analysis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto animate-slide-up">
              Your comprehensive guide to satellite data processing, rasterization techniques, 
              and geospatial analysis for ISRO hackathons and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/rasterization"
                className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Start Learning
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/isro-hackathon"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                ISRO Hackathon Guide
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="relative">
          <svg viewBox="0 0 1440 120" className="w-full h-12 fill-current text-gray-50">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basic concepts to advanced techniques, our comprehensive guides cover all aspects 
              of satellite data analysis and geospatial processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                to={feature.link}
                className="section-card group hover:scale-105 transform transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:animate-bounce-gentle">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center text-primary-600 group-hover:text-primary-700">
                    <span className="font-medium">Learn More</span>
                    <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Satellite Data Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the impact and applications of satellite data in today's world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">4,000+</div>
              <div className="text-gray-600">Active Satellites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">150TB</div>
              <div className="text-gray-600">Daily Data Collection</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Application Domains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-600">Earth Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Learning Video */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎥 Start Your Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch this comprehensive introduction to satellite data analysis and geospatial technologies
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  🌍 Introduction to Remote Sensing
                </h3>
                <p className="text-gray-700 mb-6">
                  A comprehensive overview of satellite remote sensing, its applications, and how to get started with geospatial data analysis
                </p>
                <a 
                  href="https://www.youtube.com/watch?v=JKHoHmO4-YM&list=PLd2GNPokZWAOdGzUDiaaQipuPj1WoeBwQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-lg font-medium"
                >
                  <span className="mr-3">▶️</span>
                  Watch Introduction (25 min)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Dive Deep?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Start your journey into satellite data analysis with our comprehensive tutorials 
            and hands-on examples.
          </p>
          <Link
            to="/preparation"
            className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Get Started Today
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
