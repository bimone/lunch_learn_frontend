import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
hello,
        {name}
        {' '}
the shrimper
      </div>
    );
  }
}

const AppWithHot = hot(module)(App);

const mountNode = window.document.getElementById('app');
ReactDOM.render(<AppWithHot name="Lt.Dan" />, mountNode);
