import React from 'react';
import { biography } from '../assets/sheikhBiography';

const Biography = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-green-800 p-4">
      <div className="max-w-4xl w-full  shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div
            className="space-y-4 text-right"
            dangerouslySetInnerHTML={{ __html: biography }}
          />
        </div>
      </div>
    </div>
  );
};

export default Biography;
