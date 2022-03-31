import './Navbar.css'
import { Link } from 'react-router-dom'
import world from '../../images/world.svg'
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
        <nav className={navbar ? 'navbar active' : 'navbar'} data-aos="fade-up">
        <div className="container" ref={ref}>
          <div className="navbar-wrap">
            <div className="navbar-left">
              <Link to='/' className='brand'>
                <img src='/images/logo.svg' alt="brand" />
              </Link>
              <ul className="nav-menu" id={navOpen ? 'hidden-menu' : ''}>
                <li className="link-item"><Link to='/product'>Product</Link></li>
                <li className="">
                  <div className="dropdown">
                    <Link to='/feature' className='dropbtn link-item'>Features</Link>
                    <span onClick={() => setDropdown(!dropdown)}>{ dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                    <div className={ dropdown ? 'dropdown-content' : 'hide' } onClick={() => setDropdown(false)} >
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
                    <img src='images/world.svg' alt="icon" /> English
                  </Link>
                </li>
              </ul>
            </div>

            <div className="navbar-right">
              <div className="lang-dd" onClick={() => setLangOpen(!langOpen)}>
                <img src='images/world.svg' alt="icon" />
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