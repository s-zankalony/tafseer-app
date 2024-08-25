import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayLinks from './components/DisplayLinks';
import Layout from './components/Layout';
import About from './components/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DisplayLinks />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
