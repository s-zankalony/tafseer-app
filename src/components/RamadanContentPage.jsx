import React, { useState, useCallback, useEffect } from 'react';
import ramadan from '../assets/ramadan';
import { getId, getPlaylistId, getThumbnailUrl } from '../assets/functions';
import { VideoModal } from './VideoModal';

function RamadanContentPage() {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [playlistThumbnails, setPlaylistThumbnails] = useState({});

  const handleVideoPlay = useCallback((videoId) => {
    setPlayingVideoId(videoId);
  }, []);

  const handleCloseVideo = useCallback(() => {
    setPlayingVideoId(null);
  }, []);

  useEffect(() => {
    ramadan.forEach((item) => {
      const pid = getPlaylistId(item.url);
      const vid = getId(item.url);
      if (pid && !vid) {
        fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/playlist?list=${pid}&format=json`
        )
          .then((res) => res.json())
          .then((data) =>
            setPlaylistThumbnails((prev) => ({
              ...prev,
              [item.url]: data.thumbnail_url,
            }))
          )
          .catch((err) => console.error(err));
      }
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">مجالس رمضان</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ramadan.map((item, index) => {
          const videoId = getId(item.url);
          const playlistId = getPlaylistId(item.url);
          const thumbnailUrl = videoId
            ? getThumbnailUrl(item.url)
            : playlistId
            ? playlistThumbnails[item.url]
            : null;

          return (
            <div
              key={index}
              className="flex flex-col h-full bg-green-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {thumbnailUrl ? (
                <div className="relative pt-[56.25%]">
                  <img
                    src={thumbnailUrl}
                    alt={`Thumbnail for ${item.name}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                  />
                  <button
                    onClick={() => videoId && handleVideoPlay(videoId)}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity"
                  >
                    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="relative pt-[56.25%] bg-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    لا يوجد صورة مصغرة
                  </div>
                </div>
              )}

              <div className="p-3 flex flex-col flex-grow">
                <h4 className="text-base font-semibold text-green-700 mb-2">
                  {item.name}
                </h4>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto py-2 px-3 bg-green-800 text-white rounded hover:bg-green-600 transition duration-300 text-center text-sm font-bold"
                >
                  {playlistId ? 'مشاهدة قائمة التشغيل' : 'مشاهدة الفيديو'}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {playingVideoId && (
        <VideoModal videoId={playingVideoId} onClose={handleCloseVideo} />
      )}
    </div>
  );
}

export default RamadanContentPage;
