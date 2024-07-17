import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Extend the Window interface (if not in a separate .d.ts file)
declare global {
  interface Window {
    calendar: {
      schedulingButton: {
        load: (options: { url: string; color: string; label: string; target: HTMLElement }) => void;
      };
    };
  }
}

const GoogleCalendarButton: React.FC = () => {
    const scriptRef = useRef<HTMLScriptElement>(null); // Initialize scriptRef here

    useEffect(() => {
        // Create link element for the stylesheet
        const link = document.createElement('link');
        link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
        link.rel = 'stylesheet';
    
        // Create script element for the scheduling button
        const script = document.createElement('script');
        script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
        script.async = true;
    
        // Append both elements to the document head
        document.head.appendChild(link);
        document.head.appendChild(script);
    
        // Load the scheduling button
        script.onload = () => {
          window.addEventListener('load', () => {
            window.calendar.schedulingButton.load({
              url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1E9GyfFwA0meyAtms4lW68sFpJKgZ11J3_R9G2ZhiH9TeELxh43V1Z07F-975le1baY-y82PSS?gv=true',
              color: '#F4511E',
              label: "Book a free initial call",
              target: document.currentScript as HTMLElement,
            });
          });
        };
    
        // Cleanup function to remove the script and link from the document
        return () => {
          document.head.removeChild(link);
          document.head.removeChild(script);
        };
      }, []);

  return (
    <>
      <Head>
        <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
      </Head>
      <Script src="https://calendar.google.com/calendar/scheduling-button-script.js" async />
    </>
  );
};

export default GoogleCalendarButton;