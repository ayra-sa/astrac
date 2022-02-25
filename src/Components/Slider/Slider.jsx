import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import photo from '../../images/photo.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css'

const Slider = () => {

    const dataSlider = [
        { 
            photo: photo,
            name: "John Doe",
            position: 'Sales Manager at Company Name',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere massa eu lobortis. Maecenas maximus vel tellus eu pharetra. Mauris in finibus est, eget volutpat nulla. Sed id felissed urna rutrum cursus. Curabitur tincidunt orci.' 
        },
        { 
            photo: photo,
            name: "John Doe",
            position: 'Sales Manager at Company Name',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere massa eu lobortis. Maecenas maximus vel tellus eu pharetra. Mauris in finibus est, eget volutpat nulla. Sed id felissed urna rutrum cursus. Curabitur tincidunt orci.' 
        },
        { 
            photo: photo,
            name: "John Doe",
            position: 'Sales Manager at Company Name',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum varius pharetra mi. Ut tristique posuere massa eu lobortis. Maecenas maximus vel tellus eu pharetra. Mauris in finibus est, eget volutpat nulla. Sed id felissed urna rutrum cursus. Curabitur tincidunt orci.' 
        }
    ]
  return (
      <>
            <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
                {dataSlider.map(data => (
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="slider-content">
                                <img src={data.photo} alt={data.name} />
                                <div className="desc">
                                    <p>{data.desc}</p>
                                    <div className="name">
                                        <h2>{data.name}</h2>
                                        <p>{data.position}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}            
            
            </Swiper>
      
      </>
  );
};

export default Slider