import React from 'react';
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

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="w-full px-2 sm:px-4">
      {' '}
      {/* Reduced padding */}
      <Search onSearch={handleSearch} />
      {filteredLinks.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 my-4">
            {' '}
            {/* Reduced gap */}
            {currentLinksData.map((link) => {
              const videoId = getId(link.url);
              const thumbSRC = `https://www.youtube.com/embed/${videoId}`;
              return (
                <div key={link.id} className="w-full">
                  {' '}
                  {/* Removed max-width constraint */}
                  <OneLink thumbSRC={thumbSRC} link={link} />
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex justify-center">
            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={filteredLinks.length}
              pageSize={PAGE_SIZE}
              onPageChange={setCurrentPage}
            />
          </div>
        </>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">لا توجد نتائج للبحث</p>
          <p className="text-gray-500 mt-2">جرب البحث بكلمات مختلفة</p>
        </div>
      )}
    </div>
  );
};

export default DisplayLinks;
