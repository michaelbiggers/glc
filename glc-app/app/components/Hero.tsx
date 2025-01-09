import Image from "next/image";
import group from "@/public/group.jpg";
export default function Hero() {
  /**
   * props: height, bg url, bg position, bg opacity
   */
  return (
    <div className="hero relative min-h-screen flex justify-center items-center">
      <div className="hero__bg bg-white px-24 py-16 m-36 rounded-2xl">
        <h1 className="text-center text-5xl">Your Experts in Communication and Learning Disorders</h1>
        <div className="flex justify-center items-center">
          <div className="hero__img-container basis-1/2 ">
            <Image
              src={group}
              alt='Sunny Biggers and Jacie Curry, owners of Greenville Learning Collective'
              className="rounded-2xl z-1"
            />
          </div>
          <div className="hero__text-container basis-1/2 p-12">
            <p className = "mb-8">We are professionals who specialize in evaluating and treating a variety of disorders, including communication disorders, autism, ADHD, learning disabilities (including dyslexia), and developmental delays.</p>
            <a href="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Who we work with</a>
          </div>
        </div>
      </div>
    </div>
  );
}