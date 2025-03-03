import React, { ReactNode } from 'react';

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg p-8 shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] ${className}`}>
      {title && <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>}
      {children}
    </div>
  );
};

export default Card; 