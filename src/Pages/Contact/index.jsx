import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { send } from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const initialValues = {
    company: "",
    fname: "",
    lname: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toSend, setToSend] = useState({
    fname: '',
    lname: '',
    company: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.company.trim() === '' || formValues.email.trim() === '' || formValues.fname.trim() === '' || formValues.lname.trim() === '') {
      setFormErrors(validate(formValues))
    } else {
      send(
        'service_hsga08l',
        'template_felt79m',
        toSend,
        '-ih-AP-Hbrl5XOh1S'
      )
      .then((response) => {
        console.log(response.status, response.text)
      })
      .catch(err => {
        console.log(err)
      })
      setIsSubmit(true);
      setFormErrors({})
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
      setIsOpen(true);
    }
    // eslint-disable-next-line
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.company) {
      errors.company = "Company is required";
    }
    if (!values.fname) {
      errors.fname = "First Name is required";
    }
    if (!values.lname) {
      errors.lname = "Last Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Message is required"
    }
    return errors;
  };

  return (
    <>
      <div className="hero-2">
        <div className="container">
          <div className="center">
            <span>Contact</span>
            <h1 className="mt-2 hero-title-secondary">How Can We Help?</h1>
            <div className="w m-auto mt-2">
              <p>
                Please feel free to contact us with any questions you may
                have.We will check the contents of your inquiry and reply to you
                as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <main>
        <section className="section" id="contactForm">
          <div className="container">
            {Object.keys(formErrors).length === 0 && isSubmit && isOpen ? (
              <div className="success">
                Thank you, your message has been sent
                <span onClick={() => setIsOpen(false)}>
                  <IoIosClose />
                </span>
              </div>
            ) : null}
            <div className="contact-wrap">
              <div className="center">
                <h1 className="title">Contact Us</h1>
                <p className="subtitle">
                  Do you have any question? Feel free to ask us
                </p>
              </div>
              <form action="" onSubmit={handleSubmit} className="form">
                <div className="formInput">
                  <label htmlFor="company">
                    Company<span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="input"
                    autoComplete="off"
                    value={formValues.company}
                    onChange={handleChange}
                  />
                  <p>{formErrors.company}</p>
                </div>
                <div className="formInput">
                  <label htmlFor="fname">
                    First Name<span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="input"
                    autoComplete="off"
                    value={formValues.fname}
                    onChange={handleChange}
                  />
                  <p>{formErrors.fname}</p>
                </div>
                <div className="formInput">
                  <label htmlFor="lname">
                    Last Name<span className="star">*</span>
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    className="input"
                    autoComplete="off"
                    value={formValues.lname}
                    onChange={handleChange}
                  />
                  <p>{formErrors.lname}</p>
                </div>
                <div className="formInput">
                  <label htmlFor="email">
                    Email<span className="star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    autoComplete="off"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <p>{formErrors.email}</p>
                </div>
                <div className="formInput">
                  <label htmlFor="message">
                    Message<span className="star">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    value={formValues.message}
                    onChange={handleChange}
                  ></textarea>
                  <p>{formErrors.message}</p>
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
