import React, { Component } from 'react'
import { chooseColor } from "./helpers"
import "./Box.css"

class Box extends Component {
  constructor(props) {
    super(props)
    this.state = { color: chooseColor(this.props.allColors) }
    this.handleClick = this.handleClick.bind(this)
  }

  setColors() {
    let newColor; 
    do {
      newColor = chooseColor(this.props.allColors)
    } while (newColor === this.state.color)
    this.setState({ color: newColor })
  }

  handleClick() {
    this.setColors()
  }

  render() {
    return (
      <div 
        className="Box" 
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }

}

export default Box