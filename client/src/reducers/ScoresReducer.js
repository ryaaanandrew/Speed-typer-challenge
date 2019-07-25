import _ from 'lodash';
import { FETCH_SCORES } from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_SCORES:
            return { ...state, ..._.mapKeys(action.payload, 'id') }
        default:
            return state;
    };
};