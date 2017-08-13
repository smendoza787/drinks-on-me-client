import React from 'react';
import { Link } from 'react-router-dom';

const BarsList = ({ bars }) => {
  const renderBars = bars.map(bar =>
    <Link key={bar.name} to={`/bars/${bar.id}`}><h4>{bar.name}</h4></Link>
  )

  return (
    <div className="sidebar">
      {renderBars}
    </div>
  )
}

export default BarsList;
