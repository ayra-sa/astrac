import { FormInput } from "../../../Components/Form/Form";

export const FreeTrialForm = () => {
  return (
      <>
      <div className="hero">
          <div className="container">
              <div className="center">
                <span>Free Trial</span>
                <h2 className="mt-2">How Can We Help?</h2>
                <div className="w m-auto">
                    <p className="mt-2">Please feel free to contact us with any questions you may have.We will check the contents of your inquiry and reply to you as soon as possible.</p>
                </div>
              </div>
          </div>
      </div>
        <main>
        <section className="section">
            <div className="container">
            <div className="contact-wrap">
                <div className="center">
                <h1 className="title">Premium plan</h1>
                <p className="subtitle">
                    Start for free for 30 days. No payment information required
                </p>
                </div>

                <form action="" className="form">
                    <FormInput label='Company Name' type='text' id='company' />
                    <FormInput label='First Name' type='text' id='fname' />
                    <FormInput label='Last Name' type='text' id='lname' />
                    <FormInput label='Email Address' type='email' id='email' />
                    <FormInput label='Your Password' type='password' id='password' />
                    <div style={{display: 'flex', alignItems: 'center', gap: '18px'}}>
                        <input type="checkbox" name="check" id="check" />
                        <span>Receive notifications from Astrac by email Product updates, newsletters and promotions...etc</span>
                    </div>

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
