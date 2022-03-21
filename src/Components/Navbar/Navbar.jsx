import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import world from '../../images/world.svg'
import {IoIosArrowDown} from 'react-icons/io'
import { useEffect, useState } from 'react'

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

  const changeNav = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false)
  }

  useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
  })
  
    return (
        <nav className={navbar ? 'navbar active' : 'navbar'} data-aos="fade-up">
        <div className="container">
          <div className="navbar-wrap">
            <div className="navbar-left">
              <Link to='/' className='brand'>
                <img src={logo} alt="brand" />
              </Link>
              <ul className="nav-menu">
                <li className="link-item"><Link to='/product'>Product</Link></li>
                <li className="">
                  <div className="dropdown">
                    {/* <button className="dropbtn">
                      Features
                    </button> */}
                    <Link to='/feature' className='dropbtn link-item'>Features <IoIosArrowDown /></Link>
                    <div className="dropdown-content">
                      <Link to='/project-management' className='link-item'>Project Management</Link>
                      <Link to='/chat' className='link-item'>Chat</Link>
                      <Link to='/file-manager' className='link-item'>File Manager</Link>
                      <Link to='/video-call' className='link-item'>Call & Video Call</Link>
                      <Link to='/mail' className='link-item'>Mail</Link>
                      <Link to='/event' className='link-item'>Event</Link>
                    </div>
                  </div>
                </li>
                <li className="link-item"><Link to='/pricing'>Pricing</Link></li>
                <li className="link-item"><Link to='/help-centers'>Help Centers</Link></li>
                <li>
                  <Link to='/contact' className="btn btn-secondary on-mobo">Contact</Link>
                </li>
                <li>
                  <Link to='/' className="on-mobo">
                    <img src="assets/images/world.svg" alt="icon" /> English
                  </Link>
                </li>
              </ul>
            </div>

            <div className="navbar-right">
              <Link to='/modal' className="language"
                ><img src={world} alt="icon"
              /></Link>
              <Link to='/contact'><button className="btn btn-secondary">Contact</button></Link>
              <Link to='/'><button className="btn btn-primary">Free Trial</button></Link>
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