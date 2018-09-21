import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { hot } from 'react-hot-loader';
import FamousPeople from './FamousPeople';
import './styles.scss';

class App extends React.Component {
  render() {
    return <Provider store={store}><FamousPeople /></Provider>;
  }
}

const AppWithHot = hot(module)(App);

const mountNode = window.document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
