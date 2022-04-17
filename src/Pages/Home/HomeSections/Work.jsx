import Slider from "../../../Components/Slider/Slider"

const WorkSec = () => {
    return (
        <section id="work">
          <div className="container">
            <img
              src="/images/better-fit.svg"
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