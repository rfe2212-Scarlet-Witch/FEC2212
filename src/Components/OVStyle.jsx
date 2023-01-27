import React from 'react';

function OVStyle (props) {

  return (
    <div>
      Style: {props.style.name}
      <div></div>
      Price: {props.style.original_price}
    </div>
  )
}

export default OVStyle;