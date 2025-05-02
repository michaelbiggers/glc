import { useEffect } from 'react';
type ScheduleProps = {
  text: string;
  classNames?: string;
};
export const AppointmentButton = ({ text, classNames = '' }: ScheduleProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget-cdn.simplepractice.com/assets/integration-1.0.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="spwidget-button-wrapper">
        <a
          href="https://greenvillelearningcollective.clientsecure.me"
          className={`spwidget-button ${classNames}`}
          data-spwidget-scope-id="4943d596-7dc7-4342-b7d3-3fc870715111"
          data-spwidget-scope-uri="greenvillelearningcollective"
          data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
          data-spwidget-scope-global
          data-spwidget-autobind
        >
          {text}
        </a>
      </div>
    </div>
  );
}
