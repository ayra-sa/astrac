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
      </main>
    </>
  );
};

export default Home;
