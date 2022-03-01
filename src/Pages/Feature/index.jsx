import Section from "../../Components/Section/Section"
import { cvData } from "./Data/CallVideo"
import { chatData } from "./Data/Chat"
import { fmData } from "./Data/FileManager"
import { pmData } from "./Data/ProjectManagement"

const Feature = () => {
    return (
        <main className="mains">
            <Section {...pmData} />
            <Section {...chatData} />
            <Section {...fmData} />
            <Section {...cvData} />
        </main>
    )
}

export default Feature