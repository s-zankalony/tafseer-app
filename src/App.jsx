import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentTabs from './components/ContentTabs';
import Layout from './components/Layout';
import About from './components/About';
import Biography from './components/Biography';
import TafseerIntroPage from './components/TafseerIntroPage';
import HadithIntroPage from './components/HadithIntroPage';
import OtherContentPage from './components/OtherContentPage';
import DisplayHadith from './components/DisplayHadith';
import RamadanContentPage from './components/RamadanContentPage';
import Books from './pages/Books'; // Import the Books component

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ContentTabs />} />
          <Route path="/about" element={<About />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/tafseer-intro" element={<TafseerIntroPage />} />
          <Route path="/hadith-intro" element={<HadithIntroPage />} />
          <Route path="/bukhari" element={<DisplayHadith />} />
          <Route path="/ramadan" element={<RamadanContentPage />} />
          <Route path="/other-content" element={<OtherContentPage />} />
          <Route path="/books" element={<Books />} />{' '}
          {/* Add the new route for Books */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
