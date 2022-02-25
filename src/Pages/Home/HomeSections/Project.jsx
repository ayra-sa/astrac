import Section from "../../../Components/Section/Section"


const Project = () => {

    const projectData = {
        section: true,
        id: '',
        titleSection: 'Project Management',
        imgContent: require('../../../images/project-management.svg').default,
        reverse: false,
        light: false,
        purple: false,
        rightImg: true,
        left: false
    }

    const contentList = [
        {
            icon: require('../../../images/icon/video.svg').default,
            title: 'Project',
            description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
        },
        {
            icon: require('../../../images/icon/video.svg').default,
            title: 'Project',
            description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
        },
        {
            icon: require('../../../images/icon/video.svg').default,
            title: 'Project',
            description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
        },
    ]

    return (
        <Section contentList={contentList} {...projectData} />
    )
}

export default Project