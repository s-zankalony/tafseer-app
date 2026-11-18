import { memo } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from './useGlobalContext';
import SidebarPlaylist from './SidebarPlaylist';
import SidebarHadithJuz from './SidebarHadithJuz';

const Sidebar2 = ({ children }) => {
  const { isSidebarOpen, activeTab, hadithActiveTab } = useGlobalContext();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isHadithPage = location.pathname === '/bukhari';

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

Sidebar2.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Sidebar2);
