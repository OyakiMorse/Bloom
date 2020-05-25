import postReducer from './PostReducer';
import dialogsReducer from './DialogsReducer';
import {createStore, combineReducers} from 'redux';

//це функція від редакса яка зкріплює от ці редюсери і створюється сторе через createStore
let reducersBatch = combineReducers({
    mainPage: postReducer,
    chatsPage: dialogsReducer
});
let store = createStore(reducersBatch);

export default store;