import React, { ReactNode } from 'react';

interface StepProps {
  number: number;
  title: string;
  description?: string;
  children?: ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, children }) => {
  return (
    <li className="relative pl-16 pb-8 pt-6 pr-6 mb-8 bg-white rounded-lg shadow-md">
      <div 
        className="absolute left-4 top-6 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold"
      >
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="mb-4">{description}</p>}
      {children}
    </li>
  );
};

export default Step; 