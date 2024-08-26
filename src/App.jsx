import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayLinks from './components/DisplayLinks';
import Layout from './components/Layout';
import About from './components/About';
import Playlists from './components/Playlists';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DisplayLinks />} />
          <Route path="/about" element={<About />} />
          <Route path="/playlists" element={<Playlists />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
