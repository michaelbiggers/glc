import { Navigation } from "../components/navigation/navigation";
import { Button } from "../components/Button";
import group from "@/public/group_bw.jpeg";
import group_wide from "@/public/group_bw_wide-2.jpg";
import sunny from "@/public/sunny.jpg";
import jacie from "@/public/jacie.jpg";
import Image from "next/image";
import HeroSplit from "../components/Hero/HeroSplit";

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
        <h1 className="text-3xl md:text-5xl pb-8">Rooted in Care. <br></br> Inspired by You.</h1>
        <p className="mb-6 text-lg">At Greenville Learning Collective, we believe that meaningful change begins with connection. Our team is united by a passion for helping individuals of all ages navigate communication, learning, and developmental challenges with confidence and joy.</p>

        <p className="mb-6 text-lg">We bring deep expertise, a personalized approach, and heartfelt dedication to every client we serve. Here, your journey is supported, your goals are championed, and your potential is celebrated every step of the way.</p>

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

    </>

  );
}
