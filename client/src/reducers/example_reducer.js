import {
    START_FETCH_DATA,
    END_FETCH_DATA
} from '../actions/types';

const INITIAL_STATE = {
    fetching: false,
    error: null,
    data: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case START_FETCH_DATA:
            return { ...state, fetching: true };
        case END_FETCH_DATA:
            return { ...state, fetching: false, data: [ ...state.data, action.payload ] };
        default:
            return state;
    }
}