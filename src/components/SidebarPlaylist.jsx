import { useContext, memo } from 'react';
import { AppContext } from './context';

const SidebarPlaylist = () => {
  const { currentPlaylists } = useContext(AppContext);

  if (!currentPlaylists || currentPlaylists.length === 0) {
    return (
      <div className="text-gray-400 text-center mt-4 text-sm font-bold">
        اختر سورة من القائمة
      </div>
    );
  }

  return (
    <ul className="space-y-2 font-bold mt-4">
      {currentPlaylists.map((playlist) => (
        <li key={playlist.id}>
          <a
            href={playlist.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 text-green-700 rounded-lg hover:bg-gray-100 group cursor-pointer font-bold"
          >
            <span>{playlist.sura}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default memo(SidebarPlaylist);
