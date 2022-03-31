import { t } from 'i18next'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-home">
        <div className="container">
          <div className="hero-wrapper">
            <div style={{ flex: '40%' }}>
              <h1 className="hero-title">{ t('hero_title') }</h1>
              <p>{ t('hero_p') }</p>
              <Link to='/'>
                <button className="btn-hero btn-primary bg-white mt-4">{ t('button_text') }</button>
              </Link>
            </div>
            <div style={{ flex: '60%' }} >
              <img src="/images/hero-img.svg" alt="hero" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Hero