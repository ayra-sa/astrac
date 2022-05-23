import { t } from "i18next"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"

const ProductSec = ({ reverse, sub_title, title, description, img }) => {
    return (
        <section className="section">
            <div className={ `flex ${reverse ? 'reverse' : ''}`} >
                <div className="column">
                    <span className="top-menu">{sub_title}</span>
                    <h1 className="title">{title}</h1>
                    <div className="text">
                        <p className="subtitle">{description}</p>
                    </div>
                    <Link to='/' className='btn-transparent mt-4'>
                        Learn more <MdKeyboardArrowRight />
                    </Link>
                </div>

                <div className="column" data-aos="zoom-in">
                    <img src={img} alt={title} />
                </div>
            </div>
        </section>
    )
}

export default ProductSec