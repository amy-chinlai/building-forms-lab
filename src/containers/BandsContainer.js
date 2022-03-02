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

const mapStateToProps = state => {
  return{
    bands: this.bands
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addBand: formData => dispatch({ type: "ADD_BAND", payload: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
