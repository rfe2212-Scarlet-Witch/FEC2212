import React, {useEffect, useState} from 'react';
import config from '../../../config.js';
import Stars from './Stars.jsx'
import ReviewsView from './ReviewsView.jsx'
import AddReview from './AddReview.jsx'
const axios = require('axios');
import Scales from './Scales.jsx'
import Card from '@mui/material/Card'


var AddReviewButtons = ({currentProduct, handleChange, currMeta}) => {

  var styles = {
    size_one : {
      display: "flex",
      flexDirection: "column",
      border: '1px solid black',
      fontSize: '10px'
    }
  }
  //Object with characteristics
  var currCharacteristics = currMeta.characteristics;

  //potenntial attributes for each characteristic
  var listOfAttributes = {
    'Size' : ['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
    'Width' : ['Too Narrow', 'Slightly Narrow', 'Perfect', 'Slightly wide', 'Too wide'],
    'Comfort' : ['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    'Quality' : ['Poor', 'Below Average', 'What i expected', 'Pretty great', 'Perfect'],
    'Length' : ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    'Fit' : ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']
  }
  var characteristicID = {};

  var toRender = () => {
    if (currCharacteristics) {
      var allCharacteristics = Object.keys(currCharacteristics);
      for (var i = 0; i < allCharacteristics.length; i ++) {
        characteristicID[currCharacteristics[allCharacteristics[i]].id] = allCharacteristics[i];
      }
    }
  }
  toRender();

  var toPrint = () => {

  }

  // console.log("characteristic to id", characteristicID)

  // console.log('currentMeta', currMeta);

  // var keysOfCurrCharacteristics = Object.keys(currCharacteristics);
  // console.log('currChar', currCharacteristics)

  var cc;
  if (currCharacteristics !== undefined){
    cc = Object.keys(currCharacteristics);

  }

  var styles = {
    hide : {
      display: 'none'
    },
    currentSelection : {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      fontSize: '10px'
    }
  }

  var i = 0;

  var [cs, setCs] = useState({})

  var handleChangeHandler = (e) => {
    handleChange(e);
    var copyOfCs = {...cs};
    copyOfCs[e.target.name] = e.target.id;
    setCs(copyOfCs)
  }


  if (cc && currCharacteristics) {
    return (
      <>
      <div style={styles.currentSelection}>
        Current Selection:
        {Object.values(cs).map((val) => (
          <div>
            {val}
          </div>
        ))}
      </div>
        {cc.map((c) => (
          <div >
            {c}
            <fieldset onChange={(e) => {handleChangeHandler(e)}} >
            <script>{i = 0}</script>
            {listOfAttributes[c] ?
              listOfAttributes[c].map((phrase) => (

                <div>
                <input  type="radio" id={phrase} value={i} name={currCharacteristics[c].id} ></input>
                <label for="size_one" >{phrase}</label>
                <script>
                {i++}
                </script>
                </div>))
                :
              null
            }
            </fieldset>
          </div>

        ))}
      </>
    )
  } else {
    return (
      <>
      <div>nada</div>
      </>
    )
  }

}

export default AddReviewButtons;


{/* <fieldset onChange={handleChange}>
          <div style={styles.size_one}>
            Size
            <div >
              <input  type="radio" id="size_one" value="1" name={`${characteristic.id}`} ></input>
              <label for="size_one" >A size too small</label>
            </div>
            <div>
              <input  type="radio" id="size_two" value="2" name="125060" ></input>
              <label for="size_two">1/2 a size too small</label>
            </div>
            <div>
              <input  type="radio" id="size_three" value="3" name="125060" ></input>
              <label for="size_three">Perfect</label>
            </div>
            <div>
              <input  type="radio" id="size_four" value="4" name="125060" ></input>
              <label for="size_four">1/2 a size too big</label>
            </div>
            <div>
              <input  type="radio" id="size_five" value="5" name="125060" ></input>
              <label for="size_five">A size too wide</label>
            </div>
          </div>
        </fieldset> */}