import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
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
import { FreeTrialForm } from './Pages/FreeTrial/Form/FreeTrialForm';
import { useTranslation } from 'react-i18next';
import cookie from 'js-cookie'
import i18next from "i18next";
import Cookies from 'js-cookie';


const langs = [
  {
    code: 'ja',
    name: '日本語',
    country_code: 'ja'
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
]

function App() {

  const currentLanguageCodes = Cookies.get('i18next')
  const currentLanguageCode = cookie.get('i18next')
  // const currentLanguage = langs.find(l => l.code === currentLanguageCode)
  const {t} = useTranslation()

  console.log(currentLanguageCodes)

  // useEffect(() => {
  //   document.body.dir = currentLanguage. || 'ltr'
  // }, [currentLanguage])
  

  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <Router>
      <Navbar langs={langs} currentLanguageCode={currentLanguageCode} />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/help-centers' element={<HelpCenter />} />
        <Route path='/free-trial' element={<FreeTrial />} />
        <Route path='/free-trial-form' element={<FreeTrialForm />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/project-management' element={<ProjectManagement />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer langs={langs} currentLanguageCode={currentLanguageCode} />
    </Router>
  );
}

export default App;
