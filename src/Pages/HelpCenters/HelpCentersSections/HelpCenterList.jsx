import { useState } from 'react'
import Grid from '../../../Components/Section/Grid'

const HelpCenterList = () => {

    const dataList = [
        {
            icon: require('../../../images/icon/task-square.svg').default,
            title: 'Start Guid',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere.',
            button: true
        },
        {
            icon: require('../../../images/icon/task-square.svg').default,
            title: 'Features',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere.',
            button: true
        },
        {
            icon: require('../../../images/icon/task-square.svg').default,
            title: 'Settings',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere.',
            button: true
        },
        {
            icon: require('../../../images/icon/task-square.svg').default,
            title: 'Contract and Payment',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere.',
            button: true
        },
        {
            icon: require('../../../images/icon/task-square.svg').default,
            title: 'FAQ',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere.',
            button: true
        },
        {
            icon: require('../../../images/icon/task-square.svg').default,
            title: 'Tutorial',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere.',
            button: true
        },
        
    ]

    const [data, setdata] = useState(dataList)

    return (
        <section className="section" id='hc-list'>
                    <div className="container">
                        <div className="row-3">
                            {data.map(item => (
                                <Grid key={item.title} {...item} />
                            ))}
                        </div>
                    </div>
                </section>
    )
}

export default HelpCenterList