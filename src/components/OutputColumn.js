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

  const downloadHeadlines = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedCopy], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "headlines.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCopy).then(() => {
      alert("Headlines copied to clipboard!");
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="output-column px-4 w-full md:w-auto">
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
      <div className="flex gap-4 mt-4">
        <button
          className="flex items-center justify-center bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600"
          onClick={downloadHeadlines}
          title="Download all headlines as a text file"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <button
          className="flex items-center justify-center bg-green-500 text-white rounded-full p-3 hover:bg-green-600"
          onClick={copyToClipboard}
          title="Copy all headlines to clipboard"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8M8 12h8m-8-4h8m-6 8h.01M12 20h.01M12 4h.01M4 8h.01M4 12h.01M4 16h.01M4 20h.01M20 8h.01M20 12h.01M20 16h.01M20 20h.01" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default OutputColumn;