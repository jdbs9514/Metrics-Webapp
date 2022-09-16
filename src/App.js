import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Cryptos from './components/Crypto';
import Details from './components/Details';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Cryptos />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
