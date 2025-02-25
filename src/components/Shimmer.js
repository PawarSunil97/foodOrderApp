import React from 'react';

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
      {/* Shimmer Cards */}
      {[...Array(20)].map((_, index) => (
        <div
          key={index}
          className="h-60 bg-gray-200 rounded-lg relative overflow-hidden animate-pulse"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
