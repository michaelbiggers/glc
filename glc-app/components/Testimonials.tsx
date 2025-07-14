'use client';
import { TextBlob } from './TextBlob';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        autoHeight={true}
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
          <blockquote className={`text-xl md:text-4xl ${styles.testimonial}`}>“Sunny was wonderful with our son. She made us feel comfortable during the evaluation, and she was kind and comforting at our follow-up when we were given a diagnosis. That was one of the hardest days of our lives, but I&apos;ll never forget her compassion. ”</blockquote>
          <span className={styles.attribution}>- Bridget, Client Parent</span>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className={`text-xl md:text-4xl ${styles.testimonial}`}>“Great experience working with GLC to get my 4 year old son tested for Autism. The evaluation went well and the results we received were very detailed and organized. We were able to use my sons testing results to receive permanent services from the SC Department of Disability and Special Needs after initially receiving a denial. Thank you for all your help, I would definitely recommend GLC to all parents.”</blockquote>
          <span className={styles.attribution}>- Tiara, Client Parent</span>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className={`text-xl md:text-4xl ${styles.testimonial}`}>“Sunny was wonderful to work with. My daughter actually enjoyed their time together for her evaluation. Her report was thorough and she gave us recommendations for next steps.”</blockquote>
          <span className={styles.attribution}>- Leslie, Client Parent</span>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className={`text-xl md:text-4xl ${styles.testimonial}`}>“We absolutely love Greenville Learning Collective. Jacie is amazing, she&apos;s so friendly, knowledgeable, and really knows how to connect with kids.<br />

            She makes therapy fun, which keeps my son engaged and excited to go each week. We&apos;ve seen real progress and feel supported every step of the way. Jacie always takes the time to explain things, answer questions, and celebrate every little win with us.<br />

            If you&apos;re looking for a place that truly cares and delivers results, this is it. We&apos;re so grateful to have found Jacie.”</blockquote>
          <span className={styles.attribution}>- Lorena, Client Parent</span>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className={`text-xl md:text-4xl ${styles.testimonial}`}>“We had a fantastic experience with GLC! Sunny was patient and attentive to both our child and myself and my husband throughout the evaluation. She did a comprehensive assessment -- in-person time, background and history, and making note of all the random details I provided. When we had our review meeting to discuss the results, she was incredibly helpful in explaining the why, validating the things I&apos;d seen that others had dismissed, and validating that I hadn&apos;t biased the results. I appreciate her insight and knowledge so much.”</blockquote>
          <span className={styles.attribution}>- Katie, Client Parent</span>
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