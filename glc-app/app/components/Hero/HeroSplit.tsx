import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import HeroBackground from "./HeroBackground";
type HeroProps = {
  backgroundImage: string | StaticImageData;
  backgroundPosition?: React.CSSProperties['backgroundPosition'];
  backgroundSize?: string;
  position?: 'start' | 'center' | 'end';
  children?: ReactNode;
};
export default function HeroSplit({
  backgroundImage,
  backgroundPosition = "center center",
  backgroundSize = "cover",
  position = "start",
  children }: HeroProps) {
  return (
    <HeroBackground backgroundImage={backgroundImage} backgroundPosition={backgroundPosition} backgroundSize={backgroundSize} position={position}>
      <div className="hero__overlay bg-[#fffaf6] py-16 h-full w-full lg:max-w-xl">
        <div className="flex justify-center items-center">
          <div className="hero__text-container p-12">
            {children}
          </div>
        </div>
      </div>
    </HeroBackground >
  );
}