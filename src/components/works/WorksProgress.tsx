import React from 'react';

interface WorksProgressProps {
  current: number;
  total: number;
}

export default function WorksProgress({ current, total }: WorksProgressProps) {
  return (
    <div className="mt-8 flex justify-center items-center gap-4">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            index === current ? 'w-8 bg-indigo-600' : 'w-4 bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}