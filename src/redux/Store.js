import { createStore } from 'redux';
// import { ReducersCombine } from './reducers/ReducersCombine';
import { ReducersCombine } from './reducers/ReducersCombine';

const store= createStore(ReducersCombine, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;