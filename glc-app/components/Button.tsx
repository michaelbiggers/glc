import Link from "next/link";
type ButtonProps = {
  text: string;
  href: string;
  color?: 'yellow' | 'orange' | 'green';
  classNames?: string;
};
export const Button = ({ text, href, color = 'orange', classNames = '' }: ButtonProps) => {
  const variants = {
    yellow: "bg-blue-600 hover:bg-blue-500",
    orange: "bg-[#d14d22]",
    green: "bg-red-600 hover:bg-red-500",
  };
  return (
    <Link href={href} className={`relative inline-block px-4 py-2 font-medium group ${classNames}`}>
      <span className={`absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 ${variants[color]} group-hover:-translate-x-0 group-hover:-translate-y-0`}></span>
      <span className={`absolute inset-0 w-full h-full bg-[#fffaf6] transition duration-200 border-2 border-black group-hover:bg-[#d14d22]`}></span>
      <span className="relative text-black group-hover:text-black text-lg">{text}</span>
    </Link>

  );
}