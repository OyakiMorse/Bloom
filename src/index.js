import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/storeRedux';
import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.store = store;

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App state={store.getState()}  dispatch={store.dispatch.bind(store)} store={store}  />,
      </React.StrictMode>,
    </Provider>,
    document.getElementById('root'),
  );
}

rerenderEntireTree(store.getState());

store.subscribe( () => {
  let state = store.getState();
  window.store = store;
  rerenderEntireTree(state);
});

// if (process.env. !== 'production') {
  serviceWorker.unregister()
// }
