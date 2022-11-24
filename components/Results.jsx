import React, { useState } from "react";
export default function Results(props) {
  // setTips(`i'm here`);

  return (
    <>
      <section>
        <h2 className="result_text">{props.result}</h2>
      </section>
    </>
  );
}
