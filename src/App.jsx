import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayLinks from './components/DisplayLinks';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DisplayLinks />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
