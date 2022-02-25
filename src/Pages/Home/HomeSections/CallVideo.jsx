import Section from "../../../Components/Section/Section"


const CallVideo = () => {

    const projectData = {
        section: true,
        id: 'true',
        titleSection: 'Call & Video Call',
        imgContent: require('../../../images/call-vidcal.svg').default,
        reverse: true,
        light: false,
        purple: false,
        rightImg: false,
        left: true
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

export default CallVideo