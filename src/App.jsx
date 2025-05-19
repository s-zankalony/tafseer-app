import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentTabs from './components/ContentTabs';
import Layout from './components/Layout';
import About from './components/About';
import Playlists from './components/Playlists';
import Biography from './components/Biography';
import TafseerIntroPage from './components/TafseerIntroPage';
import HadithIntroPage from './components/HadithIntroPage';
import OtherContentPage from './components/OtherContentPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ContentTabs />} />
          <Route path="/about" element={<About />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/tafseer-intro" element={<TafseerIntroPage />} />
          <Route path="/hadith-intro" element={<HadithIntroPage />} />
          <Route path="/other-content" element={<OtherContentPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
