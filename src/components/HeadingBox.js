import React from 'react';

const HeadingBox = ({ children }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
      {children}
    </div>
  );
}

export default HeadingBox;
