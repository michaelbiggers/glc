'use client'
import Image from 'next/image';
import logo from '@/public/logo.svg';
import bird_mark from '@/public/bird-logo.svg';
import menu from '@/public/menu.png';
import close from '@/public/close.png';
import { useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import 'react-modern-drawer/dist/index.css'
const Drawer = dynamic(() => import('react-modern-drawer'), { ssr: false });
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // <-- moved inside!
  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className="w-full sm:max-w-lg lg:max-w-sm"
        size='350px'
        lockBackgroundScroll
      >
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
        <div className="flex flex-col gap-8 flex-1 sm:gap-6">
          <div className="w-full flex items-center justify-between">
            <h3>Who we’re for</h3>
            <button type="button" className="border-none bg-transparent">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8L20 16L12 24" stroke="#123333" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg></button></div><div className="w-full flex items-center justify-between"><h3>Features</h3><button type="button" className="border-none bg-transparent"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8L20 16L12 24" stroke="#123333" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </button>
          </div>
          <div className="w-full flex items-center justify-between">
            <h3>Resources</h3>
            <button type="button" className="border-none bg-transparent"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8L20 16L12 24" stroke="#123333" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
          </div>
          <div className="w-full flex items-center justify-between">
            <Link href="/pricing" className="w-full flex items-center justify-between">
              Pricing
            </Link>
          </div>
        </div>
        {/* nav footer */}
        <div className="flex">
          <a href="/sign-up/" target="_self" className="w-full no-underline border basis-1/2" >
            Request an Appointment
          </a>
          <a href="https://secure.simplepractice.com/users/sign_in" target="_self" className="border basis-1/2" >
            Sign in
          </a>
        </div>
      </Drawer>
      <nav className='flex flex-row px-16 py-4 justify-between items-center w-full z-10 bg-[#fffaf6]'>
        <div className="logo-wrapper max-w-36">
          <Image
            src={logo}
            alt='Greenville Learning Collective'
          />
        </div>
        {/* trigger menu */}
        <div className="action-wrapper">
          <button onClick={() => { setIsOpen(!isOpen) }}>
            <Image
              src={menu}
              alt='Open Menu'
              className = 'w-8'
            /></button>
        </div>
      </nav>
    </>

  )
}