import React, { useState } from 'react';
import './App.css';
import InputColumn from './components/InputColumn';
import OutputColumn from './components/OutputColumn';
import Footer from './components/Footer';
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
    <div className="flex flex-col min-h-screen p-4 space-y-8 bg-gray-50">
      <header className="flex items-center justify-between p-4 bg-white border-b">
        <h1 className="text-lg font-bold">Headline Generator</h1>
      </header>
      <main className="flex flex-col gap-8 p-4 md:flex-row">
        <InputColumn onGenerateCopy={handleGenerateCopy} isLoading={isLoading} />
        <OutputColumn generatedCopy={generatedCopy} isLoading={isLoading} error={error} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
