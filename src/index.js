import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import FamousPeople from './FamousPeople';

class App extends React.Component {
  render() {
    return (
      <div>
        <FamousPeople ismael="ISMASHEELLL" />
      </div>
    );
  }
}

const AppWithHot = hot(module)(App);

const mountNode = window.document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
