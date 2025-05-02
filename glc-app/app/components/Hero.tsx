import { StaticImageData } from "next/image";
import { Button } from "./Button";
type HeroProps = {
  backgroundImage: string | StaticImageData;
  backgroundPosition?: React.CSSProperties['backgroundPosition'];
  backgroundSize?: string;
};
export default function Hero({ backgroundImage, backgroundPosition = "center center", backgroundSize = "cover" }: HeroProps) {
  const backgroundUrl = typeof backgroundImage === 'string' ? backgroundImage : backgroundImage.src;
  return (
    <div className="hero relative min-h-[80vh] flex justify-start items-center bg-[#faf5e8]"
      style={
        {
          backgroundImage: `url('${backgroundUrl}')`,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition
        }}>
      <div className="hero__overlay bg-[#fffaf6] py-16 m-8 lg:m-36 rounded-2xl w-full lg:max-w-xl">
        <div className="flex justify-center items-center">
          <div className="hero__text-container p-12">
            <h1 className="text-3xl md:text-5xl pb-8">Personalized support. <br />Meaningful progress.</h1>
            <p className="mb-6 text-lg">At GLC, we help you or your loved one overcome communication and learning challenges with confidence through personalized care and tailored treatment plans.</p>
            <Button
              text="Who We Work With"
              color="orange" />
          </div>
        </div>
      </div>
    </div>
  );
}