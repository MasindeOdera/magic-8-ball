import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Magic8Ball() {
    const state = useSelector( (state) => state);
    const answer = useSelector( (state) => state.prediction);
    // const summary = useSelector( (state) => state.initialData.summary);
    // eslint-disable-next-line 
    const dispatch = useDispatch();
    console.log(state.prediction);
    console.log(answer);
    
    if(answer.magic) {
        console.log("there is a question");
    }
    else {
        console.log("there is no query/question");
    }

    const response = answer.magic ? answer.magic.answer : null;

    console.log({state});
    return (
        <div>
            <h2>{ response }</h2>
        </div>
    )
}

export default Magic8Ball;
