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
        <p className="mb-6 text-lg">At GLC, we support you or your loved one in building on communication and learning strengths through personalized, respectful care and collaborative, individualized support plans.</p>
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
