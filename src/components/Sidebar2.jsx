import { FaAlignJustify } from 'react-icons/fa';
import sidebarImage from '../assets/sidebar.gif';
import playlists from '../assets/playlists';
import { list } from 'postcss';

const SPECIAL_PLAYLIST_ID = 87;
const SPECIAL_ID_RANGE_START = 576;
const SPECIAL_ID_RANGE_END = 600;

const Sidebar2 = ({ children, currentLinksData }) => {
  const filteredPlaylists = playlists.filter((playlist) => {
    // Check if any item in currentLinksData has an id between 576 and 600
    const hasSpecialIdRange = currentLinksData.some((link) => {
      const linkId = parseInt(link.id, 10);
      return linkId >= SPECIAL_ID_RANGE_START && linkId <= SPECIAL_ID_RANGE_END;
    });

    // If the special ID range is found, include item with id 87
    if (hasSpecialIdRange && playlist.id === SPECIAL_PLAYLIST_ID) {
      return true;
    }

    // Otherwise, use the original filtering logic
    return currentLinksData.some((link) => link.sura === playlist.sura);
  });

  return (
    <div className="flex">
      <div className="flex-1">
        <div className="p-4 sm:mr-64">{children}</div>
      </div>
      <aside className="fixed top-18 right-0 w-full sm:w-64 h-screen transition-transform -translate-x-full sm:translate-x-0  ">
        <div className="h-full px-3 py-4 overflow-y-auto bg-green-100 ">
          <ul className="space-y-2 font-medium mt-20">
            <li className="flex items-center p-2 text-green-700 rounded-lg  hover:bg-gray-100 group cursor-pointer">
              نبذة عن الشيخ
            </li>
            <li className="flex items-center p-2 text-green-700  rounded-lg  hover:bg-gray-100 group cursor-pointer">
              مقدمة التفسير
            </li>
            <li className="flex items-center p-2 text-green-700  rounded-lg  hover:bg-gray-100 group cursor-pointer">
              --------------
            </li>
            <li className="flex items-center p-2 text-green-700  rounded-lg  hover:bg-gray-100 group cursor-pointer">
              قوائم التشغيل بالسور:
            </li>
            {filteredPlaylists.map((list) => {
              return (
                <li
                  key={list.id}
                  className="flex items-center p-2 text-green-700 rounded-lg  hover:bg-gray-100 group cursor-pointer"
                >
                  <a href={list.url} target="_blank">
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
