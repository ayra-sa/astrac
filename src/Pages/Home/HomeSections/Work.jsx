import { ParticleSection } from "../../../Components/Particles/particle-section"
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
          <ParticleSection id='particle-work' />
          <ParticleSection id='particle-work2' />
        </section>
    )
}

export default WorkSec