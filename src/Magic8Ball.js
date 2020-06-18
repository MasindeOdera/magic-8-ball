import React from 'react';
import { useSelector } from 'react-redux';
import './Magic8Ball.scss';

function Magic8Ball() {
    const state = useSelector( (state) => state);
    const answer = useSelector( (state) => state.prediction);
    const loading = useSelector( (state) => state.loading);
    const visibility = useSelector( (state) => state.visibility);
    
    //Will need to delete this once functionality has improved.
    if(answer.magic) {
        console.log("there is a question");
    }
    else {
        console.log("there is no query/question");
    }

    const response = answer.magic && !loading ? answer.magic.answer : null;
    const transition = loading ? <h1>Loading...</h1> : null;

    const triangle = visibility ?
                        <div className="Inner-circle">
                            <div className="Triangle">
                                <h4 className="Response">{response}</h4>
                            </div>
                        </div> : null;

    const eight = visibility ? null: 
                <div className="Eight">
                    <h1 className="Number">8</h1>
                </div>;           

    console.log({state});
    return (
        <div className="Container">
            <div className={`Circle ${loading ? "Shake" : ""}`}>
                {triangle}
                {eight}
            </div>
            { transition }
        </div>
    )
}

export default Magic8Ball;
