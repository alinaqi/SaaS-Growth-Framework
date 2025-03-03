import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import components here
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ColdOutboundPage from './pages/ColdOutboundPage';
import ContentMarketingPage from './pages/ContentMarketingPage';
import SEOPage from './pages/SEOPage';
import SocialMediaPage from './pages/SocialMediaPage';
import PartnershipsPage from './pages/PartnershipsPage';
import ViralPage from './pages/ViralPage';
import EventsPage from './pages/EventsPage';
import PLGPage from './pages/PLGPage';
import PRPage from './pages/PRPage';
import FullFrameworkPage from './pages/FullFrameworkPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cold-outbound" element={<ColdOutboundPage />} />
          <Route path="content-marketing" element={<ContentMarketingPage />} />
          <Route path="seo" element={<SEOPage />} />
          <Route path="social-media" element={<SocialMediaPage />} />
          <Route path="partnerships" element={<PartnershipsPage />} />
          <Route path="viral" element={<ViralPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="plg" element={<PLGPage />} />
          <Route path="pr" element={<PRPage />} />
          <Route path="full-framework" element={<FullFrameworkPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
