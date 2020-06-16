import React from 'react';
import { useSelector } from 'react-redux';

function Magic8Ball() {
    const state = useSelector( (state) => state);
    const answer = useSelector( (state) => state.prediction);
    const loading = useSelector( (state) => state.loading);
    const visibility = useSelector( (state) => state.visibility);

    console.log(state.prediction);
    console.log(answer);
    console.log(visibility);
    
    //Will need to delete this once functionality has improved.
    if(answer.magic) {
        console.log("there is a question");
    }
    else {
        console.log("there is no query/question");
    }

    const response = answer.magic && !loading ? answer.magic.answer : null;
    const transition = loading ? <h1>Loading...</h1> : null;

    console.log({state});
    return (
        <div>
            <h2>{ visibility ? response : null }</h2>
            { transition }
        </div>
    )
}

export default Magic8Ball;
