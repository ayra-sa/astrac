import { MdKeyboardArrowRight } from "react-icons/md"

const Product = () => {
    return (
        <section className="product">
        <div className="container">
          <div className="col-wrap">
            <div className="left-content">
              <p className="top-menu">PRODUCT</p>
              <h1 className="title">
                Great Teams Manage Their Time Effectively And Plan Their
                Projects Ahead of Time.
              </h1>
              <p className="subtitle">
                We’ve helped Over 25K+ Individuals and <br />Companies to Grow
                Their Business Successfully
              </p>
              <a href="#" className="btn-transparent mt-4"
                >Learn more <MdKeyboardArrowRight /> </a>
            </div>
            <div className="right-content" data-aos="fade-up">
              <img src={require('../../../images/product.svg').default} alt="product" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Product