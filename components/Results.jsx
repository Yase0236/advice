import React, { useState } from "react";
import Tips from "./Tips";
export default function Results(props) {
  const [tips, setTips] = useState(false);
  // setTips(`i'm here`);

  return (
    <>
      <section>
        <h2 className="result_text">{props.result}</h2>
      </section>
      <Tips tips={tips} />
    </>
  );
}
