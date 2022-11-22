import React from "react";

export default function Calculate() {
  return (
    <>
      <h3>Calculate your CO2 emission from your phone use here:</h3>
      <p>Choose the social media you want to check and choose a time slot in each category. This calculator only applies to cell phones. In doubt about your used screen time? Check your phone’s settings to get the exact time spent on each app.</p>
      <section className="time_section">
        <label htmlFor="time-slot"></label>
        <input required type="number" name="time-slot" id="time-slot" />
      </section>
      <section className="social_section">
        <label htmlFor="social-media"></label>
        <input required type="text" name="social-media" id="social-media" />
      </section>
    </>
  );
}
