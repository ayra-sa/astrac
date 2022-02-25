import iconTask from '../../../images/icon/task-square.svg'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Features = () => {

    const dataFeatures = [
        {
            icon: iconTask,
            title: "Project Management",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere."
        },
        {
            icon: iconTask,
            title: "Project Management",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere."
        },
        {
            icon: iconTask,
            title: "Project Management",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere."
        },
        {
            icon: iconTask,
            title: "Project Management",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere."
        },
        {
            icon: iconTask,
            title: "Project Management",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere."
        },
        {
            icon: iconTask,
            title: "Project Management",
            info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere."
        },
    ]
    return (
        <section id="features" className="section">
        <div className="container">
          <div className="features-wrap center">
            <p className="top-menu">FEATURES</p>
            <h1 className="title">What the Features of Product</h1>
            <p className="subtitle">Features are highlighted here</p>

            <div className="row-3 mt-4">
                {dataFeatures.map(data => (
                    <div className="feature">
                        <div className="icon-box">
                            <img src={data.icon} alt='icon' />
                        </div>
                        <h1 className="title-small">{data.title}</h1>
                        <p className="subtitle">{data.info}</p>
                        <a href="#" className='btn-transparent mt-4'>
                            Learn more <MdKeyboardArrowRight />
                        </a>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Features