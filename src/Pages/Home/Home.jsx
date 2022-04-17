import "./Home.css";
import Features from "./HomeSections/Features";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import { chat } from "./Data/Chat";
import { fileManager } from "./Data/FileManager";
import { callVideo } from "./Data/CallVideo";
import { project } from "./Data/Project";
import Customize from "./HomeSections/Customize";
import WorkSec from "./HomeSections/Work";
import { t } from "i18next";
import ProductSec from "./HomeSections/Product";

const Home = () => {

  const productData = t('product_home', {returnObjects: true})
  // console.log(productData)
  
  return (
    <>
      <Hero />
      <main>
        
        {/* <TopImg topImg={topImg} /> */}

        <section className="section-2">
          <div className="container">
            <ProductSec {...productData} />
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
