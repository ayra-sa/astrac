import TopImg from '../../Components/TopImg/TopImg'
import { Detail } from './Sections/Detail'

const ProjectManagement = () => {
    return (
        <>
        <div className="hero">
            <div className="container">
                <div className="center">
                    <span>Project Mangement</span>
                    <h1 className="hero-title mt-2">By organizing the projects of each team, you can Visualize the progress of who is doing what and when.</h1>
                </div>
            </div>
        </div>
        <main className="main mb-10">
            <TopImg topImg={require('../../images/db-img.svg')} />

            <section className="section">
                <div className="container">
                    <div className="flex">
                        <div className="column">
                            <h1 className="title">Project Management</h1>
                            <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos corrupti non quos omnis consequatur.</p>
                        </div>
                        <div className="column">
                            <img src={require('../../images/project.svg').default} alt="project" />
                        </div>
                    </div>
                </div>
            </section>
            <Detail />
        </main>

        </>
    )
}

export default ProjectManagement