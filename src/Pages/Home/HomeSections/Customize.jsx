import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"

const Customize = () => {
    return (
        <section id="customize">
          <div className="container">
            <div className="customize-wrap center">
              <p className="top-menu">CUSTOMIZE</p>
              <h1 className="title">Better Fit For Your Work</h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum varius pharetra mi. <br />
                sUt tristique posuere massa eu lobortis. Maecenas maximus vel
                tellus.
              </p>
              <Link to='/' className="btn-transparent justify-center mt-4">
                Contact us <MdKeyboardArrowRight />
              </Link>
            </div>
          </div>
          {/* <div className="decor">
          <img src="assets/images/blur-gradient3.svg" alt="decor">
        </div> */}
        </section>
    )
}

export default Customize