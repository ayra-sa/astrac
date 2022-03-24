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
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import tEn from './locales/en/translation.json'
import tJa from './locales/ja/translation.json'
import { useTranslation } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation:tEn
      },
      ja: {
        translation:tJa
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  })

  const changeLang = (l) => {
    return () => {
      i18next.changeLanguage(l)
      console.log(l)

      localStorage.setItem('lang', l)
    }
  }

function App() {

  const { t } = useTranslation()

  useEffect(() => {
    let currentLang = localStorage.getItem('lang')
    i18next.changeLanguage(currentLang)
    console.log(currentLang)
  }, [])
  

  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <Router>
      <Navbar changeLang={changeLang} />
      <Routes>
        <Route path='/' exact element={<Home t={t} />} />
        <Route path='/product' element={<Product />} />
        <Route path='/help-centers' element={<HelpCenter />} />
        <Route path='/free-trial' element={<FreeTrial />} />
        <Route path='/free-trial-form' element={<FreeTrialForm />} />
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
