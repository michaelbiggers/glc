'use client';
import { Button } from "./components/Button";
import { Navigation } from "./components/navigation/navigation";
import Hero from "./components/Hero";
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
          text="Who We Work With"
          color="orange" />
      </Hero>
      <Callout text="We believe that true growth happens through meaningful connections, creating a strong network of support. By embracing independence, our clients gain the confidence to evolve, explore new opportunities, and discover their full potential. Most importantly, we celebrate joy in every moment—both the small victories and the life-changing milestones—because a fulfilling life is built on both." />
      <TeamSection />
      <Demographic />
      <Testimonials />
      <Faqs />
      {/* <div className="icon-bar flex max-w-screen w-9/12 justify-center items-center m-auto -mt-12 bg-white absolute center gap-12 p-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col justify-center items-center">
          <i>icon</i>
          <h3>Accepting new clients</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <i>icon</i>
          <h3>Telehealth or in person appointments</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <i>icon</i>
          <h3>Accepts online payments</h3>
        </div>
      </div> */}
      {/* <Overlay open={navOpen} setOpen={setNavOpen} /> */}
    </div>
  );
}
