import { FormInput } from "../../Components/Form/Form";
import "./contact.css";

const Contact = () => {
  return (
    <>
    <div className="hero">
      <div className="container">
        <div className="center">
          <span>Contact</span>
          <h1 className="mt-2">How Can We Help?</h1>
          <div className="w m-auto mt-2">
            <p>Please feel free to contact us with any questions you may have.We will check the contents of your inquiry and reply to you as soon as possible.</p>
          </div>
        </div>
      </div>
    </div>
      <main>
        <section className="section" id="contactForm">
          <div className="container">
            <div className="contact-wrap">
              <div className="center">
                <h1 className="title">Contact Us</h1>
                <p className="subtitle">
                  Do you have any question? Feel free to ask us
                </p>
              </div>
              <form action="" className="form">
                <FormInput label="Company Name" type="text" id="company" />
                <FormInput label="First Name" type="text" id="fname" />
                <FormInput label="Last Name" type="text" id="lname" />
                <FormInput label="Email Address" type="email" id="email" />
                <div className="formInput">
                  <label htmlFor="message">Message<span className="star">*</span></label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <div className="mt-4 center">
                  <button type="submit" className="btn btn-primary">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    
    </>
  );
};

export default Contact;
