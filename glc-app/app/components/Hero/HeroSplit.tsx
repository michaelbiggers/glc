import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import HeroBackground from "./HeroBackground";
type HeroProps = {
  backgroundImage: string | StaticImageData;
  backgroundPosition?: React.CSSProperties['backgroundPosition'];
  backgroundSize?: React.CSSProperties['backgroundSize'];
  position?: 'start' | 'center' | 'end';
  classNames?: string;
  children?: ReactNode;
};
export default function HeroSplit({
  backgroundImage,
  backgroundPosition = "center center",
  backgroundSize = "cover",
  position = "start",
  classNames = '',
  children }: HeroProps) {
  return (
    <HeroBackground backgroundImage={backgroundImage} backgroundPosition={backgroundPosition} backgroundSize={backgroundSize} position={position} className={classNames}>
      <div className={`hero__overlay bg-[#fffaf6] py-16 h-full flex w-full lg:max-w-xl ${classNames}`}>
        <div className="flex justify-center items-center">
          <div className="hero__text-container p-12">
            {children}
          </div>
        </div>
      </div>
    </HeroBackground >
  );
}