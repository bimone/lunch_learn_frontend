#Lunch Four

## Webpack
- Add [*devtool* configuration key](https://webpack.js.org/configuration/devtool/) in the webpack.config file
 to enable source maps and debug the code as we write it in the dev tools console

## VS Code extensions
- Auto Close tag
- Auto Rename tag
- Code Spell Checker
- CSSTree Validator
- ESLint
- IntelliSense for CSS class names in html
- Javascript Booster
- vscode-caniuse
- `Ctrl + .` to access suggestion

## ESLint
- Use the rule configuration key object to override rules in the config file
 - ``"linebreak-style": 0` - to cancel warning about line endings
 - ``"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]` - to allow jsx code in .js and .jsx files
 - [All base rules](https://eslint.org/docs/rules/)

## ES6
- Retro on more [ES6 syntax vs ES5](http://es6-features.org)
- [Map function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map)
to perform the equivalent of a Select in C#
- [Filter function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter) - to
return a filtered array based on a condition


## React
- [Rendering a list of data in react](https://reactjs.org/docs/lists-and-keys.html)
    - The key prop is mandatory for performance purposes and must be unique.
    - Use something unique from the data when we have it. Otherwise,
    the [uuid/v4](https://github.com/kelektiv/node-uuid) module can be used to generate
    unique identifiers(GUIDs)
- Word of the wise, try to keep the render() {} method as small as possible. Use child components
or private methods to achieve the same purpose and keep things light.
- When a method do not use any instance specific member (the this), use the [static keyword](http://es6-features.org/#StaticMembers)
in the definition. The method can then be used the following way `Class.staticMethod(...)`

## Styling
- Css files can be imported into the javascript just like other js files `import './styles.css'`
 - Make sure you don't import the same css multiple times inside reusable components
 - Prefer to load css inside of top level containers or
 [loadable components](https://github.com/jamiebuilds/react-loadable) entry points
- Webpack allow us to also import [sass](https://sass-lang.com/), [less](http://lesscss.org/),
[PostCss](https://postcss.org/) or whatever we want as long as we add the proper
loader in webpack configuration
- In react we can also pass [inline styles](https://reactjs.org/docs/dom-elements.html#style)
as an object to the style prop representing the style we want to affect to the component.
- We can also use the [className prop](https://reactjs.org/docs/faq-styling.html)
to affect classes to the component
- A more edge styling method with react is to use [styled-components](https://www.styled-components.com/)
which is an [HOC(higher order component)](https://reactjs.org/docs/higher-order-components.html)
that allow us to use put the css inside the definition of a component directly.
It can be very elegant!
