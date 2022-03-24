import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = ({t}) => {
    return (
        <section className="hero">
        <div className="container">
          <div className="hero-wrap" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="hero-title">
              { t('hero_title') }
            </h1>
            <p>
              {/* We've helped Over 25K+ Individuals and <br />Companies to Grow
              Their Business Successfully */}
              { t('hero_p') }
            </p>
            <Link to='/'>
              <button className="btn-hero btn-primary mt-4">{ t('button_text') }</button>
            </Link>
          </div>
        </div>
      </section>
    )
}

export default Hero