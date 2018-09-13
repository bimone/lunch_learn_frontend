## Node JS
- [Node JS](https://nodejs.org/en/) :
  - In rich frontend, we use it to build a long range of dev ops and productivity pieces of software, as well as building minimalist servers to serve assets for the web(html, js, css, etc...).
  - Node basically made javascript from being a web scripting programming language to a language that can be used almost anywhere when it is installed on the machine.
  - The most important thing to remember is as though the core language is the same, the supported syntax from browser to browser and node distributions can differ greatly
  - [Can I use -> for syntax browser supports](https://caniuse.com/)
  - [Node Green-> for syntax supports for node js distributions](https://node.green/)
  - [ES5 vs ES6 -> Traditional JS found in Web.Website(ES5) vs more recent version found in web.frontend(ES6)](http://es6-features.org)
  - [Our Installation guide](https://bimoneonline.visualstudio.com/DefaultCollection/BIMOne/_wiki/wikis/BIMOne.wiki?wikiVersion=GBwikiMaster&pagePath=%2FHome%2FDevelopement%2FREACT)

- [NPM Registry](https://www.npmjs.com/)
  - Where most library are hosted. To install a package, it must either be in the npm registry(recommended) or in some kind of repository somewhere ex.: github.
  - `yarn publish` or `npm publish` to publish a version of the code in the npm registry.


- [Npm](https://www.npmjs.com/)/[Yarn](https://yarnpkg.com/en/)
- package managers  + command line interfaces (CLI)
- Both equivalent. Dealer's choice here
- `yarn init`

- /node_modules - folder
- Where the installed packages resides. Can be debugged, and also modified within the project
- Great power, great responsibility
- Some packages include executables. They usually reside within this path `./node_modules/.bin/some_executable`


- [package.json](https://docs.npmjs.com/files/package.json)
  - Includes all basic specifications/configs of the project
  - Dependencies
  - scripts definitions
  - npm registry infos
  - link executables to global cli commands
  - `yarn add eslint -D`


## Development tools

### git
 - [gitignore.io](gitignore.io) - Use to quickly generate a .ignore file based on the project characteristics. About 30 seconds
 - Generate a .gitattributes file to make sure the LF line endings are used instead of CRLF. Look for examples/boiler plates on the web.

### Bundling
- [Webpack](https://webpack.js.org/) - To bundle all scripts, assets, images, styles, etc...
- By default webpack only understands how to bundle javascript, we need to add **loaders** to make webpack understand other file types
- There a lot of [webpack plugins](https://webpack.js.org/plugins/) that can be used to enhance the bundling process. These can easily be written by us as well if needs be.
- For quickly generating a webpack config(limited) - https://webpack.jakoblind.no/
- [Webpack web server](https://github.com/webpack/webpack-dev-server) - for generating a quick development server which will watch for changes and re-run the webpack build process on every changes

### Transpilling
- [Babel](https://babeljs.io/) - can be use alone or directly with the bundler (webpack) to convert the javascript we write with the latest and greatest syntaxes(es6, es7, react/jsx) to a
a cross-browser supported version of the code.
- babel usually takes a **.babelrc** file to setup how we want to execute the compilation and what syntaxes need to be taken care
- A [browsers list](https://github.com/browserslist/browserslist) can also be provided to tell which browsers to support as of babel 7.x.x

### Linting (applying code style standard)
- [EsLint](https://eslint.org/) - Bunch of [rules](https://eslint.org/docs/rules/) to follow as code style syntax standard + reformatting rules
- WIll need a .eslintrc config file to set the rules we want to run, which can also be referenced within the IDEs or directly in the command line interface
- A great place to learn all you need to know about code styling and standards is the [airbnb rules and js good practices github repository](https://github.com/airbnb/javascript)
- [ESlint for vs code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

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
