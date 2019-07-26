import axios from 'axios';
import { FETCH_WORD, SET_VALUE, START_GAME, STOP_GAME, SET_SCORE, SAVE_SCORE, FETCH_SCORES } from './types';
import { jsonResponse } from '../api/randomWord';

export const saveScore = (name, score, date) => async (dispatch) => {
    const response = await axios.post('https://api.myjson.com/bins/1ershl', {"name": name, "score": score, "date": date});

    dispatch({
        type: SAVE_SCORE,
        payload: response.data
    });
};

export const fetchScores = () => async (dispatch) => {
    // const response = await axios.get('https://api.myjson.com/bins/1ershl');
    const response = await axios.get('http://localhost:3001/scores');

    dispatch({
        type: FETCH_SCORES,
        payload: response.data
    })
};

export const fetchWord = () => async (dispatch) => {
    const index = Math.round(Math.random() * 2500);
    const response = await axios.get(`https://api.myjson.com/bins/12fckd`);

    dispatch({
        type: FETCH_WORD,
        payload: response.data.words[index]
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
