import React from 'react';
import other from '../assets/other';

function OtherContentPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">علوم أخرى</h1>

      <ul className="space-y-3">
        {other.map((item, index) => (
          <li key={index} className="p-3 border border-gray-200 rounded-md">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-bold"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OtherContentPage;
