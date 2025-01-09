import Image from 'next/image';
import logo from '@/public/logo.svg';
export default function Navigation() {
  return (
    <nav className='flex flex-row p-8 justify-between items-center fixed w-full z-10'>
      <div className="logo-wrapper max-w-36">
        <Image
          src={logo}
          alt='Greenville Learning Collective'
        />
      </div>
      {/* main links */}
      <div className="link-wrapper">
        <ul className = 'flex'>
          <li className='px-12 py-6'>About Us</li>
          <li className='px-12 py-6'>Who We Help</li>
          <li className='px-12 py-6'>Pricing</li>
        </ul>
      </div>
      {/* action button */}
      <div className="action-wrapper">
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Schedule a Meeting
        </a>
      </div>
    </nav>
  )
}