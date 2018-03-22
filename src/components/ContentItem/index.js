import React from 'react'

export default ({title, text, links}) =>
  <div>
    <h2>{title}</h2>
    <p>{text}</p>
    <strong>Learn More:</strong><br/>
    { 
      links.map(({href, label}) =>
        <div>
          <a href={href}>{label}</a>
          <br/>
        </div>
      )
      }
  </div>