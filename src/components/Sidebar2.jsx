import { FaAlignJustify } from 'react-icons/fa';
import sidebarImage from '../assets/sidebar.gif';
import playlists from '../assets/playlists';
import { useContext, useMemo, useCallback, memo } from 'react';
import { AppContext } from './context';
import { NavLink, useLocation } from 'react-router-dom';

const SPECIAL_PLAYLIST_ID = 87;
const SPECIAL_ID_RANGE_START = 576;
const SPECIAL_ID_RANGE_END = 600;

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
  const { currentLinksData, isSidebarOpen, normalizeString, toggleSidebar } =
    useContext(AppContext);
  const location = useLocation();

  const filteredPlaylists = useMemo(() => {
    const hasSpecialIdRange = currentLinksData.some((link) => {
      const linkId = parseInt(link.id, 10);
      return linkId >= SPECIAL_ID_RANGE_START && linkId <= SPECIAL_ID_RANGE_END;
    });

    return playlists.filter((playlist) => {
      if (hasSpecialIdRange && playlist.id === SPECIAL_PLAYLIST_ID) {
        return true;
      }

      return currentLinksData.some((link) => {
        const normalizedSura = normalizeString(link.sura);
        const normalizedPlaylistSura = normalizeString(playlist.sura);

        // Special case for سبأ
        if (
          playlist.sura === 'سـبأ' &&
          (link.sura === 'سـبأ' || normalizedSura.startsWith('سب'))
        ) {
          return true;
        }

        return (
          normalizedSura === normalizedPlaylistSura ||
          normalizedSura.startsWith(normalizedPlaylistSura)
        );
      });
    });
  }, [currentLinksData, normalizeString]);

  const handleLinkClick = useCallback(() => {
    if (window.innerWidth < 640) {
      toggleSidebar();
    }
  }, [toggleSidebar]);

  const sidebarContent = useMemo(
    () => (
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
          <li className="my-4">
            <hr className="border-t border-green-300" />
          </li>
          {location.pathname === '/' && (
            <>
              <li className="mb-2">
                <h3 className="text-lg font-semibold text-green-800 px-2 py-1 bg-green-200 rounded-md">
                  قوائم التشغيل بالسور:
                </h3>
              </li>
              {filteredPlaylists.map((list) => (
                <li
                  key={list.id}
                  className="flex items-center p-2 text-green-700 rounded-lg hover:bg-gray-100 group cursor-pointer"
                  onClick={handleLinkClick}
                >
                  <a href={list.url} target="_blank" rel="noopener noreferrer">
                    {list.sura}
                  </a>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    ),
    [location.pathname, filteredPlaylists, handleLinkClick]
  );

  return (
    <div className="flex">
      <div className="flex-1">
        <div className="p-4 sm:mr-56">{children}</div>
      </div>
      <aside
        className={`fixed top-18 right-0 w-full sm:w-56 h-screen bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'
        }`}
      >
        {sidebarContent}
      </aside>
    </div>
  );
};

export default memo(Sidebar2);
