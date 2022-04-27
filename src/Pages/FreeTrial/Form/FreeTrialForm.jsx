import { useState, useEffect } from "react";
import Success from "../../../Components/Modal/Success";
import '../../../Components/Form/form.css'
import { Outlet, useLocation, useParams } from "react-router-dom";
import db from '../../../db/db.json'
import { send } from "emailjs-com";
import { Particle } from "../../../Components/Particles/Particle";

export const FreeTrialForm = () => {
  const location = useLocation()
  const {id} = useParams()
  const plan = location.state
  
  const idd = db.map(d => {
    return d.id
  })
   
  const initialValues = {
    fid: "",
    company: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toSend, setToSend] = useState({
    plan: plan[id].name,
    fid: '',
    fname: '',
    lname: '',
    company: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.company.trim() === '' || formValues.email.trim() === '' || formValues.fname.trim() === '' || formValues.lname.trim() === '' || formValues.password.trim() === '') {
      setFormErrors(validate(formValues))
      // console.log(formErrors.fid)
    }
    else {
      send(
        'service_hsga08l',
        'template_9276jrj',
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
  

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    for (let i = 0; i < idd.length; i++) {
      const element = idd[i];
      console.log(element.toLocaleLowerCase())
      if (!values.fid) {
        errors.fid = "ID is required, try 'exampleA'";
      } else if (values.fid === element.toLocaleLowerCase()) {
        errors.fid = "ID already used"
      }
    }

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
        errors.email = "This is not a valid email format!"
    }
    if (!values.password) {
      errors.password = "Password is reequired";
    } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters"
    }
    return errors;
  };

  return (
    <>
      {Object.keys(formErrors).length === 0 && isSubmit && isOpen ? (
        <Success setIsOpen={setIsOpen} />
      ) : null}
      <div className="hero-2">
        <Particle />
        <div className="container">
          <div className="center">
            <span>Free Trial</span>
            <h2 className="mt-2 hero-title-secondary">How Can We Help?</h2>
            <div className="w m-auto">
              <p className="mt-2">
                Please feel free to contact us with any questions you may
                have.We will check the contents of your inquiry and reply to you
                as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="mb-mobo form-bg">
        <section className="section">
          <div className="container">
            <div className="contact-wrap">
              <div className="center">
                <Outlet />
                <h1 className="title">{plan[id].name} plan</h1>
                <p className="subtitle">
                  Start for free for 30 days. No payment information required
                </p>
                <p className="mt-2">Plan: {plan[id].name} Plan</p>
              </div>

              <form action="" className="form" onSubmit={handleSubmit}>
                <div className="id-form">
                  <div className="formInput">
                    <label htmlFor="fid">
                      ID<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      id="fid"
                      name="fid"
                      className="input"
                      autoComplete="off"
                      value={formValues.fid}
                      onChange={handleChange}
                    />
                  </div>
                  <span>.astrac.io</span>
                </div>
                <p>{formErrors.fid}</p>
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
                  <label htmlFor="password">
                    Password<span className="star">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="input"
                    autoComplete="off"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <p>{formErrors.password}</p>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "18px" }}
                >
                  <input type="checkbox" name="check" id="check" />
                  <span>
                    Receive notifications from Astrac by email Product updates,
                    newsletters and promotions...etc
                  </span>
                </div>
                  <span style={{ marginTop: '20px', fontSize: '14px', opacity: '.5' }}>By signing up for a free trial, you agree to Astrac Terms of Service and Privacy Policy.</span>

                <div className="mt-4 center">
                  <button type="submit" className="btn btn-primary">
                    Request Now
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
