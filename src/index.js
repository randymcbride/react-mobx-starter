import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/App'
import './public/fonts/globalFonts.js'
import RootStore from './stores'
import {Provider} from 'mobx-react'
ReactDOM.render(<Provider store={new RootStore()}><App/></Provider>, document.getElementById('app'))
