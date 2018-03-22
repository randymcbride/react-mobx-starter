export default{
  react: {
    title: "React",
    text: "Facebook's front end javascript framework. Use it to build re-usable web components.",
    links: [
      {href: "https://reactjs.org/", label: "Reactjs.org"},
      {href: "https://reactjs.org/docs/glossary.html#jsx", label: "JSX"},
      {href: "https://reactjs.org/docs/glossary.html#es6-es2015-es2016-etc", label: "ES6"},
    ]
  },
  reactRouter: {
    title: "React-Router",
    text: "Components are the heart of React's powerful, declarative programming model. React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!",
    links: [
      {href: "https://reacttraining.com/react-router/web/guides/philosophy", label: "ReactTraining.com/React-Router"},
    ]
  },
  styledComponents: {
    title: "Styled Components",
    text: "Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!",
    links: [
      {href: "https://www.styled-components.com", label: "Styled-Components.com"},
    ]
  },
  fonts: {
    title: "Global Custom Fonts",
    text: "Add your font file to src>public>fonts and update globalFont.js. Now you can use it like you would any other CSS 'font-family'.",
    links: [
      {href: "https://webpack.js.org/guides/asset-management/#loading-fonts", label: "Webpack - Loading Fonts"},
      {href: "https://www.styled-components.com/docs/api#injectglobal", label: "Styled Components - Inject Global"},
      {href: "https://github.com/styled-components/styled-components/issues/233", label: "Github Example"},
    ]
  },
  mobx: {
    title: "Mobx",
    text: "Mobx helps you manage your app's state. Check out the demo below. When you click on the Toggle Loading button below it calls the toggleLoading method of the SystemStore. Make sure you check out src>stores>systemStore.js to see just how that works. There is an animated gif that is observing the 'loading' attribute of the system store. It reacts ever time the value of 'loading' changes. This store is provided to the app via the index file in the store directory as well as the Provider component in the src>index.js file. The Component syncs into the store via the inject('store') and observer decorator on the MobxDemo component.",
    links: [
      {href: "https://mobx.js.org/", label: "Mobx.js.org"},
      {href: "https://github.com/mobxjs/mobx-react", label: "Mobx-React Github"},
      {href: "https://mobx.js.org/best/store.html", label: "Defining data stores in MobX"},
      {href: "https://egghead.io/lessons/javascript-sync-the-ui-with-the-app-state-using-mobx-observable-and-observer-in-react", label: "Egghead IO - Mobx Training"},
    ]
  },
  storybook: {
    title: "StoryBook",
    text: "StoryBook is a UI component dev environment for your app. We've added some basic stories inside the src/stories directory. A story is a single state of one or more UI components. You can have as many stories as you want. Basically a story is like a visual test case. To get started type 'yarn run storybook'. Then create your own story in the stories directory and require it in .storybook/config.",
    links: [
      {href: "https://storybook.js.org/", label: "StoryBook.js.org"},
     ]
  },
}