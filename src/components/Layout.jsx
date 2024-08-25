import Navbar from './Navbar';
import Sidebar from './Sidebar2';

const Layout = ({ children }) => {
  return (
    <div className="bg-green-50">
      <Sidebar>
        <div className="pt-16 sm:pt-20 md:pt-24">{children}</div>
      </Sidebar>
      <Navbar />
    </div>
  );
};

export default Layout;
