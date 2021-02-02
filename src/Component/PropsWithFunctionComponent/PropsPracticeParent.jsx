import React from "react";
import { PropsPracticeChild } from "./PropsPracticeChild";
export const PropsPracticeParent =() => {
    const personName="Tauseef";
    
    return(
       
<div>
        <PropsPracticeChild name="Amer" age="30"/>
        <PropsPracticeChild zahour={personName}/>
        {/* <PropsPracticeChild zahoor={PersonAge}/> */}
        <PropsPracticeChild>cr7</PropsPracticeChild>
        </div>

    );
};