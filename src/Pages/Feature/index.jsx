import Section from "../../Components/Section/Section"
import TopImg from "../../Components/TopImg/TopImg"
import { cvData } from "./Data/CallVideo"
import { chatData } from "./Data/Chat"
import { dbData } from "./Data/Dashboard"
import { eventData } from "./Data/Event"
import { fmData } from "./Data/FileManager"
import { mailData } from "./Data/Mail"
import { pmData } from "./Data/ProjectManagement"
import './Feature.css'

const Feature = () => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="center">
                        <span>Features</span>
                        <h1 className="hero-title">Many Features To Make Your Business Communication Smoother</h1>
                    </div>
                </div>
            </div>
            <main className="main mb-10">
                <TopImg topImg='../../images/db-img.svg' />
                <Section {...pmData} />
                <Section {...chatData} />
                <Section {...fmData} />
                <Section {...cvData} />
                <Section {...mailData} />
                <Section {...eventData} />
                <Section {...dbData} />
            </main>
        </>
    )
}

export default Feature