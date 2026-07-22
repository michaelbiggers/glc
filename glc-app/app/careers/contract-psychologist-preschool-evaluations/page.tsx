import { Metadata } from "next";
import { Navigation } from "@/components/navigation/navigation";
import HeroSplit from "@/components/Hero/HeroSplit";
import { Button } from "@/components/Button";
import { TextBlob } from "@/components/TextBlob";
import bg from "@/public/hero.jpg";

export default function ContractPsychologist() {
  return (
    <>
      <Navigation></Navigation>
      <HeroSplit backgroundImage={bg} position="start">
        <h1 className="text-3xl md:text-5xl mb-4 font-bold">
          Contract Psychologist for Preschool Evaluations
        </h1>
        <p className="mb-6 text-lg font-medium">Located in Downtown Greer</p>
        <Button
          href="mailto:info@greenvillelearningcollective.com?subject=Contract Psychologist for Preschool Evaluations"
          text="Apply Now"
        />
      </HeroSplit>

      <div className="bg-white">
        <div className="px-12 py-24 max-w-4xl m-auto">
          <p className="mb-12 text-xl">
            We&apos;re looking for a Licensed Psycho-Educational Specialist (LPES) to provide
            preschool evaluations as an independent contractor. This role offers flexibility,
            allowing you to accept evaluations based on your availability while focusing on
            clinical work.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-4">What to expect</h2>
          <ul className="list-disc ps-8 mb-8 text-lg">
            <li>Flat-rate compensation for each completed evaluation</li>
            <li>Flexible scheduling based on your availability</li>
            <li>
              Administrative support for scheduling, insurance verification, prior authorizations,
              and billing
            </li>
            <li>Report templates and established workflows to support the evaluation process</li>
          </ul>

          <h2 className="text-2xl md:text-4xl font-bold mb-4">Responsibilities</h2>
          <ul className="list-disc ps-8 mb-8 text-lg">
            <li>
              Administer and score assessments, including ADOS, ABAS, ASRS, and DP-4 (WPPSI may
              be used at your clinical discretion)
            </li>
            <li>Complete evaluation reports using our report template</li>
            <li>Meet virtually with parents to review evaluation results and recommendations</li>
          </ul>

          <h2 className="text-2xl md:text-4xl font-bold mb-4">Qualifications</h2>
          <ul className="list-disc ps-8 mb-8 text-lg">
            <li>Active South Carolina LPES license</li>
            <li>
              Currently paneled, or willing to become paneled, with South Carolina Healthy
              Connections Medicaid and BabyNet
            </li>
            <li>
              Strong report-writing skills with the ability to complete documentation in a timely
              manner
            </li>
          </ul>
        </div>
      </div>

      <TextBlob color="green" fullWidth={false} classNames="mb-12">
        <div className="text-center text-white">
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Come join us!</h3>
          <p className="text-xl mb-6">
            Interested? Send your resume/CV and LPES license number to
            info@greenvillelearningcollective.com
          </p>
          <Button
            text="Apply Now"
            href="mailto:info@greenvillelearningcollective.com?subject=Contract Psychologist for Preschool Evaluations"
          />
        </div>
      </TextBlob>
    </>
  );
}

export const metadata: Metadata = {
  title: "Contract Psychologist for Preschool Evaluations (1099) | Greenville Learning Collective",
  description:
    "GLC is hiring an LPES independent contractor to complete preschool evaluations in Downtown Greer, SC. Flat rate per evaluation, flexible availability, established workflows.",
  keywords: [
    "LPES jobs South Carolina",
    "contract psychologist Greer SC",
    "preschool evaluation psychologist",
    "1099 psychologist job",
    "BabyNet Medicaid evaluations",
    "ADOS ABAS ASRS DP-4",
  ],
  openGraph: {
    title: "Contract Psychologist for Preschool Evaluations (1099) | GLC",
    description:
      "Join GLC as an independent contractor completing preschool evaluations on your own schedule in Downtown Greer, SC.",
    url: "https://greenvillelearningcollective.com/careers/contract-psychologist-preschool-evaluations",
    type: "website",
    images: [
      {
        url: "https://greenvillelearningcollective.com/public/logo.svg",
        width: 1200,
        height: 630,
        alt: "GLC logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contract Psychologist for Preschool Evaluations (1099) | GLC",
    description: "Flexible 1099 preschool evaluation role in Downtown Greer, SC. Apply today.",
    images: ["https://greenvillelearningcollective.com/public/logo.svg"],
  },
};
