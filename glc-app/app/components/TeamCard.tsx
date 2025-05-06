import styles from './TeamSection.module.css';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '@/public/right-arrow--white.png';
import { ReactNode } from 'react';
interface TeamCard {
  name: { first_name: string, last_name: string };
  title: string;
  href: string;
  photo: string;
  children: ReactNode;
  classNames?: string;
}
const TeamCard = ({ name, title, href, photo, classNames = '', children }: TeamCard) => {
  return (
    <div className={`${styles.team__item} ${classNames} h-[600] rounded-2xl overflow-hidden relative flex basis-full md:basis-1/2 lg:basis-1/3 mx-12 mx-auto lg:flex-1`} style={{ backgroundImage: `url(${photo})` }}>
      <Link href={href} className='w-full flex'>
        <div className={`${styles.team__item_overlay} bg-[#f2ae21] flex flex-col justify-center items-center`}>
          <div>
            <p className='text-xl text-white'>Areas of focus:</p>
            {children}
            <span className='text-white  border-2 py-2 px-4 rounded-xl inline-block'>Meet {name.first_name} <Image src={arrow} alt="" width={15} height={15} className='inline'></Image></span>
          </div>
        </div>
        <div className={styles.team__item_container}>
          <h4 className={`${styles.team__item_title} text-2xl bg-[#f2ae21] flex flex-col font-bold`}>{name.first_name} {name.last_name}
            <span className='text-lg font-normal'>{title}</span></h4>
        </div>
      </Link>
    </div>
  )
}
export default TeamCard;