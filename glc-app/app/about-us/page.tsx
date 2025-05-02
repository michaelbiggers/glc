import { Navigation } from "../components/navigation/navigation";
import { Button } from "../components/Button";
import group from "@/public/group_bw_wide-2.jpg"
import Image from "next/image";
import HeroSplit from "../components/Hero/HeroSplit";

export default function Team() {
  return (
    <>
      <Navigation></Navigation>
      <HeroSplit
        backgroundImage={group}
        backgroundPosition='bottom left'
        backgroundSize='cover'
        position="end"
      >
        <h1 className="text-3xl md:text-5xl pb-8">Rooted in Care. <br></br> Inspired by You.</h1>
        <p className="mb-6 text-lg">At Greenville Learning Collective, we believe that meaningful change begins with connection. Our team is united by a passion for helping individuals of all ages navigate communication, learning, and developmental challenges with confidence and joy.</p>

        <p className="mb-6 text-lg">We bring deep expertise, a personalized approach, and heartfelt dedication to every client we serve. Here, your journey is supported, your goals are championed, and your potential is celebrated every step of the way.</p>

        <p className="mb-6 text-lg">Meet the people behind GLC — and discover the heart of what we do.</p>
        <Button
          text="Meet Sunny and Jacie"
          color="orange"
          href="#meet-sunny-and-jacie" />
      </HeroSplit>
      <div className="flex" id="meet-sunny-and-jacie">
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
