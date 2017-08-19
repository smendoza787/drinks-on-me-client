import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFavoriteBar, removeFavoriteBar } from '../actions/barActions'

class FavoriteButton extends Component {

  onAddFavClick(e) {
    this.props.addFavoriteBar(this.props.bar)
  }

  onRemoveFavClick(e) {
    this.props.removeFavoriteBar(this.props.bar)
  }

  render() {
    if (this.props.favoriteBars.includes(this.props.bar)) {
      return (
        <button onClick={(e) => this.onRemoveFavClick(e)}>Remove From Favorites</button>
      )
    } else {
      return (
        <button onClick={(e) => this.onAddFavClick(e)}>Add To Favorites</button>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteBars: state.bars.favoriteBars
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addFavoriteBar: addFavoriteBar,
    removeFavoriteBar: removeFavoriteBar
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton)
