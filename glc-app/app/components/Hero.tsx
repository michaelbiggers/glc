import Image from "next/image";
import group from "@/public/group.jpg";
export default function Hero() {
  /**
   * props: height, bg url, bg position, bg opacity
   */
  const bg_styles = {

  }
  return (
    <div className="hero relative min-h-[80vh] flex justify-start items-center bg-[#faf5e8]" style={{ backgroundImage: "url('/hero.jpg')", backgroundSize: "cover", backgroundPosition: "center right" }}>
      <div className="hero__overlay bg-[#fffaf6] py-16 m-8 lg:m-36 rounded-2xl w-full lg:max-w-xl">
        <div className="flex justify-center items-center">
          <div className="hero__text-container p-12">
            <h1 className="text-3xl md:text-5xl pb-8">Personalized support. <br />Meaningful progress.</h1>
            <p className="mb-6 text-lg">At GLC, we help you or your loved one overcome communication and learning challenges with confidence through personalized care and tailored treatment plans.</p>
            <a href="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Who we work with</a>
          </div>
        </div>
      </div>
    </div>
  );
}