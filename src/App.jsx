import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';
import Navbar from './Components/Header/Navbar/Navbar';
import Feature from './Pages/Feature';
import FreeTrial from './Pages/FreeTrial';
import HelpCenter from './Pages/HelpCenters';
import Home from './Pages/Home/Home';
import Pricing from './Pages/Pricing';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Product from './Pages/Product';
import ProjectManagement from './Pages/Project Management';
import Contact from './Pages/Contact';


function App() {

  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/help-centers' element={<HelpCenter />} />
        <Route path='/free-trial' element={<FreeTrial />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/project-management' element={<ProjectManagement />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;