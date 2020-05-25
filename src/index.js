import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/storeRedux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



 let rerenderEntireTree = (state) => {
    debugger;
    ReactDOM.render(
      <React.StrictMode>
        <App state={store.getState()}  dispatch={store.dispatch.bind(store)} store={store}  />,
      </React.StrictMode>,
      document.getElementById('root'),
    );
  
  }

rerenderEntireTree(store.getState());// 

store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state);
});

serviceWorker.unregister();
