import React from 'react'
import "./button.scss"

const Button = (props) => {
  return (
    <div>
      <div className="container">
  <div className="btn"><a href={props.link}>{props.title}</a></div>   
</div>
    </div>
  )
}

export default Button
