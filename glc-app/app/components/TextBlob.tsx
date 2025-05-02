import { ReactNode } from "react";
type TextBlobProps = {
  color?: 'yellow' | 'orange' | 'green';
  fullWidth?: boolean;
  children?: ReactNode;
};
export const TextBlob = ({ color = 'yellow', fullWidth = true, children }: TextBlobProps) => {
  const variants = {
    yellow: "bg-[#f2ae21]",
    orange: "bg-[#d14d22]",
    green: "bg-[#39747f]",
  };
  const width = fullWidth ? 'w-full': 'w-[90vw] m-auto';
  return (
    <div className={`py-12 lg:py-36 px-12 lg:px-48 rounded-[48px] ${variants[color]} ${width} `}>
      <div className="">
        {children}
      </div>
    </div>

  );
}