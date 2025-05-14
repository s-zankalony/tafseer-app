import { FaAlignJustify } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';
import quranIcon from '../assets/quran_dg32u6vdkhyz.svg';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { toggleSidebar, resetSearchTerm, isSidebarOpen } = useGlobalContext();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-100 border-gray-200 shadow-md">
      <div className="max-w-screen-xl mx-auto p-2 sm:p-4">
        <div className="flex flex-col sm:flex-row-reverse sm:items-center sm:justify-between">
          <div className="flex items-center justify-between mb-2 sm:mb-0">
            <button
              className="text-green-700 sm:hidden order-first"
              onClick={toggleSidebar}
            >
              <FaAlignJustify size={24} />
            </button>
            <NavLink
              to="/"
              aria-current="page"
              onClick={() => {
                resetSearchTerm();
                isSidebarOpen && toggleSidebar();
              }}
            >
              <div className="flex items-center justify-center sm:justify-end flex-grow sm:flex-grow-0">
                <img
                  src={quranIcon}
                  className="h-6 sm:h-8 ml-2"
                  alt="Quran Icon"
                />
                <span className="text-lg sm:text-xl font-bold whitespace-nowrap text-green-800">
                  تفسير القرآن - للشيخ/ ياسين رشدي
                </span>
              </div>
            </NavLink>
            <div className="w-8 sm:hidden"></div>
          </div>
          <div className="w-full sm:w-auto" id="navbar-default">
            <ul className="font-bold flex justify-center sm:justify-start space-x-4 space-x-reverse">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-1 px-2 text-green-100 bg-green-700 rounded font-bold'
                      : 'block py-1 px-2 text-green-900 rounded hover:bg-green-200 hover:text-green-700 font-bold'
                  }
                  aria-current="page"
                  onClick={() => {
                    resetSearchTerm();
                    isSidebarOpen && toggleSidebar();
                  }}
                >
                  الرئيسية
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Playlists"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-1 px-2 text-green-100 bg-green-700 rounded font-bold'
                      : 'block py-1 px-2 text-green-900 rounded hover:bg-green-200 hover:text-green-700 font-bold'
                  }
                  onClick={() => isSidebarOpen && toggleSidebar()}
                >
                  قوائم التشغيل
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? 'block py-1 px-2 text-green-100 bg-green-700 rounded font-bold'
                      : 'block py-1 px-2 text-green-900 rounded hover:bg-green-200 hover:text-green-700 font-bold'
                  }
                  onClick={() => isSidebarOpen && toggleSidebar()}
                >
                  عن الموقع
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
