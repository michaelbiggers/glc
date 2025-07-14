import Image from 'next/image';
import user from '@/public/user.png';
import card from '@/public/credit-card.png';
import consultation from '@/public/consultation.png';
import { Button } from './Button';
interface CalloutProps {
  id?: string
}
const Callout = ({ id = '' }: CalloutProps) => {
  return (
    <div className="callout py-12 lg:py-24 px-12 md:px-12 lg:px-48" id={id}>
      <div className="callout__text-container text-center">
        <h2 className="text-4xl font-bold">Comprehensive Evaluations & Therapy for Autism, ADHD, Speech, Language, and Learning Differences</h2>
        <p className="text-xl mt-8">At Greenville Learning Collective (GLC), we believe every individual deserves the right support to communicate, learn, and thrive. Whether you are navigating autism, ADHD, speech and language difficulties, or other learning challenges, we’re here to help with expert evaluations and personalized therapy.</p>
        <div className="icon-bar flex max-w-screen  justify-center items-center m-auto mt-8  center gap-12 ">
          <div className="flex flex-col justify-center items-center">
            <Image src={user} alt="" width={25}></Image>
            <h3>Accepting new clients</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={consultation} alt="" width={25}></Image>
            <h3>Telehealth or in person appointments</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image src={card} alt="" width={25}></Image>
            <h3>Accepts online payments</h3>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center'>
        <Button text="Our Areas of Focus" href="#areas-of-focus"></Button>
      </div>

    </div>
  );
}
export default Callout;