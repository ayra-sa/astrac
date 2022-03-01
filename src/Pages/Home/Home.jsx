import Footer from "../../Components/Footer/Footer";
import Slider from "../../Components/Slider/Slider";
import "./Home.css";
import Features from "./HomeSections/Features";
import topImg from "../../images/db-img.svg";
import Project from "./HomeSections/Project";
import Chat from "./HomeSections/Chat";
import FileManager from "./HomeSections/FileManager";
import CallVideo from "./HomeSections/CallVideo";
import AllOfYour from "../../Components/AllOfYour/AllOfYour";
import Product from "./HomeSections/Product";
import { MdKeyboardArrowRight } from "react-icons/md";
import Hero from "../../Components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
    <main className="main">
      <section
        className="image-top"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="container">
          <img src={topImg} alt="db" />
        </div>
      </section>

      <Product />

      <Features />

      <Project />

      <Chat />

      <FileManager />

      <CallVideo />

      <section id="customize">
        <div className="container">
          <div className="customize-wrap center">
            <p className="top-menu">CUSTOMIZE</p>
            <h1 className="title">Better Fit For Your Work</h1>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum varius pharetra mi. <br />
              sUt tristique posuere massa eu lobortis. Maecenas maximus vel
              tellus.
            </p>
            <a href="#" className="btn-transparent justify-center mt-4">
              Contact us <MdKeyboardArrowRight />
            </a>
          </div>
        </div>
        {/* <div className="decor">
          <img src="assets/images/blur-gradient3.svg" alt="decor">
        </div> */}
      </section>

      <section id="work">
        <div className="container">
          <img
            src={require("../../images/better-fit.svg").default}
            className="img-work"
            alt="work"
            data-aos="fade-up"
          />
          <Slider />
        </div>
      </section>
    </main>
    </>
  );
};

export default Home;
