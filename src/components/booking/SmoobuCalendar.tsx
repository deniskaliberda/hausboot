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
    <div id="smoobuApartment2972646de" className="calendarWidget">
      <div
        className="calendarContent"
        data-load-calendar-url="https://login.smoobu.com/de/cockpit/widget/single-calendar/2972646"
        data-verification="ce59a5f951c778b0781190119deb1494cdca05a8b46c79face9ae3fc49f8ccf1"
        data-baseurl="https://login.smoobu.com"
        data-disable-css="false"
      />
    </div>
  );
}
