import React from "react";
import TypewriterEffectSmoothDemo from "./Typewritertext";

const SparklesPreview = ({  className, word, parent_div }) => {


    return (
      <div className={`w-full flex flex-col items-center justify-center overflow-hidden rounded-md ${parent_div}` }>
        <TypewriterEffectSmoothDemo words={word} classname={className} />
      </div>
    );
  }


export default SparklesPreview;
