import React from 'react';

interface ChecklistProps {
  items: string[];
}

const Checklist: React.FC<ChecklistProps> = ({ items }) => {
  return (
    <ul className="list-none p-0 my-6">
      {items.map((item, index) => (
        <li 
          key={index} 
          className="relative pl-8 mb-3 before:content-['✓'] before:absolute before:left-0 before:text-secondary before:font-bold"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Checklist; 