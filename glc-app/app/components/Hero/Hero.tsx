import { StaticImageData } from "next/image";
import { Button } from "./Button";
import { ReactNode } from "react";
type HeroProps = {
  backgroundImage: string | StaticImageData;
  backgroundPosition?: React.CSSProperties['backgroundPosition'];
  backgroundSize?: string;
  position?: 'start' | 'center' | 'end';
  children?: ReactNode;
};
export default function Hero({ backgroundImage, backgroundPosition = "center center", backgroundSize = "cover", position = "start", children }: HeroProps) {
  const backgroundUrl = typeof backgroundImage === 'string' ? backgroundImage : backgroundImage.src;
  const positionClass = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  }[position];
  return (
    <div className={`hero relative min-h-[80vh] flex items-center bg-[#faf5e8] ${positionClass}`}
      style={
        {
          backgroundImage: `url('${backgroundUrl}')`,
          backgroundSize: backgroundSize,
          backgroundPosition: backgroundPosition
        }}>
      <div className="hero__overlay bg-[#fffaf6] py-16 m-8 lg:m-36 rounded-2xl w-full lg:max-w-xl">
        <div className="flex justify-center items-center">
          <div className="hero__text-container p-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}