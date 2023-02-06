import React from 'react';
import Answer from './Answer.jsx';
import {useState} from 'react';

const AnswerList = ({ansList}) => {

  let [ansLength, setAnsLength] = useState(1);
  let [text, setText] = useState('LOAD MORE ANSWERS');
  let [clicked, setClick] = useState(false);

  let isInA = (obj) => {
    let text = obj.answerer_name.toLowerCase()
    let check = text.indexOf('seller')
    return check > -1
  };

  let isInA2 = (obj) => {
    let text = obj.answerer_name.toLowerCase()
    let check = text.indexOf('seller')
    return check === -1
  };

  let sellerArray = ansList.reduce(function(result, option) {
    let text = option.answerer_name.toLowerCase()
    let check = text.indexOf('seller')
    if (check > -1 ) {
      option.seller = true;
      return result.concat(option);
    }
    return result;
  }, []);

  let buyerArray = ansList.filter(isInA2);
  let sortedList = buyerArray.sort((a,b) => {return b.helpfulness - a.helpfulness});
  let masterList = sellerArray.concat(sortedList);


  const clickHandler = () => {
    setAnsLength(40);
    setText('COLLAPSE LIST')
    setClick(!clicked);
  }

  const clickHandler2 = () => {
    setClick(!clicked);
    setText('LOAD MORE ANSWERS')
    setAnsLength(1);
  }

  let Button = () => {
    return clicked ? ( <span  className="ans" onClick={() => {clickHandler2()}}><span className="txtbtn">{text}</span></span>
    ) : (<span className="ans" onClick={() => {clickHandler()}}><span className="txtbtn">{text}</span></span>)
  }

  return (
    <div className="answerList"> {masterList.map((item, index) => {
        return <Answer ans={item} key={item.id} index={index} className="answer" length={ansLength} seller={item.seller}/>
      })}
      { ((sortedList.length - 1 <= ansLength) && (!clicked))? null : <Button />}
    </div>
  )
}

export default AnswerList;