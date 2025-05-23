import React, { useState, useEffect, useCallback } from 'react';
import hadithPlaylists from '../assets/hadithPlaylists';
import { getId, getPlaylistId, getThumbnailUrl } from '../assets/functions';
import { VideoModal } from './VideoModal';

const HadithPlaylists = () => {
  const [playlistThumbnails, setPlaylistThumbnails] = useState({});
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [playingPlaylistId, setPlayingPlaylistId] = useState(null);

  useEffect(() => {
    hadithPlaylists.forEach((playlist, index) => {
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
              [index]: data.thumbnail_url,
            }))
          )
          .catch((err) => console.error(err));
      }
    });
  }, []);

  const handleVideoPlay = useCallback((videoId, playlistId) => {
    setPlayingVideoId(videoId);
    setPlayingPlaylistId(playlistId);
  }, []);

  const handleCloseVideo = useCallback(() => {
    setPlayingVideoId(null);
    setPlayingPlaylistId(null);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen text-green-800 text-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {hadithPlaylists.map((playlist, index) => {
          // Skip entries without URLs (like entry 63)
          if (!playlist.url || playlist.url.startsWith('ضِمْنَ')) {
            return null;
          }

          const vid = getId(playlist.url);
          const pid = getPlaylistId(playlist.url);
          const thumbnailUrl = vid
            ? getThumbnailUrl(playlist.url)
            : playlistThumbnails[index] || null;

          return (
            <div
              key={index}
              className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-200"
            >
              {thumbnailUrl && (
                <div className="relative pt-[56.25%] mb-3">
                  <img
                    src={thumbnailUrl}
                    alt={`Thumbnail for ${playlist.name}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover rounded"
                  />
                  <button
                    onClick={() => {
                      vid
                        ? handleVideoPlay(vid, null)
                        : pid && handleVideoPlay(null, pid);
                    }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity"
                  >
                    <svg className="w-16 h-16 text-white" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              )}
              <h2 className="text-xl font-semibold mb-2">{playlist.name}</h2>
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

      {/* Video Modal */}
      {(playingVideoId || playingPlaylistId) && (
        <VideoModal
          videoId={playingVideoId}
          playlistId={playingPlaylistId}
          onClose={handleCloseVideo}
        />
      )}
    </div>
  );
};

export default HadithPlaylists;
