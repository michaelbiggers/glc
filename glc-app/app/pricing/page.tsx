import { Navigation } from "../components/navigation/navigation";
import Image from "next/image";
import hero from "@/public/sign.jpg"
import HeroSplit from "../components/Hero/HeroSplit";
export default function Pricing() {
  return (
    <>
      <Navigation></Navigation>
      <div className="p-12">
        <h1 className="text-3xl md:text-5xl text-center">Pricing & Insurance</h1>
        <div className="flex flex-col p-8 max-w-5xl m-auto" id='pricing'>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pricing</h2>
          <ul className="list-disc text-lg mb-4">
            <li>Speech-Language Evaluation: $325</li>
            <li>Psycho-educational Evaluation (Ages 5: College): $1900</li>
            <li>Developmental Evaluation (Ages 18 months through 4y, 11mo): $750</li>
            <li>Speech-Language Therapy: $100/hr</li>
            <li>Individual Counseling (Only with current developmental diagnosis): $150/hr</li>
            <li>Academic Support: $150/hr</li>
            <li>School Advocacy: $300/Meeting</li>
            <li>Adult Evaluation (ADHD/Autism): $750</li>

          </ul>
          <p className="text-xlitalic">Testing add-ons:</p>
          <ul className="list-disc text-lg">
            <li>IQ +$400</li>
            <li>ADOS only +$500</li>

          </ul>
        </div>
        <div className="flex flex-col p-8 max-w-5xl m-auto" id='pricing'>
          <h2 className="text-3xl md:text-5xl  font-bold ">Insurance</h2>
          <h3 className="text-2xl md:text-2xl mb-4">We are currently accepting the following insurance providers:</h3>
          <ul className="list-disc mb-6 text-lg">
            <li>Medicaid Fee-for-Service</li>
            <li>Select Health/First Choice Medicaid</li>
            <li>Molina Medicaid</li>
            <li>BabyNet</li>
          </ul>
          <p className="text-xl mb-4 italic">We also accept self-pay for all services.</p>
        </div>
      </div>

    </>


  );
}
