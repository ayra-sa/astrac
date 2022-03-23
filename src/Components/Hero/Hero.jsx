import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
        <div className="container">
          <div className="hero-wrap" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="hero-title">
              Introducing The Only Tool <br />that You'll Ever Need
            </h1>
            <p>
              We've helped Over 25K+ Individuals and <br />Companies to Grow
              Their Business Successfully
            </p>
            <Link to='/'>
              <button className="btn-hero btn-primary mt-4">Start Free Trial</button>
            </Link>
          </div>
        </div>
      </section>
    )
}

export default Hero