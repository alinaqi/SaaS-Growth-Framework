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
            className={`py-3 px-5 bg-transparent border-2 border-primary rounded-lg font-bold transition-all duration-300 text-sm md:text-base whitespace-nowrap
              ${activeTab === tab.id 
                ? 'bg-primary text-white' 
                : 'text-primary hover:bg-primary hover:bg-opacity-10'
              }`}
            onClick={() => setActiveTab(tab.id)}
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
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabContainer; 