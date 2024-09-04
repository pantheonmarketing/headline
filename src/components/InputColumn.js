import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Label } from './ui/Label';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';

function InputColumn({ onGenerateCopy, isLoading }) {
  const [inputData, setInputData] = useState({
    targetAudience: '',
    desiredOutcome: '',
    painPoints: '',
    uniqueSolution: '',
    model: 'gpt-4' // Default model to GPT-4
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    onGenerateCopy(inputData);
  };

  const handleExampleClick = () => {
    setInputData({
      targetAudience: "Exhausted Mums living paycheck to paycheck",
      desiredOutcome: "Earn a living as a Virtual Assistant working from home",
      painPoints: "No time for family, financial stress, lack of work-life balance",
      uniqueSolution: "3-step program to become a successful Virtual Assistant",
      model: 'gpt-4'
    });
  };

  return (
    <div className="flex flex-col w-full space-y-4 md:w-1/3 order-1 md:order-1">
      <div className="space-y-2">
        <Label htmlFor="target-audience">Target audience (be as specific as possible)</Label>
        <Input id="target-audience" name="targetAudience" value={inputData.targetAudience} onChange={handleInputChange} placeholder="Target audience (be as specific as possible)" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="desired-outcome">The desired outcome</Label>
        <Input id="desired-outcome" name="desiredOutcome" value={inputData.desiredOutcome} onChange={handleInputChange} placeholder="The desired outcome" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="pain-points">1–3 pain points or things they don't like (separate with commas)</Label>
        <Textarea id="pain-points" name="painPoints" value={inputData.painPoints} onChange={handleInputChange} placeholder="1–3 pain points or things they don't like (separate with commas)" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="unique-solution">Your unique solution</Label>
        <Input id="unique-solution" name="uniqueSolution" value={inputData.uniqueSolution} onChange={handleInputChange} placeholder="Your unique solution" />
      </div>
      <div className="flex flex-col gap-2 md:flex-row mt-4">
        <Button className="w-full bg-blue-600 text-white" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Headlines'}
        </Button>
        <Button variant="outline" className="w-full" onClick={handleExampleClick} disabled={isLoading}>
          Example
        </Button>
      </div>
    </div>
  );
}

export default InputColumn;