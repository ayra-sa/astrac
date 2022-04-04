import { useState } from "react";
import { Keyboard, Mousewheel, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import '../pm.css'

export const Detail = () => {
  const detailData = [
    {
      photo: "/images/detail.svg",
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam consequatur et error porro cum mollitia repellat praesentium ducimus sequi quod nobis doloribus, labore eligendi corrupti eveniet rerum modi veniam. Tempora!",
    },
    {
      photo: "/images/detail.svg",
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam consequatur et error.",
    },
    {
      photo: "/images/detail.svg",
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
  ];

  const detailTitle = ['Task Mangement', 'Visualize', 'Comment', 'Timeline']

  const [switchActive, setSwitchActive] = useState(detailTitle[0])
  const [contentActive, setContentActive] = useState(detailData[0])

  return (
    <section className="section" id="detail">
      <div className="container">
        <h2 className="center">Detail Features</h2>

        <div className="tab-menu mt-4">
          {detailTitle.map(title => (
            <div
              key={title}
              className={switchActive === title ? "menu active" : "menu"}
              onClick={() => setSwitchActive(title) }
            >
              {title}
            </div>
          ))}
          {/* <div
            className={switchActive === 1 ? "menu active" : "menu"}
            onClick={() => setSwitchActive(1)}
          >
            Visualize
          </div>
          <div
            className={switchActive === 2 ? "menu active" : "menu"}
            onClick={() => setSwitchActive(2)}
          >
            Task Management
          </div>
          <div
            className={switchActive === 3 ? "menu active" : "menu"}
            onClick={() => setSwitchActive(3)}
          >
            Visualize
          </div> */}
        </div>

        <div>
            <div className="text center mt-4" style={{ marginInline: "auto" }}>
              
              {detailData.map(data => (
                <div className='open mt-4'>
                  <p>{data.detail}</p>
                  <div className="center mt-4">
                    <img src={data.photo} alt='project' />
                  </div>
                </div>

              ))}
            </div>
          {/* <div className="open">
            <Swiper
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              
                <SwiperSlide>
                </SwiperSlide>
            </Swiper>
          </div> */}
          {/* <div className={switchActive === 1 ? "open" : "hidden"}>
            <div className="text center mt-4" style={{ marginInline: "auto" }}>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
              </p>
            </div>
            <Swiper
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {detailData.map((data) => (
                <SwiperSlide>
                  <div className="swiper-slide mt-4">
                    <div className="center">
                      <img src={data.photo} alt='project' />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={switchActive === 2 ? "open" : "hidden"}>
            <div className="text center mt-4" style={{ marginInline: "auto" }}>
              <p>
                Lorem ipsum dolor, sit a
              </p>
            </div>
            <Swiper
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {detailData.map((data) => (
                <SwiperSlide>
                  <div className="swiper-slide mt-4">
                    <div className="center">
                      <img src={data.photo} alt='project' />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={switchActive === 3 ? "open" : "hidden"}>
            <div className="text center mt-4" style={{ marginInline: "auto" }}>
              <p>
                consectetur adipisicing elit. Non
                impedit, accusamus voluptatem placeat saepe quisquam!
              </p>
            </div>
            <Swiper
              cssMode={true}
              navigation={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {detailData.map((data) => (
                <SwiperSlide>
                  <div className="swiper-slide mt-4">
                    <div className="center">
                      <img src={data.photo} alt='project' />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
          
        </div>
      </div>
    </section>
  );
};
