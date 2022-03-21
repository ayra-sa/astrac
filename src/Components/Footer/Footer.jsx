import './Footer.css'
import logo from '../../images/logo-footer.svg'
import language from '../../images/world-black.svg'
import fb from '../../images/socmed/fb.svg'
import twitter from '../../images/socmed/twitter.svg'
import linkedin from '../../images/socmed/linkedin.svg'
import { Link } from 'react-router-dom'
import AllOfYour from '../AllOfYour/AllOfYour'

const Footer = () => {
    return (
      <>
          <footer data-aos="fade-up">
        <AllOfYour />
          <div className="container">
            <div className="footer-wrap">
              <div className="footer-left">
                <Link to='/' className="brand">
                  <img src={logo} alt="brand" />
                </Link>
                <p className="subtitle mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum varius pharetra mi.
                </p>

                <div className="lang">
                  <img src={language} alt="icon" />
                  English
                </div>
              </div>
              <div className="footer-right">
                <ul className="footer-menu">
                  <li><h2>Product</h2></li>
                  <li><Link to='/'>Product Tour</Link></li>
                  <li><Link to='/'>Benefit</Link></li>
                  <li><Link to='/'>Security</Link></li>
                  <li><Link to='/'>Help Center</Link></li>
                </ul>
                <ul className="footer-menu">
                  <li><h2>Feature</h2></li>
                  <li><Link to='/'>Project</Link></li>
                  <li><Link to='/'>Chat</Link></li>
                  <li><Link to='/'>File Manager</Link></li>
                  <li><Link to='/'>Call & Video Call</Link></li>
                  <li><Link to='/'>Mail</Link></li>
                  <li><Link to='/'>Event</Link></li>
                </ul>
                <ul className="footer-menu">
                  <li><h2>Pricing</h2></li>
                  <li><Link to='/'>Plans</Link></li>
                  <li><Link to='/'>FaQ</Link></li>
                </ul>
                <ul className="footer-menu">
                  <li><h2>Company</h2></li>
                  <li><Link to='/'>About</Link></li>
                  <li><Link to='/'>Partner Program</Link></li>
                  <li><Link to='/'>Contact</Link></li>
                  <li><Link to='/free-trial'>Free Trial</Link></li>
                  <li><Link to='/'>Document</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="copyright">
                <span>© Astrac 2021</span>
                <Link to='/'>Security</Link>
                <Link to='/'>Privacy</Link>
                <Link to='/'>Terms</Link>
              </div>
              <div className="socmed">
                <Link to='/'
                  ><img src={twitter} alt="socmed"
                /></Link>
                <Link to='/'
                  ><img src={fb} alt="socmed"
                /></Link>
                <Link to='/'
                  ><img src={linkedin} alt="socmed"
                /></Link>
              </div>
            </div>
          </div>
        </footer>
      </>
    )
}

export default Footer