import React from 'react';
import { connect } from 'react-redux';

const WordDisplay = (props) => {

    return (
        <div className='wordDisplay'>
            { props.randomWord.length === 0 ? 
                <h1 className='wordDisplay__main'>Click Start</h1> 
                :
                <h1 className='wordDisplay__main'>{props.randomWord}</h1>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    const { randomWord } = state.reducer;
    return {
        randomWord: randomWord
    };
};

export default connect(mapStateToProps, null)(WordDisplay)
