import Section from "../../Components/Section/Section";
import TopImg from "../../Components/TopImg/TopImg";
import { cvData } from "./Data/CallVideo";
import { chatData } from "./Data/Chat";
import { dbData } from "./Data/Dashboard";
import { eventData } from "./Data/Event";
import { fmData } from "./Data/FileManager";
import { mailData } from "./Data/Mail";
import { pmData } from "./Data/ProjectManagement";
import {Link} from 'react-router-dom'
import "./Feature.css";

const Feature = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="center">
            <span>Features</span>
            <h1 className="hero-title">
              Many Features To Make Your Business Communication Smoother
            </h1>
          </div>
          <div
            className="btn-container mt-4"
            style={{ gap: "20px", justifyContent: "center" }}
          >
            <Link to="/" data-aos="zoom-in" className="i-block">
              <button className="btn-hero btn-secondary">Contact</button>
            </Link>
            <Link to="/" data-aos="zoom-in" className="i-block">
              <button className="btn-hero btn-primary">Start Free Trial</button>
            </Link>
          </div>
        </div>
      </div>
      <main className="main mb-10">
        <TopImg topImg="../../images/db-img.svg" />
        <Section {...pmData} />
        <Section {...chatData} />
        <Section {...fmData} />
        <Section {...cvData} />
        <Section {...mailData} />
        <Section {...eventData} />
        <Section {...dbData} />
      </main>
    </>
  );
};

export default Feature;
