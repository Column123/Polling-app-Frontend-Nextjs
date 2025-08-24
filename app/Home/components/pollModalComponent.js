'use client'
import { useState } from 'react';

const CloseIcon = () => (
    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
);

export default function CreatePollModal({ isOpen, onClose, pollQuestion, setPollQuestion }){
  const [options, setOptions] = useState(['', '']);

  if (!isOpen) return null;

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      // Logic to create the poll will go here
      console.log('Poll Question:', pollQuestion);
      console.log('Options:', options.filter(opt => opt.trim() !== ''));
      onClose(); // Close modal after submission
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90">
      <div className="bg-slate-800 border border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl m-4">
        <div className="flex items-center justify-between p-5 border-b border-slate-700">
          <h3 className="text-xl font-bold text-white">Create a New Poll</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <CloseIcon />
          </button>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="pollQuestion" className="block mb-2 text-sm font-medium text-slate-300">Your Question</label>
              <input 
                type="text" 
                id="pollQuestion" 
                className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all" 
                placeholder="e.g., What should we order for lunch?"
                value={pollQuestion}
                onChange={(e) => setPollQuestion(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-slate-300">Options</label>
              <div className="space-y-2">
                {options.map((option, index) => (
                  <input 
                    key={index}
                    type="text" 
                    className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all" 
                    placeholder={`Option ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  />
                ))}
              </div>
            </div>
            <button type="button" onClick={handleAddOption} className="w-full text-sm font-semibold text-cyan-400 hover:text-cyan-300 py-2 text-left">+ Add another option</button>
            <div className="mt-6 pt-4 border-t border-slate-700 flex justify-end">
              <button type="submit" className="glow-button w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 font-semibold rounded-lg bg-cyan-500 text-slate-900 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
                Launch Poll
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};