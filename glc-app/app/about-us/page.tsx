'use-client'
import { Metadata } from "next";
import { Navigation } from "../components/navigation/navigation";
import { Button } from "../components/Button";
import group from "@/public/group_bw.jpeg";
import group_wide from "@/public/group_bw_wide-2.jpg";
import sunny from "@/public/sunny.jpg";
import jacie from "@/public/jacie.jpg";
import Image from "next/image";
import HeroSplit from "../components/Hero/HeroSplit";
import { TextBlob } from "../components/TextBlob";
import { AppointmentButton } from "../components/SimplePractice";

export default function Team() {
  return (
    <>
      <Navigation></Navigation>
      <HeroSplit
        backgroundImage={group_wide}
        backgroundPosition='bottom left'
        backgroundSize='cover'
        position="end"
      >
        <Image
          src={group}
          alt="Sunny Biggers and Jacie Currie, cofounders of Greenville Learning Collective"
          className="mb-8 lg:hidden rounded-2xl"></Image>
        <h1 className="text-3xl md:text-5xl pb-8">Empowering authentic communication for all</h1>
        <p className="mb-6 text-lg">At Greenville Learning Collective, we believe that meaningful change begins with connection. Our team is united by a passion for helping individuals of all ages navigate communication, learning, and developmental challenges with confidence and joy.</p>

        <p className="mb-6 text-lg">We bring clinical expertise, a personalized approach, and heartfelt dedication to every client we serve. Here, your journey is supported, your goals are championed, and your potential is celebrated every step of the way.</p>

        <p className="mb-6 text-lg">Meet the people behind GLC — and discover the heart of what we do.</p>
        <Button
          text="Meet Sunny and Jacie"
          color="orange"
          href="#meet-sunny-and-jacie" />
      </HeroSplit>
      <div className="px-12 md:py-24 " id="meet-sunny-and-jacie">
        <h2 className="text-3xl md:text-5xl pb-8 text-center font-bold mb-12">Greenville Learning Collective</h2>
        <div className="flex flex-col md:flex-row justify-center gap-24">
          <div className="text-center">
            <div className="w-full h-[400px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[500px] rounded-2xl sm:rounded-[20%] overflow-hidden mb-4 mx-auto">
              <Image src={sunny} alt="" className="object-cover w-full h-full"></Image>
            </div>
            <Button text="Meet Sunny" href="/about-us/sunny"></Button>
          </div>
          <div className="text-center">
            <div className="w-full h-[400px] md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[500px] rounded-2xl sm:rounded-[20%] overflow-hidden mb-4 mx-auto">
              <Image src={jacie} alt="" className="object-cover w-full h-full"></Image>
            </div>

            <Button text="Meet Jacie" href="/about-us/jacie"></Button>
          </div>

        </div>

      </div>
      <TextBlob
        color="green"
        fullWidth={false}>
        <div className="w-sm text-center">
          <h3 className="text-xl  font-bold mb-2 text-white uppercase">Our Mission</h3>
          <p className="text-4xl font-normal  text-white mb-4">At GLC, we believe every journey is unique and worth celebrating.</p>
          <p className="text-xl font-normal mb-6 text-white">Our mission is to build strong connections, nurture confidence and independence, and create space for joy in every moment — walking hand in hand with our clients and their families every step of the way.</p>
          <AppointmentButton text="Schedule a Free Consultation" useButtonStyles></AppointmentButton>

        </div>
      </TextBlob>
    </>

  );
}
export const metadata: Metadata = {
  title: 'About Us | Greenville Learning Collective',
  description:
    'Meet the team at GLC — a compassionate group of professionals committed to empowering authentic communication and confident learning at every stage of life.',
  keywords: [
    'Greenville Learning Collective team',
    'speech therapy experts Greenville SC',
    'about GLC',
    'Sunny Biggers',
    'Jacie Curry',
    'speech-language pathologists Greenville',
    'developmental evaluations team',
  ],
  openGraph: {
    title: 'About Us | Greenville Learning Collective',
    description:
      'Learn about GLC’s mission and meet the professionals who support communication, learning, and joy for individuals and families across South Carolina.',
    url: 'https://greenvillelearningcollective.com/about-us',
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
    title: 'About Us | Greenville Learning Collective',
    description:
      'Discover the heart of GLC and meet the dedicated team supporting individuals across ages with expert evaluations and therapy.',
    images: ['https://greenvillelearningcollective.com/public/logo.svg'],
  },
};