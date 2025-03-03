import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
  return (
    <div className="italic my-8 p-6 bg-light-bg border-l-4 border-primary rounded-r">
      <p className="mb-4">{quote}</p>
      <p className="font-bold not-italic mt-4">— {author}</p>
    </div>
  );
};

export default Testimonial; 