## Install
`git clone https://github.com/randymcbride/react-mobx-starter.git my-app-name`

`cd my-app-name`

`yarn install` or `npm install`

## Run Dev Server
`yarn run server`
`yarn run storbook`

## Build
`yarn run build`

## Deploy
You only need to deploy the contents of the dist folder as a static web page. Here is an example deploy to cloud foundry (note that `touch STATICFILE` is specific to CF, it indicates that the upload is a static website and not an application. Each platform will have its own way of doing things, but the point is that it is deployed as a static website).
```
yarn run build
cd dist
touch STATICFILE
cf push myApp
```

## Important dirs and files
* __.storybook/__ Configuration for storybook
* __dist/__ Output for webpack
* __dist/bundle.js__ Bundle created by webpack
* __node_modules/__ NPM dependencies
* __src/__ This is where the actual app is
* __src/components/__ Smallest react components
* __src/public/__ Images and Fonts
* __src/stores/__ MobX stores
* __src/stores/index.js__ MobX RootStore. All other stores should be added here
* __src/utils/__ Utility functions
* __src/views/__ React components made up of other components to be used as views in the app
* __src/index.js__ Loads the app. you should rarely if ever have to edit this file.
* __src/routes.js__ Define the routes to be used by React Router Dom. When a user clicks a React Router Link, it looks for the corresponding Route and loads the proper component (usually a view)
* __package.json__ App definition
* __webpack.*.js__ Webpack configuration for various environements
* __.babelrc__ Configure babel presets and plugins

## Best Practices
1. Keep state in stores, not components. With very few exceptions you should not be using `this.setState({})`. Take everything the component needs in as props and then modify the state to see reations in the UI.

2. Only modify state using store methods, never modify state directly from a component. For example, if we want to update state with user input, we could write an onInput handler that looks something like this
```javascript
//good
function handleInput(e){
  store.user.setName(e.target.value)
}

//bad
function handleInput(e){
  store.user.name = e.target.value
}
  ```
  
  3. Use storybook to test components in isolation before incorporating them into views.

