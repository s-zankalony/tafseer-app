import { useState } from 'react';
import data from '../assets/links';
import DisplayLinks from './DisplayLinks';
import Navbar from './Navbar';
import Sidebar2 from './Sidebar2';

const Home = () => {
  const [links, setLinks] = useState(data);
  return (
    <div className="bg-green-50">
      <Sidebar2>
        <div className="pt-16 sm:pt-20 md:pt-24">
          <DisplayLinks links={links} />
        </div>
      </Sidebar2>
      <Navbar />
    </div>
  );
};
export default Home;
