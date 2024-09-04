import React from 'react';
import playlists from '../assets/playlists';

const Playlists = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-green-800 text-center p-4">
      <h1 className="text-3xl font-bold mb-8">قوائم التشغيل</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="p-4 border rounded shadow hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{playlist.sura}</h2>
            <a
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              مشاهدة القائمة
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
