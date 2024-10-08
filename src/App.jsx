import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayLinks from './components/DisplayLinks';
import Layout from './components/Layout';
import About from './components/About';
import Playlists from './components/Playlists';
import Biography from './components/Biography';
import TafseerIntroPage from './components/TafseerIntroPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DisplayLinks />} />
          <Route path="/about" element={<About />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/tafseer-intro" element={<TafseerIntroPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
