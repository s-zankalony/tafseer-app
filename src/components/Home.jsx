import { useState } from 'react';
import linksData from '../assets/links';
import DisplayLinks from './DisplayLinks';
import Navbar from './Navbar';
import Sidebar from './Sidebar2';
import { useGlobalContext } from './context';

const Home = () => {
  // const [links, setLinks] = useState(linksData);
  // const [currentLinksData, setCurrentLinksData] = useState(linksData);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {
    links,
    currentLinksData,
    setCurrentLinksData,
    isSidebarOpen,
    setIsSidebarOpen,
  } = useGlobalContext();

  return (
    <div className="bg-green-50">
      <Sidebar>
        <div className="pt-16 sm:pt-20 md:pt-24">
          <DisplayLinks />
        </div>
      </Sidebar>
      <Navbar />
    </div>
  );
};

export default Home;
