import Section from "../../Components/Section/Section"
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
        <main className="mains">
            <Section {...pmData} />
            <Section {...chatData} />
            <Section {...fmData} />
            <Section {...cvData} />
            <Section {...mailData} />
            <Section {...eventData} />
            <Section {...dbData} />
        </main>
    )
}

export default Feature