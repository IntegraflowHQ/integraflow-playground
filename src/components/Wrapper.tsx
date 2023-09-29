import React from 'react';

export const Wrapper = () => {
  return (
    <div
      className="h-screen w-full"
      style={{
        backgroundImage: `url('/hero-section.png')`,
        backgroundPosition: 'center',
        filter: 'blur(20px)',
      }}
    ></div>
  );
};
