import { BsCheckCircleFill, BsCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Tab.css";

const Tab = (item) => {

  console.log(item)
  const { active, recommended, name, detail, month, year, list, img } = item

  const prc = active === 'Month' ? (`${month}`) : (`${year}`)

  return (
    <div className={ `tab-card ${recommended ? "recommend" : ""}` }>
      {recommended && (
        <div className="r-tag">
          <BsCheck /> RECOMMENDED
        </div>
      )}
      <h2>{name}</h2>
      <div className="price mt-2">
        <div>
          { img ? (<img src={img} alt="img" />) : (<span className="price-text">${prc}</span>) }
          { img ? (<span></span>) : (<span>/mo</span>) }
        </div>
        <p>{detail}</p>
      </div>
      <ul className="card-list">
        {list.map((l) => (
          <li>
            <BsCheckCircleFill /> {l}
          </li>
        ))}
      </ul>
      <div className="btn-container">
        <Link
            to={{
              pathname: `/free-trial-form/${name}`,
              state: { tabItem: item }
            }}
            className={ `btn ${!recommended ? "btn-primary" : "btn-white"}`}
        >
            Subscribe now
        </Link>
      </div>
    </div>
  );
};

export default Tab;
