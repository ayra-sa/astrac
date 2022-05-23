/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Feature from './Pages/Feature';
import HelpCenter from './Pages/HelpCenters';
import Home from './Pages/Home/Home';
import Pricing from './Pages/Pricing';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Product from './Pages/Product';
import ProjectManagement from './Pages/Project Management';
import Contact from './Pages/Contact';
import { FreeTrialForm } from './Pages/FreeTrial/Form/FreeTrialForm';
import cookie from 'js-cookie'
// import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import CookieConsent from 'react-cookie-consent';
import Privacy from './Pages/Privacy';
import Results from './Pages/Results/Results';
import ScrollToTop from './Components/ScrollToTop';
// ja



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

  // const currentLanguageCodes = Cookies.get('i18next')
  const currentLanguageCode = cookie.get('i18next')
  // const currentLanguage = langs.find(l => l.code === currentLanguageCode)
  const {t} = useTranslation()

  console.log(t)


  // useEffect(() => {
  //   document.body.dir = currentLanguage. || 'ltr'
  // }, [currentLanguage])
  

  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <Router>
      <Navbar langs={langs} currentLanguageCode={currentLanguageCode} />
      <ScrollToTop />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='help-centers' element={<HelpCenter />} />
        {/* <Route path='free-trial' element={<FreeTrial />} /> */}
        <Route path='free-trial-form/:id' element={<FreeTrialForm />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='feature' element={<Feature />} />
        <Route path='project-management' element={<ProjectManagement />} />
        <Route path='contact' element={<Contact />} />
        <Route path='privacy-policy' element={<Privacy />} />
        <Route path='/results/:query' element={<Results />} />
        {/* <Route path='/ja' element={<Home />}>

        </Route> */}

      </Routes>
      <CookieConsent
          location="bottom"
          buttonText="x"
          expires={150}
          buttonStyle={{ background: '#F0EEFC', color: '#856bfa', borderRadius: '50px', fontWeight: '500' }}
          containerClasses="cookie-wrap"
          contentClasses='cookie-content'
          cookieName='AstracCookie'
        >
          We use cookies to provide our services. By accessing our website, you agree to the use of cookies as described in our <Link to='/privacy-policy' style={{ color: '#856bfa' }}>Cookie Policy</Link>
        </CookieConsent>
      <Footer langs={langs} currentLanguageCode={currentLanguageCode} />
    </Router>
  );
}

export default App;
