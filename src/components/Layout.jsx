import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar2';
import { useGlobalContext } from './context';

const Footer = memo(({ year }) => (
  <footer
    dir="ltr"
    className="bg-green-800 text-white py-4 border-t-2 border-green-600 w-full relative z-10"
  >
    <div className="mx-4 sm:mr-60 sm:ml-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 pb-4 border-b border-green-600">
        <div className="flex flex-col-reverse sm:flex-row items-center gap-4 w-full justify-center">
          <NavLink
            to="/about"
            className="text-lg font-bold bg-green-700 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors duration-300"
          >
            عن الموقع
          </NavLink>
          <NavLink
            to="/biography"
            className="text-lg font-bold bg-green-700 text-white px-6 py-2 rounded hover:bg-green-600 transition-colors duration-300"
          >
            نبذة عن الشيخ
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-2 sm:mb-0">
          <p className="text-sm font-semibold">
            &copy; {year} Sameh El Zankalony
          </p>
          <p className="text-xs text-green-300">
            Tafseer Al-Quran Al-Kareem - Sheikh Yassin Roushdy
          </p>
        </div>
        <div className="flex items-center">
          <span className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </span>
          <a
            href="mailto:sameh@zankalony.com"
            className="text-sm hover:text-green-300 transition-colors duration-300"
          >
            sameh@zankalony.com
          </a>
        </div>
      </div>
    </div>
  </footer>
));

const Layout = ({ children }) => {
  const year = new Date().getFullYear();
  const { activeTab } = useGlobalContext();

  return (
    <div className="flex flex-col min-h-screen bg-green-50 w-full overflow-x-hidden">
      <Sidebar>
        <div
          className={`flex-grow px-2 sm:px-4 pt-32 sm:pt-24 md:pt-28 lg:pt-24 pb-16 w-full ${
            activeTab === 'other' ? 'sm:px-8' : ''
          }`}
        >
          {children}
        </div>
      </Sidebar>
      <Navbar />
      <Footer year={year} />
    </div>
  );
};

export default memo(Layout);
