import { useRef, useState } from "react";
import { RiCloseFill, RiSearch2Line } from "react-icons/ri";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Particle } from "../../Components/Particles/Particle";
import "./Results.css";

const Results = () => {
  const params = useParams();
  const location = useLocation();

  const resultData = location.state;

  console.log(params, location);

  const [value, setValue] = useState("");
  const [search, setSearch] = useState(params.query);

  const [filteredData, setFilteredData] = useState([]);

  //   const handleFilter = (e) => {
  //     const searchWord = e.target.value;
  //     setValue(searchWord);
  //     const newFilter = data.filter((dt) => {
  //       return dt.title.toLowerCase().includes(searchWord.toLowerCase());
  //     });

  //     if (searchWord === "") {
  //       setFilteredData([]);
  //     } else {
  //       setFilteredData(newFilter);
  //     }
  //   };

  const clearInput = () => {
    setFilteredData([]);
    setValue("");
  };

  const navigate = useNavigate();

  const queryRef = useRef(null);

  const enter = (event) => {
    if (event.key === "Enter") {
      navigate(`/results/${queryRef.current.value}`);
      // console.log('enter')
      // (<Privacy />)
      // let term = event.target.value
      // setValue(term)
      // setFilteredData(getSearchResults(term))
    }
  };

  const highLightQuery = (text) => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
    const searchPattern = new RegExp(search, "gi");
    const replacementPattern = "<span class='highlight'>$&</span>";
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
    const replacedString = text.replaceAll(searchPattern, replacementPattern);
    // The $& in the replacement string indicates the matched pattern
    return { __html: replacedString };
  };

  return (
    <>
      <div className="p-20 hero-2">
        <Particle />
        <div className="result-top">
          <h2>Results for "{params.query}"</h2>
        </div>
        <div className="search">
          <RiSearch2Line />
          <input
            type="text"
            id="search"
            // onChange={handleFilter}
            onKeyUp={enter}
            value={value}
            placeholder="Search for articles..."
            ref={queryRef}
          />
          {value.length !== 0 && (
            <RiCloseFill
              onClick={clearInput}
              style={{
                position: "absolute",
                right: 10,
                cursor: "pointer",
                fontSize: "1.25em",
              }}
            />
          )}
          {filteredData.length !== 0 && (
            <div className="result">
              {filteredData.slice(0, 15).map((fdata, index) => {
                return (
                  <Link to="/article" key={index} className="dataItem">
                    {fdata.title}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <section className="result-sec">
        <div className="container">
          {/* <h1>{params.query}</h1> */}
          {resultData
            .filter((d) =>
              search 
                ? // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
                  d.title.match(new RegExp(search, "gi"))
                : console.log('sal')
            )
            .map((fd) => (
              <p
                key={fd.title}
                dangerouslySetInnerHTML={
                search
                  ? highLightQuery(fd.title)
                  : console.loh('ok')
              }>
              </p>
            ))}
        </div>
      </section>
    </>
  );
};

export default Results;
