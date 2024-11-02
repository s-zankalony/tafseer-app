import React, { memo, useCallback } from 'react';
import OneLink from './OneLink';
import Pagination from './pagination/Pagination';
import Search from './Search';
import { useGlobalContext } from './context';
import { getId } from '../assets/functions';

const PAGE_SIZE = 9;

const DisplayLinks = () => {
  const {
    filteredLinks,
    currentLinksData,
    currentPage,
    setCurrentPage,
    setSearchTerm,
  } = useGlobalContext();

  const handleSearch = useCallback(
    (term) => {
      setSearchTerm(term);
      setCurrentPage(1); // Reset to first page on new search
    },
    [setSearchTerm, setCurrentPage]
  );

  return (
    <div className="w-full px-2 sm:px-4">
      <Search onSearch={handleSearch} />
      {filteredLinks.length > 0 ? (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 my-4 auto-rows-fr">
            {currentLinksData.map((link) => {
              const videoId = getId(link.url);
              const thumbSRC = `https://www.youtube.com/embed/${videoId}`;
              return (
                <div key={link.id} className="h-full">
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
          <p className="text-xl text-gray-600">لا توجد نتائج للبحث</p>
          <p className="text-gray-500 mt-2">جرب البحث بكلمات مختلفة</p>
        </div>
      )}
    </div>
  );
};

export default memo(DisplayLinks);
