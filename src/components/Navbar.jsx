import { MdMenuBook } from 'react-icons/md';
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-100 border-gray-200 ">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-green-100 ">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-green-700 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                قوائم التشغيل
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-green-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                عن الموقع
              </a>
            </li>
          </ul>
        </div>
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-800">
            تفسير القرآن - للشيخ/ ياسين رشدي
          </span>
          <MdMenuBook className="text-xl text-green-800" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
