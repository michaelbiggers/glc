import { Metadata } from "next";
import { Navigation } from "@/app/components/navigation/navigation";
import HeroSplit from "@/app/components/Hero/HeroSplit";
import { Button } from "@/app/components/Button";
import { AppointmentButton } from "@/app/components/SimplePractice";
import bg from "@/public/speech.jpg";
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
          <ul className="list-disc ps-8 mb-8">
            <li>Developmental language delays</li>
            <li>Speech sound, articulation, and phonological disorders</li>
            <li>Expressive and receptive language disorders</li>
            <li>Fluency challenges (stuttering and cluttering)</li>
            <li>Social communication skills</li>
            <li>Alternative and augmentative communication (AAC)</li>
            <li>Dyslexia</li>
            <li>Dysgraphia</li>
          </ul>
        </div>
        <div className="md:basis-1/3 mb-12">
          <TextBlob color="orange" classNames="text-white rounded-[24px]" useLargePadding={false}>
            <div className="bg-white w-[64px] h-[64px] rounded-full flex items-center p-1 m-auto">
              <Image src={bird} alt="" width={64} height={64}></Image>
            </div>
            <h2 className="text-2xl font-bold text-center">What to Expect</h2>
            <p className="text-lg mb-2">Evaluations typically take between 45 and 90 minutes, depending on individual needs.</p>
            <p className="text-lg mb-2">Therapy sessions are available in 30, 45, or 60-minute formats, customized to fit each client’s goals.</p>
          </TextBlob>
        </div>
      </div >
      <TextBlob color="green" fullWidth={false} classNames="mb-12">
        <div className="text-center text-white">
          <h3 className="text-3xl md:text-5xl font-bold mb-1">Let’s Get Started</h3>
          <p className="text-2xl md:text-3xl mb-4">We’re here to support you — every step of the way. <br></br>Reach out today!</p>

          <AppointmentButton text="Schedule a Consultation" useButtonStyles lead_source="Speech-language"></AppointmentButton>
        </div>
      </TextBlob>
    </>

  );
}
export const metadata: Metadata = {
  title: 'Speech-Language Therapy | Greenville Learning Collective',
  description:
    'Personalized speech-language therapy in Greenville, SC. GLC offers expert support for speech clarity, language delays, fluency, AAC, and literacy skills for all ages.',
  keywords: [
    'speech therapy Greenville SC',
    'language delay support',
    'child speech therapist',
    'AAC therapy',
    'dyslexia evaluation',
    'Greer speech-language pathologist',
    'fluency disorder therapy',
    'communication support for kids and adults',
  ],
  openGraph: {
    title: 'Speech-Language Therapy | Greenville Learning Collective',
    description:
      'Build confidence and communication skills with expert speech-language therapy. Serving children and adults with tailored evaluations and treatment plans.',
    url: 'https://greenvillelearningcollective.com/services/speech-language-therapy',
    type: 'website',
    images: [
      {
        url: 'https://greenvillelearningcollective.com/public/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Speech therapy session at GLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speech-Language Therapy | Greenville Learning Collective',
    description:
      'Speech-language therapy designed for growth at every stage. GLC supports speech clarity, social communication, fluency, and more.',
    images: ['https://greenvillelearningcollective.com/public/logo.svg'],
  },
};