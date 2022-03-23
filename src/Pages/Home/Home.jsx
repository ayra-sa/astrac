import "./Home.css";
import Features from "./HomeSections/Features";
import topImg from "../../images/db-img.svg";
import { productData } from "./Data/Product";
import Hero from "../../Components/Hero/Hero";
import { Flex } from "../../Components/Section/Flex";
import Section from "../../Components/Section/Section";
import { chat } from "./Data/Chat";
import { fileManager } from "./Data/FileManager";
import { callVideo } from "./Data/CallVideo";
import { project } from "./Data/Project";
import Customize from "./HomeSections/Customize";
import WorkSec from "./HomeSections/Work";
import TopImg from "../../Components/TopImg/TopImg";
import CookieConsent from "react-cookie-consent";

const Home = () => {
  return (
    <>
      <Hero />
      <main className="main mb-10">
        
        <TopImg topImg={topImg} />

        <section className="section">
          <div className="container">
            <Flex {...productData} />
          </div>
        </section>

        <Features />

        <Section {...project} />

        <Section {...chat} />

        <Section {...fileManager} />

        <Section {...callVideo} />

        <Customize />

        <WorkSec />

        <CookieConsent
          location="bottom"
          buttonText="I agree"
          expires={150}
          buttonStyle={{ background: '#856bfa', color: '#fff', borderRadius: '5px' }}
          cookieName='AstracCookie'
        >
          We use cookies to provide our services. By accessing our website, you agree to the use of cookies as described in our Cookie Policy
        </CookieConsent>
      </main>
    </>
  );
};

export default Home;
