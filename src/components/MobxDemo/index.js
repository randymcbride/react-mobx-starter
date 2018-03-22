import React from 'react'
import LoadingSrc from '../../public/images/loading-gears-animation.gif'
import {observer, inject} from 'mobx-react'
import Content from '../Content'
import ContentItem from '../ContentItem'
import content from '../../utils/content'

@inject("store")
@observer
export default class extends React.Component{
  render(){
    const {loading, toggleLoading} = this.props.store.system
    return(
      <Content>
        <ContentItem
          title={content.mobx.title}
          text={content.mobx.text}
          links={content.mobx.links}
        />
        <h2>Demo</h2>
        <button onClick={toggleLoading}>Toggle Loading</button>
        <br/>
        {loading ? <img src={LoadingSrc} height="100px"/>:null}
      </Content>
    )
  }
}
