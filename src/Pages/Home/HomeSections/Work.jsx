import Slider from "../../../Components/Slider/Slider"

const WorkSec = () => {
    return (
        <section id="work">
          <div className="container">
            <img
              src={require("../../../images/better-fit.svg").default}
              className="img-work"
              alt="work"
              data-aos="fade-up"
            />
            <Slider />
          </div>
        </section>
    )
}

export default WorkSec