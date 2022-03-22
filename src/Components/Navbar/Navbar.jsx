import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.svg'
import world from '../../images/world.svg'
import {IoIosArrowDown} from 'react-icons/io'
import {CgClose, CgMenuLeft} from 'react-icons/cg'
import { useEffect, useState } from 'react'

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

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
              <ul className="nav-menu" id={navOpen ? 'hidden-menu' : ''}>
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
                  <Link to='/' className="language on-mobo">
                    <img src={world} alt="icon" /> English
                  </Link>
                </li>
              </ul>
            </div>

            <div className="navbar-right">
              <Link to='/' className="language hide-mobo"
                ><img src={world} alt="icon"
              /></Link>
              <Link to='/contact'><button className="btn btn-secondary hide-mobo">Contact</button></Link>
              <Link to='/'><button className="btn btn-primary">Free Trial</button></Link>
              <button onClick={() => setNavOpen(!navOpen)} className='hmb'>{ navOpen ? (<CgClose />) : (<CgMenuLeft />) }</button>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar