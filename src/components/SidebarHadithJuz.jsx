import { memo, useCallback, useMemo, useEffect } from 'react';
import { useGlobalContext } from './context';

const SidebarHadithJuz = () => {
  const { hadith, setSelectedJuz, selectedJuz } = useGlobalContext();

  // Get unique juz values and sort by juzNo
  const juzOptions = useMemo(() => {
    // Create a map of juz to juzNo
    const juzMap = new Map();

    // Collect all unique juz values with their juzNo
    hadith.forEach((item) => {
      if (!juzMap.has(item.juz)) {
        juzMap.set(item.juz, item.juzNo);
      }
    });

    // Convert to array and sort by juzNo (numerically)
    return [...juzMap.entries()]
      .sort((a, b) => Number(a[1]) - Number(b[1]))
      .map((entry) => entry[0]);
  }, [hadith]);

  // Set initial juz to "الجزء الأول" if it exists in options
  useEffect(() => {
    if (juzOptions.length > 0 && !selectedJuz) {
      const firstJuz =
        juzOptions.find((juz) => juz === 'الجزء الأول') || juzOptions[0];
      setSelectedJuz(firstJuz);
    }
  }, [juzOptions, selectedJuz, setSelectedJuz]);

  const handleJuzClick = useCallback(
    (juz) => {
      setSelectedJuz(juz);
    },
    [setSelectedJuz]
  );

  if (!juzOptions || juzOptions.length === 0) {
    return (
      <div className="text-gray-400 text-center mt-2 text-sm font-bold">
        لا توجد أجزاء متاحة
      </div>
    );
  }

  return (
    <div className="space-y-1 mt-2">
      <h3 className="text-lg font-bold text-green-800 mb-2 text-right">
        اختر الجزء:
      </h3>
      <ul className="space-y-1 font-bold">
        {/* All-juz option removed */}
        {juzOptions.map((juz) => (
          <li key={juz}>
            <button
              onClick={() => handleJuzClick(juz)}
              className={`flex w-full items-center py-1 px-2 ${
                selectedJuz === juz
                  ? 'text-green-100 bg-green-700 hover:bg-green-600'
                  : 'text-green-700 hover:bg-gray-100'
              } rounded-lg group cursor-pointer font-bold`}
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
