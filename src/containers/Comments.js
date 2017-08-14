import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/commentActions'

class Comments extends Component {
  constructor() {
    super()

    this.state = {
      author: '',
      comment: ''
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const comment = {
      author: this.refs.author.value,
      comment: this.refs.comment.value,
      barId: this.props.match.params.barId
    }
    this.props.addComment(comment)
    this.refs.commentForm.reset()
  }

  renderComment = (comment, index) => {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.author}</strong>
          {comment.comment}
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="comments">
        {this.props.barComments.map(this.renderComment)}
        <form  ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input
          type="text"
          name="author"
          ref="author"
          placeholder="author"
          onChange={this.handleOnChange} />
          <input
          type="text"
          name="comment"
          ref="comment"
          placeholder="comment"
          onChange={this.handleOnChange} />
          <input
          type="submit"
          hidden />
        </form>
      </div>
    )
  }
}

export default connect(null, { addComment })(Comments)
