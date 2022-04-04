import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'
import './Section.css'

const Grid = ({ title, info, button, icon, btn_text }) => {
    return (
                    <div className="item" data-aos="zoom-in">
                        <div className="icon-box">
                            <img src={icon} alt='icon' />
                        </div>
                        <h1 className="title-small">{title}</h1>
                        <p className="subtitle">{info}</p>
                        { button ? (<Link to='/' className='btn-transparent mt-4'>
                            {btn_text} <MdKeyboardArrowRight />
                        </Link>) : null  }            
                    </div>
    )
}

export default Grid