import { FaAlignJustify } from 'react-icons/fa';
import sidebarImage from '../assets/sidebar.gif';
import playlists from '../assets/playlists';
import { useContext, useState } from 'react';
import { useGlobalContext, AppContext } from './context';
import { NavLink } from 'react-router-dom';

const SPECIAL_PLAYLIST_ID = 87;
const SPECIAL_ID_RANGE_START = 576;
const SPECIAL_ID_RANGE_END = 600;

const Sidebar2 = ({ children }) => {
  const { currentLinksData, isSidebarOpen } = useContext(AppContext);
  const filteredPlaylists = playlists.filter((playlist) => {
    const hasSpecialIdRange = currentLinksData.some((link) => {
      const linkId = parseInt(link.id, 10);
      return linkId >= SPECIAL_ID_RANGE_START && linkId <= SPECIAL_ID_RANGE_END;
    });

    if (hasSpecialIdRange && playlist.id === SPECIAL_PLAYLIST_ID) {
      return true;
    }

    return currentLinksData.some((link) => link.sura === playlist.sura);
  });

  return (
    <div className="flex">
      <div className="flex-1">
        <div className="p-4 sm:mr-56">{children}</div>{' '}
        {/* Reduced right margin */}
      </div>
      <aside
        className={`fixed top-18 right-0 w-full sm:w-56 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-green-100">
          <ul className="space-y-2 font-medium mt-20">
            <li>
              <NavLink
                to="/biography"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center p-2 text-green-100 bg-green-700 rounded-lg hover:bg-green-600 group cursor-pointer'
                    : 'flex items-center p-2 text-green-700 rounded-lg hover:bg-gray-100 group cursor-pointer'
                }
              >
                نبذة عن الشيخ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tafseer-intro"
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center p-2 text-green-100 bg-green-700 rounded-lg hover:bg-green-600 group cursor-pointer'
                    : 'flex items-center p-2 text-green-700 rounded-lg hover:bg-gray-100 group cursor-pointer'
                }
              >
                مقدمة التفسير
              </NavLink>
            </li>
            <li className="my-4">
              <hr className="border-t border-green-300" />
            </li>
            <li className="mb-2">
              <h3 className="text-lg font-semibold text-green-800 px-2 py-1 bg-green-200 rounded-md">
                قوائم التشغيل بالسور:
              </h3>
            </li>
            {filteredPlaylists.map((list) => {
              return (
                <li
                  key={list.id}
                  className="flex items-center p-2 text-green-700 rounded-lg hover:bg-gray-100 group cursor-pointer"
                >
                  <a href={list.url} target="_blank" rel="noopener noreferrer">
                    {list.sura}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar2;
