import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchWord, startGame, stopGame, setScore, fetchScores } from '../actions';
import Timer from './Timer';
import WordDisplay from './WordDisplay';
import InputField from './InputField';
import Score from './Score';
import Button from './Button';
import Leaderboard from './Leaderboard'

const App = (props) => {
    const [currentValue, setCurrentValue] = useState('');

    const start = () => {
        props.fetchWord();
        props.startGame();
    };

    const stop = () => {
        props.stopGame();
        setScore(0);
    };

    const checkAnswers = (e, currentValue) => {
        e.preventDefault();
        if (props.randomWord === currentValue && props.randomWord.length > 0 ) {
            props.setScore();
            props.fetchWord();
            setCurrentValue('');
        }
    };

    const onChange = (e) => {
        setCurrentValue(e.target.value);
    }

    return (
        <>
            <div className="main">
                <div className="statsBox">
                    <Timer seconds={10} started={false} />
                    <Score score={props.score}/>
                </div>

                <WordDisplay />

                <div className="btnContainer">
                    <Button onClick={start} text={'Start Game'} />
                    <Button onClick={stop} text={'Stop Game'} />
                </div>

                <InputField onSubmit={checkAnswers} onChange={onChange} value={currentValue}/>
            </div> 
            <div className="sub">
                <Leaderboard />
            </div>
        </> 
        )
};

const mapStateToProps = (state) => {
    return {
        randomWord: state.reducer.randomWord.join(),
        answer: state.reducer.answer,
        score: state.reducer.score
    };
};

export default connect(mapStateToProps, { fetchWord, startGame, stopGame, setScore, fetchScores })(App);
