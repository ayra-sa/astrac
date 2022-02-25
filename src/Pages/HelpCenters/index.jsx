import AllOfYour from "../../Components/AllOfYour/AllOfYour"
import Search from "../../Components/Search/Search"

const HelpCenter = () => {
    return (
        <>
                <Search />

            <main>
            
                <section className="section">
                    <div className="container">
                        <div className="row-3" id="help-center-list">
                            <div className="hc-item">
                                <img src="assets/images/icon/crown.svg" alt="icon" />
                                <h2>Start</h2>
                                <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis eos facilis!</p>
                            </div>
                            
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                    <div className="faq-wrap center">
                        <p className="top-menu">FAQs</p>
                        <h1 className="title">Frequently Ask Question</h1>
                        <p className="subtitle">Ask your question and meet</p>

                        

                    </div>
                    </div>
                    <div className="decor">
                    <img src="assets/images/blur-gradient3.svg" alt="decor" />
                    </div>
                </section>

                <AllOfYour />

            </main>
        </>
    )
}

export default HelpCenter