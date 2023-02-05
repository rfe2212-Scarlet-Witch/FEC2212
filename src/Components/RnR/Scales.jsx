import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import {FaGripLines} from 'react-icons/fa'
import {AiOutlineCaretDown} from 'react-icons/ai'

var Scales = (props) => {
  var currMeta = props.currMeta;
  // console.log('Available Data', currMeta);

  var calculatedComfort =  0;
  var calculatedQuality =  0;
  var calculatedFit =  0;
  var calculatedLength =  0;
  var calculatedSize =  0;
  var calculatedWidth =  0;


  if(currMeta.characteristics){
    if (currMeta.characteristics.Comfort) {
      calculatedComfort = currMeta.characteristics.Comfort.value;
    }
    if (currMeta.characteristics.Quality) calculatedQuality = currMeta.characteristics.Quality.value;
    if (currMeta.characteristics.Fit)     calculatedFit = currMeta.characteristics.Fit.value;
    if (currMeta.characteristics.Length) calculatedLength = currMeta.characteristics.Length.value;
    if (currMeta.characteristics.Size) calculatedSize = currMeta.characteristics.Size.value;
    if (currMeta.characteristics.Width) calculatedWidth = currMeta.characteristics.Width.value;



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
      left: `${-(calculatedComfort /4) * 100 }%`,
      order: 1
    },
    AiOutlineQuality : {
      position: 'relative',
      // border: '1px solid black',
      // display: 'inline-block',
      color: 'black',
      height: "50%",
      width: '40%',
      left: `${-(calculatedQuality /4) * 100 }%`,
      order: 1
    },
    AiOutlineLength : {
      position: 'relative',
      // border: '1px solid black',
      // display: 'inline-block',
      color: 'black',
      height: "50%",
      width: '40%',
      left: `${-(calculatedLength /4) * 100 }%`,
      order: 1
    },
    AiOutlineFit : {
      position: 'relative',
      // border: '1px solid black',
      // display: 'inline-block',
      color: 'black',
      height: "50%",
      width: '40%',
      left: `${-(calculatedFit /4) * 100 }%`,
      order: 1
    },
    AiOutlineWidth : {
      position: 'relative',
      // border: '1px solid black',
      // display: 'inline-block',
      color: 'black',
      height: "50%",
      width: '40%',
      left: `${-(calculatedWidth /3) * 100 }px`,
      order: 1
    },
    AiOutlineSize : {
      position: 'relative',
      // border: '1px solid black',
      // display: 'inline-block',
      color: 'black',
      height: "50%",
      width: '40%',
      left: `${-(calculatedSize /3) * 100 }px`,
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
  console.log('calculatedComfort', calculatedComfort)
  if (calculatedComfort === 0) {
    console.log('tis undefined')
    stylers.BoxOutline.left = '1000px'
  }

  return (
    <>
    {calculatedComfort !== 0 ? (
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
      </>
      ) : null}


      {calculatedQuality !== 0 ? (
        <>
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
      </>
      ): null}



      {calculatedLength !== 0 ? (
        <>
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
      </>
      ): null}


        {calculatedFit !== 0 ? (
          <>
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
        ): null}


      {calculatedWidth !== 0 ? (
      <>
      <div style={stylers.ComfortTitle}>
          Width
      </div>
      <div style={stylers.FaGripParent}>
        <div style={stylers.scale}>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <AiOutlineCaretDown preserveAspectRatio="none" style={stylers.AiOutlineWidth}/>

        </div>
          <div style={stylers.ComfortLabels}>
            <div style={stylers.ComfortLabelsLeft}>
            Too Narrow
            </div>
            <div style={stylers.ComfortLabels}>
            Perfect
            </div>
            <div style={stylers.ComfortLabelsRight}>
            Too Wide
            </div>
            <div style={stylers.BoxOutline}>
            </div>
          </div>
      </div>
      </>
        ): null}


    {calculatedSize !== 0 ? (
      <>
      <div style={stylers.ComfortTitle}>
          Size
      </div>
      <div style={stylers.FaGripParent}>
        <div style={stylers.scale}>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <FaGripLines preserveAspectRatio="none" style={stylers.GripLine}/>
          <AiOutlineCaretDown preserveAspectRatio="none" style={stylers.AiOutlineSize}/>

        </div>
          <div style={stylers.ComfortLabels}>
            <div style={stylers.ComfortLabelsLeft}>
            Size Too Small
            </div>
            <div style={stylers.ComfortLabels}>
            Perfect
            </div>
            <div style={stylers.ComfortLabelsRight}>
            Runs Wide
            </div>
            <div style={stylers.BoxOutline}>
            </div>
          </div>
      </div>
      </>
        ): null}
    </>
  )
}

export default Scales;