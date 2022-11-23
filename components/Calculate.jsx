import React from "react";

export default function Calculate() {
  return (
    <>
      <h3>Calculate your CO2 emission from your phone use here:</h3>
      <p>Choose the social media you want to check and choose a time slot in each category. This calculator only applies to cell phones. In doubt about your used screen time? Check your phone’s settings to get the exact time spent on each app.</p>
      <section className="form_fields">
        <form action="">
          <label htmlFor="youtube">Youtube</label>
          <select name="youtube" id="youtube">
            <option>Select here</option>
            <option>10 minutes</option>
            <option>20 minutes</option>
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>3 hours</option>
          </select>

          <label htmlFor="instagram">Instagram</label>
          <select name="instagram" id="instagram">
            <option>Select here</option>
            <option>10 minutes</option>
            <option>20 minutes</option>
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>3 hours</option>
          </select>

          <label htmlFor="facebook">Facebook</label>
          <select name="facebook" id="facebook">
            <option>Select here</option>
            <option>10 minutes</option>
            <option>20 minutes</option>
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>3 hours</option>
          </select>

          <label htmlFor="snapchat">Snapchat</label>
          <select name="snapchat" id="snapchat">
            <option>Select here</option>
            <option>10 minutes</option>
            <option>20 minutes</option>
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>3 hours</option>
          </select>

          <label htmlFor="tiktok">TikTok</label>
          <select name="tiktok" id="tiktok">
            <option>Select here</option>
            <option>10 minutes</option>
            <option>20 minutes</option>
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>3 hours</option>
          </select>

          <label htmlFor="linkedin">LinkedIn</label>
          <select name="linkedin" id="linkedin">
            <option>Select here</option>
            <option>10 minutes</option>
            <option>20 minutes</option>
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>3 hours</option>
          </select>

          <label htmlFor="twitter">Twitter</label>
          <select name="twitter" id="twitter">
            <option>Select here</option>
            <option>10 minutes</option>
            <option>20 minutes</option>
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>3 hours</option>
          </select>

          <label htmlFor="pinterest">Pinterest</label>
          <select name="pinterest" id="pinterest">
            <option>Select here</option>
            <option>10 minutes</option>
            <option>20 minutes</option>
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>3 hours</option>
          </select>

          <label htmlFor="reddit">Reddit</label>
          <select name="reddit" id="reddit">
            <option>Select here</option>
            <option>10 minutes</option>
            <option>20 minutes</option>
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
            <option>3 hours</option>
          </select>
        </form>
        <button type="submit">CALCULATE HERE</button>
      </section>
    </>
  );
}
