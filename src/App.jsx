import './App.css';
import links from './assets/links';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayLinks from './components/DisplayLinks';
import DisplayLinksTable from './components/DisplayLinksTable';

function App() {
  return (
    <>
      <DisplayLinks links={links} />
      {/* <DisplayLinksTable links={links} /> */}
    </>
  );
}

export default App;
