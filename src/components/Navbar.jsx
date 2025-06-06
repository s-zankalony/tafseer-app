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
                  className="hidden sm:block h-6 sm:h-8 ml-2"
                  alt="Quran Icon"
                />
                <span className="font-ptbldhad text-lg sm:text-xl font-bold whitespace-normal sm:whitespace-nowrap text-green-800 text-center sm:text-right">
                  من تراث الشيخ ياسين رشدي
                </span>
              </div>
            </NavLink>
            <div className="w-8 sm:hidden"></div>
          </div>
          <div className="w-full sm:w-auto" id="navbar-default">
            <ul className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <div className="flex gap-2 w-full sm:w-auto justify-center">
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
                    تفسير القرآن
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bukhari"
                    className={({ isActive }) =>
                      isActive
                        ? 'block py-1 px-2 text-green-100 bg-green-700 rounded font-bold'
                        : 'block py-1 px-2 text-green-900 rounded hover:bg-green-200 hover:text-green-700 font-bold'
                    }
                    onClick={() => isSidebarOpen && toggleSidebar()}
                  >
                    شرح صحيح البخاري
                  </NavLink>
                </li>
              </div>
              <div className="flex gap-2 w-full sm:w-auto justify-center">
                <li>
                  <NavLink
                    to="/ramadan"
                    className={({ isActive }) =>
                      isActive
                        ? 'block py-1 px-2 text-green-100 bg-green-700 rounded font-bold'
                        : 'block py-1 px-2 text-green-900 rounded hover:bg-green-200 hover:text-green-700 font-bold'
                    }
                    onClick={() => isSidebarOpen && toggleSidebar()}
                  >
                    مجالس رمضان
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/other-content"
                    className={({ isActive }) =>
                      isActive
                        ? 'block py-1 px-2 text-green-100 bg-green-700 rounded font-bold'
                        : 'block py-1 px-2 text-green-900 rounded hover:bg-green-200 hover:text-green-700 font-bold'
                    }
                    onClick={() => isSidebarOpen && toggleSidebar()}
                  >
                    علوم أخرى
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/books"
                    className={({ isActive }) =>
                      isActive
                        ? 'block py-1 px-2 text-green-100 bg-green-700 rounded font-bold'
                        : 'block py-1 px-2 text-green-900 rounded hover:bg-green-200 hover:text-green-700 font-bold'
                    }
                    onClick={() => isSidebarOpen && toggleSidebar()}
                  >
                    الكتب
                  </NavLink>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
