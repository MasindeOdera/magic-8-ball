import React from 'react';
import { useSelector } from 'react-redux';
import './Magic8Ball.scss';

function Magic8Ball() {
    const answer = useSelector( (state) => state.prediction);
    const loading = useSelector( (state) => state.loading);
    const visibility = useSelector( (state) => state.visibility);
    
    //Using answer.magic here to control when I can use answer.
    const response = answer.magic && !loading ? answer.magic.answer : null;
    const transition = loading ? <h1>Predicting...</h1> : null;

    const triangle = visibility ?
                        <div className="Inner-circle">
                            <div className="Triangle">
                                <h4 className="Response">{response}</h4>
                            </div>
                        </div> : null;

    const eight = <div className="Eight">
                    <h1 className="Number">8</h1>
                </div>;           

    return (
        <div className="Container">
            <div className={`Circle ${loading ? "Shake" : ""}`}>
                {triangle}
                {visibility ? null : eight}
            </div>
            { transition }
        </div>
    )
}

export default Magic8Ball;
