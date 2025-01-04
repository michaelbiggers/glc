export default function Hero() {
  /**
   * props: height, bg url, bg position, bg opacity
   */
  return (
    <div className="hero relative min-h-screen flex justify-center items-center">
      <div className="hero__bg absolute bg-center bg-cover bg-[url('/organic.svg')] top-0 left-0 right-0 bottom-0 -z-1 opacity-20"></div>
      <div className="hero__text-container relative text-center max-w-prose">
        <h1 className=" text-6xl">Your Experts in Communication and Learning Disorders</h1>
        <p className = "text-xl">Speech-Language Therapy & Psychoeducational Services</p>
        <a href="" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Who we work with</a>
      </div>

    </div>
  );
}