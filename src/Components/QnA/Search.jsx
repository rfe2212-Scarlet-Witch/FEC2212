import React, {useState, useEffect} from 'react';

let Search = ({setter, qs, sort, all}) => {

  const[term, setTerm] = useState('');

  // if(qs.length > 0){
  //   console.log('question', qs[0].question_body)
  //   console.log('answers', Object.values(qs[0].answers)[0].body)
  // }
  //console.log(all)
  let isInQ = (obj) => {
    let text = obj.question_body.toLowerCase()
    let word = term.toLowerCase()
    let check = text.indexOf(word)
    return check > -1
  };

  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  useEffect(() => {
    let f = sort
    if(term.length > 2) {
      f = all.filter(isInQ);
    }
    setter(f);
  }, [term])

  return (
    <div>
      <input
      id="searchbar"
      value={term}
      onChange={handleChange}
      placeholder="“Have a question? Search for answers…”">
      </input>
    </div>
  )
}

export default Search