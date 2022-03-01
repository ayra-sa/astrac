import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo.svg'
import world from '../../../images/world.svg'
import {IoIosArrowDown} from 'react-icons/io'

const Navbar = () => {
  
    return (
        <nav className="navbar" data-aos="fade-up">
        <div className="container">
          <div className="navbar-wrap">
            <div className="navbar-left">
              <Link to='/' className='brand'>
                <img src={logo} alt="brand" />
              </Link>
              <ul className="nav-menu">
                <li className="link-item"><Link to='/'>Product</Link></li>
                <li className="">
                  <div className="dropdown">
                    {/* <button className="dropbtn">
                      Features
                    </button> */}
                    <Link to='/feature' className='dropbtn link-item'>Features <IoIosArrowDown /></Link>
                    <div className="dropdown-content">
                      <Link to='/link' className='link-item'>Project Management</Link>
                      <Link to='/link' className='link-item'>Chat</Link>
                      <Link to='/link' className='link-item'>File Manager</Link>
                      <Link to='/link' className='link-item'>Call & Video Call</Link>
                      <Link to='/link' className='link-item'>Mail</Link>
                      <Link to='/link' className='link-item'>Event</Link>
                    </div>
                  </div>
                </li>
                <li className="link-item"><Link to='/pricing'>Pricing</Link></li>
                <li className="link-item"><Link to='/help-centers'>Help Centers</Link></li>
                <li>
                  <button href="#" className="btn btn-secondary on-mobo">Contact</button>
                </li>
                <li>
                  <a href="" className="on-mobo">
                    <img src="assets/images/world.svg" alt="icon" /> English
                  </a>
                </li>
              </ul>
            </div>

            <div className="navbar-right">
              <a href="" className="language"
                ><img src={world} alt="icon"
              /></a>
              <button href="#" className="btn btn-secondary">Contact</button>
              <button href="#" className="btn btn-primary">Free Trial</button>
              <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar