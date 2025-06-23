import React from 'react';
import { Chip } from '../data/Chips';

type Props = {
  chip: Chip;
  thought: string;
  onReset: () => void;
};

export default function Result ({ chip, thought, onReset } : Props) {
    return (
        <div className="text-center">
            <h1 className="text-xl font-bold mb-2">Found thought from: {chip.name}</h1>
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
            <p className="italic">"{thought}"</p>
            </div>
            <button
            className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
            onClick={onReset}
            >
            Back to selection
            </button>
        </div>
    );
}