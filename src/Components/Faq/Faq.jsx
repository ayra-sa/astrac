import { useState } from "react"
import './Faq.css'

const Faq = ({faqData}) => {

    const [open, setOpen] = useState(false)

    return (
        <div className="faq mt-4">
            {faqData.map(faq => (
                <div className="accordion-item">
                    <div className="accordion-title" onClick={() => setOpen(!open)}>
                        <div>{faq.title}</div>
                        <div>{ open ? '-' : '+' }</div>
                    </div>
                    { open && <div className="accordion-content">{faq.content}</div> }
                </div>
            ))}
                    {/* <div className="accordion-block">
                        <a className="accordion">
                            Lorem, ipsum.
                        <img src="assets/images/icon/arrow-right.svg" alt="icon" />
                        </a>
                        <div className="panel">
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div> */}


                </div>
    )
}

export default Faq