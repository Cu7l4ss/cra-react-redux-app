import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import {userMockData} from './mocks/mocks'
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import { makeMainRoutes } from './routes';

let routes = makeMainRoutes();
class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store,
      user: this.props.user
    };
  }

  render() {
    return this.props.children;
  }
}
Provider.childContextTypes = {
  store: PropTypes.object,
  user: PropTypes.object
};

ReactDOM.render(
  <Provider store={store} user={userMockData}>
      {routes}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
