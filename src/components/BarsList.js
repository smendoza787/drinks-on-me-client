import React from 'react';
import { Link } from 'react-router-dom';

const BarsList = ({ bars }) => {
  const renderBars = bars.map(bar =>
    <h4>
      <Link key={bar.id} to={`/bars/${bar.id}`}>{bar.name}</Link>
    </h4>
  )

  return (
    <div className="sidebar">
      {renderBars}
    </div>
  )
}

export default BarsList;
