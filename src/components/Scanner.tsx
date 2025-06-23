import React from 'react';
import { Chip } from '../data/Chips';

type Props = { chip: Chip };

export default function Scanner ({ chip } : Props) {
    return (
        <div className="text-center">
            <h1 className="text-xl font-bold mb-2">Scanning: {chip.name}</h1>
            <div className="w-20 h-20 mx-auto mb-4 border-4 border-dotted border-green-400 rounded-full animate-ping"></div>
            <p className="text-gray-400">Please wait for the mind transfer...</p>
        </div>
    ); 
}
