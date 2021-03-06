import { useState } from "react";
import { BsCheck, BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import Tab from "../../../Components/Tab/Tab";

const PricingTab = () => {
  const tabData = [
    {
      name: "Lite",
      month: 90,
      year: 98,
      detail: "Best For Small Sized Teams",
      list: ["Data space 30GB", "User limit 10 users", "Email Support"],
    },
    {
      name: "Standard",
      month: 190,
      year: 198,
      detail: "Best For Mid Sized Teams",
      list: ["Data space 100GB", "User limit 50 user", "Email Support"],
      recommended: true,
    },
    {
      name: "Premium",
      month: 490,
      year: 498,
      detail: "Best For Big Sized Teams",
      list: ["Data space 300GB", "User limit 100 user", "Email Support"],
    },
    {
      name: "Special",
      img: "/images/plan_img.svg",
      detail: "Free capacity and users",
      list: ["Free data space", "Free number of users"],
    },
  ];

  const types = ["Year", "Month"];

  // eslint-disable-next-line no-unused-vars
  const [tabItem, settabItem] = useState(tabData);
  const [switchActive, setSwitchActive] = useState(types[0]);

  return (
    <section className="p-20" id="pricing">
      <div className="container">
        <span>Free Trial</span>
        <h2>The best plan and cost to transform your business communication</h2>

        <div className="tab-switch mt-4">
          {types.map((type) => (
            <div
              key={type}
              className={`switch ${switchActive === type ? "active" : ""}`}
              onClick={() => setSwitchActive(type)}
            >
              {type}
            </div>
          ))}
        </div>

        <div>
          <div className="tab">
            {tabItem.map((item, index) => {

                const { recommended, name, detail, month, year, list, img } = item

              return (

              <div key={index} className={`tab-card ${recommended ? "recommend" : ""}`}>
                {recommended && (
                  <div className="r-tag">
                    <BsCheck /> RECOMMENDED
                  </div>
                )}
                <h2>{name}</h2>
                <div className="price mt-2">
                  <div>
                    {img ? (
                      <img src={img} alt="img" />
                    ) : (
                      <span className="price-text">
                        {switchActive === 'Month' ? `$${month}` : `$${year}`}
                      </span>
                    )}
                    {img ? <span></span> : <span>/mo</span>}
                  </div>
                  <p>{detail}</p>
                </div>
                <ul className="card-list">
                  {list.map((l, index) => (
                    <li key={index}>
                      <BsCheckCircleFill /> {l}
                    </li>
                  ))}
                </ul>
                <div className="btn-container">
                  <Link
                    to={`/free-trial-form/${index}`} state={tabItem}
                    className={`btn ${!recommended ? "btn-primary" : "btn-white"}`}
                  >
                    Subscribe now
                  </Link>
                </div>
              </div>
              )
            }
              //   <Tab key={item.name} {...item} active={switchActive} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTab;
