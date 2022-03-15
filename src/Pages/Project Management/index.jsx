import { Detail } from './Sections/Detail'

const ProjectManagement = () => {
    return (
        <>
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
        </>
    )
}

export default ProjectManagement