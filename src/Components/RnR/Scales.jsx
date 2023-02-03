import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import {FaGripLines} from 'react-icons/fa'
import {AiOutlineCaretDown} from 'react-icons/ai'

var Scales = (props) => {
  var currMeta = props.currMeta;

  var calculatedComfort =  0;
  var calculatedQuality =  0;
  var calculatedFit =  0;
  var calculatedLength =  0;
  if(currMeta.characteristics){
    calculatedComfort = currMeta.characteristics.Comfort.value;
    calculatedQuality = currMeta.characteristics.Quality.value;
    calculatedFit = currMeta.characteristics.Fit.value;
    calculatedLength = currMeta.characteristics.Length.value;
  }

  const stylers = {
    scale : {
      display: 'flex',
      color: 'black',
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      // border: "2px solid black",
      justifyContent: 'space-evenly',
      order: 1,
      // flexGrow: 2
    },
    AiOutlineComfort : {
      position: 'relative',
      // border: '1px solid black',
      // display: 'inline-block',
      color: 'black',
      height: "50%",
      width: '40%',
      left: `${-(calculatedComfort /3) * 100 }px`,
      order: 1
    },
    AiOutlineQuality : {
      position: 'relative',
      // border: '1px solid black',
      // display: 'inline-block',
      color: 'black',
      height: "50%",
      width: '40%',
      left: `${-(calculatedQuality /3) * 100 }px`,
      order: 1
    },
    AiOutlineLength : {
      position: 'relative',
      // border: '1px solid black',
      // display: 'inline-block',
      color: 'black',
      height: "50%",
      width: '40%',
      left: `${-(calculatedLength /3) * 100 }px`,
      order: 1
    },
    AiOutlineFit : {
      position: 'relative',
      // border: '1px solid black',
      // display: 'inline-block',
      color: 'black',
      height: "50%",
      width: '40%',
      left: `${-(calculatedFit /3) * 100 }px`,
      order: 1
    },
    GripLine : {
      position: 'relative',
      width: '100%',
      height: '30px',
      // border: '1px solid red',
      order: 1,
      // flexGrow: 3
    },
    ComfortTitle : {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      textAlign: 'center',
      order: 1
      // fontSize: '10px',
      // padding: '10px 0'
    },
    ComfortLabels : {
      display: 'flex',
      justifyContent: 'space-evenly',
      width: '100%',
      flexDirection: 'row',
      fontSize: '15px',
      // padding: '0px 10px'
      // border: '1px solid black',
      order: 1
    },
    ComfortLabelsLeft : {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      flexDirection: 'row',
      fontSize: '15px',
      // padding: '0px 10px'
      // border: '1px solid black',
      order: 1
    },
    ComfortLabelsRight : {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      flexDirection: 'row',
      fontSize: '15px',
      // padding: '0px 10px'
      // border: '1px solid black',
      order: 1
    },
    BoxOutline : {
      position: 'relative',
      // border: '1px solid black',
      // display: 'inline-block',
      color: 'white',
      height: "50%",
      width: '40%',
      left: `${-(calculatedComfort /4) * 100 }px`,
      order: 1
    }
  }

  return (
    <>
      <div style={stylers.ComfortTitle}>
          Comfort
      </div>
      <div style={stylers.FaGripParent}>
        <div style={stylers.scale}>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <AiOutlineCaretDown preserveAspectRatio="none" style={stylers.AiOutlineComfort}/>

        </div>
          <div style={stylers.ComfortLabels}>
            <div style={stylers.ComfortLabelsLeft}>
            Uncomfortable
            </div>
            <div style={stylers.ComfortLabels}>
            Average
            </div>
            <div style={stylers.ComfortLabelsRight}>
            Perfect
            </div>
            <div style={stylers.BoxOutline}>
            </div>
          </div>
      </div>
      <div style={stylers.ComfortTitle}>
          Quality
      </div>
      <div style={stylers.FaGripParent}>
        <div style={stylers.scale}>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <AiOutlineCaretDown preserveAspectRatio="none" style={stylers.AiOutlineQuality}/>

        </div>
          <div style={stylers.ComfortLabels}>
            <div style={stylers.ComfortLabelsLeft}>
            Poor
            </div>
            <div style={stylers.ComfortLabels}>
            Average
            </div>
            <div style={stylers.ComfortLabelsRight}>
            Perfect
            </div>
            <div style={stylers.BoxOutline}>
            </div>
          </div>
      </div>
      <div style={stylers.ComfortTitle}>
          Length
      </div>
      <div style={stylers.FaGripParent}>
        <div style={stylers.scale}>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <AiOutlineCaretDown preserveAspectRatio="none" style={stylers.AiOutlineLength}/>

        </div>
          <div style={stylers.ComfortLabels}>
            <div style={stylers.ComfortLabelsLeft}>
            Runs Short
            </div>
            <div style={stylers.ComfortLabels}>
            Perfect
            </div>
            <div style={stylers.ComfortLabelsRight}>
            Runs Long
            </div>
            <div style={stylers.BoxOutline}>
            </div>
          </div>
      </div>
      <div style={stylers.ComfortTitle}>
          Fit
      </div>
      <div style={stylers.FaGripParent}>
        <div style={stylers.scale}>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <AiOutlineCaretDown preserveAspectRatio="none" style={stylers.AiOutlineFit}/>

        </div>
          <div style={stylers.ComfortLabels}>
            <div style={stylers.ComfortLabelsLeft}>
            Runs Tight
            </div>
            <div style={stylers.ComfortLabels}>
            Perfect
            </div>
            <div style={stylers.ComfortLabelsRight}>
            Runs Long
            </div>
            <div style={stylers.BoxOutline}>
            </div>
          </div>
      </div>

    </>
  )
}

export default Scales;