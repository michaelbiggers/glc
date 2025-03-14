import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Testimonials = () => {
  return (
    <div className="testimonials py-36 px-48 bg-[#f2ae21] rounded-t-[48px] bg-grain bg-blend-overlay">
      <div className="callout__text-container text-center">
        <p className="text-3xl">Testimonials</p>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper: any) => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper>
      </div>

    </div>
  );
}
export default Testimonials;