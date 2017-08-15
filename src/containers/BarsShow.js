import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comments from './Comments'
// import { fetchPhoto } from '../actions/barActions'
// import BarService from '../services/BarService'

class BarsShow extends Component {
  constructor() {
    super()

    this.state = {
      photo: ''
    }
  }

  componentWillMount() {
    fetch('http://localhost:3001/api/unsplash')
      .then(response => response.json())
      .then(photo => this.setState({ photo: photo.url }))
  }

  render() {
    return (
      <div>
        <img src={this.state.photo} alt="bar photo" />
        <h1>{this.props.bar.name}</h1>
        <p>Rating: {this.props.bar.rating}</p>
        <h3>{this.props.bar.vicinity}</h3>
        <Comments barComments={this.props.comments} match={this.props.match} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const bar = state.bars.find(bar => bar.id == ownProps.match.params.barId)
  const comments = state.comments.filter(comment => comment.barId == ownProps.match.params.barId)

  if (bar) {
    return {
      bar: bar,
      comments: comments    }
  } else {
    return { bar: {} }
  }
}

export default connect(mapStateToProps)(BarsShow)
