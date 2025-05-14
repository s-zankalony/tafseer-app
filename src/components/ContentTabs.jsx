import React, { useState, useEffect } from 'react';
import DisplayLinks from './DisplayLinks';
import DisplayHadith from './DisplayHadith';
import { useGlobalContext } from './context';

const ContentTabs = () => {
  const { setActiveTab } = useGlobalContext();
  const [localActiveTab, setLocalActiveTab] = useState('tafseer');

  // Update context when tab changes
  useEffect(() => {
    setActiveTab(localActiveTab);
  }, [localActiveTab, setActiveTab]);

  const handleTabChange = (tab) => {
    setLocalActiveTab(tab);
  };

  return (
    <div className="w-full">
      <div className="border-b border-gray-200">
        <ul className="flex flex-wrap justify-center -mb-px text-md font-bold text-center">
          <li className="mx-2">
            <button
              className={`inline-block p-3 px-6 border-b-2 rounded-t-lg ${
                localActiveTab === 'tafseer'
                  ? 'text-green-600 border-green-600 font-bold'
                  : 'text-gray-700 border-transparent hover:text-gray-600 hover:border-gray-300 font-bold'
              }`}
              onClick={() => handleTabChange('tafseer')}
            >
              تفسير القرآن
            </button>
          </li>
          <li className="mx-2">
            <button
              className={`inline-block p-3 px-6 border-b-2 rounded-t-lg ${
                localActiveTab === 'hadith'
                  ? 'text-green-600 border-green-600 font-bold'
                  : 'text-gray-700 border-transparent hover:text-gray-600 hover:border-gray-300 font-bold'
              }`}
              onClick={() => handleTabChange('hadith')}
            >
              شرح صحيح البخاري
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        {localActiveTab === 'tafseer' ? <DisplayLinks /> : <DisplayHadith />}
      </div>
    </div>
  );
};

export default ContentTabs;
