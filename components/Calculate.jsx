import React from 'react'

export default function Calculate() {
  return (
    <>
    <h3>Calculate your CO2 emission from your phone use here:</h3>
    <p>Choose the social media you want to check and choose a time slot in each category. This calculator only applies to cell phones. 
      In doubt about your used screen time? Check your phone’s settings to get the exact time spent on each app.</p>
    <section className="form_fields">
      <form action="">
        <legend>Youtube</legend>
        <label htmlFor="youtube"></label>
                <select name="youtube" id="youtube" />
                <option>10 minutes</option>
                <option>20 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
        <legend>Instagram</legend>
        <label htmlFor="instagram"></label>
                <select name="instagram" id="instagram" />
                <option>10 minutes</option>
                <option>20 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <legend>Instagram</legend>
        <label htmlFor="facebook"></label>
                <select name="facebook" id="facebook" />
                <option>10 minutes</option>
                <option>20 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <legend>Snapchat</legend>
        <label htmlFor="snapchat"></label>
                <select name="snapchat" id="snapchat" />
                <option>10 minutes</option>
                <option>20 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <legend>TikTok</legend>
        <label htmlFor="tiktok"></label>
                <select name="tiktok" id="tiktok" />
                <option>10 minutes</option>
                <option>20 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <legend>LinkedIn</legend>
                <label htmlFor="linkedin"></label>
                        <select name="linkedin" id="linkedin" />
                        <option>10 minutes</option>
                        <option>20 minutes</option>
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                        <option>3 hours</option>
        <legend>Twitter</legend>
                        <label htmlFor="twitter"></label>
                                <select name="twitter" id="twitter" />
                                <option>10 minutes</option>
                                <option>20 minutes</option>
                                <option>30 minutes</option>
                                <option>1 hour</option>
                                <option>2 hours</option>
                                <option>3 hours</option>
                                <legend>Pinterest</legend>
                        <label htmlFor="pinterest"></label>
                                <select name="pinterest" id="pinterest" />
                                <option>10 minutes</option>
                                <option>20 minutes</option>
                                <option>30 minutes</option>
                                <option>1 hour</option>
                                <option>2 hours</option>
                                <option>3 hours</option>
                                <legend>Reddit</legend>
                        <label htmlFor="reddit"></label>
                                <select name="reddit" id="reddit" />
                                <option>10 minutes</option>
                                <option>20 minutes</option>
                                <option>30 minutes</option>
                                <option>1 hour</option>
                                <option>2 hours</option>
                                <option>3 hours</option>
                </form>
    </section>
    </>
  )
}
