'use client';
import { Navigation } from "@/app/components/navigation/navigation";
import HeroSplit from "@/app/components/Hero/HeroSplit";
import { Button } from "@/app/components/Button";
import { AppointmentButton } from "@/app/components/SimplePractice";
import bg from "@/public/demo_1.jpg";
import bird from "@/public/bird-logo.svg";
import { TextBlob } from "@/app/components/TextBlob";
import Image from "next/image";
export default function Assessments() {
  return (
    <>
      <Navigation></Navigation>
      <HeroSplit
        backgroundImage={bg}
        position="start">
        <h1 className="text-3xl md:text-5xl mb-4 font-bold">Educational Assessments and Diagnostic Services</h1>
        <p className="mb-6 text-lg">At GLC, we’re here to help you or your child better understand how you learn, communicate, and grow. We offer comprehensive assessments, expert diagnoses, and personalized therapy to support individuals with a variety of developmental, educational, and cognitive needs.</p>
        <Button href="#areas-we-support" text="Learn More"></Button>
      </HeroSplit>
      <div className="bg-white">
        <div className="px-12 py-24 max-w-6xl m-auto">
          <h2 className="text-2xl md:text-5xl mb-4 text-center max-w-2xl m-auto">Clarity, Understanding, and Support for Every Journey</h2>
          <p className="mb-4 text-lg md:text-center">Our evaluations are designed to provide clear answers, compassionate guidance, and practical next steps for you and your family. Whether you’re seeking an evaluation, a formal diagnosis, or ongoing therapy support, we are here to walk alongside you at every stage.</p>
          <p className="mb-6 text-lg md:text-center">We serve clients of all ages, from early childhood through adulthood.</p>

        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-12 max-w-7xl m-auto" id='areas-we-support'>
        <div className="md:basis-2/3 px-12 pb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-1">Services We Offer</h2>
          <h3 className="text-xl md:text-3xl mb-2">Educational and Developmental Assessments:</h3>
          <ul className="list-disc ps-8 mb-8">
            <li>Psychoeducational evaluations</li>
            <li>Academic achievement testing</li>
            <li>Cognitive and learning profiles</li>
            <li>Social, emotional, and behavioral screenings</li>
          </ul>
          <h3 className="text-xl md:text-3xl mb-2">Diagnostic Evaluations:</h3>
          <ul className="list-disc ps-8 mb-8">
            <li>Autism Spectrum Disorder (ASD) evaluations</li>
            <li>ADHD evaluations</li>
            <li>Learning disability diagnoses (e.g., dyslexia, dysgraphia)</li>
          </ul>
          <h3 className="text-xl md:text-3xl mb-2">Therapy and Support Services:</h3>
          <ul className="list-disc ps-8">
            <li>Therapy and intervention planning for diagnosed learning differences</li>
            <li>Support for executive functioning challenges</li>
            <li>Counseling and parent/caregiver coaching following diagnosis</li>
            <li>Collaborative goal-setting and educational planning</li>
          </ul>
        </div>
        <div className="md:basis-1/3 mb-12">
          <TextBlob color="orange" classNames="text-white rounded-[24px]" useLargePadding={false}>
            <div className="bg-white w-[64px] h-[64px] rounded-full flex align-middle p-1 m-auto">
              <Image src={bird} alt="" width={64} height={64}></Image>
            </div>
            <h2 className="text-2xl font-bold text-center">What to Expect</h2>
            <p className="text-lg mb-2"><strong>Assessment sessions</strong> are tailored to the needs of each individual and typically occur over multiple appointments.</p>
            <p className="text-lg mb-2"><strong>Comprehensive feedback sessions</strong> ensure you fully understand the evaluation results and have a clear plan for next steps.</p>
            <p className="text-lg mb-2"><strong>Therapy and follow-up services</strong> are customized to support your personal goals and growth.</p>
          </TextBlob>
        </div>
      </div >
      <TextBlob color="green" fullWidth={false} classNames="mb-12">
        <div className="text-center text-white">
          <h3 className="text-3xl md:text-5xl font-bold mb-1">Let’s Get Started</h3>
          <p className="text-2xl md:text-3xl mb-4">We’re here to provide answers, support, and encouragement — every step of the way.<br></br>Reach out today to schedule an assessment or consultation!</p>

          <AppointmentButton text="Schedule a Consultation" useButtonStyles></AppointmentButton>
        </div>
      </TextBlob>
    </>

  );
}
