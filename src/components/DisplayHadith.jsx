import React, { memo, useState, useCallback, useMemo, useEffect } from 'react';
import Pagination from './pagination/Pagination';
import { useGlobalContext } from './context';
import { getId } from '../assets/functions';
import { VideoModal } from './VideoModal';
import { NavLink } from 'react-router-dom';

const PAGE_SIZE = 9;

const DisplayHadith = () => {
  const { hadith, selectedJuz, setSelectedJuz } = useGlobalContext();
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [videoStartTime, setVideoStartTime] = useState(null);

  // Get unique juz values for mobile dropdown - updated to sort by juzNo
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

  // Get books based on selected juz
  const books = useMemo(() => {
    const filteredByJuz = selectedJuz
      ? hadith.filter((item) => item.juz === selectedJuz)
      : hadith;

    const uniqueBooks = [...new Set(filteredByJuz.map((item) => item.book))];
    return uniqueBooks;
  }, [hadith, selectedJuz]);

  // Set initial book after books are loaded - modified to handle all juzes
  useEffect(() => {
    if (books.length > 0 && !selectedBook) {
      // Simply take the first book in the filtered list
      setSelectedBook(books[0]);
    } else if (
      books.length > 0 &&
      selectedBook &&
      !books.includes(selectedBook)
    ) {
      // If current book is not in the new juz's book list, reset to first book
      setSelectedBook(books[0]);
    }
  }, [books, selectedBook]);

  // Filter hadith based on selected juz and book
  const filteredHadith = useMemo(() => {
    let filtered = [...hadith];

    if (selectedJuz) {
      filtered = filtered.filter((item) => item.juz === selectedJuz);
    }

    if (selectedBook) {
      filtered = filtered.filter((item) => item.book === selectedBook);
    }

    return filtered;
  }, [hadith, selectedJuz, selectedBook]);

  // Calculate pagination
  const currentHadithData = useMemo(() => {
    const indexOfLastItem = currentPage * PAGE_SIZE;
    const indexOfFirstItem = indexOfLastItem - PAGE_SIZE;
    return filteredHadith.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredHadith, currentPage]);

  // Modified function to handle juz change better
  const handleJuzChange = useCallback(
    (juz) => {
      setSelectedJuz(juz);
      // Always reset book selection when changing juz
      setSelectedBook(null);
      setCurrentPage(1);
    },
    [setSelectedJuz]
  );

  const handleBookChange = useCallback((book) => {
    setSelectedBook(book);
    setCurrentPage(1);
  }, []);

  // Extract time parameter from URL (if any)
  const extractTimeParameter = useCallback((url) => {
    if (!url) return null;

    // Check for t parameter in the format: t=123 or t=2m30s or feature=shared&t=123
    const timeRegex = /[?&]t=([0-9hms]+)/;
    const matches = url.match(timeRegex);

    if (matches && matches[1]) {
      return matches[1];
    }
    return null;
  }, []);

  const handleVideoPlay = useCallback(
    (videoId, url) => {
      setPlayingVideoId(videoId);
      setVideoStartTime(extractTimeParameter(url));
    },
    [extractTimeParameter]
  );

  const handleCloseVideo = useCallback(() => {
    setPlayingVideoId(null);
    setVideoStartTime(null);
  }, []);

  return (
    <div className="w-full max-w-full overflow-hidden xxs:px-1 xs:px-2 sm:px-4">
      <div className="max-w-[95vw] mx-auto">
        {/* Hadith Intro Link - updated to match DisplayLinks style */}
        <div className="mb-6 flex justify-center">
          <NavLink
            to="/hadith-intro"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center py-2 px-4 bg-green-700 text-white rounded-lg shadow-md font-bold'
                : 'flex items-center py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 font-bold'
            }
          >
            مقدمة شرح صحيح البخاري
          </NavLink>
        </div>

        {/* Juz Selection Dropdown (only visible on small screens) */}
        <div className="mb-4 block sm:hidden">
          <label
            htmlFor="juz-select-mobile"
            className="block mb-2 text-lg font-medium text-right"
          >
            اختر الجزء:
          </label>
          <select
            id="juz-select-mobile"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            value={selectedJuz || ''}
            onChange={(e) => handleJuzChange(e.target.value || null)}
          >
            {juzOptions.map((juz) => (
              <option key={`juz-mobile-${juz}`} value={juz}>
                {juz}
              </option>
            ))}
          </select>
        </div>

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
                        {/* Clicking the video area opens the modal */}
                        <button
                          onClick={() => handleVideoPlay(videoId, item.url)}
                          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity"
                        >
                          <svg
                            className="w-16 h-16 text-white"
                            viewBox="0 0 24 24"
                          >
                            <path fill="currentColor" d="M8 5v14l11-7z" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <div className="relative pt-[56.25%] bg-gray-200">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                          لا يوجد فيديو
                        </div>
                      </div>
                    )}

                    <div className="p-3 flex flex-col flex-grow">
                      {/* Book name - now positioned at the top consistently */}
                      <p className="text-sm text-gray-600 font-bold mb-2 pb-1 border-b border-gray-300">
                        {item.book}
                      </p>

                      {/* Bab title with min-height to ensure consistent spacing */}
                      <div className="min-h-[60px] mb-2">
                        <h4 className="text-base font-semibold text-green-700">
                          {item.bab}
                        </h4>
                      </div>

                      {item.url && item.url !== 'TBA' ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto py-2 px-3 bg-green-800 text-white rounded hover:bg-green-600 transition duration-300 text-center text-sm w-full block font-bold"
                        >
                          مشاهدة الحديث
                        </a>
                      ) : (
                        <span className="mt-auto py-2 px-3 bg-yellow-500 text-white rounded text-center text-sm font-bold">
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
            <p className="text-gray-500 mt-2">الرجاء اختيار فئة أخرى</p>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {playingVideoId && (
        <VideoModal
          videoId={playingVideoId}
          startTime={videoStartTime}
          onClose={handleCloseVideo}
        />
      )}
    </div>
  );
};

export default memo(DisplayHadith);
