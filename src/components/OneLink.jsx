import { memo, useState } from 'react';
import { VideoModal } from './VideoModal';
import { getId, getThumbnailUrl } from '../assets/functions';

const OneLink = ({ thumbSRC, link }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);
  const videoId = getId(link.url);

  const thumbnailUrl = imageError
    ? getThumbnailUrl(link.url, 'mqdefault')
    : getThumbnailUrl(link.url, 'hqdefault');

  return (
    <>
      <div className="flex flex-col h-full bg-green-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="relative pt-[56.25%]">
          <img
            src={thumbnailUrl}
            alt={`Thumbnail for ${link.sura}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            onError={() => setImageError(true)}
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-opacity"
          >
            <svg className="w-16 h-16 text-white" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>

        <div className="p-3 flex flex-col flex-grow">
          <h4 className="text-base font-semibold text-green-700 mb-2">
            سورة: {link.sura}
          </h4>
          <a
            target="_blank"
            className="mt-auto py-2 px-3 bg-green-800 text-white rounded hover:bg-green-600 transition duration-300 text-center text-sm font-bold"
            href={link.url}
            rel="noopener noreferrer"
          >
            الآيات: {link.verse}
          </a>
        </div>
      </div>

      {isPlaying && (
        <VideoModal videoId={videoId} onClose={() => setIsPlaying(false)} />
      )}
    </>
  );
};

export default memo(OneLink);
