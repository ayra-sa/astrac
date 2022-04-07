import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {CgClose, CgMenuLeft} from 'react-icons/cg'
import { useEffect, useState, useRef } from 'react'
import i18next from 'i18next'

const Navbar = ({langs, currentLanguageCode}) => {

  const [navbar, setNavbar] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const ref = useRef()

  const changeNav = () => {
    window.scrollY >= 80 ? setNavbar(true) : setNavbar(false)
  }

  useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
  }, [])

  useEffect(() => {
    const handleOutside = (e) => {

      if (langOpen && ref.current && !ref.current.contains(e.target)) {
        setLangOpen(false)
      } else if (dropdown && ref.current && !ref.current.contains(e.target)) {
        setDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleOutside)

    return () => {
      document.removeEventListener('mousedown', handleOutside)
    }
  }, [langOpen, dropdown])


  
    return (
        <nav className={ `navbar ${navbar ? 'active' : ''}` } data-aos="fade-up">
        <div className="container" ref={ref}>
          <div className="navbar-wrap">
            <div className="navbar-left">
              <NavLink to='/' className='brand'>
                <img src='/images/logo.svg' alt="brand" />
              </NavLink>
              <ul className="nav-menu" id={navOpen ? 'hidden-menu' : ''}>
                <li className="link-item"><NavLink to='/product' className={({isActive}) => (isActive ? 'active-page' : '')} >Product</NavLink></li>
                <li className="">
                  <div className="dropdown">
                    <div className="dropbtn link-item">
                      <NavLink to='/feature' className={({isActive}) => (isActive ? 'active-page' : '' )}>Features</NavLink>
                    </div>
                    <span onClick={() => setDropdown(!dropdown)}>{ dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                    <div className={ dropdown ? 'dropdown-content' : 'hide' } onClick={() => setDropdown(false)} >
                      <NavLink to='/project-management'>Project Management</NavLink>
                      <NavLink to='/chat' className='link-item'>Chat</NavLink>
                      <NavLink to='/file-manager' className='link-item'>File Manager</NavLink>
                      <NavLink to='/video-call' className='link-item'>Call & Video Call</NavLink>
                      <NavLink to='/mail' className='link-item'>Mail</NavLink>
                      <NavLink to='/event' className='link-item'>Event</NavLink>
                    </div>
                  </div>
                </li>
                <li className="link-item"><NavLink to='/pricing' className={({isActive}) => (isActive ? 'active-page' : '' )}>Pricing</NavLink></li>
                <li className="link-item"><NavLink to='/help-centers' className={({isActive}) => (isActive ? 'active-page' : '' )}>Help Centers</NavLink></li>
                <li>
                  <NavLink to='/contact' className="btn btn-secondary on-mobo">Contact</NavLink>
                </li>
                <li>
                  <NavLink to='/' className="language on-mobo">
                    <img src='/images/world.svg' alt="icon" /> English
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="navbar-right">
              <div className="lang-dd" onClick={() => setLangOpen(!langOpen)}>
                <img src='/images/world.svg' alt="icon" />
                <div className={ langOpen ? 'language' : 'hide' }>
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
              <NavLink to='/contact'><button className="btn btn-secondary hide-mobo">Contact</button></NavLink>
              <NavLink to='/pricing'><button className="btn btn-primary">Free Trial</button></NavLink>
              <button onClick={() => setNavOpen(!navOpen)} className='hmb'>{ navOpen ? (<CgClose />) : (<CgMenuLeft />) }</button>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar