import React, { useState } from 'react';
import DisplayLinks from './DisplayLinks';
import DisplayHadith from './DisplayHadith';

const ContentTabs = () => {
  const [activeTab, setActiveTab] = useState('tafseer');

  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <ul className="flex flex-wrap justify-center -mb-px text-md font-medium text-center">
          <li className="mx-2">
            <button
              className={`inline-block p-3 px-6 border-b-2 rounded-t-lg ${
                activeTab === 'tafseer'
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-700 border-transparent hover:text-gray-600 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('tafseer')}
            >
              التفاسير
            </button>
          </li>
          <li className="mx-2">
            <button
              className={`inline-block p-3 px-6 border-b-2 rounded-t-lg ${
                activeTab === 'hadith'
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-700 border-transparent hover:text-gray-600 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('hadith')}
            >
              الأحاديث
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        {activeTab === 'tafseer' ? <DisplayLinks /> : <DisplayHadith />}
      </div>
    </div>
  );
};

export default ContentTabs;
