import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './Question.scss';

function Question() {
    const [input, setInput] = useState('');
    const [question, setQuestion] = useState('');
    // eslint-disable-next-line 
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const fetchAnswer = useCallback(() => {
        let params = encodeURIComponent(question);
        // the cors-anywhere part handles a cors error.
        let uri = "https://cors-anywhere.herokuapp.com/https://8ball.delegator.com/magic/JSON/" + params;
        if(question) {
            dispatch({type:"LOADING", payload: true});
            fetch(uri)
            .then(res => res.json())
            .then(data => {
            dispatch({type:"LOADING", payload: false});
            dispatch({ type: 'VISIBILITY', payload: true});
            dispatch({type:"PREDICTION", payload: data});
            })
            .catch(error => {
                setError(error.message);
                dispatch({type:"LOADING", payload: false});
                dispatch({type:"FAIL", payload: error.message});
                console.log(error.message);
            });
        }
        else {
            return;
        }
    }, [dispatch, question, setError]);
  
    useEffect(() => {
        fetchAnswer();
    }, [fetchAnswer]);

    const handleInputChange = (e) => {
        //I want to display the number 8 unless the user clicks Ask.
        dispatch({ type: 'VISIBILITY', payload: false});
        let input = e.target.value;
        setInput(e.target.value);
        setTimeout(() => {
            dispatch({ type: 'TEXT', payload: input});
        }, 3000);
    };

    const handleClick = (e) => {
        e.preventDefault();
        setQuestion(input);
        dispatch({ type: 'TEXT', payload: input});
        dispatch({ type: 'VISIBILITY', payload: true});
    };

    return (
        <div className="Question">
            <form>
                <input type="text" placeholder="What would you like to know?" onChange={handleInputChange} />
                <button onClick={handleClick} type="submit">Ask!</button>
            </form>
        </div>
    )
}

export default Question;
