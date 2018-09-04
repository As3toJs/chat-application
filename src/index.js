import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { addUser } from './actions';
import { createStore } from 'redux';
import chat from './reducers';
import './index.css';

const store = createStore(chat);

// Register ourselves as present in the chat
store.dispatch(addUser('Me'));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);
registerServiceWorker();
