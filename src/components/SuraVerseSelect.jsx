import React from 'react';

const SuraVerseSelect = ({
  links,
  selectedSura,
  selectedVerse,
  onSuraChange,
  onVerseChange,
}) => {
  // Get unique suras and sort by id
  const suras = React.useMemo(() => {
    if (!links || links.length === 0) return [];

    // Create map of suras with their first occurrence id
    const suraMap = new Map();
    links.forEach((link) => {
      if (!suraMap.has(link.sura)) {
        suraMap.set(link.sura, Number(link.id));
      }
    });

    // Get unique suras and sort by their ids
    return [...new Set(links.map((link) => link.sura))].sort(
      (a, b) => suraMap.get(a) - suraMap.get(b)
    );
  }, [links]);

  // Get verses for selected sura
  const verses = React.useMemo(() => {
    if (!selectedSura) return [];
    return [
      ...new Set(
        links
          .filter((link) => link.sura === selectedSura)
          .map((link) => link.verse)
      ),
    ];
  }, [links, selectedSura]);

  return (
    <div className="w-full max-w-4xl mx-auto my-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center bg-white p-4 rounded-lg shadow-md">
        <select
          className="w-full sm:w-1/3 p-3 text-lg text-gray-800 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 rtl"
          value={selectedSura || ''}
          onChange={(e) => onSuraChange(e.target.value || null)}
        >
          <option value="">اختر السورة</option>
          {suras.map((sura) => (
            <option key={sura} value={sura} className="text-gray-800">
              سورة {sura}
            </option>
          ))}
        </select>

        <select
          className={`w-full sm:w-1/3 p-3 text-lg text-gray-800 bg-white border border-gray-300 rounded-lg rtl
            ${
              !selectedSura
                ? 'cursor-not-allowed opacity-50'
                : 'focus:ring-2 focus:ring-green-500 focus:border-green-500'
            }`}
          value={selectedVerse || ''}
          onChange={(e) => onVerseChange(e.target.value || null)}
          disabled={!selectedSura}
        >
          <option value="">اختر الآية</option>
          {verses.map((verse) => (
            <option key={verse} value={verse} className="text-gray-800">
              {verse}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SuraVerseSelect;
