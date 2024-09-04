import React from 'react';
import tafseerIntro from '../assets/tafseerIntro.js';
import { getId } from '../assets/functions.jsx';

const TafseerIntroPage = () => {
  const introData = tafseerIntro[0]; // There's only one item in the array
  const videoId = getId(introData.url); // Extract video ID from URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-50 to-green-100 text-green-800 text-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-green-600">
          مقدمة التفسير
        </h1>
        {/* <h2 className="text-2xl mb-6 text-green-500">{introData.sura}</h2> */}
        <div className="relative group cursor-pointer mb-6">
          <img
            src={thumbnailUrl}
            alt="Video Thumbnail"
            className="w-full rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M8 5v10l7-5-7-5z" />
            </svg>
          </div>
        </div>
        <a
          href={introData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          شاهد المقدمة
        </a>
      </div>
    </div>
  );
};

export default TafseerIntroPage;
