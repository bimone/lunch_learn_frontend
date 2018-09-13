import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import FamousPeople from './FamousPeople';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
hello,
        {name}
        {' '}
the shrimper
          {' '}
          <FamousPeople ismael="TITSMASHEElll"/>
      </div>
    );
  }
}

const AppWithHot = hot(module)(App);

const mountNode = window.document.getElementById('app');
ReactDOM.render(<AppWithHot name="Lt.Dan" />, mountNode);
