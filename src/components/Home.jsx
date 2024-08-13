import { useState } from 'react';
import linksData from '../assets/links';
import DisplayLinks from './DisplayLinks';
import Navbar from './Navbar';
import Sidebar from './Sidebar2';

const Home = () => {
  const [links, setLinks] = useState(linksData);
  const [currentLinksData, setCurrentLinksData] = useState(linksData);
  return (
    <div className="bg-green-50">
      <Sidebar currentLinksData={currentLinksData}>
        <div className="pt-16 sm:pt-20 md:pt-24">
          <DisplayLinks
            links={links}
            setCurrentLinksData={setCurrentLinksData}
          />
        </div>
      </Sidebar>
      <Navbar />
    </div>
  );
};
export default Home;
