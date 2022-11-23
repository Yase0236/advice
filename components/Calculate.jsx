import React from "react";
import { useEffect, useRef } from "react";
import Results from "./Results";
export default function Calculate(props) {
  const addForm = useRef();
  function handler(e) {
    e.preventDefault();
    const youtubeTime = Number(addForm.current.elements.youtube.value);
    const youtubeCo2 = youtubeTime * 0.46;
    const instagramTime = Number(addForm.current.elements.instagram.value);
    const instagramCo2 = instagramTime * 1.05;
    const facebookTime = Number(addForm.current.elements.facebook.value);
    const facebookCo2 = facebookTime * 0.79;
    const snapchatTime = Number(addForm.current.elements.snapchat.value);
    const snapchatCo2 = snapchatTime * 0.87;
    const tiktokTime = Number(addForm.current.elements.tiktok.value);
    const tiktokCo2 = tiktokTime * 2.63;
    const linkedinTime = Number(addForm.current.elements.linkedin.value);
    const linkedinCo2 = linkedinTime * 0.71;
    const twitterTime = Number(addForm.current.elements.twitter.value);
    const twitterCo2 = twitterTime * 0.6;
    const pinterestTime = Number(addForm.current.elements.pinterest.value);
    const pinterestCo2 = pinterestTime * 1.3;
    const redditTime = Number(addForm.current.elements.reddit.value);
    const redditCo2 = redditTime * 2.48;

    const totalTime = youtubeTime + instagramTime + facebookTime + snapchatTime + tiktokTime + linkedinTime + twitterTime + pinterestTime + redditTime;
    console.log(totalTime);
    const totalCo2 = youtubeCo2 + instagramCo2 + facebookCo2 + snapchatCo2 + tiktokCo2 + linkedinCo2 + twitterCo2 + pinterestCo2 + redditCo2;
    console.log(totalCo2);
    // console.log(addForm.current.elements.label);
    console.log(`Your ${totalTime} minutes use of Social Media
     is emitting ${totalCo2.toFixed(2)} grams of CO2`);
  }
  function showResult(props) {
    const result = document.querySelector(".result_text");
    result.textContent = `Your ${totalTime} minutes use of Social Media
    is emitting ${totalCo2.toFixed(2)} grams of CO2`;
  }
  // useEffect(() => {
  //   const selectTime = document.querySelector("fieldset");
  //   // console.log(selectTime.elements);
  //   selectTime.addEventListener("click", chooseTime);
  // });
  // function chooseTime(event) {
  //   const selectedTime = event.target.value;
  //   console.log(selectedTime);
  //   // if (selectedTime === "10 minutes") {
  //   //   console.log("4.6");
  //   // }
  // }
  // function collectInput() {
  //   const getInput = document.querySelectorAll("select").forEach((el) => {
  //     el.addEventListener;
  //     "select",
  //       (e) => {
  //         if (e.target.value === "youtube") {
  //           console.log("4.6g");
  //         }
  //       };
  //   });
  //   console.log(getInput);
  // }
  return (
    <>
      <h3>Calculate your CO2 emission from your phone use here:</h3>
      <p>Choose the social media you want to check and choose a time slot in each category. This calculator only applies to cell phones. In doubt about your used screen time? Check your phone’s settings to get the exact time spent on each app.</p>
      <section className="form_fields">
        <form action="" ref={addForm} onSubmit={handler}>
          <fieldset>
            <legend>Social Media</legend>
            {/* <legend>Youtube</legend> */}
            <label htmlFor="youtube">Youtube</label>
            <select name="youtube" id="youtube">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option>20 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
            </select>

            {/* <legend>Instagram</legend> */}
            <label htmlFor="instagram">Instagram</label>
            <select name="instagram" id="instagram">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option>20 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
            </select>
            {/* <legend>Facebook</legend> */}
            <label htmlFor="facebook">Facebook</label>
            <select name="facebook" id="facebook">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option>20 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
            </select>
            {/* <legend>Snapchat</legend> */}
            <label htmlFor="snapchat">Snapchat</label>
            <select name="snapchat" id="snapchat">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option>20 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
            </select>
            {/* <legend>TikTok</legend> */}
            <label htmlFor="tiktok">Tiktok</label>
            <select name="tiktok" id="tiktok">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option>20 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
            </select>
            {/* <legend>LinkedIn</legend> */}
            <label htmlFor="linkedin">LinkedIn</label>
            <select name="linkedin" id="linkedin">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option>20 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
            </select>
            {/* <legend>Twitter</legend> */}
            <label htmlFor="twitter">Twitter</label>
            <select name="twitter" id="twitter">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option>20 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
            </select>
            {/* <legend>Pinterest</legend> */}
            <label htmlFor="pinterest">Pinterest</label>
            <select name="pinterest" id="pinterest">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option>20 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
            </select>
            {/* <legend>Reddit</legend> */}
            <label htmlFor="reddit">Reddit</label>
            <select name="reddit" id="reddit">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option>20 minutes</option>
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>2 hours</option>
              <option>3 hours</option>
            </select>
            <button type="submit" onClick={showResult}>
              Calculate!
            </button>
          </fieldset>
        </form>
      </section>
    </>
  );
}
