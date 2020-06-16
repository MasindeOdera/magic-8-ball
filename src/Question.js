import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useCountRenders } from './useCountRenders';
import './Question.scss';

function Question() {
    // const state = useSelector( (state) => state);
    const [input, setInput] = useState('');
    const [question, setQuestion] = useState('');
    // eslint-disable-next-line 
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    //Keeping an eye on how many times this component renders in the console.
    useCountRenders(); 

    const fetchAnswer = useCallback(() => {
        setLoading(true);
        let params = encodeURIComponent(question);
        let uri = "https://cors-anywhere.herokuapp.com/https://8ball.delegator.com/magic/JSON/" + params;
        question ? console.log("A question was asked") : console.log("There has been no question asked");
        if(question) {
            fetch(uri)
            .then(res => res.json())
            .then(data => {
            setLoading(false);
            dispatch({type:"PREDICTION", payload: data});
            console.log({data});
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
                dispatch({type:"FAIL", payload: error.message});
            });
        }
        else {
            return;
        }
    }, [dispatch, question, setError, setLoading]);
  
    useEffect(() => {
        fetchAnswer();
    }, [fetchAnswer]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setQuestion(input);
        console.log(input);
        setTimeout(() => {
            dispatch({ type: 'TEXT', payload: question});
        }, 3000);
    };

    const transition = loading ? <h1>Loading...</h1> : null;

    return (
        <div className="Question">
            <form>
                <input type="text" placeholder="Ask the Magic 8 Ball anything..." onChange={handleInputChange} />
                <button onClick={handleClick} type="submit">Ask!</button>
            </form>
            { transition }
        </div>
    )
}

export default Question;
