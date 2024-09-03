import React from 'react';

function HeadlineDisplay({ preheadline, headline, subheadline }) {
  return (
    <div className="headline-display">
      <p className="preheadline">{preheadline}</p>
      <h1 className="headline">{headline}</h1>
      <p className="subheadline">{subheadline}</p>
    </div>
  );
}

export default HeadlineDisplay;
