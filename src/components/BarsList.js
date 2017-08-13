import React from 'react';
import { Link } from 'react-router-dom';

const BarsList = ({ bars }) => {
  let renderBars

  if (bars.length > 0) {
    renderBars = bars.map(bar =>
      <Link key={bar.name} to={`/bars/${bar.id}`}><h4>{bar.name}</h4></Link>
    )
  } else {
    renderBars = <p>Getting nearby business information...</p>
  }



  return (
    <div className="sidebar">
      {renderBars}
    </div>
  )
}

export default BarsList;
