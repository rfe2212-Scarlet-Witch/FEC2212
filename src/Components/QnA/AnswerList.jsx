import React from 'react';
import Answer from './Answer.jsx';

//GET /qa/questions/:question_id/answers
// Parameters

// Parameter	Type	Description
// question_id	integer	Required ID of the question for wich answers are needed
// Query Parameters

// Parameter	Type	Description
// page	integer	Selects the page of results to return. Default 1.
// count	integer	Specifies how many results per page to return. Default 5.
const AnswerList = () => {
  const list = {
    "question": "1",
    "page": 0,
    "count": 5,
    "results": [
      {
        "answer_id": 8,
        "body": "What a great question!",
        "date": "2018-01-04T00:00:00.000Z",
        "answerer_name": "metslover",
        "helpfulness": 8,
        "photos": [],
      },
      {
        "answer_id": 5,
        "body": "Something pretty durable but I can't be sure",
        "date": "2018-01-04T00:00:00.000Z",
        "answerer_name": "metslover",
        "helpfulness": 5,
        "photos": [{
            "id": 1,
            "url": "urlplaceholder/answer_5_photo_number_1.jpg"
          },
          {
            "id": 2,
            "url": "urlplaceholder/answer_5_photo_number_2.jpg"
          },
          // ...
        ]
      },
      // ...
    ]
  }

  return (
    <div>
      <Answer />
    </div>
  )
}

export default AnswerList;