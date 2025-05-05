import { Navigation } from "../components/navigation/navigation";
import HeroSplit from "../components/Hero/HeroSplit";
import { Button } from "../components/Button";
import bg from "@/public/demo_1.jpg";
import bird from "@/public/bird-logo.svg";
import { TextBlob } from "../components/TextBlob";
import Image from "next/image";
export default function Services() {
  return (
    <>
      <Navigation></Navigation>
      <HeroSplit
        backgroundImage={bg}
        position="start">
        <h1 className="text-3xl md:text-5xl mb-4 font-bold">Speech-Language <br></br>Therapy</h1>
        <p className="mb-6 text-lg">At GLC, we’re here to help you or your child build strong communication skills, boost confidence, and find joy in every step of the journey. We offer personalized evaluations and therapy for a variety of speech, language, and learning needs.</p>
        <Button href="#" text="Learn More"></Button>
      </HeroSplit>
      <div className="p-12 max-w-6xl m-auto bg-red-50">
        <h2 className="text-2xl md:text-5xl mb-4 text-center max-w-2xl m-auto">Speech and Language Support That Grows With You</h2>
        <p className="mb-6 text-lg md:text-center">No two journeys are exactly alike — and that’s why we tailor our approach to meet each person’s unique needs. Whether you’re seeking support for speech clarity, language development, social communication, or literacy skills, our team is here to walk alongside you with expert care and encouragement.</p>

      </div>
      <div className="flex flex-col md:flex-row p-12">
        <div className="md:basis-1/3">
          <TextBlob color="orange" classNames="text-white py-12 lg:py-12 px-12 lg:px-12 rounded-[24px]">
            <div className="bg-white w-[64] h-[64] rounded-full flex align-middle p-1 m-auto">
              <Image src={bird} alt="" width={64}  height={64}></Image>
            </div>

            <h2 className="text-2xl font-bold text-center">Did You Know?</h2>
            <p className = "text-lg mb-2">Early support can make a big difference!</p>
            <p className = "text-lg mb-2">Speech and language skills build the foundation for learning, friendships, and confidence. At GLC, we believe it’s never too early — or too late — to find the right support and celebrate growth at every step.</p>
          </TextBlob>
        </div>
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
      </div >
    </>

  );
}
