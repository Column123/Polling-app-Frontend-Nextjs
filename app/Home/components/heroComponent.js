'use client'
import { useState } from 'react';




export default function HeroSection({ onOpenModal, pollQuestion, setPollQuestion }){
  return (
    <section className="relative text-center py-24 sm:py-32 hero-gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(0deg,#000,rgba(0,0,0,0))]"></div>
      <div className="container mx-auto px-6 lg:px-8 relative">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Your Question, Their Voice. Instantly.</h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
          Launch a poll in seconds. No sign-up required to vote. Just pure, real-time feedback.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input 
            type="text" 
            placeholder="Type your poll question here..." 
            className="w-full max-w-md bg-slate-800/50 border border-slate-700 text-white rounded-lg px-5 py-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all placeholder-slate-500"
            value={pollQuestion}
            onChange={(e) => setPollQuestion(e.target.value)}
          />
          <button 
            onClick={onOpenModal}
            className="glow-button w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 font-semibold rounded-lg bg-cyan-500 text-slate-900 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            Create Poll
          </button>
        </div>
      </div>
    </section>
  );
};





