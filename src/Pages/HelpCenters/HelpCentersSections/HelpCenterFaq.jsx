import { useState } from "react";
import Faq from "../../../Components/Faq/Faq";

const HelpCenterFaq = () => {
  const faqData = [
    {
      title: "How much does it cost to be a credit card merchant?",
      content:
        "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
    },
    {
      title: "How much does it cost to be?",
      content:
        "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional.",
    },
    {
      title: "to be a credit card merchant?",
      content:
        "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
    },
    {
      title: "Lorem ipsum dolor?",
      content:
        "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
    },
  ];

  const [data, setdata] = useState(faqData);

  return (
      <section className="section">
          <div className="container">
            <div className="faq-wrap center">
                <p className="top-menu">FAQs</p>
                <h1 className="title">Frequently Ask Question</h1>
                <p className="subtitle">Ask your question and meet</p>

                <div className="faq mt-4">
                    {data.map((item) => (
                    <Faq key={item.title} {...item} />
                    ))}
                </div>
            </div>
          </div>
      </section>
  );
};

export default HelpCenterFaq;
