import { BsCheckCircleFill, BsCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Tab.css";

const Tab = ({ recommended, name, detail, price, list }) => {
  return (
    <div className={recommended ? "tab-card recommend" : "tab-card"} key={name}>
      {recommended && (
        <div className="r-tag">
          <BsCheck /> RECOMMENDED
        </div>
      )}
      <h2>{name}</h2>
      <div className="price mt-2">
        <div>
          <span className="price-text">${price}</span>
          <span>/mo</span>
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
