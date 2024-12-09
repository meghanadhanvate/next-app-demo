import React from "react";
import TypewriterEffectSmoothDemo2 from "./typewriter2";


const SparklesPreview2 = ({word, className, mainDivClass, rowWrapper}) =>  {
    return (

    <div  className={` ${mainDivClass} w-full  flex flex-col items-center justify-center  rounded-md`}>
      <h3 id="heading" >
      <TypewriterEffectSmoothDemo2 words={word} rowWrapper={rowWrapper} classsname={className}  />
      </h3>
     
    </div> 
  );
}


export default SparklesPreview2