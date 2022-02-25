import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';
import Navbar from './Components/Header/Navbar/Navbar';
import HelpCenter from './Pages/HelpCenters';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/help-centers' element={<HelpCenter />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
