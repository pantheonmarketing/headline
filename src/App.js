import React, { useState } from 'react';
import './App.css';
import InputColumn from './components/InputColumn';
import OutputColumn from './components/OutputColumn';
import { fetchHeadlines } from './api/claudeApi';

function App() {
  const [generatedCopy, setGeneratedCopy] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateCopy = async (inputData) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchHeadlines(inputData);
      setGeneratedCopy(result);
    } catch (error) {
      setError(error.message || 'Failed to generate copy. Please try again.');
      console.error('Error generating copy:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#FFFFFF] group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#F4EFE6] px-10 py-3">
          <div className="flex items-center gap-4 text-[#1C160C]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
            </div>
            <h2 className="text-[#1C160C] text-lg font-bold leading-tight tracking-[-0.015em]">Headline Generator</h2>
          </div>
        </header>
        <div className="gap-1 px-6 flex flex-1 flex-col md:flex-row justify-center py-5">
          <InputColumn onGenerateCopy={handleGenerateCopy} isLoading={isLoading} />
          <OutputColumn generatedCopy={generatedCopy} isLoading={isLoading} error={error} />
        </div>
      </div>
    </div>
  );
}

export default App;
