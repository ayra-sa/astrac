import AllOfYour from "../../Components/AllOfYour/AllOfYour"
import Faq from "../../Components/Faq/Faq"
import HelpCenterList from './HelpCentersSections/HelpCenterList'
import Search from "../../Components/Search/Search"

const HelpCenter = () => {

    const faqData = [
        {
            title: 'What is this?',
            content: 'Lorem ipsum dolor amet'
        },
        {
            title: 'What is this?',
            content: 'Lorem ipsum dolor amet'
        },
        {
            title: 'What is this?',
            content: 'Lorem ipsum dolor amet'
        },
    ]
    return (
        <>
                <Search />

            <main>
            
                <HelpCenterList />

                <section className="section">
                    <div className="container">
                    <div className="faq-wrap center">
                        <p className="top-menu">FAQs</p>
                        <h1 className="title">Frequently Ask Question</h1>
                        <p className="subtitle">Ask your question and meet</p>

                        <Faq faqData={faqData} />

                    </div>
                    </div>
                    {/*<div className="decor">
                    <img src="assets/images/blur-gradient3.svg" alt="decor" />
                    </div>*/}
                </section>

                <AllOfYour />

            </main>
        </>
    )
}

export default HelpCenter