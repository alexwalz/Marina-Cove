import {
    START_FETCH_DATA,
    END_FETCH_DATA
} from './types';
// Use this as the root URL for your HTTP requests to the server
// import { API_URL } from '../tools/api-config';
// import axios from 'axios';

export const getData = (values) => {
    return (dispatch, getState) => {
        dispatch({ type: START_FETCH_DATA })
        //do stuff
        dispatch({ type: END_FETCH_DATA })
    }
}