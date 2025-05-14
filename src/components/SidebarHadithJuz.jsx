import { memo, useCallback } from 'react';
import { useGlobalContext } from './context';

const SidebarHadithJuz = () => {
  const { hadith, setSelectedJuz, selectedJuz } = useGlobalContext();

  // Get unique juz values
  const juzOptions = [...new Set(hadith.map((item) => item.juz))].sort();

  const handleJuzClick = useCallback(
    (juz) => {
      setSelectedJuz(juz);
    },
    [setSelectedJuz]
  );

  if (!juzOptions || juzOptions.length === 0) {
    return (
      <div className="text-gray-400 text-center mt-4 text-sm font-bold">
        لا توجد أجزاء متاحة
      </div>
    );
  }

  return (
    <div className="space-y-2 mt-4">
      <h3 className="text-lg font-bold text-green-800 mb-4">اختر الجزء:</h3>
      <ul className="space-y-2 font-bold">
        <li key="all-juz">
          <button
            onClick={() => handleJuzClick(null)}
            className={`flex w-full items-center p-2 ${
              selectedJuz === null
                ? 'text-green-100 bg-green-700'
                : 'text-green-700'
            } rounded-lg hover:bg-gray-100 group cursor-pointer font-bold`}
          >
            <span>جميع الأجزاء</span>
          </button>
        </li>
        {juzOptions.map((juz) => (
          <li key={juz}>
            <button
              onClick={() => handleJuzClick(juz)}
              className={`flex w-full items-center p-2 ${
                selectedJuz === juz
                  ? 'text-green-100 bg-green-700'
                  : 'text-green-700'
              } rounded-lg hover:bg-gray-100 group cursor-pointer font-bold`}
            >
              <span>{juz}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(SidebarHadithJuz);
