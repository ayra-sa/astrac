import { t } from 'i18next'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-home">
        <div className="container">
          <div className="hero-wrapper">
            <div style={{ flex: '40%' }}>
              <h1 className="hero-title" data-aos="zoom-in" data-aos-duration="1000">{ t('hero_title') }</h1>
              <p data-aos="zoom-in" data-aos-duration="1000">{ t('hero_p') }</p>
              <Link to='/' data-aos="zoom-in" data-aos-duration="3000">
                <button className="btn-hero btn-primary bg-white mt-4">{ t('button_text') }</button>
              </Link>
            </div>
            <div style={{ flex: '60%' }} data-aos="zoom-in" data-aos-duration="2000" >
              <img src="/images/hero-img.svg" alt="hero" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Hero