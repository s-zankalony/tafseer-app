import Navbar from './Navbar';
import Sidebar from './Sidebar2';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-green-50">
      <Sidebar>
        <div className="flex-grow pt-32 sm:pt-36 md:pt-24 pb-16">
          {children}
        </div>
      </Sidebar>
      <Navbar />
      <footer
        dir="ltr"
        className="bg-green-800 text-white py-4 border-t-2 border-green-600 direction-ltr"
      >
        <div className="mr-4 md:mr-64 ml-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <div className="mb-2 sm:mb-0 w-full sm:w-auto">
            <p className="text-sm font-semibold">
              &copy; {new Date().getFullYear()} Sameh El Zankalony
            </p>
            <p className="text-xs text-green-300">
              Tafseer Al-Quran Al-Kareem - Sheikh Yassin Roushdy
            </p>
          </div>
          <div className="flex items-center justify-center w-full sm:w-auto">
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
      </footer>
    </div>
  );
};

export default Layout;
