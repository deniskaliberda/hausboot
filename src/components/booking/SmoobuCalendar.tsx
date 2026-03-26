"use client";

import { useEffect } from "react";

export function SmoobuCalendar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://login.smoobu.com/js/Apartment/CalendarWidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="smoobuApartment3053686de" className="calendarWidget">
      <div
        className="calendarContent"
        data-load-calendar-url="https://login.smoobu.com/de/cockpit/widget/single-calendar/3053686"
        data-verification="c5562d18c755012730a98829c73f4b12deacef1bf657abbccd876c8d01f49ed0"
        data-baseurl="https://login.smoobu.com"
        data-disable-css="false"
      />
    </div>
  );
}
