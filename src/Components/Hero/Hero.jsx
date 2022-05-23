import { t } from "i18next";
import { Link } from "react-router-dom";
import { Particle } from "../Particles/Particle";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-home">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1
              className="hero-title"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              {/* {t("hero_title")} */}
              Introducing The Only Tool that You'll Ever Need
            </h1>
            <p data-aos="zoom-in" data-aos-duration="1000">
              {/* {t("hero_p")} */}
              We've helped Over 25K+ Individuals and Companies to Grow Their Business Successfully
            </p>
            <Link
              to="/"
              data-aos="zoom-in"
              data-aos-duration="3000"
              className="i-block"
            >
              <button className="btn-hero btn-primary bg-white mt-4">
                {/* {t("button_text")} */}
                Start free trial
              </button>
            </Link>
          </div>
          <div
            className="hero-image"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img src="/images/hero-img.svg" alt="hero" />
          </div>
        </div>
      </div>
      <Particle />
    </section>
  );
};

export default Hero;
