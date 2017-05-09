import React from 'react';
import { render } from 'react-dom';
import { Router} from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory'

// App
import { App } from './app/components/App';
import store from './app/store';


let history = createBrowserHistory();

const AppClient = () => (
  <Provider store={store}>
    <Router history={history} >
      <App />
    </Router>
  </Provider>
);

window.onload = () => {
  render(<AppClient />, document.getElementById('app'));
};
