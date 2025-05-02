import { ReactNode } from "react";
import { StaticImageData } from "next/image";

type HeroBackgroundProps = {
  backgroundImage: string | StaticImageData;
  backgroundPosition?: React.CSSProperties['backgroundPosition'];
  backgroundSize?: React.CSSProperties['backgroundSize'];
  children: ReactNode;
  position?: 'start' | 'center' | 'end';
  className?: string;
};

export default function HeroBackground({
  backgroundImage,
  backgroundPosition = "center center",
  backgroundSize = "cover",
  children,
  position = 'start',
  className = "",
}: HeroBackgroundProps) {
  const backgroundUrl = typeof backgroundImage === "string" ? backgroundImage : backgroundImage.src;
  const positionClass = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
  }[position];
  return (
    <div
      className={`hero relative min-h-[80vh] flex items-center bg-[#faf5e8] ${positionClass}`}
      style={{
        backgroundImage: `url('${backgroundUrl}')`,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
