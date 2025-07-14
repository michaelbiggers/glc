'use client'
import { useEffect } from 'react';
import { sendGAEvent } from '@next/third-parties/google';
type ScheduleProps = {
  text: string;
  classNames?: string;
  useButtonStyles?: boolean;
  color?: 'yellow' | 'orange' | 'green';
  wrapperClassNames?: string;
  lead_source: 'Menu' | 'Jacie bio' | 'Sunny bio' | 'About Us callout' | 'Speech-language' | 'Educational Assessments'
};
export const AppointmentButton = ({ text, color = 'orange', useButtonStyles = false, classNames = '', wrapperClassNames = '', lead_source }: ScheduleProps) => {
  const handleButtonClick = () => {
    sendGAEvent({
      event: 'generate_lead',
      value: 1,
      lead_source: lead_source,
    });
  }
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget-cdn.simplepractice.com/assets/integration-1.0.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  if (useButtonStyles) {
    const variants = {
      yellow: "bg-blue-600 hover:bg-blue-500",
      orange: "bg-[#d14d22]",
      green: "bg-red-600 hover:bg-red-500",
    };
    return (
      <div className={wrapperClassNames}>
        <div className="spwidget-button-wrapper">
          <a
            href="https://greenvillelearningcollective.clientsecure.me"
            className={`spwidget-button relative inline-block px-4 py-2 font-medium group ${classNames}`}
            data-spwidget-scope-id="4943d596-7dc7-4342-b7d3-3fc870715111"
            data-spwidget-scope-uri="greenvillelearningcollective"
            data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
            data-spwidget-scope-global
            data-spwidget-autobind
            onClick={handleButtonClick}
          >
            <span className={`absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-2 translate-y-2 ${variants[color]} group-hover:-translate-x-0 group-hover:-translate-y-0`}></span>
            <span className={`absolute inset-0 w-full h-full bg-[#fffaf6] transition duration-200 border-2 border-black group-hover:bg-[#d14d22]`}></span>
            <span className="relative text-black group-hover:text-black text-lg">{text}</span>
          </a>
        </div>
      </div>
    )
  }
  return (
    <div className={wrapperClassNames}>
      <div className="spwidget-button-wrapper">
        <a
          href="https://greenvillelearningcollective.clientsecure.me"
          className={`spwidget-button ${classNames}`}
          data-spwidget-scope-id="4943d596-7dc7-4342-b7d3-3fc870715111"
          data-spwidget-scope-uri="greenvillelearningcollective"
          data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
          data-spwidget-scope-global
          data-spwidget-autobind
          onClick={handleButtonClick}
        >
          {text}
        </a>
      </div>
    </div>
  );
}
