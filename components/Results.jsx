import React from "react";
import Tips from "./Tips";
export default function Results(props) {
  // console.log(props);

  return (
    <>
      <section>
        <h2 className="result_text">{props.result}</h2>
      </section>
      <Tips />
    </>
  );
}
