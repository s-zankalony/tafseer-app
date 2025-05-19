import React, { useState, useEffect } from 'react';
import playlists from '../assets/playlists';
import { getId, getPlaylistId, getThumbnailUrl } from '../assets/functions';
import OtherContentPage from './OtherContentPage';

const Playlists = () => {
  const [activeTab, setActiveTab] = useState('tafseer');
  const [playlistThumbnails, setPlaylistThumbnails] = useState({});

  useEffect(() => {
    playlists.forEach((playlist) => {
      const pid = getPlaylistId(playlist.url);
      const vid = getId(playlist.url);
      if (pid && !vid) {
        fetch(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/playlist?list=${pid}&format=json`
        )
          .then((res) => res.json())
          .then((data) =>
            setPlaylistThumbnails((prev) => ({
              ...prev,
              [playlist.id]: data.thumbnail_url,
            }))
          )
          .catch((err) => console.error(err));
      }
    });
  }, []);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <ul className="flex flex-wrap justify-center -mb-px text-md font-bold text-center">
          <li className="mx-2">
            <button
              className={`inline-block p-3 px-6 border-b-2 rounded-t-lg ${
                activeTab === 'tafseer'
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-700 border-transparent hover:text-gray-600 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('tafseer')}
            >
              تفسير القرآن
            </button>
          </li>
          <li className="mx-2">
            <button
              className={`inline-block p-3 px-6 border-b-2 rounded-t-lg ${
                activeTab === 'other'
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-700 border-transparent hover:text-gray-600 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('other')}
            >
              علوم أخرى
            </button>
          </li>
        </ul>
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === 'tafseer' && (
          <div className="flex flex-col items-center justify-center min-h-screen text-green-800 text-center p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
              {playlists.map((playlist) => {
                // Determine thumbnail: video first, else fetched playlist thumb
                const vid = getId(playlist.url);
                const thumbnailUrl = vid
                  ? getThumbnailUrl(playlist.url)
                  : playlistThumbnails[playlist.id] || null;

                return (
                  <div
                    key={playlist.id}
                    className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-200"
                  >
                    {thumbnailUrl && (
                      <div className="relative pt-[56.25%] mb-3">
                        <img
                          src={thumbnailUrl}
                          alt={`Thumbnail for ${playlist.sura}`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover rounded"
                        />
                      </div>
                    )}
                    <h2 className="text-xl font-semibold mb-2">
                      {playlist.sura}
                    </h2>
                    <a
                      href={playlist.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      مشاهدة القائمة
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {activeTab === 'other' && <OtherContentPage />}
      </div>
    </div>
  );
};

export default Playlists;
