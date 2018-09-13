#Lunch Two

## ES6 syntax
- [import/export](http://es6-features.org/#ValueExportImport)
    - Search in node modules first to resolve packages
    - **Watch out** import/export in nodejs code is done differently unfortunately
- [Const](http://es6-features.org/#Constants), [let and var](http://es6-features.org/#BlockScopedVariables)
- [Class definition](http://es6-features.org/#ClassDefinition)
- [Class inheritance](http://es6-features.org/#ClassInheritance)

## React
- [Component vs PureComponent vs stateless functions](https://stackoverflow.com/questions/40703675/react-functional-stateless-component-purecomponent-component-what-are-the-dif)
- [state](https://reactjs.org/docs/state-and-lifecycle.html) vs [props](https://reactjs.org/docs/components-and-props.html)
    - https://github.com/uberVU/react-guide/blob/master/props-vs-state.md
    -  https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react
- [Extending React Component](https://reactjs.org/docs/react-component.html) and [React lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- Normal components render [JSX (JavaScript XML)](https://stackoverflow.com/questions/39461805/what-does-jsx-stand-for) which is then interpreted into html before rendering in the DOM
  - [Intro](https://reactjs.org/docs/introducing-jsx.html)
  - [In depth](https://reactjs.org/docs/jsx-in-depth.html)
- [virtual DOM](https://stackoverflow.com/questions/21965738/what-is-virtual-dom) to accelerate the rendering process in the DOM
 - Tries to render minimal required html when we need to modify the DOM, meaning we will only be traversing the DOM once, unlike jquery...
