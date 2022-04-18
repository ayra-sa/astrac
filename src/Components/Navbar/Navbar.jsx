import './Navbar.css'
import { NavLink } from 'react-router-dom'
import {IoIosArrowDown} from 'react-icons/io'
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
      } else if (navOpen && ref.current && !ref.current.contains(e.target)) {
        setNavOpen(false)
      } 
    }

    document.addEventListener('mousedown', handleOutside)

    return () => {
      document.removeEventListener('mousedown', handleOutside)
    }
  }, [langOpen, dropdown, navOpen])


  
    return (
        <nav className={ `navbar ${navbar ? 'active' : ''}` } data-aos="fade-up">
        <div className="container" ref={ref}>
          <div className="navbar-wrap">
            <div className="navbar-left">
              <NavLink to='/' className='brand'>
                <img src='/images/logo-single.svg' alt="brand" /> <span>Astrac</span>
              </NavLink>
              <ul className="nav-menu" id={navOpen ? 'hidden-menu' : ''}>
                <li className="link-item"><NavLink to='/product' className={({isActive}) => (isActive ? 'active-page' : '')} onClick={() => setNavOpen(false)}>Product</NavLink></li>
                <li className="">
                  <div className="dropdown">
                    <div className="dropbtn link-item">
                      <NavLink to='/feature' className={({isActive}) => (isActive ? 'active-page' : '' )} onClick={() => setNavOpen(false)}>Features</NavLink>
                    </div>
                    <span><IoIosArrowDown /></span>
                    {/* <span onClick={() => setDropdown(!dropdown)}>{ dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}</span> */}
                    <div className="ddown">
                      <div className='dropdown-content'>
                        <NavLink to='/project-management' className='link-item' onClick={() => setNavOpen(false)}>Project Management</NavLink>
                        <NavLink to='/chat' className='link-item' onClick={() => setNavOpen(false)}>Chat</NavLink>
                        <NavLink to='/file-manager' className='link-item' onClick={() => setNavOpen(false)}>File Manager</NavLink>
                        <NavLink to='/video-call' className='link-item' onClick={() => setNavOpen(false)}>Call & Video Call</NavLink>
                        <NavLink to='/mail' className='link-item' onClick={() => setNavOpen(false)}>Mail</NavLink>
                        <NavLink to='/event' className='link-item' onClick={() => setNavOpen(false)}>Event</NavLink>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="link-item"><NavLink to='/pricing' className={({isActive}) => (isActive ? 'active-page' : '' )} onClick={() => setNavOpen(false)}>Pricing</NavLink></li>
                <li className="link-item"><NavLink to='/help-centers' className={({isActive}) => (isActive ? 'active-page' : '' )} onClick={() => setNavOpen(false)}>Help Centers</NavLink></li>
                <li className="link-item"><NavLink to='/documentation' className={({isActive}) => (isActive ? 'active-page' : '' )} onClick={() => setNavOpen(false)}>Documentation</NavLink></li>
                <li>
                  <NavLink to='/contact' className="btn btn-secondary on-mobo" onClick={() => setNavOpen(false)}>Contact</NavLink>
                </li>
                
              </ul>
            </div>

            <div className="navbar-right">
              <div className="lang-dd" onClick={() => setLangOpen(!langOpen)}>
                <img src='/images/world.svg' alt="icon" className='lang-icon' />
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
              <NavLink to='/contact'><button className="btn btn-secondary hide-mobo" onClick={() => setNavOpen(false)}>Contact</button></NavLink>
              <NavLink to='/pricing'><button className="btn btn-primary">Free Trial</button></NavLink>
              <button onClick={() => setNavOpen(!navOpen)} className='hmb'>{ navOpen ? (<CgClose />) : (<CgMenuLeft />) }</button>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar