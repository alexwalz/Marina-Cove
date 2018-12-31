import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ExampleReducer from './example_reducer';

export default combineReducers({
    routing: routerReducer,
    example: ExampleReducer
});