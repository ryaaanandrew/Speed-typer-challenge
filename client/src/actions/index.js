import axios from 'axios';
import { FETCH_WORD, SET_VALUE, START_GAME, STOP_GAME, SET_SCORE, SAVE_SCORE, FETCH_SCORES } from './types';

export const saveScore = (name, score, date) => async (dispatch) => {
    const response = await axios.post('http://localhost:3001/scores', {name, score, date});

    return {
        type: SAVE_SCORE,
        payload: response.data
    };
};

export const fetchScores = () => async (dispatch) => {
    const response = await axios.get('http://localhost:3001/scores');
    
    dispatch({
        type: FETCH_SCORES,
        payload: response.data
    })
};

export const fetchWord = () => async (dispatch) => {
    const API_KEY = 'MDG0K8GD';
    const response = await axios.get(`https://random-word-api.herokuapp.com/word?key=${API_KEY}&number=1`);

    dispatch({
        type: FETCH_WORD,
        payload: response.data
    });
};

export const setValue = (value) => {
    return {
        type: SET_VALUE,
        payload: value
    };
};

export const setScore = () => {
    return {
        type: SET_SCORE
    };
};

export const startGame = () => {
    return {
        type: START_GAME
    };
};

export const stopGame = () => {
    return {
        type: STOP_GAME
    };
};
