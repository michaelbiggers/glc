'use client'
import Image from 'next/image';
import logo from '@/public/logo.svg';
import bird_mark from '@/public/bird-logo.svg';
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
        <header className="flex justify-between border-b px-10 py-4 sm:px-5 sm:py-4">
          <Image
            src={bird_mark}
            alt='Greenville Learning Collective'
            className = "w-12"
          />
          <button onClick={() => { setIsOpen(!isOpen) }}>Close</button>
        </header>

        <div className="h-full px-10 py-12 sm:px-5 sm:py-12">
          <div className="w-full h-full flex justify-center items-center" style={{ transform: "translateX(0%) translateZ(0px)" }}>
            <div className="flex flex-col h-full w-full">
              <div className="flex flex-col gap-8 flex-1 sm:gap-6 header3">
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
              <div className="flex justify-center flex-col gap-8 items-center sm:gap-6" style={{ opacity: "1" }}>
                <a href="/sign-up/" target="_self" className="w-full no-underline button-no-styling" >
                  <div className="cta--button cta--button-font-set cta--button-regular cta--button_primary-sun   justify-center">Request an Appointment</div>
                </a>
                <div className="flex">
                  <a href="https://secure.simplepractice.com/users/sign_in" target="_self" className="cta--button-wrapper cta--button-font-set hasTertiary" >
                    <div className="cta--button cta--button-font-set cta--button-regular cta--button_tertiary-forest   justify-center">Sign in</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 w-full flex justify-center items-center h-auto" style={{ transform: "translateX(100%) translateZ(0px)" }}>
            <div className="py-8 w-full sm:py-6 sm:pr-10">
              <div>
                <div className="w-full flex items-center pb-6 sm:pb-4" style={{ opacity: "0", transform: "translateX(60px) translateZ(0px)" }}>
                  <img alt="Main Image" className="w-[335px] h-[212px]" />
                </div>
                <div className="w-full flex items-center gap-3 header3 pb-3 sm:pb-2 sm:gap-2 " style={{ opacity: "0", transform: "translateY(5px) translateZ(0px)" }}>
                  <button type="button" className="bg-transparent border-none"><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 8.16669L12 16.1667L20 24.1667" stroke="#123333" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </button>
                  <h3></h3>
                </div>
                <div className="w-full pb-10 sm:pb-8" style={{ opacity: "0", transform: "translateY(10px) translateZ(0px)" }}><p className="body--text-small"></p></div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>Hello World</div>
      </Drawer>
      <nav className='flex flex-row px-16 py-4 justify-between items-center w-full z-10 bg-[#fffaf6]'>
        <div className="logo-wrapper max-w-36">
          <Image
            src={logo}
            alt='Greenville Learning Collective'
          />
        </div>
        {/* action button */}
        <div className="action-wrapper">
          <button onClick={() => { setIsOpen(!isOpen) }}>Menu</button>
        </div>
      </nav>
    </>

  )
}