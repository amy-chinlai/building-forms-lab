// Add BandInput component
import React, { Component } from 'react'
class BandInput extends Component {
  
  state = {
    name: ''
  }
  
  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    console.log(this.state)
    this.setState({
      name: ''
    })
  }
  
  render() {
    return(
      <div>
        Band Input
        <form>
          <input 
            type="text" 
            placeholder="band name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            onSubmit={this.handleSubmit}
          />
        </form>
      </div>
    )
  }
}

export default BandInput
