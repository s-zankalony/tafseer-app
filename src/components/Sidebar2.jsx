import { FaAlignJustify } from 'react-icons/fa';
import sidebarImage from '../assets/sidebar.gif';
import playlists from '../assets/playlists';
import { useContext, useMemo, useCallback, memo } from 'react';
import { AppContext } from './context';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarPlaylist from './SidebarPlaylist';

// const SPECIAL_PLAYLIST_ID = 87;
// const SPECIAL_ID_RANGE_START = 576;
// const SPECIAL_ID_RANGE_END = 600;

const SidebarLink = memo(({ to, isActive, onClick, children }) => (
  <NavLink
    to={to}
    className={
      isActive
        ? 'flex items-center p-2 text-green-100 bg-green-700 rounded-lg hover:bg-green-600 group cursor-pointer'
        : 'flex items-center p-2 text-green-700 rounded-lg hover:bg-gray-100 group cursor-pointer'
    }
    onClick={onClick}
  >
    {children}
  </NavLink>
));

const Sidebar2 = ({ children }) => {
  const {
    // currentLinksData,
    isSidebarOpen,
    normalizeString,
    toggleSidebar,
    selectedSura,
  } = useContext(AppContext);
  const location = useLocation();

  // Enhance sidebar visibility classes
  const sidebarClasses = `transform ${
    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
  } fixed left-0 top-0 z-40 h-screen w-64 overflow-y-auto bg-white pt-16 transition-transform duration-300 ease-in-out sm:translate-x-0 sm:static sm:h-auto sm:w-64 sm:pt-0`;

  const filteredPlaylists = useMemo(() => {
    if (!selectedSura) return [];

    return playlists.filter((playlist) => {
      const normalizedSura = normalizeString(selectedSura);
      const normalizedPlaylistSura = normalizeString(playlist.sura);

      // Special case for سبأ
      if (playlist.sura === 'سـبأ' && normalizedSura.startsWith('سب')) {
        return true;
      }

      return (
        normalizedSura === normalizedPlaylistSura ||
        normalizedSura.startsWith(normalizedPlaylistSura)
      );
    });
  }, [selectedSura, normalizeString]);

  const handleLinkClick = useCallback(() => {
    if (window.innerWidth < 640) {
      toggleSidebar();
    }
  }, [toggleSidebar]);

  return (
    <div className="flex">
      <div className="flex-1">
        <div className="p-4 sm:mr-56">{children}</div>
      </div>
      <aside
        className={`fixed top-18 right-0 w-full sm:w-56 h-screen transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-green-100">
          <ul className="space-y-2 font-medium mt-20">
            <li>
              <SidebarLink
                to="/biography"
                isActive={location.pathname === '/biography'}
                onClick={handleLinkClick}
              >
                نبذة عن الشيخ
              </SidebarLink>
            </li>
            <li>
              <SidebarLink
                to="/tafseer-intro"
                isActive={location.pathname === '/tafseer-intro'}
                onClick={handleLinkClick}
              >
                مقدمة التفسير
              </SidebarLink>
            </li>
          </ul>
          <hr className="my-4 border-t border-green-300" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            قوائم التشغيل المتاحة:
          </h3>
          <SidebarPlaylist />
        </div>
      </aside>
    </div>
  );
};

export default memo(Sidebar2);
