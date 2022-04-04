import { BsCheckCircleFill, BsCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Tab.css";

const Tab = ({ active, recommended, name, detail, month, year, list, img }) => {

  const prc = active === 'Month' ? (`${month}`) : (`${year}`)

  return (
    <div className={recommended ? "tab-card recommend" : "tab-card"}>
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
            to='/free-trial-form'
            className={!recommended ? "btn btn-primary" : "btn btn-white"}
        >
            Subscribe now
        </Link>
      </div>
    </div>
  );
};

export default Tab;
