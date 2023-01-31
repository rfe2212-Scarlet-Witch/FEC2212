import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import {FaGripLines} from 'react-icons/fa'
import {AiOutlineCaretDown} from 'react-icons/ai'

var Scales = (props) => {
  var currMeta = props.currMeta;
  console.log('Available Data', currMeta);

  var calculatedComfort =  0;
  if(currMeta.characteristics){
    calculatedComfort = currMeta.characteristics.Comfort.value;
  }
  console.log(calculatedComfort);

  const stylers = {
    scale : {
      display: 'flex',
      color: 'black',
      width: '100%',
      height: '10%',
      flexDirection: 'row',
      border: "2px solid black",
      justifyContent: 'space-evenly'
    },
    FaGripParent : {
      display: 'flex',
      // display: 'block',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      border: '1px solid grey'
    },
    AiOutline : {
      position: 'relative',
      border: '1px solid black',
      display: 'inline-block',
      color: 'red',
      height: "25px",
      width: '25px',
      left: `${-(calculatedComfort /4) * 100 }px`
    },
    GripLine : {
      position: 'absolute',
      width: '100%',
      height: '30px',
      border: '1px solid red',
    },
    ComfortTitle : {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      textAlign: 'center'
    }
  }

  return (
    <>
      <div style={stylers.FaGripParent}>
        <div className='parentGrip' style={stylers.scale}>
          <div style={stylers.ComfortTitle}>
            Comfort
          </div>
          <FaGripLines className='childGrip' preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines className='childGrip' preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines className='childGrip' preserveAspectRatio="none" style={stylers.GripLine}/>
          <AiOutlineCaretDown className='childPointer' preserveAspectRatio='none' style={stylers.AiOutline}/>

        </div>
      </div>
    </>
  )
}

export default Scales;