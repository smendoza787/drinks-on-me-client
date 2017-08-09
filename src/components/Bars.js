import React from 'react';

const Bars = ({ bars }) => {
  const renderBars = bars.map(bar =>
    <p key={bar.id}>{bar.name}</p>
  )

  return (
    <div>
      {renderBars}
    </div>
  )
}

export default Bars;
