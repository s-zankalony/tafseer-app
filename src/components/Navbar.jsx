import { FaAlignJustify } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';
import quranIcon from '../assets/quran_dg32u6vdkhyz.svg';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { toggleSidebar } = useGlobalContext();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-100 border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <button className="text-green-700 md:hidden" onClick={toggleSidebar}>
          <FaAlignJustify size={24} />
        </button>
        <div
          className="w-full md:w-auto flex items-center justify-center"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-green-100 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green-100">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 px-3 text-green-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0'
                    : 'block py-2 px-3 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0'
                }
                aria-current="page"
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Playlists"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 px-3 text-green-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0'
                    : 'block py-2 px-3 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0'
                }
              >
                قوائم التشغيل
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 px-3 text-green-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0'
                    : 'block py-2 px-3 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0'
                }
              >
                عن الموقع
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:block" id="navbar-title">
          <NavLink
            to="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-800">
              تفسير القرآن - للشيخ/ ياسين رشدي
            </span>
            <img src={quranIcon} className="size-8 text-green-800 h-full" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
