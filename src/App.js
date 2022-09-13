import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Animes from './components/animes';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Animes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
