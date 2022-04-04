import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"


const Section = ({
    section, contentList, id, titleSection, imgContent, reverse, light, purple, rightImg, left
}) => {
    return (
        <section className={ section ? 'section' : '' } id={id}>
        <div className="container">
          <div className={ reverse ? 'col-wrap reverse' : 'col-wrap'}>
            <div className="left-content">
              <h1 className="title">{titleSection}</h1>
              {contentList.map(list => (
                  <div className="content-list">
                    <div className={ purple ? 'icon-box-large purp' : 'icon-box-large' }>
                      <img src={list.icon} alt="icon" />
                    </div>
                    <div className="desc">
                      <h1 className="title-small">{list.title}</h1>
                      <div className="text">
                        <p className={ light ? 'subtitle white' : 'subtitle' }>{list.description}</p>
                      </div>
                    </div>
                  </div>
                  ))}
                  <Link to='/' className={ light ? "btn-transparent white mt-4" : 'btn-transparent mt-4' }
                    >Learn more <MdKeyboardArrowRight /> </Link>
            </div>

            <div className={ rightImg ? 'right-content img' : 'right-content' }>
              <img src={imgContent} alt="project" className={ left ? 'img left' : '' } data-aos="zoom-in" />
            </div>
          </div>
        </div>

        {/* <div className="decor">
          <img src="assets/images/blur-gradient.svg" alt="decor">
        </div> */}
      </section>
    )
}

export default Section