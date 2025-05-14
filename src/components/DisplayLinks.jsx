import React, { memo, useState, useCallback, useEffect } from 'react';
import OneLink from './OneLink';
import Pagination from './pagination/Pagination';
import SuraVerseSelect from './SuraVerseSelect';
import { useGlobalContext } from './context';
import { getId } from '../assets/functions';
import { NavLink } from 'react-router-dom';

const PAGE_SIZE = 9;

const DisplayLinks = () => {
  const { links, updateSelectedSura, updateVisibleSuras } = useGlobalContext();
  const [selectedSura, setSelectedSura] = useState(null);
  const [selectedVerse, setSelectedVerse] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter links based on selected sura and verse
  const filteredLinks = React.useMemo(() => {
    return links.filter((link) => {
      if (!selectedSura) return true;
      if (!selectedVerse) return link.sura === selectedSura;
      return link.sura === selectedSura && link.verse === selectedVerse;
    });
  }, [links, selectedSura, selectedVerse]);

  // Calculate pagination
  const currentLinksData = React.useMemo(() => {
    const indexOfLastLink = currentPage * PAGE_SIZE;
    const indexOfFirstLink = indexOfLastLink - PAGE_SIZE;
    return filteredLinks.slice(indexOfFirstLink, indexOfLastLink);
  }, [filteredLinks, currentPage]);

  // Update the visible suras when currentLinksData changes
  useEffect(() => {
    const uniqueSuras = [...new Set(currentLinksData.map(link => link.sura))];
    updateVisibleSuras(uniqueSuras);
  }, [currentLinksData, updateVisibleSuras]);

  const handleSuraChange = useCallback(
    (sura) => {
      setSelectedSura(sura);
      setSelectedVerse(null);
      setCurrentPage(1);
      updateSelectedSura(sura);
    },
    [updateSelectedSura]
  );

  const handleVerseChange = useCallback((verse) => {
    setSelectedVerse(verse);
    setCurrentPage(1);
  }, []);

  return (
    <div className="w-full max-w-full overflow-hidden xxs:px-1 xs:px-2 sm:px-4">
      <div className="max-w-[95vw] mx-auto">
        {/* Added Introduction Link */}
        <div className="mb-6 flex justify-center">
          <NavLink
            to="/tafseer-intro"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center py-2 px-4 bg-green-700 text-white rounded-lg shadow-md font-bold'
                : 'flex items-center py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 font-bold'
            }
          >
            مقدمة تفسير القرآن
          </NavLink>
        </div>

        <SuraVerseSelect
          links={links}
          selectedSura={selectedSura}
          selectedVerse={selectedVerse}
          onSuraChange={handleSuraChange}
          onVerseChange={handleVerseChange}
        />

        {filteredLinks.length > 0 ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 xxs:gap-2 sm:gap-4 my-4 auto-rows-fr mx-auto">
              {currentLinksData.map((link) => {
                const videoId = getId(link.url);
                const thumbSRC = `https://www.youtube.com/embed/${videoId}`;
                return (
                  <div key={link.id} className="h-full w-full min-w-0">
                    <OneLink thumbSRC={thumbSRC} link={link} />
                  </div>
                );
              })}
            </div>
            <Pagination
              className="pagination-bar mt-6"
              currentPage={currentPage}
              totalCount={filteredLinks.length}
              pageSize={PAGE_SIZE}
              onPageChange={setCurrentPage}
            />
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">لا توجد نتائج</p>
            <p className="text-gray-500 mt-2">الرجاء اختيار سورة و آية أخرى</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(DisplayLinks);
