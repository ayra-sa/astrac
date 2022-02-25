import Section from "../../../Components/Section/Section"


const FileManager = () => {

    const projectData = {
        section: false,
        id: 'fm',
        titleSection: 'File Manager',
        imgContent: require('../../../images/file-manager.svg').default,
        reverse: false,
        light: false,
        purple: false,
        rightImg: true,
        left: false
    }

    const contentList = [
        {
            icon: require('../../../images/icon/profile-tick.svg').default,
            title: 'Find Better Leads',
            description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
        },
        {
            icon: require('../../../images/icon/profile-tick.svg').default,
            title: 'Find Better Leads',
            description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
        },
        {
            icon: require('../../../images/icon/profile-tick.svg').default,
            title: 'Find Better Leads',
            description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
        },
    ]

    return (
        <Section contentList={contentList} {...projectData} />
    )
}

export default FileManager