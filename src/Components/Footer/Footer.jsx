import './Footer.css'
import logo from '../../images/logo-footer.svg'
import language from '../../images/world-black.svg'
import fb from '../../images/socmed/fb.svg'
import twitter from '../../images/socmed/twitter.svg'
import linkedin from '../../images/socmed/linkedin.svg'

const Footer = () => {
    return (
        <footer data-aos="fade-up">
        <div class="container">
          <div class="footer-wrap">
            <div class="footer-left">
              <a href="#" class="brand">
                <img src={logo} alt="brand" />
              </a>
              <p class="subtitle mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum varius pharetra mi.
              </p>

              <div class="lang">
                <img src={language} alt="icon" />
                English
              </div>
            </div>
            <div class="footer-right">
              <ul class="footer-menu">
                <li><h2>Product</h2></li>
                <li><a href="#">Product Tour</a></li>
                <li><a href="#">Benefit</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Help Center</a></li>
              </ul>
              <ul class="footer-menu">
                <li><h2>Feature</h2></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Management</a></li>
                <li><a href="#">Chat</a></li>
                <li><a href="#">File Manager</a></li>
                <li><a href="#">Call & Video Call</a></li>
                <li><a href="#">Mail</a></li>
                <li><a href="#">Event</a></li>
              </ul>
              <ul class="footer-menu">
                <li><h2>Pricing</h2></li>
                <li><a href="#">Plans</a></li>
                <li><a href="#">FaQ</a></li>
              </ul>
              <ul class="footer-menu">
                <li><h2>Company</h2></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Partner Program</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Free Trial</a></li>
                <li><a href="#">Document</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="copyright">
              <span>© Astrac 2021</span>
              <a href="#">Security</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
            <div class="socmed">
              <a href="#"
                ><img src={twitter} alt="socmed"
              /></a>
              <a href="#"
                ><img src={fb} alt="socmed"
              /></a>
              <a href="#"
                ><img src={linkedin} alt="socmed"
              /></a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer