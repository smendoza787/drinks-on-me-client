import React, { Component } from 'react'
import { connect } from 'react-redux'
import BarDetails from '../components/BarDetails'

class FavoritesPage extends Component {
  render() {
    const renderFavorites = this.props.favoriteBars.map(bar =>
      <div className="favorite-bar">
        <p>{bar.name}</p>
      </div>
    )

    return (
      <div className="favorites">
        {renderFavorites}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteBars: state.bars.favoriteBars
  }
}

export default connect(mapStateToProps)(FavoritesPage)
