import { Metadata } from "next";
import { AppointmentButton } from "@/app/components/SimplePractice";
import { Navigation } from "../../components/navigation/navigation";

import sunny from "@/public/sunny.jpg";
import Image from "next/image";


export default function Sunny() {
  return (
    <>
      <Navigation></Navigation>
      <div className="flex flex-col md:flex-row md:min-h-screen p-12">
        <div className="image h-[400px] md:h-full md:basis-1/3 p-2">
          <Image src={sunny} alt="Sunny Biggers"
            className="object-cover object-[50%_30%] md:object-center h-full w-full rounded-2xl"></Image>
        </div>

        <div className="content md:basis-2/3 flex flex-col align-center p-4 md:p-8">
          <h1 className="text-3xl mb-4">Sunny Biggers <span className="text-lg">(she/her)</span></h1>
          <h2 className="text-xl font-bold mb-4">Co-Founder / Psychoeducational Specialist</h2>
          <p className="mb-4"> Sunny is a Licensed Psychoeducational Specialist and Nationally Certified School Psychologist with an Education Specialist degree in School Psychology. Before co-founding Greenville Learning Collective with Jacie, she spent eight years working in public schools, supporting students with a wide range of developmental and learning needs.</p>
          <p className="mb-4">Originally from Florida, Sunny began her career as a preschool teacher, an experience that sparked her lasting passion for early childhood development and continues to shape her work with families today.
          </p>
          <p className="mb-4">Sunny is highly trained in diagnosing a variety of developmental and learning differences, with a specialty in evaluations for autism and dyslexia. She believes that families deserve more than just a diagnosis — they deserve clear, compassionate feedback and practical next steps. Sunny works closely with parents to ensure they fully understand the evaluation results and feel confident in how to best support their child moving forward.</p>
          <AppointmentButton text="Schedule a Consultation" useButtonStyles></AppointmentButton>
        </div>
      </div>
    </>
  );
}
export const metadata: Metadata = {
  title: 'Sunny Biggers, Psychoeducational Specialist | Greenville Learning Collective',
  description:
    'Meet Sunny Biggers, Licensed Psychoeducational Specialist and Co-Founder of GLC. Specializing in autism and dyslexia evaluations with compassionate, family-focused care.',
  keywords: [
    'Sunny Biggers GLC',
    'Psychoeducational Specialist Greenville',
    'autism evaluations SC',
    'dyslexia diagnosis Greenville',
    'school psychologist South Carolina',
    'developmental assessments for kids',
  ],
  openGraph: {
    title: 'Sunny Biggers, Psychoeducational Specialist | Greenville Learning Collective',
    description:
      'Learn about Sunny Biggers, co-founder of GLC and expert in developmental and learning evaluations for children and families across South Carolina.',
    url: 'https://greenvillelearningcollective.com/about-us/sunny',
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
    title: 'Sunny Biggers, Psychoeducational Specialist | Greenville Learning Collective',
    description:
      'Licensed Psychoeducational Specialist and School Psychologist offering personalized evaluations and family-centered support at GLC.',
    images: ['https://greenvillelearningcollective.com/public/logo.svg'],
  },
};