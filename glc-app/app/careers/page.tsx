import { Metadata } from "next";
import { Navigation } from "@/components/navigation/navigation";
import HeroSplit from "@/components/Hero/HeroSplit";
import { Button } from "@/components/Button";
import { TextBlob } from "@/components/TextBlob";
import bg from "@/public/group_bw_wide-2.jpg";

export default function Careers() {
  return (
    <>
      <Navigation></Navigation>
      <HeroSplit backgroundImage={bg} backgroundPosition="bottom left" position="end">
        <h1 className="text-3xl md:text-5xl pb-8 font-bold">Join Our Team</h1>
        <p className="mb-6 text-lg">
          At Greenville Learning Collective, we&apos;re growing our community of compassionate,
          skilled professionals. Explore our current openings and find where you fit in.
        </p>
        <Button text="View Open Positions" color="orange" href="#open-positions" />
      </HeroSplit>

      <div className="px-12 py-24 max-w-5xl m-auto" id="open-positions">
        <h2 className="text-3xl md:text-5xl pb-8 text-center font-bold mb-12">Open Positions</h2>
        <div className="flex flex-col gap-8">
          <div className="border-2 border-black rounded-2xl p-8 bg-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Contract Psychologist for Preschool Evaluations
            </h3>
            <p className="text-lg mb-1 font-medium">Downtown Greer • 1099 Independent Contractor</p>
            <p className="text-lg mb-6">
              Join our practice as an independent contractor providing preschool evaluations. Enjoy a flexible schedule based on your availability and flat-rate compensation for each completed evaluation.
            </p>
            <Button
              text="View Position"
              href="/careers/contract-psychologist-preschool-evaluations"
            />
          </div>
        </div>
      </div>

      <TextBlob color="green" fullWidth={false} classNames="mb-12">
        <div className="w-sm text-center text-white">
          <h3 className="text-3xl md:text-5xl font-bold mb-4">Don&apos;t see the right role?</h3>
          <p className="text-xl mb-6">
            We&apos;re always glad to hear from talented clinicians. Reach out and introduce yourself.
          </p>
          <Button text="Email Us" href="mailto:info@greenvillelearningcollective.com" />
        </div>
      </TextBlob>
    </>
  );
}

export const metadata: Metadata = {
  title: "Careers | Greenville Learning Collective",
  description:
    "Explore career opportunities at Greenville Learning Collective. Join our team of compassionate clinicians supporting communication, learning, and development in the Greer, SC area.",
  keywords: [
    "careers Greenville Learning Collective",
    "psychologist jobs Greer SC",
    "LPES jobs South Carolina",
    "contract preschool evaluations",
    "speech therapy careers Greenville",
  ],
  openGraph: {
    title: "Careers | Greenville Learning Collective",
    description:
      "Join the GLC team. View current openings for clinicians in the Greenville / Greer, SC area.",
    url: "https://greenvillelearningcollective.com/careers",
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
    title: "Careers | Greenville Learning Collective",
    description: "Explore open positions and grow your career with GLC.",
    images: ["https://greenvillelearningcollective.com/public/logo.svg"],
  },
};
