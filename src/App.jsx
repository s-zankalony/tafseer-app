// import './App.css';
import links from './assets/links';
import DisplayLinks from './components/DisplayLinks';
// import DisplayLinksTable from './components/DisplayLinksTable';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import Sidebar2 from './components/Sidebar2';

function App() {
  return (
    <div className="bg-green-50">
      <Navbar />
      <Sidebar2>
        <div className="pt-16 sm:pt-20 md:pt-24">
          <DisplayLinks links={links} />
          {/* <DisplayLinksTable links={links} /> */}
        </div>
      </Sidebar2>
    </div>
  );
}

export default App;
