import React from 'react';

const HeartShape = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-1/2 w-10 h-10 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 left-0 w-10 h-10 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 left-0 w-20 h-20 bg-red-500 transform rotate-45"></div>
      </div>
    </div>
  );
};

export default HeartShape;
