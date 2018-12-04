import React from 'react';
import App from './components/App'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import { fetchMeme } from './actions'
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('in store', store.getState()));
store.dispatch(fetchMeme());


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))
