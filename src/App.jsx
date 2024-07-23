// import './App.css';
import links from './assets/links';
import DisplayLinks from './components/DisplayLinks';
import DisplayLinksTable from './components/DisplayLinksTable';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar>
        <div className="pt-16 sm:pt-20 md:pt-24">
          <DisplayLinks links={links} />
          {/* <DisplayLinksTable links={links} /> */}
        </div>
      </Sidebar>
    </>
  );
}

export default App;
