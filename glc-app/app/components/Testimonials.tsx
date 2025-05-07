'use client';
import { TextBlob } from './TextBlob';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Testimonials.module.css'
const Testimonials = () => {
  return (
    <TextBlob fullWidth={false}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: SwiperType) => console.log(swiper)}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        className="min-h-[300px]"
      >
        <SwiperSlide>
          <blockquote className={`text-xl md:text-4xl ${styles.testimonial}`}>“My son&apos;s speech has flourished so much from working with Jacie! When a different provider kept dragging their feet in getting my son scheduled, GLC jumped right in. I have nothing but positive things to say about our experience with GLC.”</blockquote>
          <span className={styles.attribution}>- Emily, Client Parent</span>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className={`text-xl md:text-4xl ${styles.testimonial}`}>“Jacie is a phenomenal speech therapist! Our son absolutely loves his time there. Highly recommend Jacie and Greenville Collective Learning.”</blockquote>
          <span className={styles.attribution}>- Amanda, Client Parent</span>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className={`text-xl md:text-4xl ${styles.testimonial}`}>“Sunny was wonderful with our son. She made us feel comfortable during the evaluation, and she was kind and comforting at our follow-up when we were given a diagnosis. That was one of the hardest days of our lives, but I’ll never forget her compassion. ”</blockquote>
          <span className={styles.attribution}>- Bridget, Client Parent</span>
        </SwiperSlide>
        <style jsx>{`
            :global(.swiper-pagination-bullet) {
              width: 12px !important;
              height: 12px !important;
              background-color: #9ca3af !important; /* Tailwind gray-400 */
              opacity: 0.7 !important;
              transition: all 0.3s ease-in-out;
            }

            :global(.swiper-pagination-bullet-active) {
              background-color: #39747f !important; /* Tailwind blue-500 */
              transform: scale(1.3) !important;
            }
          `}
        </style>
      </Swiper>
    </TextBlob>


  );
}
export default Testimonials;