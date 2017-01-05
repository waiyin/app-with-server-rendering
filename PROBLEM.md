# Problem (Create a web application framework)
Setup express to serve a HTML document, that responds with a H1 tag 'Hello World' on http://localhost:3001/

# Bonus
- Setup a task that can lint the project for stylistic syntax errors.
    - [eslint](http://eslint.org/) is a great tool for performing static stylistic checks on your code so you can enforce consistency in code style
- Setup the project so we can use the es6 import | export syntax using babel with the following presets
`yarn add babel-preset-env`

# Tips
- Use express to serve a web page to install express simply type `yarn add express` in the terminal [creating a simple app](https://expressjs.com/en/api.html#app)
- create a module that executes the server code `./src/server.js` import or require it within `./src/app.js`
- [arrow functions](https://github.com/azaharakis/ui-training/tree/master/src/1.%20Introduction%20to%20ES%206/3.%20Functions#functions) are a conscise way to write functions
- [Templated strings](https://github.com/azaharakis/ui-training/tree/master/src/1.%20Introduction%20to%20ES%206/5.%20Template%20Strings) are a great way to place large blocks of string contents with line breaks
```js
const html = (myVar) => `
    <html>
        <body>${myVar}</body>
    </html>
`
```
  
## Solution
- [Solution](https://github.com/azaharakis/app-with-server-rendering/compare/b0615e5...1d3e542)


