import React, { Component } from 'react'
import "./ColorBoxes.css"
import Box from "./Box"

class ColorBoxes extends Component {
  static defaultProps = {
    numBoxes: 21,
    allColors: ['#5a2852', '#8de503', '#fa2428', '#888a7c', '#42efa6', '#78da0e', '#c88dd2', '#e91111', '#289241']
  }

  render() {
    const boxes = Array.from({length: this.props.numBoxes}).map( () => (
      <Box allColors={this.props.allColors}/>
    ))

    return (
      <div className="ColorBoxes"> {boxes} </div>
      )
  }
}

export default ColorBoxes