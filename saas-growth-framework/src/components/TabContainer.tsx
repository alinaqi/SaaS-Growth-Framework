import React, { useState, ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabContainerProps {
  tabs: Tab[];
  defaultActiveTab?: string;
  className?: string;
}

const TabContainer: React.FC<TabContainerProps> = ({ 
  tabs, 
  defaultActiveTab,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0].id);

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`py-3 px-5 rounded-lg font-bold transition-all duration-300 text-sm md:text-base whitespace-nowrap
              ${activeTab === tab.id 
                ? 'bg-primary-dark text-light-bg border-2 border-primary-dark shadow-md' 
                : 'bg-light-bg text-primary border-2 border-primary hover:bg-primary hover:text-light-bg'
              }`}
            onClick={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div>
        {tabs.map((tab) => (
          <div 
            key={tab.id} 
            className={activeTab === tab.id ? 'block' : 'hidden'}
            role="tabpanel"
            aria-labelledby={tab.id}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContainer; 