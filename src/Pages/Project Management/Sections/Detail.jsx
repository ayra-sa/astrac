import { useState } from "react";
// import { Keyboard, Mousewheel, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
import '../pm.css'

export const Detail = () => {
  const detailData = [
    {
      title: 'Task Management',
      photo: "/images/detail.svg",
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam consequatur et error porro cum mollitia repellat praesentium ducimus sequi quod nobis doloribus, labore eligendi corrupti eveniet rerum modi veniam. Tempora!",
    },
    {
      title: 'Visualize',
      photo: "/images/detail.svg",
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam consequatur et error.",
    },
    {
      title: 'Comment',
      photo: "/images/detail.svg",
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      title: 'Timeline',
      photo: "/images/detail.svg",
      detail: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. lorem dolor amet",
    },
  ];


  const [value, setValue] = useState(0)

  const { title, photo, detail } = detailData[value]

  console.log(title)

  return (
    <section className="section" id="detail">
      <div className="container">
        <h2 className="center">Detail Features</h2>

        <div className="tab-menu mt-4">
          {detailData.map((data, index) => (
            <div
              key={data.title}
              className={ `menu ${index === value ? "active" : "" }` }
              onClick={() => setValue(index)}
            >
              {data.title}
            </div>
          ))}
          </div>

        <div>
            <div className="text center mt-4" style={{ marginInline: "auto" }}>
              
                <div className='mt-4'>
                  <p>{detail}</p>
                  <div className="center mt-4">
                    <img src={photo} alt='project' />
                  </div>
                </div>
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
          
        </div>
      </div>
    </section>
  );
};
