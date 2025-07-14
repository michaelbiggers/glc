import { Metadata } from "next";
import { Navigation } from "@/components/navigation/navigation";
import HeroSplit from "@/components/Hero/HeroSplit";
import { Button } from "@/components/Button";
import { AppointmentButton } from "@/components/SimplePractice";
import bg from "@/public/demo_1.jpg";
import bird from "@/public/bird-logo.svg";
import { TextBlob } from "@/components/TextBlob";
import Image from "next/image";
export default function Assessments() {
  return (
    <>
      <Navigation></Navigation>
      <HeroSplit
        backgroundImage={bg}
        position="start">
        <h1 className="text-3xl md:text-5xl mb-4 font-bold">Educational Assessments and Diagnostic Services</h1>
        <p className="mb-6 text-lg">At GLC, we’re here to help you or your child better understand how you learn, communicate, and grow. We offer comprehensive assessments and expert diagnoses to support individuals with a variety of developmental, educational, and cognitive needs.</p>
        <Button href="#areas-we-support" text="Learn More"></Button>
      </HeroSplit>
      <div className="bg-white">
        <div className="px-12 py-24 max-w-6xl m-auto">
          <h2 className="text-2xl md:text-5xl mb-4 text-center max-w-2xl m-auto">Clarity, Understanding, and Support for Every Journey</h2>
          <p className="mb-4 text-lg md:text-center">Our evaluations are designed to provide clear answers, compassionate guidance, and practical next steps for you and your family. Whether you’re seeking a screening, an evaluation, or a formal diagnosis, we are here to walk alongside you at every stage.</p>
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
            <li>Kindergarten readiness testing</li>
          </ul>
          <h3 className="text-xl md:text-3xl mb-2">We can diagnose:</h3>
          <ul className="list-disc ps-8 mb-8">
            <li>Autism Spectrum Disorder (ASD)</li>
            <li>ADHD</li>
            <li>Learning disabilities (e.g. dyslexia, dysgraphia, dyscalculia)</li>
            <li>Developmental delays</li>
            <li>Mental health concerns (e.g. anxiety, depression, OCD)</li>
            <li>Intellectual Disability</li>
          </ul>
          <h3 className="text-xl md:text-3xl mb-2">Support Services:</h3>
          <ul className="list-disc ps-8">
            <li>Results and recommendations reviewed with parents</li>
            <li>Results shared in a child-friendly format when needed</li>
            <li>Support in school-based meetings (e.g., IEP, 504)</li>
            <li>Referrals to resources</li>
          </ul>
        </div>
        <div className="md:basis-1/3 mb-12">
          <TextBlob color="orange" classNames="text-white rounded-[24px]" useLargePadding={false}>
            <div className="bg-white w-[64px] h-[64px] rounded-full flex items-center p-1 m-auto">
              <Image src={bird} alt="" width={64} height={64}></Image>
            </div>
            <h2 className="text-2xl font-bold text-center">What to Expect</h2>
            <p className="text-lg mb-2"><strong>Assessment sessions</strong> are tailored to the needs of each individual and typically occur over multiple appointments.</p>
            <p className="text-lg mb-2"><strong>Feedback sessions</strong> are conveniently held via telehealth to ensure you fully understand the evaluation results and have a clear plan for next steps.</p>
            <p className="text-lg mb-2">You’ll get a <strong>comprehensive report</strong> with all of your child’s scores, any relevant diagnoses, and tailored recommendations</p>
          </TextBlob>
        </div>
      </div >
      <TextBlob color="green" fullWidth={false} classNames="mb-12">
        <div className="text-center text-white">
          <h3 className="text-3xl md:text-5xl font-bold mb-1">Let’s Get Started</h3>
          <p className="text-2xl md:text-3xl mb-4">We’re here to provide answers, support, and encouragement — every step of the way.<br></br>Reach out today to schedule an assessment or consultation!</p>

          <AppointmentButton text="Schedule a Consultation" useButtonStyles lead_source="Educational Assessments"></AppointmentButton>
        </div>
      </TextBlob>
    </>

  );
}
export const metadata: Metadata = {
  title: 'Educational Assessments & Diagnoses | Greenville Learning Collective',
  description:
    'Comprehensive psychoeducational assessments and diagnostic services for autism, ADHD, learning disabilities, and mental health—serving children through adults in Greenville, SC.',
  keywords: [
    'autism diagnosis Greenville SC',
    'psychoeducational evaluation',
    'ADHD testing for kids and adults',
    'dyslexia assessments',
    'learning disability diagnosis',
    'cognitive testing Greenville',
    'IEP support evaluations',
  ],
  openGraph: {
    title: 'Educational Assessments & Diagnoses | Greenville Learning Collective',
    description:
      'Expert evaluations for autism, ADHD, learning differences, and emotional-behavioral needs. Personalized feedback, reports, and school support included.',
    url: 'https://greenvillelearningcollective.com/services/educational-assessments',
    type: 'website',
    images: [
      {
        url: 'https://greenvillelearningcollective.com/public/logo.svg',
        width: 1200,
        height: 630,
        alt: 'GLC logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Educational Assessments & Diagnoses | Greenville Learning Collective',
    description:
      'Get clear answers and support with personalized evaluations for autism, ADHD, learning disabilities, and more in Greenville, SC.',
    images: ['https://greenvillelearningcollective.com/public/logo.svg'],
  },
};