import { FaAlignJustify } from 'react-icons/fa';
import sidebarImage from '../assets/sidebar.gif';
const Sidebar2 = ({ children }) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="p-4 sm:mr-64">{children}</div>
      </div>
      <aside className="fixed top-18 right-0 w-full sm:w-64 h-screen transition-transform -translate-x-full sm:translate-x-0  ">
        <div className="h-full px-3 py-4 overflow-y-auto bg-green-100 ">
          <ul className="space-y-2 font-medium mt-20">
            <li className="flex items-center p-2 text-green-700 rounded-lg  hover:bg-gray-100 group">
              نبذة عن الشيخ
            </li>
            <li className="flex items-center p-2 text-green-700  rounded-lg  hover:bg-gray-100 group">
              مقدمة التفسير
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
export default Sidebar2;
