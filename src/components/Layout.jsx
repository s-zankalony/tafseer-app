import Navbar from './Navbar';
import Sidebar from './Sidebar2';

const Layout = ({ children }) => {
  return (
    <div className="bg-green-50">
      <Sidebar>
        <div className="pt-32 sm:pt-36 md:pt-24">
          {' '}
          {/* Increased padding-top */}
          {children}
        </div>
      </Sidebar>
      <Navbar />
    </div>
  );
};

export default Layout;
