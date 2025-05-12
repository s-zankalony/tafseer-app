import React, { memo, useState, useCallback, useMemo } from 'react';
import Pagination from './pagination/Pagination';
import { useGlobalContext } from './context';
import { getId } from '../assets/functions';

const PAGE_SIZE = 9;

const DisplayHadith = () => {
  const { hadith } = useGlobalContext();
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique books for filter dropdown
  const books = useMemo(() => {
    const uniqueBooks = [...new Set(hadith.map((item) => item.book))];
    return uniqueBooks;
  }, [hadith]);

  // Filter hadith based on selected book
  const filteredHadith = useMemo(() => {
    return hadith.filter((item) => {
      if (!selectedBook) return true;
      return item.book === selectedBook;
    });
  }, [hadith, selectedBook]);

  // Calculate pagination
  const currentHadithData = useMemo(() => {
    const indexOfLastItem = currentPage * PAGE_SIZE;
    const indexOfFirstItem = indexOfLastItem - PAGE_SIZE;
    return filteredHadith.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredHadith, currentPage]);

  const handleBookChange = useCallback((book) => {
    setSelectedBook(book);
    setCurrentPage(1);
  }, []);

  return (
    <div className="w-full max-w-full overflow-hidden xxs:px-1 xs:px-2 sm:px-4">
      <div className="max-w-[95vw] mx-auto">
        {/* Book Selection Dropdown */}
        <div className="mb-4">
          <label
            htmlFor="book-select"
            className="block mb-2 text-lg font-medium"
          >
            اختر الكتاب:
          </label>
          <select
            id="book-select"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            value={selectedBook || ''}
            onChange={(e) => handleBookChange(e.target.value || null)}
          >
            <option key="all-books" value="">
              جميع الأحاديث
            </option>
            {books.map((book, index) => (
              <option key={`book-${index}-${book}`} value={book}>
                {book}
              </option>
            ))}
          </select>
        </div>

        {filteredHadith.length > 0 ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 xxs:gap-2 sm:gap-4 my-4 auto-rows-fr mx-auto">
              {currentHadithData.map((item, index) => {
                const videoId = item.url && getId(item.url);
                const thumbnailUrl = videoId
                  ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                  : null;

                return (
                  <div
                    key={item.id || `hadith-${index}`}
                    className="flex flex-col h-full bg-green-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    {thumbnailUrl ? (
                      <div className="relative pt-[56.25%]">
                        <img
                          src={thumbnailUrl}
                          alt={`Thumbnail for ${item.bab}`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                        />
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity"
                        >
                          <svg
                            className="w-16 h-16 text-white"
                            viewBox="0 0 24 24"
                          >
                            <path fill="currentColor" d="M8 5v14l11-7z" />
                          </svg>
                        </a>
                      </div>
                    ) : (
                      <div className="relative pt-[56.25%] bg-gray-200">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                          لا يوجد فيديو
                        </div>
                      </div>
                    )}

                    <div className="p-3 flex flex-col flex-grow">
                      <h4 className="text-base font-semibold text-green-700 mb-2">
                        {item.bab}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">{item.book}</p>
                      {item.url && item.url !== 'TBA' ? (
                        <a
                          target="_blank"
                          className="mt-auto py-2 px-3 bg-green-800 text-white rounded hover:bg-green-600 transition duration-300 text-center text-sm"
                          href={item.url}
                          rel="noopener noreferrer"
                        >
                          مشاهدة الحديث
                        </a>
                      ) : (
                        <span className="mt-auto py-2 px-3 bg-yellow-500 text-white rounded text-center text-sm">
                          سيتم إضافته قريباً
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <Pagination
              className="pagination-bar mt-6"
              currentPage={currentPage}
              totalCount={filteredHadith.length}
              pageSize={PAGE_SIZE}
              onPageChange={setCurrentPage}
            />
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">لا توجد نتائج</p>
            <p className="text-gray-500 mt-2">الرجاء اختيار كتاب آخر</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(DisplayHadith);
