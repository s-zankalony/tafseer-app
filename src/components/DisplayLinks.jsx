import React, { useState, useMemo } from 'react';
import OneLink from './OneLink';
import { getId } from '../assets/functions';
import Pagination from './pagination/Pagination';

let PageSize = 9;

const DisplayLinks = ({ links }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentLinksData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return links.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
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
        totalCount={links.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default DisplayLinks;
