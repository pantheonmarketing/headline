import React from 'react';

function OutputColumn({ generatedCopy, isLoading, error }) {
  const renderCopy = () => {
    if (!generatedCopy) return null;
    
    const sets = generatedCopy.split('\n\n').filter(set => set.trim() !== '');
    return sets.map((set, index) => (
      <div key={index} className="headline-set mb-4 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em]">Set {index + 1}</h3>
        {set.split('\n').map((line, lineIndex) => (
          <p key={lineIndex} className="text-[#1C160C] text-base font-normal leading-normal">{line}</p>
        ))}
      </div>
    ));
  };

  return (
    <div className="output-column px-4">
      <h2 className="text-[#1C160C] text-xl font-bold leading-tight tracking-[-0.015em]">Generated Headlines</h2>
      {isLoading ? (
        <p className="text-[#1C160C] text-base font-normal leading-normal">Generating headlines...</p>
      ) : error ? (
        <p className="text-[#FF0000] text-base font-normal leading-normal">{error}</p>
      ) : (
        <div className="generated-content container">
          {renderCopy()}
        </div>
      )}
      <p className="text-[#1C160C] text-base font-normal leading-normal pb-3 pt-1">
        Sometimes our AI model will generate 'headlines' like made-up testimonials or studies. Please note this when using our model and check back in for regular updates as
        we address this issue.
      </p>
    </div>
  );
}

export default OutputColumn;