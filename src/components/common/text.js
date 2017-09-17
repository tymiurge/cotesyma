import React from 'react'

// TODO rename it to ColoredText
const Text = (props) => {
  const colors = {
    orange: '#F2711C'
  }
  const theColor = colors[props.color]
  return (
    <span style={{color: theColor}} onClick={() => {props.onClick && props.onClick()} }>{props.content}</span>
  )
}

export default Text
