import React from "react";

export default function Tips(props) {
  console.log(props.tips);
  return (
    <>
      <section className="tips_section">
        <div className="tip">
          <h3 className="tip_headings">Tips for reducing your digital carbon footprint:</h3>
          <p>Watching videos is now 1% of the global CO2 emissions according to the French thinktank The Shift Project. Reduce your screen using some of the many tips found online.
          </p>
          <p><span>&#9733;</span> Turn off autoplay on YouTube and other sites.</p>
          <p><span>&#9733;</span> Turn down the resolution on videos to reduce emission. Do you really need 4k video quality??</p>
          <p><span>&#9733;</span> Download music instead of streaming when possible.</p>
          <p><span>&#9733;</span> Close tabs on your computer and avoid video or ads playing without you knowing.</p>
          <p className="p_sources">Sources: <a href="https://theshiftproject.org/en/home/">The Shift Project</a>, <a href="https://www.ecowatch.com/">EcoWatch</a> , <a href="https://concito.dk/bliv-klimaklog/hvad-kan-man-selv-goere">Concito </a> and <a href="https://wayofbeing.co/blogs/news/12-easy-ways-to-minimize-your-digital-carbon-footprint ">Way of Being</a></p>
        </div>
        <div className="tip">
          <h3 className="tip_headings">General tips for reducing your carbon footprint: </h3>
          <p>
            A Danish person emits 17 tons of CO2 on average pr. year. 5 tons are public emissions, operating hospitals and infrastructure. 12 tons can be reduced by making changes in YOUR behavior.
          </p>
          <p>According to the Danish thinktank Concito, there are four areas of consumption, someone should be vary of: food, transportation, consumption and activism.</p>
          <p>
            <span>&#9733;</span> Eat far less lamb and beef.</p>
          <p><span>&#9733;</span> Eat products that are locally produced and in season.</p>
          <p><span>&#9733;</span> Avoid creating food waste.</p>
          <p><span>&#9733;</span> Use your bike if possible.</p>
          <p><span>&#9733;</span> Use public transportation like trains and buses when you have the possibility.</p>
          <p><span>&#9733;</span> Avoid travelling by plane and cars as much as possible.</p>
          <p><span>&#9733;</span> Buy less clothes and things and hold on to it longer.</p>
          <p><span>&#9733;</span> Buy second hand or mend broken things instead of replacing them with new.</p>
          <p><span>&#9733;</span> Get involved in climate activism - demonstrate, research, share your knowledge and let your electives know you want climate change.</p>
          <p><span>&#9733;</span> Make people aware of their digital CO2 emission by sharing this page.</p>
          <p className="p_sources">Sources: <a href="https://concito.dk/bliv-klimaklog/hvad-kan-man-selv-goere">Concito </a></p>
        </div>
      </section>
    </>
  );
}
