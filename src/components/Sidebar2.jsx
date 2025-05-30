import { FaAlignJustify } from 'react-icons/fa';
import {
  useContext,
  useMemo,
  useCallback,
  memo,
  useEffect,
  useState,
} from 'react';
import { AppContext } from './context';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarPlaylist from './SidebarPlaylist';
import SidebarHadithJuz from './SidebarHadithJuz';

const SidebarLink = memo(({ to, isActive, onClick, children }) => (
  <NavLink
    to={to}
    className={
      isActive
        ? 'flex items-center p-2 text-green-100 bg-green-700 rounded-lg hover:bg-green-600 group cursor-pointer font-bold'
        : 'flex items-center p-2 text-green-700 rounded-lg hover:bg-gray-100 group cursor-pointer font-bold'
    }
    onClick={onClick}
  >
    {children}
  </NavLink>
));

const Sidebar2 = ({ children }) => {
  const {
    isSidebarOpen,
    normalizeString,
    toggleSidebar,
    selectedSura,
    activeTab,
    setActiveTab,
    hadithActiveTab,
    playlists = [], // Add default empty array
  } = useContext(AppContext);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isHadithPage = location.pathname === '/bukhari';
  const [showHadithSidebar, setShowHadithSidebar] = useState(false);

  // Reset to 'tafseer' tab once on initial mount if we're on the home page
  useEffect(() => {
    if (location.pathname === '/') {
      setActiveTab('tafseer');
    }
  }, []); // <-- no dependencies, runs only once

  const sidebarClasses = `transform ${
    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
  } fixed left-0 top-0 z-40 h-screen w-64 overflow-y-auto bg-white pt-16 transition-transform duration-300 ease-in-out sm:translate-x-0 sm:static sm:h-auto sm:w-64 sm:pt-0`;
  const filteredPlaylists = useMemo(() => {
    if (!playlists?.length) {
      return [];
    }

    return playlists.filter((playlist) => {
      if (!selectedSura || !playlist?.sura) {
        return false;
      }

      const normalizedSura = normalizeString(selectedSura);
      const normalizedPlaylistSura = normalizeString(playlist.sura);

      if (playlist.sura === 'سـبأ' && normalizedSura.startsWith('سب')) {
        return true;
      }

      return (
        normalizedSura === normalizedPlaylistSura ||
        normalizedSura.startsWith(normalizedPlaylistSura)
      );
    });
  }, [playlists, selectedSura, normalizeString]);

  const handleLinkClick = useCallback(() => {
    if (window.innerWidth < 640) {
      toggleSidebar();
    }
  }, [toggleSidebar]);

  // Effect to track hadith/tab visibility
  useEffect(() => {
    setShowHadithSidebar(activeTab === 'hadith');
  }, [activeTab]);

  // Don't show sidebar when "other" tab is active
  if (activeTab === 'other') {
    return <div className="flex min-h-screen relative">{children}</div>;
  }

  return (
    <div className="flex min-h-screen relative">
      <div className="flex-1 w-full sm:pr-56">{children}</div>
      <aside
        className={`fixed top-16 right-0 w-full sm:w-56 h-[calc(100vh-4rem)] transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'
        }`}
      >
        <div className="h-full overflow-y-auto bg-green-100">
          <ul className="space-y-2 font-bold mt-16 px-2">
            <li className="p-2" /> {/* placeholder to maintain space */}
          </ul>
          <div className="my-4" /> {/* preserve divider spacing */}
          <div className="px-2">
            {/* Playlist on home–tafseer only */}
            {isHomePage && activeTab === 'tafseer' && (
              <>
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  قوائم التشغيل المتاحة:
                </h3>
                <SidebarPlaylist />
              </>
            )}

            {/* Hadith‐Juz on /bukhari only */}
            {isHadithPage && hadithActiveTab === 'hadith' && (
              <SidebarHadithJuz />
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default memo(Sidebar2);
