// External imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import * as serviceWorker from './serviceWorker';

// Local imports
import App from './App';

// Assets

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
