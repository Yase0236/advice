import React from "react";

export default function Tips(props) {
  const tipsText = "I'm here";
  return (
    <>
      {/* <p>{props.tips}</p> */}
      <section className="tips_section">
        <div className="tip">
          <h3 className="tip_headings">General tips for reducing your carbon footprint: </h3>
          <p>
            A Danish person emits 17 tons of CO2 on average pr. year. <br /> 5 t. is public emissions, operating hospitals and infrastructure. 12 t. can be reduced by making changes in YOUR behavior.
          </p>
          <p>According to the Danish thinktank Concito, there are four areas of consumption, someone should be vary of: food, transportation, consumption and activism.</p>
          <p>
            <span>&#9733;</span>Eating far less lamb and beef, and eat products that are locally produced and in season, and avoiding creating food waste can all help bring down the CO2 emissions.
          </p>
          <p>
            <span>&#9733;</span>
            While using a bike would be the obvious alternative - Public transportation like trains and buses are more realistic alternatives for traveling.
            <br />
            Flying and driving are heavy on the emissions and release more CO2.
          </p>
          <p>
            <span>&#9733;</span>General consumption and shopping are big culprits as producing and transporting it emits a lot of CO2. Buy less clothes and hold on to it longer = best way to bring down your personal CO2 emissions.
          </p>
          <p>
            <span>&#9733;</span>Buy second hand or mend broken things instead of replacing them with new.
          </p>
          <p>
            <span>&#9733;</span>
            The last area is getting involved in climate activism.
            <br />
            You can demonstrate and meet like-minded people in different communities and share knowledge and opinions with eachother. You can also do all od this on social media.
          </p>
          <p>
            <span>&#9733;</span>Doing these simple steps, can still be an effective way of making sure everyone else are aware of their CO2 emission as well.
          </p>
        </div>
        <div className="tip">
          <h3 className="tip_headings">General tips for reducing your digital carbon footprint:</h3>
          <p>
            <span>&#9733;</span>
            Watching videos is now 1% of the global CO2 emissions according to the French thinktank The Shift Project. Reduce your screen using some of the many tips found online.
          </p>
          <p>
            <span>&#9733;</span>YouTube and other sites are infamous for autoplaying video after video. Make sure to turn off this feature.
          </p>
          <p>
            <span>&#9733;</span> Turning down the resolution helps minimize the emission. Do you really need 4k video quality??
          </p>
          <p>
            <span>&#9733;</span> Some music streaming services allow you to download music and listen, without wifi or mobile network. If possible, do this as often as possible.
          </p>
          <p>
            <span>&#9733;</span>Close your tabs on your computer helps as video ads can play without your knowing.
          </p>
        </div>
      </section>
    </>
  );
}
