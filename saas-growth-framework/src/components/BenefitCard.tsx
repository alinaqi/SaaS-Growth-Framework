import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-primary">
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default BenefitCard; 