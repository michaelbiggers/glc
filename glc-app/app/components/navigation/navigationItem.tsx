import Link from 'next/link';
import Image from 'next/image';
import arrow from '@/public/right-arrow.png';
interface NavigationItemProps {
  text: string;
  url: string;
}
export const NavigationItem: React.FC<NavigationItemProps> = ({ text, url }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <Link href={url} className="w-full flex items-center justify-between">
        <span className="text-2xl">{text}</span>
        <Image
          src={arrow}
          alt=""
          width={18}
        />
      </Link>
    </div>
  )
}