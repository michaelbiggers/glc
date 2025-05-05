import Link from 'next/link';
import Image from 'next/image';
import arrow from '@/public/right-arrow.png';
import { useState } from 'react';

interface NavigationItemProps {
  text: string;
  url: string;
  dropdownItems?: DropdownItem[];
}
interface DropdownItem {
  text: string;
  url: string;
}
export const NavigationItem = ({ text, url, dropdownItems }: NavigationItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = dropdownItems && dropdownItems.length > 0;
  return (
    <div className="w-full flex flex-col">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => hasDropdown ? setIsOpen(!isOpen) : null}
      >
        {url && !hasDropdown ? (
          <Link href={url} className="w-full flex items-center justify-between">
            <span className="text-2xl">{text}</span>
            <Image src={arrow} alt="" width={18} />
          </Link>
        ) : (
          <div className="w-full flex items-center justify-between">
            <span className="text-2xl">{text}</span>
            <Image src={arrow} alt="" width={18} className={`transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          </div>
        )}
      </div>

      {hasDropdown && isOpen && (
        <div className="ml-4 mt-2 flex flex-col gap-2">
          {dropdownItems.map((item, idx) => (
            <Link key={idx} href={item.url} className="text-xl text-gray-700 hover:text-black">
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};