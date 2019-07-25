import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { stopGame, saveScore } from '../actions';

const Timer = (props) => {
    const [timeLeft, setTimeLeft] = useState(props.seconds);
    const [delay, setDelay] = useState(1000);
    const [isDone, setIsDone] = useState(false);

    // useInterval is not my code, setInterval was giving me issues with useEffect, and this is a workaround I found online
    function useInterval (callback, delay) {
        const savedCallback = useRef();
      
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        }, [delay]);
    };
    // 
    useInterval(() => {
        setTimeLeft(timeLeft - 1);
    }, props.started ? delay : null);
    
    useEffect(() => {
        if(props.started === false) {
            setTimeLeft(10);
        };
    },[props.started]);

    useEffect(() => {
        if(timeLeft === 0) {
            props.stopGame();
            setIsDone(true);
            props.saveScore('ryan', props.score, Date.now());
        };
    },[timeLeft]);

    return(
        <div className="timer">
            <div className="timer__header">Time left: {timeLeft}</div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        started: state.reducer.started,
        score: state.reducer.score
    };
};

export default connect(mapStateToProps, { stopGame, saveScore })(Timer);
