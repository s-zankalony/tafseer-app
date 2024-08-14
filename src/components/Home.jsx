import { useState } from 'react';
import linksData from '../assets/links';
import DisplayLinks from './DisplayLinks';
import Navbar from './Navbar';
import Sidebar from './Sidebar2';

const Home = () => {
  const [links, setLinks] = useState(linksData);
  const [currentLinksData, setCurrentLinksData] = useState(linksData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-green-50">
      <Sidebar
        currentLinksData={currentLinksData}
        isSidebarOpen={isSidebarOpen}
      >
        <div className="pt-16 sm:pt-20 md:pt-24">
          <DisplayLinks
            links={links}
            setCurrentLinksData={setCurrentLinksData}
          />
        </div>
      </Sidebar>
      <Navbar toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Home;
