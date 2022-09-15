import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Animes from './components/animes';
import Details from './components/Details';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Animes />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
