import React from "react";
import { useEffect, useRef, useState } from "react";
import Results from "./Results";
import Tips from "./Tips";
export default function Calculate(props) {
  const addForm = useRef();
  const [result, setResult] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  function handler(e) {
    e.preventDefault();
    // youtube
    const youtubeTime = Number(addForm.current.elements.youtube.value);
    const youtubeCo2 = youtubeTime * 0.46;
    const youtubeBeef = props.media.youtube.beef * youtubeTime;
    const youtubePork = props.media.youtube.pork * youtubeTime;
    const youtubePotatoes = props.media.youtube.potatoes * youtubeTime;
    // console.log(youtubeBeef, youtubePork, youtubePotatoes);
    // instagram
    const instagramTime = Number(addForm.current.elements.instagram.value);
    const instagramCo2 = instagramTime * 1.05;
    const instagramBeef = props.media.youtube.beef * instagramTime;
    const instagramPork = props.media.youtube.pork * instagramTime;
    const instagramPotatoes = props.media.youtube.potatoes * instagramTime;
    // facebook
    const facebookTime = Number(addForm.current.elements.facebook.value);
    const facebookCo2 = facebookTime * 0.79;
    const facebookBeef = props.media.youtube.beef * facebookTime;
    const facebookPork = props.media.youtube.pork * facebookTime;
    const facebookPotatoes = props.media.youtube.potatoes * facebookTime;
    // snapchat
    const snapchatTime = Number(addForm.current.elements.snapchat.value);
    const snapchatCo2 = snapchatTime * 0.87;
    const snapchatBeef = props.media.youtube.beef * snapchatTime;
    const snapchatPork = props.media.youtube.pork * snapchatTime;
    const snapchatPotatoes = props.media.youtube.potatoes * snapchatTime;
    // tiktok
    const tiktokTime = Number(addForm.current.elements.tiktok.value);
    const tiktokCo2 = tiktokTime * 2.63;
    const tiktokBeef = props.media.youtube.beef * tiktokTime;
    const tiktokPork = props.media.youtube.pork * tiktokTime;
    const tiktokPotatoes = props.media.youtube.potatoes * tiktokTime;
    // linkedin
    const linkedinTime = Number(addForm.current.elements.linkedin.value);
    const linkedinCo2 = linkedinTime * 0.71;
    const linkedinBeef = props.media.youtube.beef * linkedinTime;
    const linkedinPork = props.media.youtube.pork * linkedinTime;
    const linkedinPotatoes = props.media.youtube.potatoes * linkedinTime;
    // twitter
    const twitterTime = Number(addForm.current.elements.twitter.value);
    const twitterCo2 = twitterTime * 0.6;
    const twitterBeef = props.media.youtube.beef * twitterTime;
    const twitterPork = props.media.youtube.pork * twitterTime;
    const twitterPotatoes = props.media.youtube.potatoes * twitterTime;
    // pinterest
    const pinterestTime = Number(addForm.current.elements.pinterest.value);
    const pinterestCo2 = pinterestTime * 1.3;
    const pinterestBeef = props.media.youtube.beef * pinterestTime;
    const pinterestPork = props.media.youtube.pork * pinterestTime;
    const pinterestPotatoes = props.media.youtube.potatoes * pinterestTime;
    // reddit
    const redditTime = Number(addForm.current.elements.reddit.value);
    const redditCo2 = redditTime * 2.48;
    const redditBeef = props.media.youtube.beef * redditTime;
    const redditPork = props.media.youtube.pork * redditTime;
    const redditPotatoes = props.media.youtube.potatoes * redditTime;

    //  total time user choose
    const totalTime = youtubeTime + instagramTime + facebookTime + snapchatTime + tiktokTime + linkedinTime + twitterTime + pinterestTime + redditTime;
    // console.log(totalTime);

    // total co2 user emits
    const totalCo2 = youtubeCo2 + instagramCo2 + facebookCo2 + snapchatCo2 + tiktokCo2 + linkedinCo2 + twitterCo2 + pinterestCo2 + redditCo2;
    // console.log(totalCo2);

    // total beef amount
    const totalBeef = youtubeBeef + instagramBeef + facebookBeef + snapchatBeef + tiktokBeef + linkedinBeef + twitterBeef + pinterestBeef + redditBeef;

    // total pork amount
    const totalPork = youtubePork + instagramPork + facebookPork + snapchatPork + tiktokPork + linkedinPork + twitterPork + pinterestPork + redditPork;

    // total potatoes amount
    const totalPotatoes = youtubePotatoes + instagramPotatoes + facebookPotatoes + snapchatPotatoes + tiktokPotatoes + linkedinPotatoes + twitterPotatoes + pinterestPotatoes + redditPotatoes;

    setResult(`Here are your Results: Your ${totalTime} minutes use of Social Media
      is emitting ${totalCo2.toFixed(2)} grams of CO2. That is equal to ${totalBeef.toFixed(2)} grams of beef or ${totalPork.toFixed(2)} grams of pork or ${totalPotatoes.toFixed(2)} grams of potatoes. `);
    setSubmitted(true);
  }

  return (
    <>
      <h3>Calculate your CO2 emission from your phone use here:</h3>
      <p>
        Choose the social media you want to check and choose a time slot in each category. This calculator only applies to cell phones, and you decide for yourself whether you want to calculate your weekly or daily use.
        <br />
        Don't know your your screen time use? Check your phone’s settings to get the exact time spent on each app.
      </p>
      <section className="form_fields">
        <form action="" ref={addForm} onSubmit={handler}>
          <fieldset className="form_styling">
            <legend>Social Media</legend>

            <label htmlFor="youtube">Youtube</label>
            <select name="youtube" id="youtube">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option value={20}>20 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
              <option value={180}>3 hours</option>
            </select>

            <label htmlFor="instagram">Instagram</label>
            <select name="instagram" id="instagram">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option value={20}>20 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
              <option value={180}>3 hours</option>
            </select>

            <label htmlFor="facebook">Facebook</label>
            <select name="facebook" id="facebook">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option value={20}>20 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
              <option value={180}>3 hours</option>
            </select>

            <label htmlFor="snapchat">Snapchat</label>
            <select name="snapchat" id="snapchat">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option value={20}>20 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
              <option value={180}>3 hours</option>
            </select>

            <label htmlFor="tiktok">Tiktok</label>
            <select name="tiktok" id="tiktok">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option value={20}>20 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
              <option value={180}>3 hours</option>
            </select>

            <label htmlFor="linkedin">LinkedIn</label>
            <select name="linkedin" id="linkedin">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option value={20}>20 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
              <option value={180}>3 hours</option>
            </select>

            <label htmlFor="twitter">Twitter</label>
            <select name="twitter" id="twitter">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option value={20}>20 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
              <option value={180}>3 hours</option>
            </select>

            <label htmlFor="pinterest">Pinterest</label>
            <select name="pinterest" id="pinterest">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option value={20}>20 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
              <option value={180}>3 hours</option>
            </select>

            <label htmlFor="reddit">Reddit</label>
            <select name="reddit" id="reddit">
              <option value={0}>Select here</option>
              <option value={10}>10 minutes</option>
              <option value={20}>20 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
              <option value={180}>3 hours</option>
            </select>
          </fieldset>
          <section className="calculateButton">
            <button className="submitButton" type="submit">
              Calculate!
            </button>
          </section>
        </form>
        <Results result={result} />
        {submitted && <Tips />}
      </section>
    </>
  );
}
