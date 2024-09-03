import React, { useState } from 'react';

function InputColumn({ onGenerateCopy, isLoading }) {
  const [inputData, setInputData] = useState({
    targetAudience: '',
    desiredOutcome: '',
    painPoints: '',
    uniqueSolution: '',
    currentMonth: '',
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
      currentMonth: "August",
      model: 'gpt-4'
    });
  };

  return (
    <div className="layout-content-container flex flex-col w-80">
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#1C160C] text-lg font-medium leading-normal pb-2">Target audience (be as specific as possible)</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#F9F9F9] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
            type="text"
            name="targetAudience"
            value={inputData.targetAudience}
            onChange={handleInputChange}
            placeholder="Target audience (be as specific as possible)"
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#1C160C] text-lg font-medium leading-normal pb-2">The desired outcome</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#F9F9F9] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
            type="text"
            name="desiredOutcome"
            value={inputData.desiredOutcome}
            onChange={handleInputChange}
            placeholder="The desired outcome"
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#1C160C] text-lg font-medium leading-normal pb-2">1-3 pain points or things they don't like (separate with commas)</p>
          <textarea
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#F9F9F9] focus:border-[#E9DFCE] min-h-36 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
            name="painPoints"
            value={inputData.painPoints}
            onChange={handleInputChange}
            placeholder="1-3 pain points or things they don't like (separate with commas)"
          ></textarea>
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#1C160C] text-lg font-medium leading-normal pb-2">Your unique solution</p>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#F9F9F9] focus:border-[#E9DFCE] h-14 placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
            type="text"
            name="uniqueSolution"
            value={inputData.uniqueSolution}
            onChange={handleInputChange}
            placeholder="Your unique solution"
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[#1C160C] text-lg font-medium leading-normal pb-2">What month are we in now?</p>
          <select
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#1C160C] focus:outline-0 focus:ring-0 border border-[#E9DFCE] bg-[#F9F9F9] focus:border-[#E9DFCE] h-14 bg-[image:--select-button-svg] placeholder:text-[#A18249] p-[15px] text-base font-normal leading-normal"
            name="currentMonth"
            value={inputData.currentMonth}
            onChange={handleInputChange}
          >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </label>
      </div>
      <div className="flex justify-stretch">
        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#007bff] text-[#FFFFFF] text-base font-bold leading-normal tracking-[0.015em] transition-transform transform hover:scale-105"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <span className="truncate">{isLoading ? 'Generating...' : 'Generate Headlines'}</span>
          </button>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-[#F4EFE6] text-[#1C160C] text-base font-bold leading-normal tracking-[0.015em] transition-transform transform hover:scale-105"
            onClick={handleExampleClick}
            disabled={isLoading}
          >
            <span className="truncate">Example</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputColumn;