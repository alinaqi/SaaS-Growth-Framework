import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">SaaS Growth Framework</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            A comprehensive framework to help SaaS companies optimize their growth strategies
          </p>
          <div className="mt-8">
            <Link 
              to="/full-framework" 
              className="inline-block bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors mx-2 mb-4"
            >
              View Full Framework
            </Link>
            <Link 
              to="/cold-outbound" 
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors mx-2 mb-4"
            >
              Explore Cold Outbound
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Growth Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Facebook Landing Pages', path: '/', icon: '🎯' },
              { title: 'Cold Outbound', path: '/cold-outbound', icon: '✉️' },
              { title: 'Content Marketing', path: '/content-marketing', icon: '📝' },
              { title: 'SEO', path: '/seo', icon: '🔍' },
              { title: 'Social Media', path: '/social-media', icon: '🔄' },
              { title: 'Partnerships', path: '/partnerships', icon: '🤝' },
              { title: 'Viral & Referral', path: '/viral', icon: '📈' },
              { title: 'Events', path: '/events', icon: '📅' },
              { title: 'Product Led Growth', path: '/plg', icon: '🚀' },
              { title: 'PR & Media', path: '/pr', icon: '📰' },
            ].map((strategy, index) => (
              <Link 
                key={index} 
                to={strategy.path}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border-t-4 border-primary"
              >
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{strategy.title}</h3>
                <p className="text-gray-600">Explore strategies and tactics for {strategy.title.toLowerCase()}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Our framework provides proven strategies to help you scale your SaaS business.
          </p>
          <Link 
            to="/full-framework" 
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors text-lg"
          >
            View Complete Framework
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 