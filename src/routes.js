import React from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Content from './components/Content'
import ContentItem from './components/ContentItem'
import content from './utils/content.js'
import MobxDemo from './components/MobxDemo'

export default ({children}) =>
<Router>
  <div>
    {children}
    <Route 
      path='/react'
      render={ () => 
        <Content>
          <ContentItem 
          title={content.react.title} 
          text={content.react.text} 
          links={content.react.links}
          />
          <ContentItem 
            title={content.reactRouter.title} 
            text={content.reactRouter.text} 
            links={content.reactRouter.links}
          />
        </Content>
      }
    />
    <Route 
      path='/styledcomponents'
      render={ () => 
        <Content>
          <ContentItem 
          title={content.styledComponents.title} 
          text={content.styledComponents.text} 
          links={content.styledComponents.links}
          />
        </Content>
      }
    />
    <Route 
      path='/fonts'
      render={ () => 
        <Content>
          <ContentItem 
          title={content.fonts.title} 
          text={content.fonts.text} 
          links={content.fonts.links}
          />
        </Content>
      }
    />
    <Route 
      path='/mobx'
      component={MobxDemo}
    />
    <Route 
      path='/storybook'
      render={ () => 
        <Content>
          <ContentItem 
          title={content.storybook.title} 
          text={content.storybook.text} 
          links={content.storybook.links}
          />
        </Content>
      }
    />
  </div>
</Router>
