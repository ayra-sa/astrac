import { Link } from "react-router-dom";
import { Flex } from "../../Components/Section/Flex";
import TopImg from "../../Components/TopImg/TopImg";
import { Clarification } from "./SectionData/Clarification";
import { Flexible } from "./SectionData/Flexible";
import { sc } from "./SectionData/Sc";
import { Security } from "./SectionData/Security";
import { Work } from "./SectionData/Work";

const Product = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="center">
            <span>Product</span>
            <h1 className="hero-title mt-2">
              Many features to make your business communication...
            </h1>
          </div>
          <div className="btn-container mt-4" style={{ gap: '20px', justifyContent: 'center' }}>
            <Link
              to="/"
              data-aos="zoom-in"
            >
              <button className="btn-hero btn-secondary">Contact</button>
            </Link>
            <Link
              to="/"
              data-aos="zoom-in"
            >
              <button className="btn-hero btn-primary">Free Trial</button>
            </Link>
          </div>
        </div>
      </div>

      <main className="main mb-5 mb-mobo">
        <TopImg topImg="/images/product-topimg.svg" />

        <div className="container">
          <div className="center mt-4">
            <h2 style={{ color: 'var(--purple)' }}>What is Astrac?</h2>
            <div className="text mt-2" style={{ marginInline: "auto" }}>
              <p className="subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                alias labore atque, rerum tempora sint? Corrupti quibusdam,
                reiciendis vero corporis ipsam officiis, earum optio dolor nam
                amet voluptates, laboriosam tempora!
              </p>
            </div>
          </div>

          <Flex {...sc} />
          <Flex {...Clarification} />
          <Flex {...Flexible} />
          <Flex {...Work} />
          <Flex {...Security} />
        </div>
      </main>
    </>
  );
};

export default Product;
