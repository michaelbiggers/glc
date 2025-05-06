'use client'
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
          <Image src={jacie} alt="Jacie Currie"
            className="object-cover object-[50%_33%] md:object-center h-full w-full rounded-2xl"></Image>
        </div>

        <div className="content md:basis-2/3 flex flex-col align-center p-4 md:p-8">
          <h1 className="text-3xl mb-2">Jacie Currie</h1>
          <h2 className="text-xl font-bold mb-4">Co-Founder / Speech-Language Pathologist</h2>
          <p className="mb-2 text-lg">Jacie is one of the founders and co-owners of Greenville Learning Collective, where she brings over 15 years of experience working with children and families to foster meaningful connection through communication. As a licensed speech-language pathologist, Jacie holds national certification from the American Speech-Language-Hearing Association (ASHA) through the Certificate of Clinical Competence (CCC-SLP).</p>
          <p className="mb-2 text-lg">Jacie provides specialized support for a broad range of speech and language challenges, including developmental language delays, receptive and expressive language disorders, articulation and speech sound disorders, fluency, ADHD and executive functioning difficulties, literacy-related concerns, and autism. She is deeply committed to working with autistic individuals, helping them discover and develop their unique communication styles and reach their full potential.</p>
          <p className="mb-2 text-lg">Jacie also has extensive experience in augmentative and alternative communication (AAC), using tools such as American Sign Language, visual supports, and speech-generating devices to create accessible and empowering communication opportunities for everyone.</p>
          <p className="mb-4 text-lg">Through a compassionate, strengths-based approach, Jacie is dedicated to helping each person find their voice and supporting families on their journey toward greater connection and communication.</p>
          <AppointmentButton text="Schedule a Consultation" useButtonStyles></AppointmentButton>
        </div>
      </div>


    </>

  );
}
