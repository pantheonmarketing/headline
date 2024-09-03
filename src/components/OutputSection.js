import React from 'react';

function OutputSection() {
  return (
    <div className="output-section">
      <div className="action-buttons">
        <button>Edit</button>
        <button>View</button>
        <button>Copy</button>
        <button>Delete</button>
        <button>More</button>
      </div>
      <h2>Ad Copy</h2>
      <p>Sometimes our AI model will generate 'hallucinations' like made-up testimonials or studies...</p>
    </div>
  );
}

export default OutputSection;