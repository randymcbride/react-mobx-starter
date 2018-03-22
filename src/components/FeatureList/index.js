import React from 'react'
import {Link} from 'react-router-dom'
import {StyledLink} from './style.js'

export default () =>
<div>
  <h1>Features</h1>
  <ul>
    <li>
      <StyledLink to="/react">React, React-router, JSX, ES6</StyledLink>
    </li>
    <li><StyledLink to="/mobx">MobX</StyledLink></li>
    <li>
      <StyledLink to="/styledcomponents">Styled Components</StyledLink>
    </li>
    <li><StyledLink to="/fonts">Custom Global Fonts</StyledLink></li>
    <li><StyledLink to="/storybook">StoryBook</StyledLink></li>
    <li>Dev build including live reloading and inline error messages</li>
    <li>Prod build including minification, lightweight source maps, and optmized assets</li>
    <li>Nothing Else</li>
  </ul>
</div>