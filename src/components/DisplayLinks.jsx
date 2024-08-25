import React, { useState, useMemo, useEffect } from 'react';
import OneLink from './OneLink';
import { getId } from '../assets/functions';
import Pagination from './pagination/Pagination';
import Search from './Search';
import playlists from '../assets/playlists';
import { useGlobalContext } from './context';

let PageSize = 9;

const DisplayLinks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { setCurrentLinksData, links, searchTerm, setSearchTerm } =
    useGlobalContext();

  const filteredLinks = useMemo(() => {
    let trimmedSearchTerm = String(searchTerm).trim().toLowerCase();

    // Remove "سورة" or "سوره" from the beginning of the search term
    trimmedSearchTerm = trimmedSearchTerm.replace(/^(سورة|سوره)\s*/, '');

    if (!trimmedSearchTerm) return links;

    return links.filter((link) => {
      const normalizedSura = String(link.sura).toLowerCase();
      // Remove diacritics and normalize Arabic characters
      const normalizedSearchTerm = trimmedSearchTerm
        .replace(/[\u0610-\u061A\u064B-\u065F\u0670]/g, '')
        .replace(/[أإآا]/g, 'ا')
        .replace(/[ىي]/g, 'ي')
        .replace(/ة/g, 'ه');
      const normalizedSuraWithoutDiacritics = normalizedSura
        .replace(/[\u0610-\u061A\u064B-\u065F\u0670]/g, '')
        .replace(/[أإآا]/g, 'ا')
        .replace(/[ىي]/g, 'ي')
        .replace(/ة/g, 'ه');

      return normalizedSuraWithoutDiacritics.includes(normalizedSearchTerm);
    });
  }, [links, searchTerm]);

  const currentLinksData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filteredLinks.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredLinks]);

  useEffect(() => {
    setCurrentLinksData(currentLinksData);
  }, [currentLinksData, setCurrentLinksData]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      {filteredLinks.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-2 md:gap-4">
            {currentLinksData.map((link, index) => {
              const videoId = getId(link.url);
              const thumbSRC = `https://www.youtube.com/embed/${videoId}`;
              return <OneLink key={index} thumbSRC={thumbSRC} link={link} />;
            })}
          </div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={filteredLinks.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">لا توجد نتائج للبحث</p>
          <p className="text-gray-500 mt-2">جرب البحث بكلمات مختلفة</p>
        </div>
      )}
    </>
  );
};

export default DisplayLinks;
