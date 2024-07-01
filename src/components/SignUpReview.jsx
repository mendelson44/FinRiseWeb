import React, { useState } from "react";
import AccordionExpand from "./AccordionExpand";

function SignUpReview(props) {
  return (
    <>
      <AccordionExpand data={props.data} />
    </>
  );
}

export default SignUpReview;
