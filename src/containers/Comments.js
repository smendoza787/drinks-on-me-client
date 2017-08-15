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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          padding: '10px',
          margin: '15px auto',
          borderRadius: '2px',
          boxShadow: '0px 8px 15px rgb(165, 165, 165)',
          minWidth: '500px',
          maxWidth: '25%',
          minHeight: '125px'
        }}
        key={index}
      >
        <div style={{ padding: '10px' }}>
          <img src="http://i.imgur.com/JKNPJij.jpg" height="75" width="75" alt="cat" style={{ borderRadius: '50%'}} />
          <p>{comment.author}</p>
        </div>
        <div style={{
          backgroundColor: 'rgba(116, 195, 218, 0.77)',
          padding: '10px',
          borderRadius: '5px',
          flexGrow: '3',
          overflow: 'scroll'
        }}>{comment.comment}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="comments">
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
        {this.props.barComments.map(this.renderComment)}
      </div>
    )
  }
}

export default connect(null, { addComment })(Comments)
