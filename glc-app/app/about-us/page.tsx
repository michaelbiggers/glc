import { Navigation } from "../components/navigation/navigation";
import Hero from "../components/Hero/Hero";
import { Button } from "../components/Button";
import group from "@/public/group_bw_wide-2.jpg"
import Image from "next/image";

export default function Team() {
  return (
    <>
      <Navigation></Navigation>
      <Hero
        backgroundImage={group}
        backgroundPosition='bottom left'
        backgroundSize='cover'
        position="end"
      >
        <h1 className="text-3xl md:text-5xl pb-8">Personalized support. <br />Meaningful progress.</h1>
        <p className="mb-6 text-lg">At GLC, we help you or your loved one overcome communication and learning challenges with confidence through personalized care and tailored treatment plans.</p>
        <Button
          text="Who We Work With"
          color="orange" />

      </Hero>
      <div className="flex">
        <Image
          src={group}
          alt="Sunny Biggers and Jacie Currie, the founding members of Greenville Learning Collective"
          className="h-auto w-96 basis-1/2 object-cover" />
        <div className="flex flex-col text-left basis-1/2 p-12 bg-[#f2ae21]">
          <h1 className="text-5xl mb-8">Our Philosophy</h1>
          <p className="text-lg">We believe that true growth happens through meaningful connections, creating a strong network of support. By embracing independence, our clients gain the confidence to evolve, explore new opportunities, and discover their full potential. Most importantly, we celebrate joy in every moment—both the small victories and the life-changing milestones—because a fulfilling life is built on both.</p>
        </div>
      </div>

    </>

  );
}
