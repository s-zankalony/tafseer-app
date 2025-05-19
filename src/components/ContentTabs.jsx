import React, { useState, useEffect } from 'react';
import DisplayLinks from './DisplayLinks';
import DisplayHadith from './DisplayHadith';
import OtherContentPage from './OtherContentPage';
import { useGlobalContext } from './context';

const ContentTabs = () => {
  const { setActiveTab, activeTab } = useGlobalContext();
  const [localActiveTab, setLocalActiveTab] = useState(activeTab);

  // Sync with context when component mounts or activeTab changes
  useEffect(() => {
    setLocalActiveTab(activeTab);
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setLocalActiveTab(tab);
    setActiveTab(tab);
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
          <li className="mx-2">
            <button
              className={`inline-block p-3 px-6 border-b-2 rounded-t-lg ${
                localActiveTab === 'other'
                  ? 'text-green-600 border-green-600 font-bold'
                  : 'text-gray-700 border-transparent hover:text-gray-600 hover:border-gray-300 font-bold'
              }`}
              onClick={() => handleTabChange('other')}
            >
              علوم أخرى
            </button>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        {localActiveTab === 'tafseer' && <DisplayLinks />}
        {localActiveTab === 'hadith' && <DisplayHadith />}
        {localActiveTab === 'other' && <OtherContentPage />}
      </div>
    </div>
  );
};

export default ContentTabs;
