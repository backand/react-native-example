import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const enhancer = applyMiddleware(thunk);

const configureStore = (data={}) => {
    return createStore(rootReducer, data, enhancer);
}

export default configureStore;
