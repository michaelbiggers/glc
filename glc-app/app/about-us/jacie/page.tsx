import { Metadata } from "next";
import { Navigation } from "../../components/navigation/navigation";
import { AppointmentButton } from "@/app/components/SimplePractice";

import jacie from "@/public/jacie.jpg";
import Image from "next/image";

export default function Jacie() {
  return (
    <>
      <Navigation></Navigation>
      <div className="flex flex-col md:flex-row md:min-h-screen p-12">
        <div className="image h-[400px] md:h-full md:basis-1/3 p-2">
          <Image src={jacie} alt="Jacie Curry"
            className="object-cover object-[50%_33%] md:object-center h-full w-full rounded-2xl"></Image>
        </div>

        <div className="content md:basis-2/3 flex flex-col align-center p-4 md:p-8">
          <h1 className="text-3xl mb-2">Jacie Curry</h1>
          <h2 className="text-xl font-bold mb-4">Co-Founder / Speech-Language Pathologist</h2>
          <p className="mb-2 text-lg">Jacie is one of the founders and co-owners of Greenville Learning Collective, where she brings over 15 years of experience working with children and families to foster meaningful connection through communication. As a licensed speech-language pathologist, Jacie holds national certification from the American Speech-Language-Hearing Association (ASHA) through the Certificate of Clinical Competence (CCC-SLP).</p>
          <p className="mb-2 text-lg">Jacie provides specialized support for a broad range of speech and language challenges, including developmental language delays, receptive and expressive language disorders, articulation and speech sound disorders, fluency, ADHD and executive functioning difficulties, literacy-related concerns, and autism. She is deeply committed to working with autistic individuals, helping them discover and develop their unique communication styles and reach their full potential.</p>
          <p className="mb-2 text-lg">Jacie also has extensive experience in augmentative and alternative communication (AAC), using tools such as American Sign Language, visual supports, and speech-generating devices to create accessible and empowering communication opportunities for everyone.</p>
          <p className="mb-4 text-lg">Through a compassionate, strengths-based approach, Jacie is dedicated to helping each person express themselves and supporting families on their journey toward greater connection and communication.</p>
          <AppointmentButton text="Schedule a Consultation" useButtonStyles></AppointmentButton>
        </div>
      </div>
    </>

  );
}
export const metadata: Metadata = {
  title: 'Jacie Curry, Speech-Language Pathologist | Greenville Learning Collective',
  description:
    'Meet Jacie Curry, co-founder of GLC and licensed speech-language pathologist. Specializing in AAC, autism, language disorders, and empowering communication for all ages.',
  keywords: [
    'Jacie Curry GLC',
    'speech therapist Greenville SC',
    'AAC specialist SC',
    'autism communication support',
    'ASHA certified SLP',
    'language delays in children',
    'speech-language therapy South Carolina',
  ],
  openGraph: {
    title: 'Jacie Curry, Speech-Language Pathologist | Greenville Learning Collective',
    description:
      'Learn about Jacie Curry, CCC-SLP and co-founder of GLC, who brings 15+ years of experience in speech-language therapy with a strengths-based, compassionate approach.',
    url: 'https://greenvillelearningcollective.com/about-us/jacie',
    type: 'profile',
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
    title: 'Jacie Curry, Speech-Language Pathologist | Greenville Learning Collective',
    description:
      'Specializing in speech-language therapy, AAC, and neurodiversity-affirming care, Jacie Curry supports individuals and families in finding authentic connection.',
    images: ['https://greenvillelearningcollective.com/public/logo.svg'],
  },
};