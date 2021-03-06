import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Section = ({
  section,
  contentList,
  id,
  titleSection,
  imgContent,
  reverse,
  light,
  purple,
  rightImg,
  left,
  leftDecor,
  rightDecor,
}) => {
  return (
    <section className={section ? "section" : ""} id={id}>
      <div className="container">
        <div className={`col-wrap ${reverse ? "reverse" : ""}`}>
          <div className="left-content">
            <h1 className="title">{titleSection}</h1>
            {contentList.map((list, index) => (
              <div className="content-list" key={index}>
                <div className={`icon-box-large ${purple ? "purp" : ""}`}>
                  <img src={list.icon} alt="icon" />
                </div>
                <div className="desc">
                  <h1 className="title-small">{list.title}</h1>
                  <div className="text">
                    <p className={`subtitle ${light ? "white" : ""}`}>
                      {list.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/"
              className={`btn-transparent mt-4 ${light ? "white" : ""}`}
            >
              Learn more <MdKeyboardArrowRight />{" "}
            </Link>
          </div>

          <div className={`right-content ${rightImg ? "img" : ""}`}>
            <img
              src={imgContent}
              alt="project"
              className={left ? "img left" : ""}
              data-aos="zoom-in"
            />
            {leftDecor ? (
              <div className="decor left">
                <img src="/images/blur-gradient2.svg" alt="decor" />
              </div>
            ) : rightDecor ? (
              <div className="decor right">
                <img src="/images/blur-gradient.svg" alt="decor" />
              </div>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
