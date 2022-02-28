import Grid from '../../../Components/Section/Grid'

const HelpCenterList = () => {

    const dataList = [
        {
            icon: require('../../../images/icon/task-square.svg').default,
            title: 'Korem',
            info: 'ipsum',
            button: true
        },
        {
            icon: require('../../../images/icon/task-square.svg').default,
            title: 'Korem',
            info: 'ipsum',
            button: true
        },
        {
            icon: require('../../../images/icon/task-square.svg').default,
            title: 'Korem',
            info: 'ipsum',
            button: true
        },
        {
            icon: require('../../../images/icon/task-square.svg').default,
            title: 'Korem',
            info: 'ipsum',
            button: true
        },
        {
            icon: require('../../../images/icon/task-square.svg').default,
            title: 'Korem',
            info: 'ipsum',
            button: true
        },
        {
            icon: require('../../../images/icon/task-square.svg').default,
            title: 'Korem',
            info: 'ipsum',
            button: true
        },
    ]

    return (
        <section className="section">
                    <div className="container">
                        <Grid dataList={dataList} />
                    </div>
                </section>
    )
}

export default HelpCenterList