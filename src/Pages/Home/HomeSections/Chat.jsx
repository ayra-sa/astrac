import Section from "../../../Components/Section/Section"


const Chat = () => {

    const projectData = {
        section: true,
        id: 'chat',
        titleSection: 'Chat',
        imgContent: require('../../../images/chat.svg').default,
        reverse: true,
        light: true,
        purple: true,
        rightImg: false,
        left: true
    }

    const contentList = [
        {
            icon: require('../../../images/fm/profile-tick.svg').default,
            title: 'Find Better Leads',
            description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
        },
        {
            icon: require('../../../images/fm/profile-tick.svg').default,
            title: 'Find Better Leads',
            description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
        },
        {
            icon: require('../../../images/fm/profile-tick.svg').default,
            title: 'Find Better Leads',
            description: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.'
        },
    ]

    return (
        <Section contentList={contentList} {...projectData} />
    )
}

export default Chat