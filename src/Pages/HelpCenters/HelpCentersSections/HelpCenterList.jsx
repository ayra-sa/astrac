import { useState } from "react";
import Grid from "../../../Components/Section/Grid";
import { RiSearch2Line } from "react-icons/ri";

const HelpCenterList = () => {
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

  return (
    <>
      <div id="search-hero" className="p-20">
        <h2 className="center">Help Center</h2>
        <div className="search">
          <RiSearch2Line />
          <input
            type="text"
            id="search"
            onChange={(event) => setValue(event.target.value)}
            placeholder="Search for articles..."
          />
        </div>
      </div>

      <section className="section" id="hc-list">
      <div className="decor" style={{ left: 20}}>
          <img src="/images/list-decor.svg" alt="decor" />
        </div>
        <div className="decor" style={{ right: 20 }}>
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
