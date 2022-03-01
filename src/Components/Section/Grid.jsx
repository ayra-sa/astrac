import {MdKeyboardArrowRight} from 'react-icons/md'
import './Section.css'

const Grid = ({ title, info, button, icon }) => {
    return (
                    <div className="item" data-aos='fade-up'>
                        <div className="icon-box">
                            <img src={icon} alt='icon' />
                        </div>
                        <h1 className="title-small">{title}</h1>
                        <p className="subtitle">{info}</p>
                        { button ? (<a href="#" className='btn-transparent mt-4'>
                            Learn more <MdKeyboardArrowRight />
                        </a>) : null  }            
                    </div>
    )
}

export default Grid