import Hero from "./components/Hero";
import Image from "next/image";
import group from '@/public/group.jpg'
export default function Home() {
  return (
    <div className = "z-1 relative">
      <Hero />
      {/* <div className="team-photo max-w-5xl m-auto -mt-24 ">
        <Image
          src={group}
          alt='Sunny Biggers and Jacie Curry, owners of Greenville Learning Collective'
          className="rounded-3xl z-1"
        />
      </div> */}
      <div className="icon-bar flex max-w-screen w-9/12 justify-center items-center m-auto -mt-12 bg-white absolute center gap-12 p-12 left-1/2 -translate-x-1/2">
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
      </div>
      {/* <div className="team bg-black min-h-screen">
        <Image
          src={group}
          alt='Sunny Biggers and Jacie Curry, owners of Greenville Learning Collective'
          className="rounded-3xl z-1"
        />
      </div> */}
    </div>
  );
}
