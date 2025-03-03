import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-2 text-primary">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-gray-600">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionTitle; 