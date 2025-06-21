'use client';
import { Metadata } from "next";
import { Button } from "./components/Button";
import { Navigation } from "./components/navigation/navigation";
import Hero from "./components/Hero/Hero";
import Callout from "./components/Callout";
import TeamSection from "./components/TeamSection";
import Demographic from "./components/Demographic";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
export const metadata: Metadata = {
  title: 'Greenville Learning Collective | Evaluations & Therapy for Autism, ADHD & Learning Differences',
  description:
    'GLC provides expert evaluations and therapy for autism, ADHD, speech, and learning differences. Personalized support online or in-person in the Greenville area.',
  openGraph: {
    title: 'Greenville Learning Collective | Personalized Support for Learning & Communication',
    description:
      'Expert evaluations and therapy for autism, ADHD, speech, and learning differences in the Greenville area. In-person or telehealth appointments available.',
    url: 'https://greenvillelearningcollective.com',
    type: 'website',
    images: [
      {
        url: 'https://greenvillelearningcollective.com/public/logo.svg',
        width: 1200,
        height: 630,
        alt: 'GLC homepage preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Greenville Learning Collective | Personalized Support for Learning & Communication',
    description:
      'Expert evaluations and therapy for autism, ADHD, speech, and learning differences. In-person or telehealth options available.',
    images: ['https://greenvillelearningcollective.com/public/logo.svg'],
  },
};
export default function Home() {
  return (
    <div className={`z-1 relative`}>
      <Navigation />
      <Hero backgroundImage="/hero.jpg">
        <h1 className="text-3xl md:text-5xl pb-8">Personalized support. <br />Meaningful progress.</h1>
        <p className="mb-6 text-lg">At GLC, we support you or your loved one in building on communication and learning strengths through personalized, respectful care and collaborative, individualized support plans.</p>
        <Button
          text="What We Do"
          color="orange"
          href="#what-we-do" />
      </Hero>
      <Callout id="what-we-do" />
      <TeamSection />
      <Demographic id="areas-of-focus" />
      <Testimonials />
      <Faqs />
    </div>
  );
}
