import { useContext, memo, useMemo } from 'react';
import { AppContext } from './context';
import playlists from '../assets/playlists'; // Import playlists at the top level
import { getThumbnailUrl } from '../assets/functions';

const SidebarPlaylist = () => {
  const { visibleSuras } = useContext(AppContext);
  const { currentPlaylists } = useContext(AppContext);

  // Find playlists for currently visible suras
  const visiblePlaylists = useMemo(() => {
    // If we have specifically selected current playlists, display those
    if (currentPlaylists && currentPlaylists.length > 0) {
      return currentPlaylists;
    }

    // If we have visible suras, display playlists for those suras
    if (visibleSuras && visibleSuras.length > 0) {
      // Use the imported playlists instead of requiring them
      return playlists.filter((playlist) =>
        visibleSuras.some((sura) => playlist.sura === sura)
      );
    }

    return [];
  }, [visibleSuras, currentPlaylists]);

  if (!visiblePlaylists || visiblePlaylists.length === 0) {
    return (
      <div className="text-gray-400 text-center mt-4 text-sm font-bold">
        اختر سورة من القائمة
      </div>
    );
  }

  return (
    <ul className="space-y-2 font-bold mt-4">
      {visiblePlaylists.map((playlist) => (
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
