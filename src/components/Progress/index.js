import React from "react";

const Progress = (props) => {
    const subscribers =props.contador;
    const subPercent = (subscribers/10);
    const goal =props.goal; 

    return( 
      <div className="progress-bar">
          <span style={{width: `${subPercent}%`}}>
          {`${subPercent}%`}
          </span>
    <p>{goal}</p>
      </div>
    )
}

export default Progress;