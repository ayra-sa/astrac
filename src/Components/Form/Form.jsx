import './form.css'

export const Form = () => {
  return (
    <form action="" className="form">
      <label htmlFor="company">
        Company Name<span className="star">*</span>
      </label>
      <input type="text" name="company" id="company" />
      <label htmlFor="first-name">
        First Name<span className="star">*</span>
      </label>
      <input type="text" name="first-name" id="first-name" />
      <label htmlFor="last-name">
        Last Name<span className="star">*</span>
      </label>
      <input type="text" name="last-name" id="last-name" />
      <label htmlFor="email">
        Email Address<span className="star">*</span>
      </label>
      <input type="email" name="email" id="email" />
      <label htmlFor="message">
        Message<span className="star">*</span>
      </label>
      <textarea name="message" id="message" cols="30" rows="10"></textarea>

      <div className="mt-4 center">
        <button type="submit" className='btn btn-primary'>Submit Now</button>
      </div>
    </form>
  );
};
