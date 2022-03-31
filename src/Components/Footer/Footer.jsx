import "./Footer.css";
import fb from "../../images/socmed/fb.svg";
import twitter from "../../images/socmed/twitter.svg";
import linkedin from "../../images/socmed/linkedin.svg";
import { Link } from "react-router-dom";
import AllOfYour from "../AllOfYour/AllOfYour";
import { useEffect, useRef, useState } from "react";
import i18next, { t } from "i18next";

const Footer = ({langs, currentLanguageCode}) => {

  const [langBtm, setLangBtm] = useState(false)

  const ref = useRef()

  useEffect(() => {
    const handleOutside = (e) => {

      if (langBtm && ref.current && !ref.current.contains(e.target)) {
        setLangBtm(false)
      }
    }

    document.addEventListener('mousedown', handleOutside)

    return () => {
      document.removeEventListener('mousedown', handleOutside)
    }
  }, [langBtm])

  return (
    <>
      <footer data-aos="fade-up">
        <AllOfYour />
        <div className="container" ref={ref}>
          <div className="footer-wrap">
            <div className="footer-left">
              <Link to="/" className="brand">
                <img src="images/logo.svg" alt="brand" />
              </Link>
              <p className="subtitle mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum varius pharetra mi.
              </p>

              {/* <div className="lang">
                <img src="images/world-black.svg" alt="icon" />
                English
              </div> */}
              <div className="lang-dd mt-4" onClick={() => setLangBtm(!langBtm)}>
                <img src="images/world-black.svg" alt="icon" /> <span>{ t('language') }</span>
                <div className={ langBtm ? 'language btm' : 'hide' }>
                  {langs.map(({code, name}) => (
                    <button 
                      onClick={() => i18next.changeLanguage(code) }
                      disabled={code === currentLanguageCode}
                      key={code}
                      // style={{ color: code === currentLanguageCode ? 'red' : 'green' }}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer-right">
              <ul className="footer-menu">
                <li>
                  <h2>Product</h2>
                </li>
                <li>
                  <Link to="/">Product Tour</Link>
                </li>
                <li>
                  <Link to="/">Benefit</Link>
                </li>
                <li>
                  <Link to="/">Security</Link>
                </li>
                <li>
                  <Link to="/">Help Center</Link>
                </li>
              </ul>
              <ul className="footer-menu">
                <li>
                  <h2>Feature</h2>
                </li>
                <li>
                  <Link to="/">Project</Link>
                </li>
                <li>
                  <Link to="/">Chat</Link>
                </li>
                <li>
                  <Link to="/">File Manager</Link>
                </li>
                <li>
                  <Link to="/">Call & Video Call</Link>
                </li>
                <li>
                  <Link to="/">Mail</Link>
                </li>
                <li>
                  <Link to="/">Event</Link>
                </li>
              </ul>
              <ul className="footer-menu">
                <li>
                  <h2>Pricing</h2>
                </li>
                <li>
                  <Link to="/">Plans</Link>
                </li>
                <li>
                  <Link to="/">FaQ</Link>
                </li>
              </ul>
              <ul className="footer-menu">
                <li>
                  <h2>Company</h2>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Partner Program</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/free-trial">Free Trial</Link>
                </li>
                <li>
                  <Link to="/">Document</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright">
              <span>© Astrac 2021</span>
              <Link to="/">Security</Link>
              <Link to="/">Privacy</Link>
              <Link to="/">Terms</Link>
            </div>
            <div className="socmed">
              <Link to="/">
                <img src={twitter} alt="socmed" />
              </Link>
              <Link to="/">
                <img src={fb} alt="socmed" />
              </Link>
              <Link to="/">
                <img src={linkedin} alt="socmed" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
