import React, { useState, useEffect } from 'react';
import ChipList from './components/ChipList';
import Scanner from './components/Scanner';
import Result from './components/Result';
import ErrorResult from './components/ErrorResult';
import { Chip } from './data/Chips';
//import './App.css';

const App = () => {
  const [selectedChip, setSelectedChip] = useState<Chip | null>(null);
  const [phase, setPhase] = useState<'select' | 'scan' | 'result'>('select');
  const [thought, setThought] = useState<string>('');

  useEffect(() => {
    if (phase === 'scan' && selectedChip) {
      // Simulate scanning delay
      const timer = setTimeout(() => {
        import('./data/Responses').then(({ RESPONSES }) => {
          const options = RESPONSES[selectedChip.id] || ['Too far away to read your mind!'];
          const random = options[Math.floor(Math.random() * options.length)];
          setThought(random);
          setPhase('result');
        });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [phase, selectedChip]);

  const reset = () => {
    setSelectedChip(null);
    setThought('');
    setPhase('select');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-6">
        {phase === 'select' && (
          <ChipList onSelect={(chip) => { setSelectedChip(chip); setPhase('scan'); }} />
        )}
        {phase === 'scan' && selectedChip && (
          <Scanner chip={selectedChip} />
        )}
        {phase === 'result' && selectedChip && (
          thought !== 'Too far away to read your mind!' ? (
            <Result chip={selectedChip} thought={thought} onReset={reset} />
          ) : (
            <ErrorResult chip={selectedChip} thought={thought} onReset={reset} />
          )
        )}
      </div>
    </div>
  );
};

export default App;