import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = {bands} => {
  return{
    bands: bands
  }
}

// const mapStateToProps = ({ bands }) => ({ bands }) // what is the difference between this and the above when the above doesn't work? state not needed


const mapDispatchToProps = dispatch => {
  return{
    addBand: formData => dispatch({ type: "ADD_BAND", payload: formData})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
