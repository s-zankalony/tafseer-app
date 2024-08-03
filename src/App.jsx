// import './App.css';
import { useState } from 'react';
import data from './assets/links';
import DisplayLinks from './components/DisplayLinks';
// import DisplayLinksTable from './components/DisplayLinksTable';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';

function App() {
  const [links, setLinks] = useState(data);
  return (
    <div className="bg-green-50">
      <Sidebar2>
        <div className="pt-16 sm:pt-20 md:pt-24">
          <DisplayLinks links={links} />
          {/* <DisplayLinksTable links={links} /> */}
        </div>
      </Sidebar2>
      <Navbar />
    </div>
  );
}

export default App;
