import React from 'react';
import { CHIPS, Chip } from '../data/Chips';

type Props = {
  onSelect: (chip: Chip) => void;
};

const ChipList = ({ onSelect }: Props) => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Choose chip</h1>
    <ul className="space-y-3">
      {CHIPS.map(chip => (
        <li key={chip.id}>
          <button
            className="w-full text-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            onClick={() => onSelect(chip)}
          >
            <div className="font-semibold">{chip.name}</div>
            <div className="text-sm text-gray-300">{chip.description}</div>
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default ChipList;