'use client'
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.svg';
import bird_mark from '@/public/bird-logo.svg';
import menu from '@/public/menu.png';
import close from '@/public/close.png';
import { NavigationItem } from './navigationItem';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-modern-drawer/dist/index.css';
import { AppointmentButton } from '../SimplePractice';
import { sendGAEvent } from '@next/third-parties/google';
const Drawer = dynamic(() => import('react-modern-drawer'), { ssr: false });
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // <-- moved inside!
  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }
  const sendLoginEvent = () => {
    sendGAEvent({
      event: 'login',
      method: 'SimplePractice'
    });
  }
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className="w-full sm:max-w-lg lg:max-w-sm !h-[100svh]"
        size='350px'
        lockBackgroundScroll
      >
        <div className="flex flex-col justify-between h-full">
          {/* nav header */}
          <div className="flex justify-between border-b px-10 py-4 sm:px-5 sm:py-4">
            <Image
              src={bird_mark}
              alt='Greenville Learning Collective'
              className="w-12"
            />
            <button onClick={() => { setIsOpen(!isOpen) }}>
              <Image
                src={close}
                alt='Close menu'
                className="w-4"
              />
            </button>
          </div>
          {/* nav items */}
          <div className="flex flex-col gap-8 flex-1 sm:gap-6 pt-12 px-10 sm:px-5">
            <NavigationItem
              text="Services"
              url="#"
              dropdownItems={[
                { text: 'Speech-Language Therapy', url: '/services/speech-language-therapy' },
                { text: 'Educational Assessments', url: '/services/educational-assessments' },
              ]}
            />
            <NavigationItem
              text="About Us"
              url="/about-us" />
            <NavigationItem
              text="Pricing"
              url="/pricing" />
            <NavigationItem
              text="For Providers"
              url="/for-providers" />
          </div>
          {/* nav footer */}
          <div className="flex flex-col">
            <Link
              href="http://greenvillelearningcollective.clientsecure.me/sign-in"
              target="_self"
              className="border basis-1/2 p-2 py-8 text-center content-center font-bold"
              onClick={sendLoginEvent} >
              Sign in
            </Link>
            <AppointmentButton
              text="Request Appointment"
              wrapperClassNames='basis-1/2 text-center bg-[#d14d22] text-white font-bold'
              classNames='inline-block p-8 h-full w-full ' />

          </div>
        </div>
      </Drawer>
      <nav className='flex flex-row px-16 py-4 justify-between items-center w-full z-10 bg-[#fffaf6]'>
        <div className="logo-wrapper max-w-36">
          <Link href="/">
            <Image
              src={logo}
              alt='Greenville Learning Collective'
            />
          </Link>
        </div>
        {/* trigger menu */}
        <div className="action-wrapper">
          <button onClick={() => { setIsOpen(!isOpen) }}>
            <Image
              src={menu}
              alt='Open Menu'
              className='w-8'
            /></button>
        </div>
      </nav>
    </>

  )
}