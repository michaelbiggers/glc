import styles from './TeamSection.module.css';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '@/public/right-arrow--white.png';
interface TeamProps {
  text?: string;
}
const TeamSection: React.FC<TeamProps> = ({ text }) => {
  return (
    <div className="team flex flex-wrap lg:flex-nowrap gap-12 lg:px-24 lg:py-24 ">
      {/* Team heading */}
      <div className="team__item  lg:order-1 h-xl lg:h-[600] bg-[#39747f] flex justify-center items-center lg:rounded-2xl basis-full lg:basis-1/3 flex-1">
        <h2 className="text-7xl font-bold text-white p-12">Meet Our Team</h2>
      </div>
      {/* Team member: Sunny */}
      <div className={`${styles.team__item} lg:order-0 h-[600] rounded-2xl overflow-hidden relative flex basis-full md:basis-1/2 lg:basis-1/3 mx-12 md:mx-0 lg:flex-1`} style={{ backgroundImage: 'url(/sunny.jpg)' }}>
        <Link href="/about-us/sunny" className='w-full flex'>
          <div className={`${styles.team__item_overlay} bg-[#f2ae21] flex flex-col justify-center items-center`}>
            <div>
              <p className='text-xl text-white'>Areas of focus:</p>
              <ul className='mb-4 ml-8 list-disc text-white'>
                <li>Autism spectrum disorder</li>
                <li>Dyslexia and discalcula</li>
                <li>Learning assessments</li>
              </ul>
              <span className='text-white  border-2 py-2 px-4 rounded-xl inline-block'>Meet Sunny <Image src={arrow} alt="" width={15} height={15} className='inline'></Image></span>
            </div>
          </div>
          <div className={styles.team__item_container}>
            <h4 className={`${styles.team__item_title} text-2xl bg-[#f2ae21] flex flex-col font-bold`}>Sunny Biggers
              <span className='text-lg font-normal'>School Psychologist</span></h4>
          </div>
        </Link>
      </div>
      {/* Team member: Jacie */}
      <div className={`${styles.team__item} lg:order-2 h-[600] rounded-2xl overflow-hidden relative flex basis-full md:basis-1/2 lg:basis-1/3 mx-12 md:mx-0 lg:flex-1`} style={{ backgroundImage: 'url(/jacie.jpg)' }}>
        <Link href="/about-us/jacie" className='w-full flex'>
          <div className={`${styles.team__item_overlay} bg-[#d14d22] flex justify-center items-center`}>
            <div>
              <p className='text-xl text-white'>Areas of focus:</p>
              <ul className='mb-4 ml-8 list-disc text-white'>
                <li>Speech sound disorders</li>
                <li>Fluency</li>
                <li>Social communication</li>
              </ul>
              <span className='text-white  border-2 py-2 px-4 rounded-xl inline-block'>Meet Jacie <Image src={arrow} alt="" width={15} height={15} className='inline'></Image></span>
            </div>
          </div>
          <div className={styles.team__item_container}>
            <h4 className={`${styles.team__item_title} text-2xl bg-[#d14d22] flex flex-col font-bold`}>Jacie Curry <span className='text-lg font-normal'>CCC-SLP</span></h4>
          </div>
        </Link>
      </div>


    </div>
  );
}
export default TeamSection;