import { FETCH_WORD, SET_VALUE, START_GAME, STOP_GAME, SET_SCORE, SAVE_SCORE } from '../actions/types'

const INITIAL_STATE = {
    randomWord: '',
    answer: '',
    started: false,
    score: 0
}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case FETCH_WORD:
            return { ...state, randomWord: action.payload };
        case SET_VALUE:
            return { ...state, answer: action.payload };
        case START_GAME: 
            return { ...state, started: true };
        case STOP_GAME:
            return { ...state, started: false, randomWord: [] };
        case SET_SCORE:
            return {...state, score: state.score + 1 };
        case SAVE_SCORE:
            return { ...state, [action.payload.id]: action.payload } ;
        default: 
            return state;
    };
};
