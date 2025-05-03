'use client';
import { Button } from "./components/Button";
import { Navigation } from "./components/navigation/navigation";
import Hero from "./components/Hero/Hero";
import Callout from "./components/Callout";
import TeamSection from "./components/TeamSection";
import Demographic from "./components/Demographic";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";

export default function Home() {
  return (
    <div className={`z-1 relative`}>
      <Navigation />
      <Hero backgroundImage="/hero.jpg">
        <h1 className="text-3xl md:text-5xl pb-8">Personalized support. <br />Meaningful progress.</h1>
        <p className="mb-6 text-lg">At GLC, we help you or your loved one overcome communication and learning challenges with confidence through personalized care and tailored treatment plans.</p>
        <Button
          text="What We Do"
          color="orange"
          href = "#what-we-do" />
      </Hero>
      <Callout  id = "what-we-do"/>
      <TeamSection />
      <Demographic id = "areas-of-focus"/>
      <Testimonials />
      <Faqs />
    </div>
  );
}
