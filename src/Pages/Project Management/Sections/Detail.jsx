import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../pm.css";

export const Detail = () => {
  const detailData = [
    {
      id: 0,
      title: "Task Management",
      photo: "/images/detail.svg",
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam consequatur et error porro cum mollitia repellat praesentium ducimus sequi quod nobis doloribus, labore eligendi corrupti eveniet rerum modi veniam. Tempora!",
    },
    {
      id: 1,
      title: "Visualize",
      photo: "/images/detail.svg",
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam consequatur et error.",
    },
    {
      id: 2,
      title: "Comment",
      photo: "/images/detail.svg",
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      id: 3,
      title: "Timeline",
      photo: "/images/detail.svg",
      detail:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. lorem dolor amet",
    },
  ];

  const [value, setValue] = useState(0);

  const { id, title, photo, detail } = detailData[value];

  const next = detailData.length - 1;

  console.log(id.length, value);

  return (
    <section className="section" id="detail">
      <div className="container">
        <h2 className="center">Detail Features</h2>

        <div className="tab-menu mt-4">
          {detailData.map((data, index) => (
            <>
              <div
                key={data.title}
                className={`menu ${index === value ? "active" : ""}`}
                onClick={() => setValue(index)}
              >
                {data.title}
              </div>
            </>
          ))}
        </div>

        <div style={{ position: 'relative' }}>
          <div className="text center" style={{ marginInline: "auto" }}>
            <button
              onClick={() => setValue(id - 1)}
              disabled={value === 0 ? true : false}
              className="btn-arrow btn-prev"
            >
              <IoIosArrowBack />
            </button>

            <button
              onClick={() => setValue(id + 1)}
              disabled={value === next ? true : false}
              className="btn-arrow btn-next"
            >
              <IoIosArrowForward />
            </button>
            <div className="mt-4">
              <p>{detail}</p>
              <div className="center mt-4">
                <img src={photo} alt="project" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
