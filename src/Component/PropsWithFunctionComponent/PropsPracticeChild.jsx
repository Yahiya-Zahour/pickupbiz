import React from "react";
export const PropsPracticeChild =(props)=> {
    return(
       < React.Fragment>
       <div>
           <p>
               i am {props.name} and i am {props.age} your old
           </p>
           <p>
               i am {props.zahour} and i am {props.PersonAge} year old ok
           </p>
       </div>
       </React.Fragment>
    );
};