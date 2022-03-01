import iconTask from '../../../images/icon/task-square.svg'
import { useState } from 'react'
import Grid from '../../../Components/Section/Grid'

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

    const [data, setData] = useState(dataFeatures)

    return (
        <section id="features" className="section">
        <div className="container">
          <div className="features-wrap center">
            <p className="top-menu">FEATURES</p>
            <h1 className="title">What the Features of Product</h1>
            <p className="subtitle">Features are highlighted here</p>

            <div className="row-3 mt-4">
                {data.map(item => (
                    <Grid key={item.title} {...item} />
                ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default Features