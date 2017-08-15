import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comments from './Comments'
// import BarService from '../services/BarService'

class BarsShow extends Component {
  render() {
    return (
      <div>
        <img src={this.props.bar.icon} />
        <h1>{this.props.bar.name}</h1>
        <h3>{this.props.bar.vicinity}</h3>
        <p>Rating: {this.props.bar.rating}</p>
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
      comments: comments
    }
  } else {
    return { bar: {} }
  }
}

export default connect(mapStateToProps)(BarsShow)
