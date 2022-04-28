import { useState } from "react";
import Grid from "../../../Components/Section/Grid";
import { RiCloseFill, RiSearch2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Particle } from "../../../Components/Particles/Particle";
// import Privacy from "../../Privacy";
// import { getSearchResults } from "./search.util";

const HelpCenterList = ({ data }) => {
  console.log(data);
  const dataList = [
    {
      icon: "/images/icon/crown.svg",
      title: "Start Guid",
      info: "dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere.",
      button: true,
    },
    {
      icon: "/images/icon/hierarchy-2.svg",
      title: "Features",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere.",
      button: true,
    },
    {
      icon: "/images/icon/setting-2.svg",
      title: "Settings",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere.",
      button: true,
    },
    {
      icon: "/images/icon/empty-wallet.svg",
      title: "Contract and Payment",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere.",
      button: true,
    },
    {
      icon: "/images/icon/call-calling-fill.svg",
      title: "FAQ",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere.",
      button: true,
    },
    {
      icon: "/images/icon/video-play.svg",
      title: "Tutorial",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere.",
      button: true,
    },
  ];

  // const [data, setData] = useState(dataList);
  const [value, setValue] = useState("");

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setValue(searchWord);
    const newFilter = data.filter((dt) => {
      return dt.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setValue("");
  };

  // const enter = event => {
  //   if (event.key === 'Enter') {
  //     // console.log('enter')
  //     // (<Privacy />)
  //     let term = event.target.value
  //     setValue(term)
  //     setFilteredData(getSearchResults(term))
  //   }
  // }

  return (
    <>
      <div className="p-20 hero-2">
        <Particle />
        <h2 className="center">Help Center</h2>
        <div className="search">
          <RiSearch2Line />
          <input
            type="text"
            id="search"
            onChange={handleFilter}
            // onKeyUp={enter}
            value={value}
            placeholder="Search for articles..."
          />
          {value.length !== 0 && (
            <RiCloseFill
              onClick={clearInput}
              style={{
                position: "absolute",
                right: 10,
                cursor: "pointer",
                fontSize: "1.25em"
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
      {/* {value && (
          <p>Search results for {value}</p>
        )}
        <div className={"searchResultsList"} ref={this.searchResultsListRef}>
          {this.state.searchTerm &&
            this.state.searchResults.map((post, index) => (
              <Post key={post.id} content={post.content} index={index} />
            ))}
        </div> */}

      <section className="section" id="hc-list">
        <div className="decor" style={{ left: 20 }}>
          <img src="/images/list-decor.svg" alt="decor" />
        </div>
        <div className="decor right-hc">
          <img src="/images/list-decor.svg" alt="decor" />
        </div>
        <div className="container">
          <div className="row-3">
            {dataList
              .filter((d) => {
                if (value === "") {
                  return d;
                } else if (d.info.toLowerCase().includes(value.toLowerCase())) {
                  return d;
                } else if (d.title.toLowerCase().includes(value.toLowerCase())) {
                  return d;
                }

                return false
              })
              .map((item) => {
                return <Grid key={item.title} {...item} />;
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpCenterList;
