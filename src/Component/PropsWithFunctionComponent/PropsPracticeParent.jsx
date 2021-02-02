import React from "react";
import { PropsPracticeChild } from "./PropsPracticeChild";
export const PropsPracticeParent =() => {
    const personName="Tauseef";
    var Personage="29";
    return(
       
<div>
        <PropsPracticeChild name="Amer" age="30"/>
        <PropsPracticeChild zahour={personName}/>
        <PropsPracticeChild zahoor={PersonAge}/>
        </div>

    );
};