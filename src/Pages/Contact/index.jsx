import { Form } from "../../Components/Form/Form";
import './contact.css'

const Contact = () => {
  return (
    <main>
      <section className="section" id="contactForm">
        <div className="container">
            <div className="contact-wrap">
                <div className="center">
                    <h1 className="title">Contact Us</h1>
                    <p className="subtitle">Do you have any question? Feel free to ask us</p>
                </div>
                <Form />
            </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
