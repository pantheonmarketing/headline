import React from 'react';
import { Button } from "./ui/Button";

function OutputColumn({ generatedCopy, isLoading, error }) {
  const renderCopy = () => {
    if (!generatedCopy) return null;
    
    const sets = generatedCopy.split('\n\n').filter(set => set.trim() !== '');
    return sets.map((set, index) => (
      <div key={index} className="headline-set mb-4 p-4 bg-white rounded-lg shadow-md relative">
        <h3 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em]">Set {index + 1}</h3>
        {set.split('\n').map((line, lineIndex) => (
          <p key={lineIndex} className="text-[#1C160C] text-base font-normal leading-normal">{line}</p>
        ))}
        <Button
          className="absolute bottom-2 right-2 flex items-center justify-center bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
          onClick={() => copySpecificSet(set)}
          title="Copy this set of headlines to clipboard"
        >
          <CopyIcon className="w-4 h-4" />
          <span className="sr-only">Copy Text</span>
        </Button>
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

  const copySpecificSet = (set) => {
    navigator.clipboard.writeText(set).then(() => {
      alert("Set copied to clipboard!");
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="flex flex-col w-full space-y-4 md:w-1/3 order-2 md:order-2">
      <div className="flex flex-col w-full p-4 bg-white border rounded-md">
        <h2 className="mb-4 text-lg font-bold">Generated Headlines</h2>
        <div className="flex-1 border rounded-md">
          {isLoading ? (
            <p className="text-[#1C160C] text-base font-normal leading-normal">Generating headlines...</p>
          ) : error ? (
            <p className="text-[#FF0000] text-base font-normal leading-normal">{error}</p>
          ) : (
            <div className="generated-content container">
              {renderCopy()}
            </div>
          )}
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" size="icon" onClick={downloadHeadlines}>
            <DownloadIcon className="w-4 h-4" />
            <span className="sr-only">Download Text</span>
          </Button>
          <Button variant="outline" size="icon" onClick={copyToClipboard}>
            <CopyIcon className="w-4 h-4" />
            <span className="sr-only">Copy Text</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

function CopyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

export default OutputColumn;