'use client';
import { Navigation } from "@/app/components/navigation/navigation";
import HeroSplit from "@/app/components/Hero/HeroSplit";
import { Button } from "@/app/components/Button";
import { AppointmentButton } from "@/app/components/SimplePractice";
import bg from "@/public/demo_1.jpg";
import bird from "@/public/bird-logo.svg";
import { TextBlob } from "@/app/components/TextBlob";
import Image from "next/image";
export default function Speech() {
  return (
    <>
      <Navigation></Navigation>
      <HeroSplit
        backgroundImage={bg}
        position="start">
        <h1 className="text-3xl md:text-5xl mb-4 font-bold">Speech-Language <br></br>Therapy</h1>
        <p className="mb-6 text-lg">At GLC, we’re here to help you or your child build strong communication skills, boost confidence, and find joy in every step of the journey. We offer personalized evaluations and therapy for a variety of speech, language, and learning needs.</p>
        <Button href="#areas-we-support" text="Learn More"></Button>
      </HeroSplit>
      <div className="bg-white">
        <div className="px-12 py-24 max-w-6xl m-auto">
          <h2 className="text-2xl md:text-5xl mb-4 text-center max-w-2xl m-auto">Speech and Language Support That Grows With You</h2>
          <p className="mb-6 text-lg md:text-center">No two journeys are exactly alike — and that’s why we tailor our approach to meet each person’s unique needs. Whether you’re seeking support for speech clarity, language development, social communication, or literacy skills, our team is here to walk alongside you with expert care and encouragement. We support clients of all ages, from young children to adults, at every stage of their communication journey.</p>

        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-12 max-w-7xl m-auto" id='areas-we-support'>
        <div className="md:basis-2/3 px-12 pb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-1">Areas We Support</h2>
          <h3 className="text-xl md:text-3xl mb-2">Speech and Language Challenges:</h3>
          <ul className="list-disc ps-8 mb-8">
            <li>Developmental language delays</li>
            <li>Speech sound, articulation, and phonological disorders</li>
            <li>Motor speech challenges, including Childhood Apraxia of Speech (CAS)</li>
            <li>Expressive and receptive language disorders</li>
            <li>Language- and literacy-based learning differences</li>
            <li>Phonemic awareness, spelling, reading, and writing support</li>
            <li>Fluency challenges (stuttering and cluttering)</li>
            <li>Voice therapy</li>
            <li>Social communication skills</li>
            <li>Alternative and augmentative communication (AAC)</li>
          </ul>
          <h3 className="text-xl md:text-3xl mb-2">Communication Difficulties Related to Medical or Developmental Conditions:</h3>
          <ul className="list-disc ps-8">
            <li>ADHD</li>
            <li>Autism Spectrum Disorder</li>
            <li>Traumatic Brain Injury (TBI)</li>
            <li>Situational/Selective Mutism</li>
            <li>Cognitive differences</li>
          </ul>
        </div>
        <div className="md:basis-1/3 mb-12">
          <TextBlob color="orange" classNames="text-white rounded-[24px]" useLargePadding = {false}>
            <div className="bg-white w-[64px] h-[64px] rounded-full flex items-center p-1 m-auto">
              <Image src={bird} alt="" width={64} height={64}></Image>
            </div>
            <h2 className="text-2xl font-bold text-center">What to Expect</h2>
            <p className="text-lg mb-2">Evaluations typically take between 45 and 90 minutes, depending on individual needs.</p>
            <p className="text-lg mb-2">Therapy sessions are available in 30, 45, or 60-minute formats, customized to fit each client’s goals.</p>
          </TextBlob>
        </div>
      </div >
      <TextBlob color="green" fullWidth = {false} classNames = "mb-12">
        <div className="text-center text-white">
          <h3 className="text-3xl md:text-5xl font-bold mb-1">Let’s Get Started</h3>
          <p className="text-2xl md:text-3xl mb-4">We’re here to support you — every step of the way. <br></br>Reach out today!</p>

          <AppointmentButton text="Schedule a Consultation" useButtonStyles></AppointmentButton>
        </div>
      </TextBlob>
    </>

  );
}
