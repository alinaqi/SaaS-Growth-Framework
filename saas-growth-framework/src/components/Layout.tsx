import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBullseye, faEnvelope, faNewspaper, faMagnifyingGlass, 
  faShareNodes, faHandshake, faChartLine, faCalendar, 
  faRocket, faDiagramProject 
} from '@fortawesome/free-solid-svg-icons';

interface NavItemProps {
  to: string;
  icon: any;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, text }) => {
  return (
    <NavLink 
      to={to}
      className={({ isActive }) => 
        `flex items-center px-4 py-2 mr-1 no-underline font-semibold rounded-lg transition-all duration-300 ease-in-out
         bg-opacity-5 hover:bg-opacity-10 hover:-translate-y-0.5 hover:shadow-md ${
          isActive ? 'bg-primary text-white' : 'text-primary bg-primary'
        }`
      }
    >
      <FontAwesomeIcon icon={icon} className="mr-2 text-lg" />
      {text}
    </NavLink>
  );
};

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-light-bg text-text">
      <header className="bg-white shadow-sm sticky top-0 z-50 py-4">
        <div className="container mx-auto px-4">
          <nav>
            <h2 className="m-0">SaaS Growth Framework</h2>
            <div className="flex flex-wrap gap-1 mt-4">
              <NavItem to="/" icon={faBullseye} text="Facebook Landing Pages" />
              <NavItem to="/cold-outbound" icon={faEnvelope} text="Cold Outbound" />
              <NavItem to="/content-marketing" icon={faNewspaper} text="Content Marketing" />
              <NavItem to="/seo" icon={faMagnifyingGlass} text="SEO" />
              <NavItem to="/social-media" icon={faShareNodes} text="Social Media" />
              <NavItem to="/partnerships" icon={faHandshake} text="Partnerships" />
              <NavItem to="/viral" icon={faChartLine} text="Viral & Referral" />
              <NavItem to="/events" icon={faCalendar} text="Events" />
              <NavItem to="/plg" icon={faRocket} text="Product Led Growth" />
              <NavItem to="/pr" icon={faNewspaper} text="PR & Media" />
              <NavItem to="/full-framework" icon={faDiagramProject} text="Full Framework" />
            </div>
          </nav>
        </div>
      </header>
      
      <main>
        <Outlet />
      </main>
      
      <footer className="bg-primary text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <p>© 2025 LeanAI Ventures. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 