import React, { useState, useEffect } from 'react';
import playlists from '../assets/playlists';
import { getId, getPlaylistId, getThumbnailUrl } from '../assets/functions';

const Playlists = () => {
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
    <div className="w-full flex flex-col items-center justify-center min-h-screen text-green-800 text-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {playlists.map((playlist) => {
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
              <h2 className="text-xl font-semibold mb-2">{playlist.sura}</h2>
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
  );
};

export default Playlists;
