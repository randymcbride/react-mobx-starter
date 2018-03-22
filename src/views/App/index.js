import React from 'react'
import ReactImgSrc from '../../public/images/react.png'
import {Background, Logo} from './styles.js'
import FeatureList from '../../components/FeatureList'
import Router from '../../routes.js'
export default () => 
<Router>
  <Background>
    <Logo src={ReactImgSrc}/>
    <FeatureList/>
  </Background>
</Router>