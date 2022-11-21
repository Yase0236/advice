import React from 'react'

export default function Calculate() {
  return (
    <>
    <h3>Some headline here</h3>
    <p>A lot of text here that explains the calculator, be clear and specific</p>
    <section className="time_section">
        <label htmlFor="time-slot"></label>
                <input required type="number" name="time-slot" id="time-slot" />
    </section>
    <section className="social_section">
        <label htmlFor="social-media"></label>
                <input required type="text" name="social-media" id="social-media" />
    </section>
    </>
  )
}
