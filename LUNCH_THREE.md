#Lunch Three

## ES6 syntax
- [Arrow functions(lambdas)](http://es6-features.org/#ExpressionBodies)
    - [Lexical this](http://es6-features.org/#Lexicalthis)
    - Binding the context(this) `this.method = this.method.bind(this)` class methods declared like this `method() {}` inside the constructor vs declaring class methods
    as an assignment `method = () => {}` which automatically binds this to the method
them with arrow function assignment
- [Destructuring assignments](http://es6-features.org/#ValueExportImport)
    - Good practice in react for props and state objects `const { propName } = this.props`
- [Default Parameter](http://es6-features.org/#DefaultParameterValues)
- [Rest Parameter](http://es6-features.org/#RestParameter)
- [Spread Operator](http://es6-features.org/#SpreadOperator)

## React
- Retro on props, state, and react lifecycle. See  [Lunch and learn two](https://github.com/bimone/lunch_learn_frontend/blob/master/LUNCH_TWO.md)
- [Prop types](https://github.com/facebook/prop-types)
    - [How to use it with React components](https://reactjs.org/docs/typechecking-with-proptypes.html)
- Every jsx tag, even the ones that look like native html like `<div></div>` are used like other custom
react components.
    - They come with basic props like `id, ref, eventHandlers`
    - [Event handlers](https://reactjs.org/docs/handling-events.html) are passed down as props in the jsx. For example,
    `onclick` is `<Component onClick={(e) => {e.preventDefault();}} />`
    - See [Synthetic Event](https://reactjs.org/docs/events.html) to see all react props wrappers for native javascript/html event handlers in React