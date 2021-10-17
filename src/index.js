import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./components/app/store";
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
          <Router>
              <App />
          </Router>
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();